import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Overview",
            url: "/admin",
          },
        ],
      },
    ],
  },
  {
    label: "SUPPORT",
    items: [
      {
        title: "Back to Site",
        url: "/",
        icon: Icons.HomeIcon,
        items: [],
      },
    ],
  },
] as const;
