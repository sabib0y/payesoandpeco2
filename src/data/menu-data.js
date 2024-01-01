const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about-us",
  },
  {
    id: 3,
    hasDropdown: true,
    title: "services",
    link: "/services",
    submenus: [
      { title: "Ocean Transportation", link: "/services/ocean-transport" },
      { title: "Air Transportation", link: "/services/air-transport" },
      { title: "Truck Transportation", link: "/services/truck-transport" },
      { title: "Customs Clearance", link: "/services/customs-clearance" },
      { title: "Agro Commodities", link: "/services/agro-commodities" },
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    title: "FAQ",
    link: "/faq",
  },

  // {
  //   id: 4,
  //   title: "Pages",
  //   megaMenu: true,
  //   link: "/about-us",
  //   pages: true,
  //   mega_menus: [
  //     { title: "About", link: "/about-us" },
  //     {
  //       title: "Portfolio",
  //       link: "/portfolio",
  //       submenus: [
  //         { title: "Portfolio", link: "/portfolio" },
  //         { title: "Portfolio Details", link: "/portfolio-details" },
  //       ],
  //     },
  //     {
  //       title: "Team",
  //       link: "/team",
  //       submenus: [
  //         { title: "Team", link: "/team" },
  //         { title: "team details", link: "/team-details" },
  //       ],
  //     },
  //     { title: "Pricing", link: "/pricing" },
  //     { title: "Faq", link: "/faq" },
  //     { title: "Awards", link: "/awards" },
  //     { title: "Career", link: "/career" },
  //     { title: "Location", link: "/location" },
  //     { title: "Partner", link: "/partner" },
  //     { title: "Quote", link: "/quote" },
  //     { title: "Contact", link: "/contact" },
  //     { title: "Login", link: "/login" },
  //     { title: "Register", link: "/register" },
  //   ],
  // },
  // {
  //   id: 5,
  //   hasDropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   submenus: [
  //     { title: "Blog", link: "/blog" },
  //     { title: "blog-grid-3-col", link: "/blog-grid-3-col" },
  //     { title: "blog-details", link: "/blog-details" },
  //   ],
  // },
  {
    id: 5,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
