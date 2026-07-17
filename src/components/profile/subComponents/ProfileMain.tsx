"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  const [user, setUser] = useState<User | null>(null);
  const [licenseCount, setLicenseCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [addressCount, setAddressCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/auth/me").then((r) => r.json()),
      fetch("/api/licenses").then((r) => (r.ok ? r.json() : { licenses: [] })),
      fetch("/api/support/tickets").then((r) =>
        r.ok ? r.json() : { tickets: [] },
      ),
      fetch("/api/profile/addresses").then((r) =>
        r.ok ? r.json() : { addresses: [] },
      ),
    ])
      .then(([meData, licenseData, ticketData, addressData]) => {
        if (!meData.user) {
          router.replace("/giris?next=/hesabim");
          return;
        }
        setUser(meData.user);
        setLicenseCount(
          Array.isArray(licenseData.licenses) ? licenseData.licenses.length : 0,
        );
        setTicketCount(
          Array.isArray(ticketData.tickets) ? ticketData.tickets.length : 0,
        );
        setAddressCount(
          Array.isArray(addressData.addresses) ? addressData.addresses.length : 0,
        );
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/giris");
    router.refresh();
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

  if (loading) {
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
