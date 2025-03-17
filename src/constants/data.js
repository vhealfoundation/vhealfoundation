import Hero from '../assets/hero.jpg'
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';


  // Define the 6 new slides with their content
export const slides = [
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846666/banner1_czmjga.png", // Replace with actual image for "V Heal Foundation"
      title: "V Heal Foundation",
      subtitle: "Enriching, Empowering & Enduring Lives"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner2_sdkoqj.png", // Replace with actual image for "Counseling Services"
      title: "We provide Counseling Services",
      subtitle: "to facilitate quality of life and transform lives"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner3_tpzg20.png", // Replace with actual image for "Psychological Assessments"
      title: "We administer Psychological Assessments",
      subtitle: "to ascertain psychological functioning and identify support needs"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846665/banner4_odblcx.png", // Replace with actual image for "Training programmes"
      title: "We impart Training programmes",
      subtitle: "to build confidence in the abilities of oneself"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846666/banner5_k4iqoa.png", // Replace with actual image for "Coaching"
      title: "We offer Coaching",
      subtitle: "to enrich right skills to be self-reliant individuals"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846666/banner6_ibixvg.png", // Replace with actual image for "Rehabilitate Prisoners"
      title: "We Rehabilitate Prisoners",
      subtitle: "to rebuild and restore the dignity of prisoners"
    }
  ];


export const data = [
  {
    title: "COUNSELLING SERVICES",
    subtitle: "Providing professional guidance",
    rating: "4.9",
    backgroundColors: { top: "#8E24AA", bottom: "#5E35B1" }, // Gradient with a sense of support and trust
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741850990/counselling1_s4rptk.png",
  },
  {
    title: "ASSESSMENTS",
    subtitle: "Comprehensive evaluations to empower choice",
    rating: "4.8",
    backgroundColors: { top: "#3949AB", bottom: "#1E88E5" }, // Gradient reflecting clarity and insight
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741851155/training9_cxm5jz.jpg",
  },
  {
    title: "TRAINING",
    subtitle: "Hands-on skills development",
    rating: "4.9",
    backgroundColors: { top: "#00ACC1", bottom: "#00838F" }, // Gradient symbolizing growth and confidence
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741851156/training17_tj6ll8.jpg",
  },
  {
    title: "COACHING",
    subtitle: "Personalized mentoring for growth",
    rating: "4.8",
    backgroundColors: { top: "#43A047", bottom: "#2E7D32" }, // Gradient representing energy and progress
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741851263/coaching2_zekzgc.png",
  },
  {
    title: "REHABILITAION OF PRISONERS",
    subtitle: "Facilitating smooth reintegration",
    rating: "4.7",
    backgroundColors: { top: "#FBC02D", bottom: "#F9A825" }, // Gradient evoking hope and renewal
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741851434/image003_dwriht.jpg",
  },
];




export const aboutData = [
  {
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847946/mission_hyapti.png", 
    alt: "Our Vision",
    heading: "OUR VISION",
    subheading: "Transforming Lives Through Mental Well-being",
    description:
      "V Heal Foundation is a charitable trust with a vision to facilitate professional relationship to accomplish mental well-being and to transform the lives of prisoners.",
    features: [
      "Mental Health Support | Professional counseling services for prisoners",
      "Rehabilitation Programs | Comprehensive support for reintegration",
      "Transformative Approach | Focusing on holistic well-being and dignity"
    ],
    reverse: false,
  },
  {
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847947/vision_hxnv3s.png", // Replace with your actual image variable or path
    alt: "Our Mission",
    heading: "OUR MISSION",
    subheading: "Elevating Emotional and Professional Well-being",
    description:
      "Our mission at V Heal Foundation is to elevate emotional and professional domains of individuals in families and at workplace by way of counseling, training and coaching. Our commitment extends to the prison walls too by facilitating mental wellness among the prisoners through counselling, up-skilling and rehabilitation.",
    features: [
      "Counseling Services | Professional mental health support for individuals and families",
      "Training Programs | Skill development and professional growth opportunities",
      "Rehabilitation Support | Comprehensive programs for prisoners' reintegration"
    ],
    reverse: true,
  },
];


export const testimonials = [
  {
    name: "Amit Sharma",
    message: "Thanks to your generous donations, I was able to receive proper medical treatment. I'm so grateful for this life-changing support.",
    image: user3,
    supportType: "Medical Aid",
  },
  {
    name: "Rohan Mehta",
    message: "The food package we received meant the world to my family during a difficult time. Thank you for your kindness and generosity!",
    image: user1, 
    supportType: "Food Donation",
  },
  {
    name: "Priya Singh",
    message: "With your help, I was able to go back to school and pursue my dream of becoming a teacher. Thank you for believing in me!",
    image: user2 , 
    supportType: "Education Sponsorship",
  },
];

