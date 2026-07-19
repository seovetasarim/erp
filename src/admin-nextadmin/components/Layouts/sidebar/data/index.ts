import type { ReactElement, SVGProps } from "react";
import * as Icons from "../icons";

type NavSubItem = { title: string; url: string };

type NavItem = {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  url?: string;
  items: NavSubItem[];
};

export const NAV_DATA: Array<{ label: string; items: NavItem[] }> = [
  {
    label: "ANA MENÜ",
    items: [
      {
        title: "Panel",
        url: "/admin",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Müşteriler",
        url: "/admin/musteriler",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Siparişler",
        url: "/admin/siparisler",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Lisanslar",
        url: "/admin/lisanslar",
        icon: Icons.PieChart,
        items: [],
      },
      {
        title: "Abonelikler",
        url: "/admin/abonelikler",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Destek Talepleri",
        url: "/admin/destek",
        icon: Icons.Alphabet,
        items: [],
      },
    ],
  },
  {
    label: "DİĞER",
    items: [
      {
        title: "Siteye Dön",
        url: "/",
        icon: Icons.Authentication,
        items: [],
      },
    ],
  },
];
