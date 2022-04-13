/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from "../../assets/image/appCreative/залгаас.png";
export const navbar = {
  logoImage: logo,
  navMenu: [
    {
      id: 1,
      label: "Хакатон",
      path: "#home",
      offset: "80",
    },
    // {
    //   id: 4,
    //   label: "Ментор",
    //   path: "#team",
    //   offset: "73",
    // },
    {
      id: 3,
      label: "Ивээн тэтгэгч",
      path: "#experience",
      offset: "73",
    },
    {
      id: 2,
      label: "Шагнал",
      path: "#keyFeatures",
      offset: "73",
    },
    {
      id: 5,
      label: "Түгээмэл асуултууд",
      path: "#mentor",
      offset: "73",
    },
  ],
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from "../../assets/image/appCreative/key_feature/ai.svg";
import keyFeature2 from "../../assets/image/appCreative/key_feature/blockchain.svg";
import keyFeature3 from "../../assets/image/appCreative/key_feature/vr.svg";
import keyFeature4 from "../../assets/image/appCreative/key_feature/Deep_learning.svg";

export const keyFeatures = {
  title: "Шинэ технологи, програмчлалын хэл",
  slogan: "Ашигласан бол давуу тал болох болно.",
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: "Artificial intelligence",
      description: "",
    },
    {
      id: 2,
      icon: keyFeature2,
      title: "BlockChain",
      description: "",
    },
    {
      id: 3,
      icon: keyFeature3,
      title: "Virtual reality",
      description: "",
    },
    {
      id: 4,
      icon: keyFeature4,
      title: "Deep Learning",
      description: "",
    },
  ],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import chooseThumb from "../../assets/image/appCreative/chooseThumb.png";

export const chooseUs = {
  title: "Шагналын сан ",
  thumb: chooseThumb,
  features: [
    {
      id: 1,
      title: "1-р байр Цом, Өргөмжлөл, 1,000,000₮.",
      description: "",
    },
    {
      id: 2,
      title: "2-р байр Өргөмжлөл, 700,000₮.",
      description: "",
    },
    {
      id: 3,
      title: "3-р байр Өргөмжлөл, 500,000₮.",
      description: "",
    },
    {
      id: 4,
      title: "Тусгай байр Шилдэг дизайн, Шилдэг санаа.",
      description: "",
    },
  ],
};

/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */
import expIcon1 from "../../assets/image/appCreative/experience/1.png";
import expIcon2 from "../../assets/image/appCreative/experience/2.png";
import expIcon3 from "../../assets/image/appCreative/experience/3.png";
import expIcon4 from "../../assets/image/appCreative/experience/4.png";
import videoTheme from "../../assets/image/appCreative/experienceVideo.png";

// Client Logo
import fiboCloud from "../../assets/image/appCreative/client_logo/1.png";
import puzzleIcon from "../../assets/image/appCreative/client_logo/6.png";
import zochilIcon from "../../assets/image/appCreative/client_logo/5.png";
import tomyoIcon from "../../assets/image/appCreative/client_logo/7.png";
import naashaaIcon from "../../assets/image/appCreative/client_logo/4.png";
export const event = {
  icon: fiboCloud,
  title: "Fibo Cloud",
  description:
    "Үүлэн  технологийн чиглэлээр дагнаж үйл ажиллагаа явуулдаг Монгол дахь цор ганц компани FIBO CLOUD.",
};
export const experiences = {
  title: "Зохион байгуулагч",
  slogan: `Sys&CoTech клубээс зохион байгуулж буй "Dev Hackathon Student - 2022" тэмцээний ивээн тэтгэгч байгууллагууд`,
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: naashaaIcon,
      title: "Nasha Tech",
      description:
        "Internet болон E-Commerce нь улс үндэстэн болон байршлаас үл хамааран бүгдэд адил боломжийг олгодог бөгөөд энэ боломжоо алдалгүй ашиглахад бид танд тусална.",
    },
    {
      id: 2,
      icon: zochilIcon,
      title: "Zochil Shop",
      description:
        "Онлайн худалдааны бизнес эрхлэгчдэд зориулан илүү бага зардлаар, илүү хялбар технологийг ашиглаж, захиалга, хүргэлт, худалдааг автоматжуулах боломжийг онлайн худалдааны ZOCHIL платформ зах зээлд нэвтрүүлээд байна.",
    },
    {
      id: 3,
      icon: tomyoIcon,
      title: "TomYoEdTech LLC",
      description:
        "TomYo Edtech нь дэлхийн түвшний боломжуудыг хөгжиж буй орнуудын залуучуудын гарт шууд олгох зорилготой боловсролын технологийн компани юм.",
    },
    {
      id: 4,
      icon: puzzleIcon,
      title: "Urgoo Puzzle",
      description:
        "Бүтээлч сэтгэхүйг ирээдүйд уриан дор бид сэтгэхүй хөгжүүлэх болон шинэ содон бараа бүтээгдэхүүнийг хөгжүүлэн гаргаж байна.",
    },
  ],
  clients: [
    {
      id: 1,
      logo: fiboCloud,
      name: "FiboCloud",
      link: "https://fibo.cloud",
    },
    {
      id: 3,
      logo: zochilIcon,
      name: "Zochil.mn",
      link: "https://zochil.mn",
    },
    {
      id: 4,
      logo: naashaaIcon,
      name: "Zochil.mn",
      link: "https://www.nashatech.com",
    },
    {
      id: 4,
      logo: tomyoIcon,
      name: "Zochil.mn",
      link: "https://tomyo.mn",
    },
    {
      id: 5,
      logo: puzzleIcon,
      name: "Zochil.mn",
      link: "https://www.facebook.com/urgoopuzzle",
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import Image1 from "../../assets/image/appCreative/feature/logo1.png";
import Image2 from "../../assets/image/appCreative/feature/logo2.png";
import Image3 from "../../assets/image/appCreative/feature/logo3.png";
import Image4 from "../../assets/image/appCreative/feature/logo4.png";
import Image5 from "../../assets/image/appCreative/feature/logo5.png";
import Image6 from "../../assets/image/appCreative/feature/logo3.png";

export const features = {
  title: "Түгээмэл асуултууд",
  slogan: "",
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: "Хакатон хаана зохиогдох вэ?",
      description:
        "ШУТИС-ийн Эрдэм шинжилгээ, инновацийн төв байр (VIII байр) -ны 12 давхарт Олон улсын эрдэм шинжилгээний хурлын танхим",
    },
    {
      id: 2,
      thumbnail: Image2,
      title: "Хакатон хэзээ зохиогдох вэ?",
      description: "ШУТИС-ийн Эрдэм шинжилгээ, инновацийн төв байр (VIII байр)",
    },
    {
      id: 3,
      thumbnail: Image3,
      title: "Хакатонд хэн оролцож болох вэ?",
      description:
        "Шинийг илэрхийлдэг, өөрийгөө сорих хүсэлтэй, мэдээллийн технологийн чиглэлээр их дээд сургуульд суралцаж буй бүх оюутнууд",
    },
    {
      id: 4,
      thumbnail: Image4,
      title: "Ямар чадвартай хүмүүс багт байх хэрэгтэй вэ? ",
      description:
        'Хакатон бол багийн тоглолт. Тиймээс багаа бүрдүүлэхдээ олон төрлийн чадвартай, "солонгон" баг бүрдүүлэхийг зөвлөж байна. Жишээ нь: илтгэл сайн тавьдаг, UX/UI зурдаг, back-end хөгжүүлэлт хийдэг гэх мэт.',
    },
    {
      id: 5,
      thumbnail: Image5,
      title: "Очихдоо юу авч очих вэ?",
      description:
        "Лаптопоо бүтээлч сэтгэлгээтэйгээ цуг цүнхлээд ирэхэд л болно :) Нээрээ цэнэглэгчээ мартав аа",
    },
    {
      id: 6,
      thumbnail: Image6,
      title: "24 цаг гэхээр тэмцээний байран дээр хононо гэсэн үг үү?",
      description:
        "Үгүй дээ, өглөө 09:00 цагаас орой 22:00 цаг хүртэл багийнхантайгаа ажиллаад, гэртээ харьж, маргааш нь шүүлт болоод хаалтын ажиллагаандаа оролцоно. Харин шөнө унтах эсэх нь таны мэдэх хэрэг шүү ;)",
    },
  ],
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  title: "Meet our exciting Pricing Plan",
  slogan: "We designed our pricing plan with affordable price for users",
  pricingFeature: [
    {
      id: 1,
      name: "Full Access Library",
    },
    {
      id: 2,
      name: "Multiple user",
    },
    {
      id: 3,
      name: "Refund Policy",
    },
    {
      id: 4,
      name: "Google Analytics",
    },
    {
      id: 5,
      name: "24/7 support",
    },
  ],
  pricingItems: [
    {
      id: 1,
      package_name: "Starter Pack",
      price: "18",
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: "Full Access Library",
          isAvailable: true,
        },
        {
          id: 2,
          name: "Multiple user",
          isAvailable: true,
        },
        {
          id: 3,
          name: "Refund Policy",
          isAvailable: false,
        },
        {
          id: 4,
          name: "Google Analytics",
          isAvailable: false,
        },
        {
          id: 5,
          name: "24/7 support",
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: "Premium Pack",
      price: "29",
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: "Full Access Library",
          isAvailable: true,
        },
        {
          id: 2,
          name: "Multiple user",
          isAvailable: true,
        },
        {
          id: 3,
          name: "Refund Policy",
          isAvailable: true,
        },
        {
          id: 4,
          name: "Google Analytics",
          isAvailable: false,
        },
        {
          id: 5,
          name: "24/7 support",
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: "Ultimate Pack",
      price: "35",
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: "Full Access Library",
          isAvailable: true,
        },
        {
          id: 2,
          name: "Multiple user",
          isAvailable: true,
        },
        {
          id: 3,
          name: "Refund Policy",
          isAvailable: true,
        },
        {
          id: 4,
          name: "Google Analytics",
          isAvailable: true,
        },
        {
          id: 5,
          name: "24/7 support",
          isAvailable: false,
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
import reviewer1 from "../../assets/image/appCreative/client/client-avatar-1.jpg";
import reviewer2 from "../../assets/image/appCreative/client/client-avatar-2.jpg";
import reviewer3 from "../../assets/image/appCreative/client/client-avatar-3.jpg";

export const testimonial = {
  title: "Шүүгч, Ментор-уудтай танилцана уу",
  slogan: "",
  reviews: [
    {
      id: 1,
      description:
        "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.",
      avatar: reviewer1,
      name: "Jonathan Taylor",
      designation: "CEO at Creativex",
      twitterProfile: "https://twitter.com/redqinc",
    },
    {
      id: 2,
      description:
        "@redqteam is great for creating with landing pages within minutes! It then actually takes less time…",
      avatar: reviewer2,
      name: "Gavin Park",
      designation: "CEO at Orbital",
      twitterProfile: "https://twitter.com/redqinc",
    },
    {
      id: 3,
      description:
        "Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it.",
      avatar: reviewer3,
      name: "Betty Norton",
      designation: "Freelance Designer",
      twitterProfile: "https://twitter.com/redqinc",
    },

    {
      id: 4,
      description:
        "Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it. profitable and make it cool with fast loading experience & it make the site more customizable & fluent.",
      avatar: reviewer3,
      name: "Betty Norton",
      designation: "Freelance Designer",
      twitterProfile: "https://twitter.com/redqinc",
    },
    {
      id: 5,
      description:
        "We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.",
      avatar: reviewer1,
      name: "Jonathan Taylor",
      designation: "CEO at Creativex",
      twitterProfile: "https://twitter.com/redqinc",
    },
    {
      id: 6,
      description:
        "Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. ",
      avatar: reviewer3,
      name: "Betty Norton",
      designation: "Freelance Designer",
      twitterProfile: "https://twitter.com/redqinc",
    },
  ],
};

/* ------------------------------------ */
// Available Store data section
/* ------------------------------------ */
import availableThumb from "../../assets/image/appCreative/availableThumb.png";

export const availableStore = {
  title: "",
  description: "",
  thumb: availableThumb,
  numberPrefix: [
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  title: "",
  slogan: "",
  faqs: [
    {
      id: 1,
      question: "",
      answer: "",
    },
    {
      id: 2,
      question: "",
      answer: "",
    },
    {
      id: 3,
      question: "",
      answer: "",
    },
    {
      id: 4,
      question: "",
      answer: "",
    },
    {
      id: 5,
      question: "",
      answer: "",
    },
    {
      id: 6,
      question: "",
      answer: "",
    },
    {
      id: 7,
      question: "Learn from community on Brandwagon",
      answer:
        "Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.",
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { dribbble } from "react-icons-kit/fa/dribbble";
import { twitter } from "react-icons-kit/fa/twitter";
import footerLogo from "../../assets/image/appCreative/logo.png";

export const footerWidget = {
  logo: footerLogo,
  siteName: "RedQ, Inc",
  siteUrl: "#",
  aboutUs: {
    title: "Бидэнтэй холбогдох",
    menuItems: [
      {
        id: 1,
        url: "https://www.facebook.com/SysAndCoTech",
        text: "Facebook хуудас",
      },
      {
        id: 2,
        url: "tel:+97694351314",
        text: "Холбогдох утас",
      },
      {
        id: 3,
        url: "https://www.google.com/maps/place/School+of+Information+and+Telecommunication+Technology/@47.9206203,106.9661372,19z/data=!4m5!3m4!1s0x5d9691f3ab1910cd:0x26a53c35c8113432!8m2!3d47.9206526!4d106.9662756",
        text: "Хаяг байршил",
      },
    ],
  },
  ourInformation: {
    title: "Мэдээлэл",
    menuItems: [
      {
        id: 1,
        url: "https://www.syscotech.club/",
        text: "Үйл ажиллагаа",
      },
      {
        id: 2,
        url: "#mentor",
        text: "Түгээмэл асуулт хариулт",
      },
    ],
  },
  myAccount: {
    title: "Клубийн бодлого",
    menuItems: [
      {
        id: 1,
        url: "#",
        text: "Гишүүний эрх, үүрэг",
      },
      {
        id: 2,
        url: "#",
        text: "Клубийн журам",
      },
    ],
  },
};
