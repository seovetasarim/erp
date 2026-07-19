"use client";

import {
  ProfileEmailIcon,
  ProfilePhoneIcon,
  UserIcon,
} from "@/svg/ProfileIcons";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getClientAuthUser } from "@/lib/auth/clientSession";
import { accountFetchJson } from "@/lib/profile/accountFetch";

type User = {
  name: string;
  email: string;
  phone: string;
};

const ProfileInfo = () => {
  const [user, setUser] = useState<User | null>(() => getClientAuthUser());
  const [loading, setLoading] = useState(() => !getClientAuthUser());

  useEffect(() => {
    let cancelled = false;
    accountFetchJson<{ user: User | null }>("/api/auth/me")
      .then(({ data }) => {
        if (!cancelled) setUser(data.user);
      })
      .catch(() => {
        if (!cancelled && !getClientAuthUser()) setUser(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (loading) {
    return <div className="profile__info">Bilgiler yükleniyor…</div>;
  }

  if (!user) {
    return (
      <div className="profile__info">
        <p>Oturum bulunamadı.</p>
        <Link href="/giris">Giriş yapın</Link>
      </div>
    );
  }

  return (
    <div className="profile__info">
      <h3 className="profile__info-title">Kişisel Bilgiler</h3>
      <div className="profile__info-content">
        <form action="#" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Adınızı girin"
                    defaultValue={user.name}
                    readOnly
                  />
                  <span>
                    <UserIcon />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta adresinizi girin"
                    defaultValue={user.email}
                    readOnly
                  />
                  <span>
                    <ProfileEmailIcon />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Telefon numaranızı girin"
                    defaultValue={user.phone}
                    readOnly
                  />
                  <span>
                    <ProfilePhoneIcon />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <p className="profile__empty-hint">
                Adres bilgilerinizi <strong>Adres</strong> sekmesinden düzenleyebilirsiniz.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
