export type FilaNavItem = {
  title: string;
  url: string;
  icon: string;
};

export type FilaNavGroup = {
  label: string;
  items: FilaNavItem[];
};

export const FILA_NAV: FilaNavGroup[] = [
  {
    label: "ANA MENÜ",
    items: [
      { title: "Panel", url: "/admin", icon: "dashboard" },
      { title: "Müşteriler", url: "/admin/musteriler", icon: "group" },
      { title: "Siparişler", url: "/admin/siparisler", icon: "shopping_cart" },
      { title: "Lisanslar", url: "/admin/lisanslar", icon: "key" },
      { title: "Abonelikler", url: "/admin/abonelikler", icon: "subscriptions" },
      { title: "Destek Talepleri", url: "/admin/destek", icon: "support_agent" },
    ],
  },
  {
    label: "DİĞER",
    items: [{ title: "Siteye Dön", url: "/", icon: "home" }],
  },
];
