"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { clearClientAuthUser, getClientAuthUser } from "@/lib/auth/clientSession";
import { accountFetchJson } from "@/lib/profile/accountFetch";
import {
  DIJITAL_ERP_DOWNLOAD_HREF,
} from "@/constants/download";
import ProfileCorporateAvatar from "@/components/profile/ProfileCorporateAvatar";
import {
  GiftBoxIcon,
  OrdersIcon,
  ProfileLocationIcon,
  WishlistIcon,
} from "@/svg/ProfileIcons";

type User = {
  name: string;
  email: string;
  phone: string;
  customerCode: string;
};

const ProfileMain = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(() => getClientAuthUser());
  const [licenseCount, setLicenseCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [addressCount, setAddressCount] = useState(0);
  const [loading, setLoading] = useState(() => !getClientAuthUser());

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [me, licenses, tickets, addresses] = await Promise.all([
          accountFetchJson<{ user?: User | null }>("/api/auth/me"),
          accountFetchJson<{ licenses?: unknown[] }>("/api/licenses"),
          accountFetchJson<{ tickets?: unknown[] }>("/api/support/tickets"),
          accountFetchJson<{ addresses?: unknown[] }>("/api/profile/addresses"),
        ]);

        if (cancelled) return;

        if (!me.data.user) {
          router.replace("/giris?next=/hesabim");
          return;
        }

        setUser(me.data.user);
        setLicenseCount(
          Array.isArray(licenses.data.licenses) ? licenses.data.licenses.length : 0,
        );
        setTicketCount(
          Array.isArray(tickets.data.tickets) ? tickets.data.tickets.length : 0,
        );
        setAddressCount(
          Array.isArray(addresses.data.addresses) ? addresses.data.addresses.length : 0,
        );
      } catch {
        if (!cancelled && !getClientAuthUser()) {
          router.replace("/giris?next=/hesabim");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    clearClientAuthUser();
    window.location.href = "/giris";
  }

  const profileStats = [
    {
      id: 1,
      title: "Adresler",
      count: addressCount,
      icon: <ProfileLocationIcon />,
      className: "profile-download",
    },
    {
      id: 2,
      title: "Lisanslar",
      count: licenseCount,
      icon: <OrdersIcon />,
      className: "profile-order",
    },
    {
      id: 3,
      title: "Destek Talepleri",
      count: ticketCount,
      icon: <WishlistIcon />,
      className: "profile-wishlist",
    },
    {
      id: 4,
      title: "Kampanyalar",
      count: 0,
      icon: <GiftBoxIcon />,
      className: "profile-giftbox",
    },
  ];

  if (loading && !user) {
    return <div className="profile__main">Profil yükleniyor…</div>;
  }

  if (!user) return null;

  return (
    <div className="profile__main">
      <div className="profile__main-top pb-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-thumb">
                <ProfileCorporateAvatar name={user.name} />
              </div>
              <div className="profile__main-content">
                <h4 className="profile__main-title">Hoş geldiniz, {user.name}!</h4>
                <p>{user.email}</p>
                <p className="profile__customer-code">
                  Müşteri kodu: <strong>{user.customerCode}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="profile__main-logout text-sm-end">
              <button type="button" className="tp-logout-btn" onClick={handleLogout}>
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile__main-info">
        <div className="row gx-3">
          {profileStats.map(({ id, title, count, icon, className }) => (
            <div className="col-md-3 col-sm-6" key={id}>
              <div className="profile__main-info-item">
                <div className="profile__main-info-icon">
                  <span>
                    <span className={`profile-icon-count ${className}`}>
                      {count}
                    </span>
                    {icon}
                  </span>
                </div>
                <h4 className="profile__main-info-title">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="profile__empty-hint mt-30">
        <a href={DIJITAL_ERP_DOWNLOAD_HREF}>
          DijitalERP kurulum dosyasını indir
        </a>
        {licenseCount === 0 && (
          <>
            {" "}
            · Henüz lisansınız yok —{" "}
            <Link href="/fiyatlandirma">paket satın alın</Link>
          </>
        )}
      </p>
    </div>
  );
};

export default ProfileMain;
