import Hero from '../assets/hero.jpg'
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';


// Define the 6 new slides with their content
export const slides = [
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846666/banner1_czmjga.png", // Replace with actual image for "V Heal Foundation"
    title: "V Heal Foundation",
    subtitle: "Enriching, Empowering & Enduring Lives",
    backgroundPosition: "center top" // Default position
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner2_sdkoqj.png", // Replace with actual image for "Counseling Services"
    title: "We provide\nCounselling Services",
    subtitle: "to facilitate quality of life and transform lives",
    backgroundPosition: "center -50px" // Adjusted position with pixel value
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner3_tpzg20.png", // Replace with actual image for "Psychological Assessments"
    title: "We administer\nPsychological Assessments",
    subtitle: "to ascertain psychological functioning and identify support needs",
    backgroundPosition: "center -20px" // Adjusted position with pixel value
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846665/banner4_odblcx.png", // Replace with actual image for "Training programmes"
    title: "We impart\nTraining Programmes",
    subtitle: "to build confidence in the abilities of oneself",
    backgroundPosition: "center -250px" // Default position
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365494/vstp8qbmbpxjq1szktcq.png", // Replace with actual image for "Coaching"
    title: "We offer Coaching",
    subtitle: "to enrich right skills to be self-reliant individuals",
    backgroundPosition: "center -50px" // Adjusted position with pixel value
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365516/qy1amuveqwvmpkp65zql.png", // Replace with actual image for "Rehabilitate Prisoners"
    title: "We Rehabilitate Prisoners",
    subtitle: "to rebuild and restore the dignity of prisoners",
    backgroundPosition: "center -350px" // Adjusted position with pixel value
  }
];


// Related images data for each category
export const relatedImagesData = {
  0: { // COUNSELLING SERVICES
    title: "Counselling Services",
    description: "Talking therapy for mental well-being",
    sections: [
      {
        title: "Online and Hybrid Counselling Services",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/INDIVIDUAL_COUNSELLING_tqlnvo.avif",
            caption: "INDIVIDUAL COUNSELLING"
          },
          {
            id: 2,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848870/CHILD_AND_ADOLESCENT_COUNSELLING_onygfw.avif",
            caption: "CHILD AND ADOLESCENT COUNSELLING"
          },
          {
            id: 3,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/RELATIOSHIP_AND_MARITAL_COUNSELLING_npp2qc.avif",
            caption: "RELATIONSHIP AND MARITAL COUNSELLING"
          },
          {
            id: 4,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/COUPLE_COUNSELLING_edawpw.avif",
            caption: "COUPLE COUNSELLING"
          },
          {
            id: 5,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/FAMILY_COUNSELLING_b8zobz.avif",
            caption: "FAMILY COUNSELLING"
          },
          {
            id: 6,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848874/GEDIATRIC_COUNSELLING_rinwc6.avif",
            caption: "GERIATRIC COUNSELLING"
          },
          {
            id: 7,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
            caption: "WORKPLACE COUNSELLING"
          },
          {
            id: 8,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/REHABILITATION_COUNSELLING_hyyjya.avif",
            caption: "REHABILITATION COUNSELLING"
          }
        ]
      },
      {
        title: "Areas of Expertise in Counselling",
        images: [
          {
            id: 9,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278584/anxiety_emoji_aveccc.jpg",
            caption: "ANXIETY"
          },
          {
            id: 10,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/STRESS_EMOJI_yjctcl.jpg",
            caption: "STRESS"
          },
          {
            id: 11,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/DEPRESSION_EMOJI_qf1wkf.jpg",
            caption: "DEPRESSION"
          },
          {
            id: 12,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914324/ANGER_EMOJI_lz8dzi.jpg",
            caption: "ANGER"
          },
          {
            id: 13,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ADDICTION_EMOJI_wqvlc4.jpg",
            caption: "ADDICTION"
          },
          {
            id: 14,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ABUSE_EMOJI_hswaoo.jpg",
            caption: "ABUSE"
          },
          {
            id: 15,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914294/ADHD_p97o0o.jpg",
            caption: "ADHD"
          },
          {
            id: 16,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LEARNING_DISABILITY_dsbezh.jpg",
            caption: "LEARNING DISABILITY"
          },
          {
            id: 17,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914457/CONDUCT_DISORDER_gqll5t.webp",
            caption: "CONDUCT DISORDER"
          },
          {
            id: 18,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PEER_PRESSURE_msm0sd.jpg",
            caption: "PEER PRESSURE"
          },
          {
            id: 19,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848705/NOMOPHOBIA_xtk0ll.avif",
            caption: "NOMOPHOBIA"
          },
          {
            id: 20,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914475/EXAMOPHOBIA_odxwc5.jpg",
            caption: "EXAMOPHOBIA"
          },
          {
            id: 21,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/sexual_dysfuction_gmam1a.jpg",
            caption: "BODY IMAGE"
          },
          {
            id: 22,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914325/BREAK_UP_ocw4xw.jpg",
            caption: "BREAKUP ISSUES"
          },
          {
            id: 23,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848708/TOXIC_RELATIONSHIP_iwvluj.jpg",
            caption: "TOXIC RELATIONSHIP"
          },
          {
            id: 24,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CAREER_GUIDANCE_a3td7y.jpg",
            caption: "CAREER GUIDANCE"
          },
          {
            id: 25,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914492/GENDER_IDENTITY_zgcfye.png",
            caption: "GENDER IDENTITY"
          },
          {
            id: 26,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LGBTQ_uogn4m.jpg",
            caption: "LGBTQ+"
          },
          {
            id: 27,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PSTD_vizrnr.jpg",
            caption: "POST-TRAUMATIC STRESS DISORDER"
          },
          {
            id: 28,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CHEATING_INFEDITLTY_ISSUES_bmmnml.webp",
            caption: "CHEATING AND INFIDELITY ISSUES"
          },
          {
            id: 29,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/COUPLE_CONFLICT_omqls2.webp",
            caption: "COUPLE CONFLICT"
          },
          {
            id: 30,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/in_laws_adjustments_problems_nu6piy.jpg",
            caption: "IN-LAWS' ADJUSTMENT PROBLEMS"
          },
          {
            id: 31,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/intimacy_issues_ti3gnz.jpg",
            caption: "INTIMACY ISSUES"
          },
          {
            id: 32,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/infertility_problems_pfqh3h.jpg",
            caption: "INFERTILITY"
          },
          {
            id: 33,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/sexual_dysfuction_gmam1a.jpg",
            caption: "SEXUAL DYSFUNCTION"
          },
          {
            id: 34,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/interpersonal_problems_jn4qoe.jpg",
            caption: "INTERPERSONAL PROBLEMS"
          },
          {
            id: 35,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914459/Domestic_violence_z9wzwg.jpg",
            caption: "DOMESTIC VIOLENCE"
          },
          {
            id: 36,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/divorce_zngjs8.jpg",
            caption: "DIVORCE"
          },
          {
            id: 37,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/postpartum_depression_zadtuz.avif",
            caption: "POSTPARTUM DEPRESSION"
          },
          {
            id: 38,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848681/mental_disorders_odladq.jpg",
            caption: "MENTAL DISORDERS"
          },
          {
            id: 39,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/insomnia_q93crx.jpg",
            caption: "INSOMNIA"
          },
          {
            id: 40,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278672/work_life_balance_puk4kq.jpg",
            caption: "WORK-LIFE BALANCE"
          },
          {
            id: 41,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
            caption: "WORKPLACE STRESS"
          },
          {
            id: 42,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914326/burn_out_aifogk.jpg",
            caption: "BURNOUT"
          },
          {
            id: 43,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278739/empty_nest_syndrome_aoz0jj.jpg",
            caption: "EMPTY NEST SYNDROME"
          },
          {
            id: 44,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/coping_with_retirement_q6imr4.webp",
            caption: "COPING WITH RETIREMENT"
          },
          {
            id: 45,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/Dealing_Chronic_and_Terminal_Illness_vydg8c.jpg",
            caption: "DEALING CHRONIC AND TERMINAL ILLNESS"
          },
          {
            id: 46,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/grief_and_loss_vyhg5z.jpg",
            caption: "GRIEF AND LOSS"
          }
        ]
      },
      {
        title: "Modes of Counselling",
        images: []
      }
    ]
  },
  1: { // ASSESSMENTS
    title: "Assessments",
    description: "Understand, evaluate and improve mental well-being",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849077/COGNITIVE_ASSESSMENTS_j9cvoh.jpg",
        caption: "COGNITIVE ASSESSMENTS"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849078/PERSONALITY_ASSESSMENTS_wyjnku.jpg",
        caption: "PERSONALITY ASSESSMENTS"

      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278813/NEURO_PSYCHOLOGICAL_ASSESSMENTS_enh5sf.png",
        caption: "NEURO PSYCHOLOGICAL ASSESSMENTS"
      }
    ]
  },
  2: { // TRAINING
    title: "Training",
    description: "Enable personal and professional skill development",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278925/TRAINING_FOR_CHILDREN_eqbepb.jpg",
        caption: "TRAINING FOR CHILDREN"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849147/TRAINING_FOR_STUDENTS_slwxru.jpg",
        caption: "TRAINING FOR STUDENTS"

      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278924/TRAINING_FOR_MARRIED_COUPLES_xu58ua.jpg",
        caption: "TRAINING FOR MARRIED COUPLES"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849145/TRAINING_FOR_EMPLOYEES_i095sy.jpg",
        caption: "TRAINING FOR EMPLOYEES"
      }
    ]
  },
  3: { // COACHING
    title: "Coaching",
    description: "Personalized mentoring for personal productivity",
    images: [
      {
        id: 1,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/COACHING_FOR_TIME_MANAGERS_fruf30.jpg",
        caption: "COACHING FOR FIRST TIME MANAGERS"

      },
      {
        id: 2,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/CAREER_COACHING_zlsknw.jpg",
        caption: "CAREER COACHING"

      },
      {
        id: 3,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/PERFORMANCE_COACHING_ig9bnf.png",
        caption: "PERFORMANCE COACHING"
      },
      {
        id: 4,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/LIFE_COACHING_vfjyvo.jpg",
        caption: "LIFE COACHING"

      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/BUSINESS_COACHING_ks9hwq.jpg",
        caption: "BUSINESS COACHING"
      }
    ]
  },
  4: { // REHABILITATION OF PRISONERS
    title: "Rehabilitation Of Prisoners",
    description: "Revive and restore social re-integration",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/COUNSELLING_FOR_PRISONERS_lsqgrl.jpg",
        caption: "PROVIDE COUNSELLING AND TRAINING PROGRAMMES FOR PRISONERS BEFORE AND AFTER THEIR RELEASE"
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744282235/PROVIDE_FINANCIAL_HELP_JOB_ASSISTANCE_AND_TRAINING_PROGRAMMES_TO_HELP_WITH_SOCIAL_AND_PSYCHOLOGICAL_REINTEGRATION_FOR_PRISONERS_AFTER_THEI_dzndbs.jpg",
        caption: "PROVIDE FINANCIAL HELP, JOB ASSISTANCE, AND TRAINING PROGRAMMES TO HELP WITH SOCIAL AND PSYCHOLOGICAL REINTEGRATION FOR PRISONERS AFTER THEIR RELEASE"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Promote_literacy_among_women_inside_prison_qowpzk.jpg",
        caption: "PROMOTE LITERACY AMONG WOMEN INSIDE PRISON AND RENDER TRAINING ON INCOME GENERATION ACTIVITIES AND OTHER LIFE SKILLS TRAINING PROGRAMMES"
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/UPSKILLING_RELASED_PRISONERS_bqruyy.png",
        caption: "UPSKILL PRISONERS INSIDE THE PRISON AND EDUCATE THEM ON JOB OPPORTUNITIES AFTER THEIR RELEASE"
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744281997/PROVIDE_APPROPRIATE_TRAINING_FOR_THE_PRISONERS_TO_LEARN_NEW_SKILLS_INSIDE_THE_PRISON_ewkxjh.jpg",
        caption: "PROVIDE APPROPRIATE TRAINING FOR THE PRISONERS TO LEARN NEW SKILLS INSIDE THE PRISON"
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744281997/ESTABLISH_CENTRES_FOR_EMPLOYMENT_GENERATION_FOR_PRISONERS_AFTER_THEIR_RELEASE_oo9kyj.jpg",
        caption: "ESTABLISH CENTRES FOR EMPLOYMENT GENERATION FOR PRISONERS AFTER THEIR RELEASE"
      },
      {
        id: 7,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744281996/PROVIDE_LEGAL_AND_FINANCIAL_SUPPORT_TO_ECONOMICALLY_DOWNTRODDEN_PRISONERS_FOR_LEGAL_AID_AND_TO_SECURE_BAIL_pineoe.jpg",
        caption: "PROVIDE LEGAL AND FINANCIAL SUPPORT TO ECONOMICALLY DOWNTRODDEN PRISONERS FOR LEGAL AID AND TO SECURE BAIL"
      },
      {
        id: 8,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Provide_rehabilitation_for_prisoners_who_are_mentally_ill_after_their_release_ixblwz.jpg",
        caption: "PROVIDE REHABILITATION FOR PRISONERS WHO ARE MENTALLY ILL AFTER THEIR RELEASE"
      },
      {
        id: 9,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/Provide_educational_financial_and_social_support_to_prisoners_children_mrqmfi.jpg",
        caption: "PROVIDE EDUCATIONAL, FINANCIAL AND SOCIAL SUPPORT TO CHILDREN OF ECONOMICALLY DOWNTRODDEN PRISONERS"
      },
      {
        id: 10,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744281999/PROVIDE_REQUIRED_RELIEF_AND_ASSISTANCE_TO_FAMILY_MEMBERS_OF_ECONOMICALLY_DOWNTRODDEN_PRISONERS_WHO_ARE_OUTSIDE_THE_PRISON_zw9rtw.jpg",
        caption: "PROVIDE REQUIRED RELIEF AND ASSISTANCE TO FAMILY MEMBERS OF ECONOMICALLY DOWNTRODDEN PRISONERS WHO ARE OUTSIDE THE PRISON"
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
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365090/frcycmn7mo7yc5pqbrxw.png",
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
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743141911/ksnremhoofqli5kgf4hx.jpg", // Replace with your actual image variable or path
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
    image: user2,
    supportType: "Education Sponsorship",
  },
];



// Sample review data - replace with actual data later
export const reviewsData = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743510729/yogcn1iuh5y2vxfhxkph.jpg",
    role: "Student",
    rating: 5,
    review: "The counseling sessions at V Heal Foundation completely transformed my approach to managing anxiety. The therapist was incredibly supportive and provided practical techniques that I use daily."
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743097252/t01qji4jszfssfgvalib.jpg",
    role: "IT Professional",
    rating: 5,
    review: "After struggling with work-related stress for years, the counselors at V Heal helped me develop healthy coping mechanisms. Their holistic approach addressed both my mental and emotional wellbeing."
  },
  {
    id: 3,
    name: "Ananya Patel",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1742365090/frcycmn7mo7yc5pqbrxw.png",
    role: "Homemaker",
    rating: 5,
    review: "The family counseling services helped us navigate a difficult period in our marriage. The counselor was patient, unbiased, and gave us practical tools to improve our communication."
  },
  {
    id: 4,
    name: "Vikram Singh",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741846666/banner1_czmjga.png",
    role: "Former Inmate",
    rating: 5,
    review: "V Heal's rehabilitation program gave me hope and direction when I needed it most. Their counselors helped me rebuild my self-esteem and prepare for life after incarceration."
  },
  {
    id: 5,
    name: "Meera Kapoor",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner2_sdkoqj.png",
    role: "Teacher",
    rating: 4,
    review: "The stress management workshops were incredibly insightful. I learned techniques that not only helped me personally but also enabled me to better support my students."
  },
  {
    id: 6,
    name: "Arjun Malhotra",
    image: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743510729/yogcn1iuh5y2vxfhxkph.jpg",
    role: "Business Owner",
    rating: 5,
    review: "The executive coaching program helped me navigate leadership challenges with confidence. The personalized approach and actionable strategies made a significant difference in my professional life."
  }
];

