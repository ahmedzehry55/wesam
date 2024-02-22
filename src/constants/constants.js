import { BiLogoWhatsapp } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import snap from "../../public/images/snapchat.png";
import hour24 from "../../public/images/24hours.png";
import twitter from "../../public/images/twitter.png";
import youtube from "../../public/images/youtube.png";
import insta from "../../public/images/instagram.png";
import tik from "../../public/images/tiktok.png";
import snapicon from "../../public/images/snapchatc.png";
import twittericon from "../../public/images/twitterc.png";
import youtubeicon from "../../public/images/youtubec.png";
import instaicon from "../../public/images/instagramc.png";
import tikicon from "../../public/images/tiktokc.png";
import whats from "../../public/images/whatsapp.png";
import email from "../../public/images/email.png";
import phone from "../../public/images/hours24.png";
import arrow from "../../public/images/arrow.png";
import whatshand from "../../public/images/whatsapphand.png";
import { MdStarRate } from "react-icons/md";

export const contentUsNav = [
  {
    title: "+966545003143",
    image: whatshand,
    id: 0,
  },
  {
    title: "920005232",
    image: hour24,
    id: 1,
  },
];
export const navMenu = [
  {
    title: "الرئيسية",
    image: "/images/home.png",
    id: 0,
  },
  {
    title: "الدليل السياحي",
    image: "/images/tag.png",
    id: 2,
  },
  {
    title: "البرامج السياحية",
    image: "/images/flag.png",
    id: 1,
  },
  {
    title: "الجولات السياحية",
    image: "/images/tag.png",
    id: 3,
  },
    {
    title: "فنادق",
    image: "/images/hotel.png",
    id: 4,
  },
  {
    title: "تواصل معنا",
    image: "/images/data.png",
    id: 7,
  },

];
export const navbar = [
  {
    title: "الرئيسية",
    image: "/images/home.png",
    id: 0,
  },
  {
    title: "البرامج السياحية",
    image: "/images/flag.png",
    id: 1,
  },
  {
    title: "الدليل السياحي",
    image: "/images/tag.png",
    id: 2,
  },
  {
    title: "الطيران",
    image: "/images/black-plane.png",
    id: 3,
  },
  {
    title: "حجز فنادق",
    image: "/images/hotel.png",
    id: 4,
  },
  {
    title: "تواصل معنا",
    image: "/images/data.png",
    id: 7,
  },

  {
    title: "رحلات بحرية",
    image: "/images/boat.png",
    id: 6,
  },
  
  {
    title: "نبذة عنا",
    image: "/images/i.png",
    id: 8,
  },
  {
    title: "تصميم برنامج سياحي",
    image: "/images/maths.png",
    id: 5,
  },
];
export const programs = [
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    locate: "تايلاند",
    day: 6,
    night: 5,
    price: 2550,
    person: 2,

    rate: [
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
    ],
    id: 0,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    locate: "تايلاند",
    person: 2,
    night: 5,
    price: 2550,
    rate: [
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
      <MdStarRate />,
    ],
    id: 1,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    night: 5,
    price: 2550,
    rate: [<MdStarRate />, <MdStarRate />, <MdStarRate />],
    id: 2,
    locate: "تايلاند",
    person: 2,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    night: 5,
    price: 2550,
    rate: [],
    id: 3,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    night: 5,
    price: 2550,
    rate: [],
    id: 4,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    night: 5,
    price: 2550,
    rate: [],
    id: 5,
  },
  {
    title: "بوكيت عرض لشخصين",
    image: "/images/trav.jpg",
    day: 6,
    night: 5,
    price: 2550,
    rate: [],
    id: 6,
  },
];
export const footbar = [
  {
    title: "اتصل بنا على:",
    titleRes: "اتصل بنا",
    desc: "966545003143+",
    image: phone,
    icon: <MdOutlineLocalPhone />,
    id: 0,
  },
  {
    title: " يمكنك مراسلتنا بالبريد الإلكتروني:",
    titleRes: " البريد الإلكتروني",
    desc: "info@elnagahtravel.com",
    image: email,
    icon: <MdOutlineEmail />,
    id: 1,
  },
  {
    title: "تواصل معنا على الوتساب ",
    titleRes: " الوتساب",
    desc: "966545003143+",
    image: whats,
    icon: <BiLogoWhatsapp />,
    id: 2,
  },
  {
    titleRes: "تفضل بزيارتنا",
    desc: "البحث عن فرع",
    icon: <HiOutlineBuildingStorefront />,
    id: 2,
  },
];
export const offers = [
  {
    title: "عرض استثنائي! قيمة حجزك كنقاط بمحفظتك",
    desc: "لغاية 99.99% كنقاط على إقامتك الشتوية في المم...",
    image: "/images/trav.jpg",
    id: 0,
  },
  {
    title: "اكتشف المملكة في يوم التأسيس",
    desc: "لحّق على الشتاء بخصم لغاية 20% على رحلتك",
    image: "/images/trav.jpg",
    id: 1,
  },
  {
    title: "سافر واكسب النقاط في يوم التأسيس",
    desc: "عرض حصري ليوم التأسيس! لغاية 1،727 ر.س كنقاط",
    image: "/images/trav.jpg",
    id: 2,
  },
  {
    title: "عرض حصري على الفنادق",
    desc: "استمتع بخصم 12% على حجزك الفندقي الأول",
    image: "/images/trav.jpg",
    id: 3,
  },
  {
    title: "مزايا حصرية مع 'الفرسان",
    desc: "اكسب أميال مكافآت الفرسان على حجوزات الفنادق",
    image: "/images/trav.jpg",
    id: 4,
  },
];
export const worldHotel = [
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id:10,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 21,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 41,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 1,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 2,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 3,
  },
  {
    title: "المنامة",
    desc: "وايد هام جاردن",
    image: "/images/trav.jpg",
    id: 4,
  },
];
export const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Hover",
    back: "Back",
  },
  {
    id: "2",
    variant: "click",
    front: "Click",
    back: "Back",
  },
  {
    id: "3",
    variant: "focus",
    front: "Focus",
    back: "Back",
  },
];
export const footer = [
  {
    title: "اشهر الوجهات السياحية",
    links: [
      {
        link: "المالديف",
        image: arrow,
        id: 0,
      },
      {
        link: "ماليزيا",
        image: arrow,
        id: 1,
      },
      {
        link: "اذربيجان",
        image: arrow,
        id: 2,
      },
      {
        link: "جورجيا",
        image: arrow,
        id: 6,
      },
      {
        link: "تركيا",
        image: arrow,
        id: 3,
      },
      {
        link: "فرنسا",
        image: arrow,
        id: 4,
      },
      {
        link: "وجهات متعددة في أوروبا",
        image: arrow,
        id: 5,
      },
    ],
    id: 0,
  },
];
export const ourloc = [
  {
    title: "موقعنا",
    links: [
      {
        link: "حي الرائد طريق الملك عبد الله امام مستشفى الملك خالد - بجوار شركة موبايلي",
        image: null,
        id: 0,
      },
    ],
    id: 4,
  },
];
export const footerhelp = [
  {
    id: 3,
    title: " المساعدة",
    links: [
      {
        link: "اتصل بنا",
        image: null,
        id: 0,
      },
      {
        link: "الأسئلة الشائعة",
        image: null,
        id: 1,
      },
      {
        link: "شكر العملاء",
        image: null,
        id: 2,
      },
    ],
  },
];
export const footersocial = [
  {
    title: "تابعنا على",
    links: [
      {
        link: "انستجرام",
        image: insta, 
        icon:instaicon,
        width:"5vw",
        height: "5vw",
        id: 0,
      },
      {
        link: "تويتر",
        image: twitter,
        icon:twittericon,
        width:"5vw",
        height: "5vw",
        id: 1,
      },
      {
        link: "يوتيوب",
        image:youtube,
        icon:youtubeicon,
        width:"7vw",
        height: "5vw",
        id: 2,
      },
      {
        link: " تيك توك",
        image: tik,
        icon:tikicon,
        width:"5vw",
        height: "5vw",
        id: 3,
      },
      {
        link: "سناب شات",
        image: snap,
        icon:snapicon,
        width:"5vw",
        height: "5vw",
        id: 4,
      },
    ],
    id: 1,
  },
];
export const footerlegal = [
  {
    title: "قانوني",
    links: [
      {
        link: "سياسة الخصوصية",
        image: null,
        id: 1,
      },
      {
        link: "الشروط و الأحكام",
        image: null,
        id: 2,
      },
    ],
    id: 2,
  },
];
