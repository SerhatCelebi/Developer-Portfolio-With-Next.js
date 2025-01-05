export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SKILLS: "/skills",
  PROJECTS: "/projects",
  CONTACT: "/contact",
} as const;

export const NAV_ITEMS = [
  { label: "Anasayfa", path: ROUTES.HOME },
  { label: "Hakkımda", path: ROUTES.ABOUT },
  { label: "Becerilerim", path: ROUTES.SKILLS },
  { label: "Projeler", path: ROUTES.PROJECTS },
  { label: "İletişim", path: ROUTES.CONTACT },
];
