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
      title: "We provide\nCounselling Services",
      subtitle: "to facilitate quality of life and transform lives"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner3_tpzg20.png", // Replace with actual image for "Psychological Assessments"
      title: "We administer\nPsychological Assessments",
      subtitle: "to ascertain psychological functioning and identify support needs"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846665/banner4_odblcx.png", // Replace with actual image for "Training programmes"
      title: "We impart\nTraining Programmes",
      subtitle: "to build confidence in the abilities of oneself"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365494/vstp8qbmbpxjq1szktcq.png", // Replace with actual image for "Coaching"
      title: "We offer Coaching",
      subtitle: "to enrich right skills to be self-reliant individuals"
    },
    {
      backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365516/qy1amuveqwvmpkp65zql.png", // Replace with actual image for "Rehabilitate Prisoners"
      title: "We Rehabilitate Prisoners",
      subtitle: "to rebuild and restore the dignity of prisoners"
    }
  ];


// Related images data for each category
export const relatedImagesData = {
  0: { // COUNSELLING SERVICES
    title: "Counselling Services",
    description: "Talking therapy for mental well-being",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848681/mental_disorders_odladq.jpg",
        caption: "Mental Disorders"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848705/NOMOPHOBIA_xtk0ll.avif",
        caption: "NOMOPHOBIA"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PEER_PRESSURE_msm0sd.jpg",
        caption: "PEER PRESSURE"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/postpartum_depression_zadtuz.avif",
        caption: "Postpartum Depression"
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/sexual_dysfuction_gmam1a.jpg",
        caption: "Sexual Dysfunction"
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/STRESS_EMOJI_yjctcl.jpg",
        caption: "STRESS"
      },
      {
        id: 7,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848709/work_life_balance_ka9v0i.jpg",
        caption: "Work Life Balance"
      },
      {
        id: 8,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
        caption: "Work Life Stress"
      },
      {
        id: 9,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848708/TOXIC_RELATIONSHIP_iwvluj.jpg",
        caption: "TOXIC RELATIONSHIP"
      },
      {
        id: 10,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PSTD_vizrnr.jpg",
        caption: "PTSD"
      },
      {
        id: 11,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
        caption: "WORKPLACE COUNSELLING"
      },
      {
        id: 12,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848870/CHILD_AND_ADOLESCENT_COUNSELLING_onygfw.avif",
        caption: "CHILD AND ADOLESCENT COUNSELLING"
      },
      {
        id: 13,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/FAMILY_COUNSELLING_b8zobz.avif",
        caption: "FAMILY COUNSELLING"
      },
      {
        id: 14,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/COUPLE_COUNSELLING_edawpw.avif",
        caption: "COUPLE COUNSELLING"
      },
      {
        id: 15,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848874/GEDIATRIC_COUNSELLING_rinwc6.avif",
        caption: "GEDIATRIC COUNSELLING"
      },
      {
        id: 16,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/MARITAL_COUNSELLING_dnzpgy.jpg",
        caption: "MARITAL COUNSELLING"
      },
      {
        id: 17,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/INDIVIDUAL_COUNSELLING_tqlnvo.avif",
        caption: "INDIVIDUAL COUNSELLING"
      },
      {
        id: 18,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/REHABILITATION_COUNSELLING_hyyjya.avif",
        caption: "REHABILITATION COUNSELLING"
      },
      {
        id: 19,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/RELATIOSHIP_AND_MARITAL_COUNSELLING_npp2qc.avif",
        caption: "RELATIONSHIP AND MARITAL COUNSELLING"
      },
      {
        id: 20,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ABUSE_EMOJI_hswaoo.jpg",
        caption: "ABUSE EMOJI"
      },
      {
        id: 21,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ADDICTION_EMOJI_wqvlc4.jpg",
        caption: "ADDICTION EMOJI"
      },
      {
        id: 22,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914294/ADHD_p97o0o.jpg",
        caption: "ADHD"
      },
      {
        id: 23,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914324/ANGER_EMOJI_lz8dzi.jpg",
        caption: "ANGER EMOJI"
      },
      {
        id: 24,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914327/anxiety_emoji_c6zzlu.jpg",
        caption: "anxiety emoji"
      },
      {
        id: 25,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914325/BREAK_UP_ocw4xw.jpg",
        caption: "BREAK UP"
      },
      {
        id: 26,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914326/burn_out_aifogk.jpg",
        caption: "burn out"
      },
      {
        id: 27,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CAREER_GUIDANCE_a3td7y.jpg",
        caption: "CAREER GUIDANCE"
      },
      {
        id: 28,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CHEATING_INFEDITLTY_ISSUES_bmmnml.webp",
        caption: "CHEATING INFEDITLTY ISSUES"
      },
      {
        id: 29,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914457/CONDUCT_DISORDER_gqll5t.webp",
        caption: "CONDUCT DISORDER"
      },
      {
        id: 30,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/coping_with_retirement_q6imr4.webp",
        caption: "coping with retirement"
      },
      {
        id: 31,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/COUPLE_CONFLICT_omqls2.webp",
        caption: "COUPLE CONFLICT"
      },
      {
        id: 32,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/Dealing_Chronic_and_Terminal_Illness_vydg8c.jpg",
        caption: "Dealing Chronic and Terminal Illness"
      },
      {
        id: 33,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/DEPRESSION_EMOJI_qf1wkf.jpg",
        caption: "DEPRESSION EMOJI"
      },
      {
        id: 34,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/divorce_zngjs8.jpg",
        caption: "divorce"
      },
      {
        id: 35,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914459/Domestic_violence_z9wzwg.jpg",
        caption: "Domestic violence"
      },
      {
        id: 36,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914459/empty_nest_syndrome_mn8p0f.jpg",
        caption: "empty nest syndrome"
      },
      {
        id: 37,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914475/EXAMOPHOBIA_odxwc5.jpg",
        caption: "EXAMOPHOBIA"
      },
      {
        id: 38,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914492/GENDER_IDENTITY_zgcfye.png",
        caption: "GENDER IDENTITY"
      },
      {
        id: 39,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/grief_and_loss_vyhg5z.jpg",
        caption: "grief and loss"
      },
      {
        id: 40,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/in_laws_adjustments_problems_nu6piy.jpg",
        caption: "in laws adjustments problems"
      },
      {
        id: 41,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/infertility_problems_pfqh3h.jpg",
        caption: "infertility problems"
      },
      {
        id: 42,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/insomnia_q93crx.jpg",
        caption: "insomnia"
      },
      {
        id: 43,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/interpersonal_problems_jn4qoe.jpg",
        caption: "interpersonal problems"
      },
      {
        id: 44,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/intimacy_issues_ti3gnz.jpg",
        caption: "intimacy issues"
      },
      {
        id: 45,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LEARNING_DISABILITY_dsbezh.jpg",
        caption: "LEARNING DISABILITY"
      },
      {
        id: 46,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LGBTQ_uogn4m.jpg",
        caption: "LGBTQ"
      }
    ]
  },
  1: { // ASSESSMENTS
    title: "Understand, evaluate and improve mental well-being",
    description: "Our comprehensive evaluations help identify needs and empower informed choices.",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849077/COGNITIVE_ASSESSMENTS_j9cvoh.jpg",
        caption: "COGNITIVE ASSESSMENTS"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849078/NEURO_PSYCHOLOGICAL_ASSESSMENTS_cxiy7b.png",
        caption: "NEURO PSYCHOLOGICAL ASSESSMENTS"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849078/NEURO_PSYCHOLOGICAL_ASSESSMENTS_cxiy7b.png",
        caption: "PERSONALITY ASSESSMENTS"
      }
    ]
  },
  2: { // TRAINING
    title: "Enable personal and professional skill development",
    description: "Our hands-on skills development programs build confidence and capability.",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849145/TRAINING_FOR_CHILDREN_ahjvqp.jpg",
        caption: "TRAINING FOR CHILDREN"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849145/TRAINING_FOR_EMPLOYEES_i095sy.jpg",
        caption: "TRAINING FOR EMPLOYEES"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849146/TRAINING_FOR_MARRIED_COUPLES_vriqec.webp",
        caption: "TRAINING FOR MARRIED COUPLES"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849147/TRAINING_FOR_STUDENTS_slwxru.jpg",
        caption: "TRAINING FOR STUDENTS"
      }
    ]
  },
  3: { // COACHING
    title: "Personalized mentoring for personal productivity",
    description: "Our personalized mentoring programs foster growth and self-reliance.",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/BUSINESS_COACHING_ks9hwq.jpg",
        caption: "BUSINESS COACHING"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/PERFORMANCE_COACHING_ig9bnf.png",
        caption: "PERFORMANCE COACHING"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/CAREER_COACHING_zlsknw.jpg",
        caption: "CAREER COACHING"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/COACHING_FOR_TIME_MANAGERS_fruf30.jpg",
        caption: "COACHING FOR TIME MANAGERS"
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/LIFE_COACHING_vfjyvo.jpg",
        caption: "LIFE COACHING"
      }
    ]
  },
  4: { // REHABILITATION OF PRISONERS
    title: "Revive and restore social re-integration",
    description: "Our rehabilitation programs help rebuild lives and restore dignity for prisoners.",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/COUNSELLING_FOR_PRISONERS_lsqgrl.jpg",
        caption: "COUNSELLING FOR PRISONERS"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/PROVIDE_EDUCATIONSL_FINACIAL_AND_SOCIAL_SUPPORT_FOR_RELEASED_PRISONERS_wjog7a.jpg",
        caption: "PROVIDE EDUCATIONAL FINANCIAL AND SOCIAL SUPPORT FOR RELEASED PRISONERS"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Promote_literacy_among_women_inside_prison_qowpzk.jpg",
        caption: "Promote literacy among women inside prison"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/Provide_educational_financial_and_social_support_to_prisoners_children_mrqmfi.jpg",
        caption: "Provide educational, financial and social support to prisoners children"
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Provide_rehabilitation_for_prisoners_who_are_mentally_ill_after_their_release_ixblwz.jpg",
        caption: "Provide rehabilitation for prisoners who are mentally ill after their release"
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/UPSKILLING_RELASED_PRISONERS_bqruyy.png",
        caption: "UPSKILLING RELEASED PRISONERS"
      }
    ]
  }
};

export const data = [
  {
    title: "COUNSELLING SERVICES",
    subtitle: "Talking therapy for mental well-being",
    rating: "4.9",
    backgroundColors: { top: "#8E24AA", bottom: "#5E35B1" }, // Gradient with a sense of support and trust
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743510729/yogcn1iuh5y2vxfhxkph.jpg",
  },
  {
    title: "ASSESSMENTS",
    subtitle: "Understand, evaluate and improve mental well-being",
    rating: "4.8",
    backgroundColors: { top: "#3949AB", bottom: "#1E88E5" }, // Gradient reflecting clarity and insight
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743097252/t01qji4jszfssfgvalib.jpg",
  },
  {
    title: "TRAINING",
    subtitle: "Enable personal and professional skill development",
    rating: "4.9",
    backgroundColors: { top: "#00ACC1", bottom: "#00838F" }, // Gradient symbolizing growth and confidence
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743401589/training27_tkvf7p.png",
  },
  {
    title: "COACHING",
    subtitle: "Personalized mentoring for personal productivity",
    rating: "4.8",
    backgroundColors: { top: "#43A047", bottom: "#2E7D32" }, // Gradient representing energy and progress
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365494/vstp8qbmbpxjq1szktcq.png",
  },
  {
    title: "REHABILITAION OF PRISONERS",
    subtitle: "Revive and restore social re-integration",
    rating: "4.7",
    backgroundColors: { top: "#FBC02D", bottom: "#F9A825" }, // Gradient evoking hope and renewal
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743585351/xwcapolkxzovyyvp224r.jpg",
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
      "Mental Health Support | Professional counselling services for prisoners",
      "Rehabilitation Programmes | Comprehensive support for reintegration",
      "Transformative Approach | Focusing on holistic well-being and dignity"
    ],
    reverse: false,
  },
  {
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365090/frcycmn7mo7yc5pqbrxw.png", // Replace with your actual image variable or path
    alt: "Our Mission",
    heading: "OUR MISSION",
    subheading: "Elevating Emotional and Professional Well-being",
    description:
      "Our mission at V Heal Foundation is to elevate emotional and professional domains of individuals in families and at workplace by way of counselling, training and coaching. Our commitment extends to the prison walls too by facilitating mental wellness among the prisoners through counselling, up-skilling and rehabilitation.",
    features: [
      "Counseling Services | Professional mental health support for individuals and families",
      "Training Programmes | Skill development and professional growth opportunities",
      "Rehabilitation Support | Comprehensive programmes for prisoners' reintegration"
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

