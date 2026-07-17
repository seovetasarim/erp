"use client";

import {
  ProfileEmailIcon,
  ProfilePhoneIcon,
  UserIcon,
} from "@/svg/ProfileIcons";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type User = {
  name: string;
  email: string;
  phone: string;
};

const ProfileInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (res) => {
        const data = (await res.json()) as { user: User | null };
        setUser(data.user);
      })
      .finally(() => setLoading(false));
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
