const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
  },

{
  id: 3,
  mega_menu: false,
  has_dropdown: true,
  title: "Products",
  link: "/products",
  sub_menus: [
    { link: "/products#cctv-cameras", title: "CCTV Cameras" },
    { link: "/products#ip-network-cameras", title: "IP & Network Cameras" },
    { link: "/products#dvr-nvr-systems", title: "DVR & NVR Systems" },
    { link: "/products#access-control-systems", title: "Access Control Systems" },
    { link: "/products#video-door-phones", title: "Video Door Phones & Intercom" },
    { link: "/products#networking-products", title: "Networking Products" },
    { link: "/products#security-accessories", title: "CCTV & Security Accessories" },
  ],
},


{
  id: 4,
  mega_menu: false,
  has_dropdown: false,
  title: "Solutions",
  link: "/solutions",
},

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Industries",
    link: "/industries",
    sub_menus: [
      { link: "/industries#corporate-offices", title: "Corporate Offices" },
      { link: "/industries#retail", title: "Retail & Shopping" },
      { link: "/industries#manufacturing", title: "Manufacturing & Industries" },
      { link: "/industries#warehousing", title: "Warehouses & Logistics" },
      { link: "/industries#education", title: "Schools & Educational Institutions" },
      { link: "/industries#healthcare", title: "Hospitals & Healthcare" },
      { link: "/industries#hospitality", title: "Hotels & Hospitality" },
      { link: "/industries#residential", title: "Residential & Communities" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Case Study",
    link: "/case-study",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Shop",
    link: "#",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Customer Login",
    link: "#",
  },
];

export default menu_data;