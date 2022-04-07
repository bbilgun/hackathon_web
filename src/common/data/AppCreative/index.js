/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from '../../assets/image/appCreative/залгаас.png';
export const navbar = {
  logoImage: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#keyFeatures',
      offset: '73',
    },
    {
      id: 3,
      label: 'Pricing',
      path: '#pricing',
      offset: '73',
    },
    {
      id: 4,
      label: 'Client',
      path: '#testimonial',
      offset: '73',
    },
    {
      id: 5,
      label: 'FAQ',
      path: '#faq',
      offset: '73',
    },
  ],
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from '../../assets/image/appCreative/key_feature/ai.svg';
import keyFeature2 from '../../assets/image/appCreative/key_feature/blockchain.svg';
import keyFeature3 from '../../assets/image/appCreative/key_feature/vr.svg';
import keyFeature4 from '../../assets/image/appCreative/key_feature/Deep_learning.svg';

export const keyFeatures = {
  title: 'Шинэ технологи, програмчлалын хэл',
  slogan:
    'Ашигласан бол давуу тал болох болно.',
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: 'AI',
      description:
        '',
    },
    {
      id: 2,
      icon: keyFeature2,
      title: 'Block Chain',
      description:
        '',
    },
    {
      id: 3,
      icon: keyFeature3,
      title: 'VR',
      description:
        '',
    },
    {
      id: 4,
      icon: keyFeature4,
      title: 'Deep Learning',
      description:
        '',
    },
  ],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import chooseThumb from '../../assets/image/appCreative/chooseThumb.png';

export const chooseUs = {
  title: 'Шагналын сан ',
  thumb: chooseThumb,
  features: [
    {
      id: 1,
      title: '1-р байр Цом, Өргөмжлөл, 1,000,000₮.',
      description:
        '',
    },
    {
      id: 2,
      title: '2-р байр Өргөмжлөл, 700,000₮.',
      description:
        '',
    },
    {
      id: 3,
      title: '3-р байр Өргөмжлөл, 500,000₮.',
      description:
        '',
    },
  ],
};

/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */
import expIcon1 from '../../assets/image/appCreative/experience/1.png';
import expIcon2 from '../../assets/image/appCreative/experience/2.png';
import expIcon3 from '../../assets/image/appCreative/experience/3.png';
import expIcon4 from '../../assets/image/appCreative/experience/4.png';
import videoTheme from '../../assets/image/appCreative/experienceVideo.png';

// Client Logo
import geekwire from '../../assets/image/appCreative/client_logo/1.png';
import slack from '../../assets/image/appCreative/client_logo/2.png';
import envato from '../../assets/image/appCreative/client_logo/3.png';
import usaToday from '../../assets/image/appCreative/client_logo/4.png';
import forbes from '../../assets/image/appCreative/client_logo/5.png';
import evernote from '../../assets/image/appCreative/client_logo/6.png';

export const experiences = {
  title: 'Listen our user experience stories',
  slogan:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: expIcon1,
      title: 'Fibo Clouds',
      description:
        'We enjoy office retreats and visit famous places of our country and abroad also! We have planned to extend our business.',
    },
    {
      id: 2,
      icon: expIcon2,
      title: 'Worked with experienced team',
      description:
        'With more than 100,000 users, we are is growing fast. Currently, we are a team of 65+ people',
    },
    {
      id: 3,
      icon: expIcon3,
      title: 'Ultimate skill development',
      description:
        'Life is what happens when you’re busy working. We make sure you enjoy it with ultimate experience.',
    },
    {
      id: 4,
      icon: expIcon4,
      title: 'Professional Environment',
      description:
        'We build amazing things that work with awesome people who are WordPress enthusiasts, talented, eager to learn and team players.',
    },
  ],
  clients: [
    {
      id: 1,
      logo: geekwire,
      name: 'geekwire',
      link: '#1',
    },
    {
      id: 2,
      logo: slack,
      name: 'slack',
      link: '#2',
    },
    {
      id: 3,
      logo: envato,
      name: 'envato',
      link: '#3',
    },
    {
      id: 4,
      logo: usaToday,
      name: 'usa today',
      link: '#4',
    },
    {
      id: 5,
      logo: forbes,
      name: 'forbes',
      link: '#5',
    },
    {
      id: 6,
      logo: evernote,
      name: 'evernote',
      link: '#6',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import Image1 from '../../assets/image/appCreative/feature/slide1.png';
import Image2 from '../../assets/image/appCreative/feature/slide2.png';
import Image3 from '../../assets/image/appCreative/feature/slide3.png';
import Image4 from '../../assets/image/appCreative/feature/slide4.png';
import Image5 from '../../assets/image/appCreative/feature/slide5.png';
import Image6 from '../../assets/image/appCreative/feature/slide6.png';

export const features = {
  title: 'Асуух зүйл байна уу?',
  slogan:'',
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: 'Хакатон хаана зохиогдох вэ?',
      description:
        'ШУТИС-ийн Эрдэм шинжилгээ, инновацийн төв байр (VIII байр) -ны 12 давхарт Олон улсын эрдэм шинжилгээний хурлын танхим',
    },
    {
      id: 2,
      thumbnail: Image2,
      title: 'Хакатон хэзээ зохиогдох вэ?',
      description:
        '2022-04-23 -ны ** цагт',
    },
    {
      id: 3,
      thumbnail: Image3,
      title: 'Хакатонд хэн оролцож болох вэ?',
      description:
        'Шинийг илэрхийлдэг, өөрийгөө сорих хүсэлтэй, мэдээллийн технологийн чиглэлээр их дээд сургуульд суралцаж буй бүх оюутнууд',
    },
    {
      id: 4,
      thumbnail: Image4,
      title: 'Ямар чадвартай хүмүүс багт байх хэрэгтэй вэ? ',
      description:
        'Хакатон бол багийн тоглолт. Тиймээс багаа бүрдүүлэхдээ олон төрлийн чадвартай, "солонгон" баг бүрдүүлэхийг зөвлөж байна. Жишээ нь: илтгэл сайн тавьдаг, UX/UI зурдаг, back-end хөгжүүлэлт хийдэг гэх мэт.',
    },
    {
      id: 5,
      thumbnail: Image5,
      title: 'Очихдоо юу авч очих вэ?',
      description:
        'Лаптопоо бүтээлч сэтгэлгээтэйгээ цуг цүнхлээд ирэхэд л болно :) Нээрээ цэнэглэгчээ мартав аа',
    },
    {
      id: 6,
      thumbnail: Image6,
      title: '36 цаг гэхээр тэмцээний байран дээр хононо гэсэн үг үү?',
      description:
        'Үгүй дээ, өглөө ТЭДЭЭС орой ТЭД хүртэл багийнхантайгаа ажиллаад, гэртээ харьж, маргааш нь шүүлт болоод хаалтын ажиллагаандаа оролцоно. Харин шөнө унтах эсэх нь таны мэдэх хэрэг шүү ;)',
    },
  ],
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  title: 'Meet our exciting Pricing Plan',
  slogan: 'We designed our pricing plan with affordable price for users',
  pricingFeature: [
    {
      id: 1,
      name: 'Full Access Library',
    },
    {
      id: 2,
      name: 'Multiple user',
    },
    {
      id: 3,
      name: 'Refund Policy',
    },
    {
      id: 4,
      name: 'Google Analytics',
    },
    {
      id: 5,
      name: '24/7 support',
    },
  ],
  pricingItems: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Ultimate Pack',
      price: '35',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
import reviewer1 from '../../assets/image/appCreative/client/client-avatar-1.jpg';
import reviewer2 from '../../assets/image/appCreative/client/client-avatar-2.jpg';
import reviewer3 from '../../assets/image/appCreative/client/client-avatar-3.jpg';

export const testimonial = {
  title: 'Шүүгч, Ментор-уудтай танилцна уу.',
  slogan: '',
  reviews: [
    {
      id: 1,
      description:
        'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 2,
      description:
        '@redqteam is great for creating with landing pages within minutes! It then actually takes less time…',
      avatar: reviewer2,
      name: 'Gavin Park',
      designation: 'CEO at Orbital',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 3,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },

    {
      id: 4,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it. profitable and make it cool with fast loading experience & it make the site more customizable & fluent.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 5,
      description:
        'We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 6,
      description:
        'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. ',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
  ],
};

/* ------------------------------------ */
// Available Store data section
/* ------------------------------------ */
import availableThumb from '../../assets/image/appCreative/availableThumb.png';

export const availableStore = {
  title: '',
  description:
    '',
  thumb: availableThumb,
  numberPrefix: [
    {
      label: '',
      value: '',
    },
    {
      label: '',
      value: '',
    },
    {
      label: '',
      value: '',
    },
    {
      label: '',
      value: '',
    },
    {
      label: '',
      value: '',
    },
    {
      label: '',
      value: '',
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  title: '',
  slogan: '',
  faqs: [
    {
      id: 1,
      question: '',
      answer:
        "",
    },
    {
      id: 2,
      question: '',
      answer:
        '',
    },
    {
      id: 3,
      question: '',
      answer:
        '',
    },
    {
      id: 4,
      question: '',
      answer:
        '',
    },
    {
      id: 5,
      question: '',
      answer:
        '',
    },
    {
      id: 6,
      question: '',
      answer:
        '',
    },
    {
      id: 7,
      question: 'Learn from community on Brandwagon',
      answer:
        'Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.',
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { twitter } from 'react-icons-kit/fa/twitter';
import footerLogo from '../../assets/image/appCreative/logo.png';

export const footerWidget = {
  logo: footerLogo,
  siteName: 'RedQ, Inc',
  siteUrl: '#',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: '#',
    },
    {
      id: 2,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: '#',
    },
    {
      id: 3,
      icon: <Icon icon={dribbble} />,
      name: 'dribbble',
      link: '#',
    },
  ],
  aboutUs: {
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
      {
        id: 3,
        url: '#',
        text: 'About Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
      },
    ],
  },
  ourInformation: {
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '#',
        text: 'Site Map',
      },
    ],
  },
  myAccount: {
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media',
      },
      {
        id: 3,
        url: '#',
        text: 'Directories',
      },
      {
        id: 4,
        url: '#',
        text: 'Permissions',
      },
    ],
  },
};
