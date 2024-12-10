import Img1 from '../assets/hero.jpg'
import Hero from '../assets/hero.jpg'
import donation from '../assets/donation.png'


export const data = [
  {
    title: 'Food Drive',
    subtitle: 'Feed the Hungry',
    rating: '4.9',
    backgroundColors: { top: '#FFB84C', bottom: '#FF914D' },
    image: Hero,
  },
  {
    title: 'Education Fund',
    subtitle: 'Empower Learning',
    rating: '4.8',
    backgroundColors: { top: '#4CAF50', bottom: '#388E3C' },
    image: Hero,
  },
  {
    title: 'Disaster Relief',
    subtitle: 'Support Communities',
    rating: '5.0',
    backgroundColors: { top: '#03A9F4', bottom: '#0288D1' },
    image: Hero,
  },
  {
    title: 'Animal Welfare',
    subtitle: 'Protect Wildlife',
    rating: '4.7',
    backgroundColors: { top: '#FF5722', bottom: '#E64A19' },
    image: Hero,
  },
  {
    title: 'Medical Aid',
    subtitle: 'Health for All',
    rating: '4.9',
    backgroundColors: { top: '#9C27B0', bottom: '#7B1FA2' },
    image: Hero,
  },
];


export const cardData = [
  {
    imageSrc: Hero,
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    link: 'your_link_here',
  },
  {
    imageSrc: Hero,
    title: 'The Rise of AI in Everyday Life',
    description: 'Discover how artificial intelligence is transforming our world in amazing ways.',
    link: 'your_link_here',
  },
  {
    imageSrc: Hero,
    title: 'Exploring the Future of Quantum Computing',
    description: 'Quantum computing is poised to revolutionize industries. Learn how it works.',
    link: 'your_link_here',
  },
];


export const sections = [
  {
    image: Img1,
    alt: "Donation Image",
    heading: "Keep projects on schedule",
    subheading: "More speed. Less spend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat",
      "Amet consectetur adipiscing elit",
    ],
    reverse: false,
  },
  {
    image: donation,
    alt: "Donation Image 2",
    heading: "Achieve your goals faster",
    subheading: "Better planning. Better results",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      "Sed ut perspiciatis unde omnis",
      "Nemo enim ipsam voluptatem quia",
      "Quis autem vel eum iure reprehenderit",
    ],
    reverse: true,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    message: "Thanks to your generous donations, I was able to receive proper medical treatment. I'm so grateful for this life-changing support.",
    image: Hero,
    supportType: "Medical Aid",
  },
  {
    name: "Rahul Gupta",
    message: "The food package we received meant the world to my family during a difficult time. Thank you for your kindness and generosity!",
    image:Hero, 
    supportType: "Food Donation",
  },
  {
    name: "Fatima Ali",
    message: "With your help, I was able to go back to school and pursue my dream of becoming a teacher. Thank you for believing in me!",
    image: Hero, 
    supportType: "Education Sponsorship",
  },
];


export const stories = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "A Second Chance at Life",
    description:
      "Thanks to our donors, Jane was able to receive life-saving surgery. Read her inspiring journey.",
    link: "/stories/jane",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Education for Every Child",
    description:
      "Discover how your contributions are helping children like Sam go to school for the first time.",
    link: "/stories/sam",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Feeding Families in Need",
    description:
      "Your donations provided meals to hundreds of families during challenging times.",
    link: "/stories/feeding-families",
  },

];


