"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ProfileLocationIcon } from "@/svg/ProfileIcons";
import {
  accountFetchJson,
  invalidateAccountCache,
} from "@/lib/profile/accountFetch";

type Address = {
  id: number;
  label: string;
  line1: string;
  line2: string | null;
  city: string;
  district: string;
  postalCode: string | null;
  isDefault: boolean;
  formatted: string;
};

const emptyForm = {
  label: "Genel",
  line1: "",
  line2: "",
  city: "",
  district: "",
  postalCode: "",
  isDefault: true,
};

const ProfileAddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  const loadAddresses = useCallback(async (force = false) => {
    setLoading(true);
    setError("");
    try {
      const { ok, data } = await accountFetchJson<{
        addresses?: Address[];
        error?: string;
      }>("/api/profile/addresses", { force });
      if (!ok) throw new Error(data.error || "Adresler yüklenemedi.");
      setAddresses(data.addresses ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Adresler yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAddresses();
  }, [loadAddresses]);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
    setSuccess("");
  }

  function startCreate() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
    setError("");
    setSuccess("");
  }

  function startEdit(address: Address) {
    setForm({
      label: address.label,
      line1: address.line1,
      line2: address.line2 ?? "",
      city: address.city,
      district: address.district,
      postalCode: address.postalCode ?? "",
      isDefault: address.isDefault,
    });
    setEditingId(address.id);
    setShowForm(true);
    setError("");
    setSuccess("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    const payload = {
      label: form.label.trim() || "Genel",
      line1: form.line1.trim(),
      line2: form.line2.trim() || undefined,
      city: form.city.trim(),
      district: form.district.trim(),
      postalCode: form.postalCode.trim() || undefined,
      isDefault: form.isDefault,
    };

    try {
      const { ok, data } = await accountFetchJson<{ error?: string }>(
        editingId ? `/api/profile/addresses/${editingId}` : "/api/profile/addresses",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!ok) throw new Error(data.error || "Adres kaydedilemedi.");

      setSuccess(editingId ? "Adres güncellendi." : "Adres kaydedildi.");
      resetForm();
      invalidateAccountCache("/api/profile/addresses");
      await loadAddresses(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Adres kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Bu adresi silmek istediğinize emin misiniz?")) return;

    setError("");
    try {
      const { ok, data } = await accountFetchJson<{ error?: string }>(
        `/api/profile/addresses/${id}`,
        { method: "DELETE" },
      );
      if (!ok) throw new Error(data.error || "Adres silinemedi.");
      invalidateAccountCache("/api/profile/addresses");
      await loadAddresses(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Adres silinemedi.");
    }
  }

  if (loading) {
    return <div className="profile__address">Adresler yükleniyor…</div>;
  }

  return (
    <div className="profile__address">
      <div className="profile__section-head">
        <div>
          <h3 className="profile__info-title">Adreslerim</h3>
          <p className="profile__section-desc">
            Fatura ve teslimat için adreslerinizi kaydedin.
          </p>
        </div>
        {!showForm && (
          <button type="button" className="tp-login-btn profile__section-btn" onClick={startCreate}>
            Yeni Adres
          </button>
        )}
      </div>

      {error && <p className="profile__form-error">{error}</p>}
      {success && <p className="profile__form-success">{success}</p>}

      {showForm && (
        <form className="profile__address-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="profile__input-box">
                <label className="profile__field-label">Adres başlığı</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.label}
                    onChange={(e) => setForm((prev) => ({ ...prev, label: e.target.value }))}
                    placeholder="Ev, İş, Fatura…"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile__input-box">
                <label className="profile__field-label">Posta kodu</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.postalCode}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, postalCode: e.target.value }))
                    }
                    placeholder="34000"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="profile__input-box">
                <label className="profile__field-label">Adres</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.line1}
                    onChange={(e) => setForm((prev) => ({ ...prev, line1: e.target.value }))}
                    placeholder="Mahalle, cadde, sokak, bina no"
                    required
                  />
                  <span>
                    <ProfileLocationIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="profile__input-box">
                <label className="profile__field-label">Adres satırı 2</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.line2}
                    onChange={(e) => setForm((prev) => ({ ...prev, line2: e.target.value }))}
                    placeholder="Daire, kat, açıklama (isteğe bağlı)"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile__input-box">
                <label className="profile__field-label">İl</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
                    placeholder="İstanbul"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile__input-box">
                <label className="profile__field-label">İlçe</label>
                <div className="profile__input">
                  <input
                    type="text"
                    value={form.district}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, district: e.target.value }))
                    }
                    placeholder="Kadıköy"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <label className="profile__checkbox">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, isDefault: e.target.checked }))
                  }
                />
                Varsayılan adres olarak kaydet
              </label>
            </div>
            <div className="col-12 profile__form-actions">
              <button type="submit" className="tp-login-btn" disabled={saving}>
                {saving ? "Kaydediliyor…" : editingId ? "Adresi Güncelle" : "Adresi Kaydet"}
              </button>
              <button type="button" className="tp-logout-btn" onClick={resetForm}>
                İptal
              </button>
            </div>
          </div>
        </form>
      )}

      {addresses.length === 0 && !showForm ? (
        <div className="profile__empty-state">
          <p>Henüz kayıtlı adresiniz yok.</p>
          <p className="profile__empty-hint">
            Fatura ve teslimat için yeni adres ekleyebilirsiniz.
          </p>
        </div>
      ) : (
        <div className="profile__address-list">
          {addresses.map((address) => (
            <div className="profile__address-card" key={address.id}>
              <div className="profile__address-card-head">
                <div>
                  <strong>{address.label}</strong>
                  {address.isDefault && (
                    <span className="profile__address-badge">Varsayılan</span>
                  )}
                </div>
                <div className="profile__address-card-actions">
                  <button type="button" onClick={() => startEdit(address)}>
                    Düzenle
                  </button>
                  <button type="button" onClick={() => handleDelete(address.id)}>
                    Sil
                  </button>
                </div>
              </div>
              <p>{address.formatted}</p>
            </div>
          ))}
        </div>
      )}

      {!showForm && addresses.length > 0 && (
        <p className="profile__empty-hint mt-20">
          Sorun yaşarsanız{" "}
          <Link href="/iletisim">destek ekibimizle iletişime geçin</Link>.
        </p>
      )}
    </div>
  );
};

export default ProfileAddress;
