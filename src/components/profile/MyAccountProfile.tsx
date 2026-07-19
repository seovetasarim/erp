"use client";

import { useState } from "react";
import ProfileNotification from "./subComponents/ProfileNotification";
import ProfilePassword from "./subComponents/ProfilePassword";
import ProfileAddress from "./subComponents/ProfileAddress";
import ProfileTicket from "./subComponents/ProfileTicket";
import ProfileLicenses from "./subComponents/ProfileLicenses";
import ProfileMain from "./subComponents/ProfileMain";
import ProfileInfo from "./subComponents/ProfileInfo";

type TabId =
  | "licenses"
  | "profile"
  | "information"
  | "address"
  | "tickets"
  | "notification"
  | "password";

const TABS: Array<{ id: TabId; label: string; icon: string }> = [
  { id: "licenses", label: "Lisanslarım", icon: "fa-regular fa-key" },
  { id: "profile", label: "Profil", icon: "fa-regular fa-user-pen" },
  { id: "information", label: "Bilgiler", icon: "fa-regular fa-circle-info" },
  { id: "address", label: "Adres", icon: "fa-light fa-location-dot" },
  { id: "tickets", label: "Destek Talepleri", icon: "fa-light fa-clipboard-list-check" },
  { id: "notification", label: "Bildirimler", icon: "fa-regular fa-bell" },
  { id: "password", label: "Şifre Değiştir", icon: "fa-regular fa-lock" },
];

const MyAccountProfile = () => {
  const [activeTab, setActiveTab] = useState<TabId>("licenses");
  const [visited, setVisited] = useState<Set<TabId>>(() => new Set(["licenses"]));

  function selectTab(id: TabId) {
    setActiveTab(id);
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  function renderPanel(id: TabId) {
    switch (id) {
      case "licenses":
        return <ProfileLicenses />;
      case "profile":
        return <ProfileMain />;
      case "information":
        return <ProfileInfo />;
      case "address":
        return <ProfileAddress />;
      case "tickets":
        return <ProfileTicket />;
      case "notification":
        return <ProfileNotification />;
      case "password":
        return <ProfilePassword />;
    }
  }

  return (
    <section className="profile__area pt-200 pb-120">
      <div className="container">
        <div className="profile__inner p-relative">
          <div className="row">
            <div className="col-xxl-4 col-lg-4">
              <div className="profile__tab mr-40">
                <nav>
                  <div
                    className="nav nav-tabs tp-tab-menu flex-column"
                    id="profile-tab"
                    role="tablist"
                  >
                    {TABS.map((tab) => (
                      <button
                        key={tab.id}
                        className={`nav-link${activeTab === tab.id ? " active" : ""}`}
                        id={`nav-${tab.id}-tab`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-${tab.id}`}
                        aria-selected={activeTab === tab.id}
                        onClick={() => selectTab(tab.id)}
                      >
                        <span>
                          <i className={tab.icon}></i>
                        </span>{" "}
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8">
              <div className="profile__tab-content">
                <div className="tab-content" id="profile-tabContent">
                  {TABS.map((tab) =>
                    visited.has(tab.id) ? (
                      <div
                        key={tab.id}
                        className={`tab-pane fade${activeTab === tab.id ? " show active" : ""}`}
                        id={`nav-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`nav-${tab.id}-tab`}
                        hidden={activeTab !== tab.id}
                      >
                        {renderPanel(tab.id)}
                      </div>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccountProfile;
