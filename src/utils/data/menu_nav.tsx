interface Menu {
  label: string;
  icon?: any;
  link: string;
}

const menuNav: Menu[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Fiture",
    link: "/",
  },
  {
    label: "Academy",
    link: "/academy",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default menuNav;
