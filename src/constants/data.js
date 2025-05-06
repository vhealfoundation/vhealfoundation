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
    subtitle: "to facilitate quality of life and to transform lives",
    backgroundPosition: "center -50px" // Adjusted position with pixel value
  },
  {
    backgroundImage: "https://res.cloudinary.com/dgidetrcl/image/upload/v1741847654/banner3_tpzg20.png", // Replace with actual image for "Psychological Assessments"
    title: "We administer\nPsychological Assessments",
    subtitle: "to ascertain psychological functioning and identify support needs",
    backgroundPosition: "center 20px" // Adjusted position with pixel value
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
            caption: "INDIVIDUAL COUNSELLING",
            description: "One-on-one counselling sessions focused on personal issues, mental health concerns, and individual growth. Our therapists provide a safe, confidential space to explore thoughts, feelings, and behaviors."
          },
          {
            id: 2,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848870/CHILD_AND_ADOLESCENT_COUNSELLING_onygfw.avif",
            caption: "CHILD AND ADOLESCENT COUNSELLING",
            description: "Child and Adolescent Counselling facilitates mental well-being among children and the young  to share their challenges and concerns, explore ways to resolve them and learn new skills to adapt and unlearn maladaptive behaviours."
          },
          {
            id: 3,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/RELATIOSHIP_AND_MARITAL_COUNSELLING_npp2qc.avif",
            caption: "RELATIONSHIP AND MARITAL COUNSELLING",
            description: "Relationship and Marital Counselling helps couples to understand and resolve their conflicts and facilitate warmth, responsiveness and unconditional positive regard for each other which helps to improve their relationship."
          },
          {
            id: 4,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/COUPLE_COUNSELLING_edawpw.avif",
            caption: "COUPLE COUNSELLING",
            description: "Couple counselling facilitates the partners to express their thoughts and feelings and the romantic bond,  improves communication and strengthens the bond between the partners."
          },
          {
            id: 5,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848871/FAMILY_COUNSELLING_b8zobz.avif",
            caption: "FAMILY COUNSELLING",
            description: "Family Counselling addresses the psychological, behavioral, and emotional issues that cause family problems. It helps to resolve their issues and enhance family mental well-being and smooth functioning."
          },
          {
            id: 6,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848874/GEDIATRIC_COUNSELLING_rinwc6.avif",
            caption: "GERIATRIC COUNSELLING",
            description: "Geriatric Counselling facilitates emotional, mental, and social well-being of elderly individuals and help them to cope with their cognitive and physical changes."
          },
          {
            id: 7,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
            caption: "WORKPLACE COUNSELLING",
            description: "Work place Counselling assists employees in resolving their personal and professional issues at workplace. It  is a confidential and safe environment where employees can discuss issues such as stress, anxiety, interpersonal conflicts, and work-life balance and facilitates better performance and productivity."
          },
          {
            id: 8,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848875/REHABILITATION_COUNSELLING_hyyjya.avif",
            caption: "REHABILITATION COUNSELLING",
            description: "Rehabilitation Counselling for prisoners is a structured and supportive environment to confront their past, address their present underlying challenges inside the prison and empower them to develop essential Life skills to face life after prison."
          }
        ]
      },
      {
        title: "Areas of Expertise in Counselling",
        images: [
          {
            id: 9,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278584/anxiety_emoji_aveccc.jpg",
            caption: "ANXIETY",
            description: "Anxiety is a feeling of fear and uneasiness which causes a feeling of restlessness and  anxiousness during difficult and challenging situations."
          },
          {
            id: 10,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/STRESS_EMOJI_yjctcl.jpg",
            caption: "STRESS",
            description: "Stress is a state of worry or mental tension caused when we face a difficult situation, challenge or experience."
          },
          {
            id: 11,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/DEPRESSION_EMOJI_qf1wkf.jpg",
            caption: "DEPRESSION",
            description: "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It can affect our feelings, thoughts and behaviour and can lead to a variety of emotional and physical problems."
          },
          {
            id: 12,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914324/ANGER_EMOJI_lz8dzi.jpg",
            caption: "ANGER",
            description: "Anger is an emotion characterized by antagonism towards someone or something which has disturbing and can give you a way to express negative feelings."
          },
          {
            id: 13,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ADDICTION_EMOJI_wqvlc4.jpg",
            caption: "ADDICTION",
            description: "Addiction is a strong  physical or psychological dependence on a substance or activity to do something  which is harmful and can impact your daily life."
          },
          {
            id: 14,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914293/ABUSE_EMOJI_hswaoo.jpg",
            caption: "ABUSE",
            description: "Abuse is a physical, sexual, emotional, economic or psychological actions that harms another person. This includes any behaviors that frighten, intimidate, terrorize, manipulate, hurt, humiliate, blame, injure, or can wound someone."
          },
          {
            id: 15,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914294/ADHD_p97o0o.jpg",
            caption: "ADHD",
            description: "Attention-deficit/hyperactivity disorder (ADHD) is one of the most common mental disorders affecting children which include inattention (not being able to keep focus), hyperactivity (excess movement that is not fitting to the setting) and impulsivity (hasty acts that occur in the moment without thought)."
          },
          {
            id: 16,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LEARNING_DISABILITY_dsbezh.jpg",
            caption: "LEARNING DISABILITY",
            description: "Learning disability is a  disorder that affect the ability to understand or use spoken or written language, do mathematical calculations or  coordinate movements."
          },
          {
            id: 17,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914457/CONDUCT_DISORDER_gqll5t.webp",
            caption: "CONDUCT DISORDER",
            description: "Conduct disorder is a behavioural and emotional problem among children with hostile behaviour, who have difficulty following rules and behaving in a socially acceptable way and are sometime physically violent."
          },
          {
            id: 18,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PEER_PRESSURE_msm0sd.jpg",
            caption: "PEER PRESSURE",
            description: "Peer pressure is the influence applied by a peer group on its individual members to conform to the group's norms, behaviors, and attitudes."
          },
          {
            id: 19,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848705/NOMOPHOBIA_xtk0ll.avif",
            caption: "NOMOPHOBIA",
            description: "Nomophobia is the psychological condition of fearing or being anxious about not having access to  mobile phone."
          },
          {
            id: 20,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914475/EXAMOPHOBIA_odxwc5.jpg",
            caption: "EXAMOPHOBIA",
            description: "Examophobia is an unexplained, excessive fear of exams that leads to increased levels of anxiety in students."
          },
          {
            id: 21,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/sexual_dysfuction_gmam1a.jpg",
            caption: "BODY IMAGE",
            description: "Body image is a combination of negative thoughts and feelings that you have about your body."
          },
          {
            id: 22,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914325/BREAK_UP_ocw4xw.jpg",
            caption: "BREAKUP ISSUES",
            description: "Break-up is a loss or end of a relationship where both the partners experience disappointment and grief during the process."
          },
          {
            id: 23,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848708/TOXIC_RELATIONSHIP_iwvluj.jpg",
            caption: "TOXIC RELATIONSHIP",
            description: "Toxic relationship is when one person starts to have more control than the other, and there is a breakdown in communication."
          },
          {
            id: 24,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CAREER_GUIDANCE_a3td7y.jpg",
            caption: "CAREER GUIDANCE",
            description: "Career Guidance is a type of counselling for students and young people to identify and explore the most suitable careers and occupations to start their career in the right direction."
          },
          {
            id: 25,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914492/GENDER_IDENTITY_zgcfye.png",
            caption: "GENDER IDENTITY",
            description: "Gender Identity describes a person's self-perceived gender, which could be male, female, or otherwise."
          },
          {
            id: 26,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/LGBTQ_uogn4m.jpg",
            caption: "LGBTQ+",
            description: "To understand and accept ones own sexual orientation and gender Identity."
          },
          {
            id: 27,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/PSTD_vizrnr.jpg",
            caption: "POST-TRAUMATIC STRESS DISORDER",
            description: "Post-traumatic stress disorder (PTSD) is caused by an extremely stressful or terrifying event which include flashbacks, nightmares, severe anxiety and uncontrollable thoughts about the event."
          },
          {
            id: 28,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914331/CHEATING_INFEDITLTY_ISSUES_bmmnml.webp",
            caption: "CHEATING AND INFIDELITY ISSUES",
            description: "Cheating and infidelity issues is the act of engaging in emotional or sexual intimacy with someone outside marriage. It is a violation of trust which causes emotional distress and relationship problems between the partners."
          },
          {
            id: 29,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/COUPLE_CONFLICT_omqls2.webp",
            caption: "COUPLE CONFLICT",
            description: "Couple conflicts are disagreements or tensions between spouses that often stems from diverging needs, desires, or incompatible behaviors, that can lead to arguments, hostility, or even result in relationship damage."
          },
          {
            id: 30,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/in_laws_adjustments_problems_nu6piy.jpg",
            caption: "IN-LAWS' ADJUSTMENT PROBLEMS",
            description: "In-laws adjustment is to navigate new dynamics, understanding different values and traditions, and learning to establish positive and healthy relationships with the spouses family members after marriage."
          },
          {
            id: 31,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914837/intimacy_issues_ti3gnz.jpg",
            caption: "INTIMACY ISSUES",
            description: "Intimacy issues like  avoiding emotional closeness, intimacy, feeling uncomfortable with physical touch, difficulty in expressing emotions, and trust issues that can impact the well- being and relationship between the partners."
          },
          {
            id: 32,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/infertility_problems_pfqh3h.jpg",
            caption: "INFERTILITY",
            description: "Infertility is the inability to conceive a child due to problems with ovulation, sperm production, or other factors related to the reproductive systems."
          },
          {
            id: 33,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848707/sexual_dysfuction_gmam1a.jpg",
            caption: "SEXUAL DYSFUNCTION",
            description: "Sexual dysfunction is a combination of both physical and psychological problems affecting both men and women experiencing difficulty during any phase of the sexual response cycle, impacting desire, arousal, orgasm, or pain during sexual activity."
          },
          {
            id: 34,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/interpersonal_problems_jn4qoe.jpg",
            caption: "INTERPERSONAL PROBLEMS",
            description: "Interpersonal problems are issues that arise in relationships like conflicts, misunderstandings, breakdowns in communication or trust that can impact our overall well-being."
          },
          {
            id: 35,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914459/Domestic_violence_z9wzwg.jpg",
            caption: "DOMESTIC VIOLENCE",
            description: "Domestic violence includes stalking, sexual and physical violence, and psychological aggression by the partner."
          },
          {
            id: 36,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/divorce_zngjs8.jpg",
            caption: "DIVORCE",
            description: "Divorce is the legal ending of a marriage, and dissolution of marriage which leads to emotional and psychological challenges like negative emotions and behavioral changes that affect our mental health."
          },
          {
            id: 37,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848706/postpartum_depression_zadtuz.avif",
            caption: "POSTPARTUM DEPRESSION",
            description: "Postpartum depression (PPD) among women occurs after giving birth. It can involve feelings of sadness, anxiety, and exhaustion that make it hard to care for themselves and their child."
          },
          {
            id: 38,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848681/mental_disorders_odladq.jpg",
            caption: "MENTAL DISORDERS",
            description: "Mental disorders are clinically significant disturbance in an individual's cognition, emotional regulation, or behaviour and it is normally associated with distress or impairment in important areas of functioning."
          },
          {
            id: 39,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/insomnia_q93crx.jpg",
            caption: "INSOMNIA"
          },
          {
            id: 40,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278672/work_life_balance_puk4kq.jpg",
            caption: "WORK-LIFE BALANCE",
            description: "Work-life balance is about managing time and energy to maintain a healthy balance and feel fulfilled and content in both work and personal life."
          },
          {
            id: 41,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848710/work_life_stress_iacqts.jpg",
            caption: "WORKPLACE STRESS",
            description: "Work place stress is the negative psychological and physical impact of workplace pressures, environment, or responsibilities that an employee undergoes which can lead to long-term health effects."
          },
          {
            id: 42,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914326/burn_out_aifogk.jpg",
            caption: "BURNOUT",
            description: "Burnout is when an individual experiences a state of complete mental, physical, and emotional exhaustion and finds it difficult to engage in normal activities."
          },
          {
            id: 43,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278739/empty_nest_syndrome_aoz0jj.jpg",
            caption: "EMPTY NEST SYNDROME"
          },
          {
            id: 44,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/coping_with_retirement_q6imr4.webp",
            caption: "COPING WITH RETIREMENT",
            description: "Coping with retirement is about embracing a new identity and finding a fulfilling lifestyle after retirement."
          },
          {
            id: 45,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914458/Dealing_Chronic_and_Terminal_Illness_vydg8c.jpg",
            caption: "DEALING CHRONIC AND TERMINAL ILLNESS",
            description: "Dealing with chronic and terminal illnesses is to understand and manage to cope with the emotional and physical challenges of the present medical condition that are expected to lead to death."
          },
          {
            id: 46,
            url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743914836/grief_and_loss_vyhg5z.jpg",
            caption: "GRIEF AND LOSS",
            description: "Grief and loss counselling is learn the coping mechanisms to deal the range of emotions like sadness, anger, disbelief, and denial."
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
        caption: "COGNITIVE ASSESSMENTS",
        description: "Assessments to gain an understanding of thinking and reasoning skills and to evaluate neuropsychological domains such as memory, language, executive function, abstract reasoning, attention, and visuospatial skills of individuals."
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849078/PERSONALITY_ASSESSMENTS_wyjnku.jpg",
        caption: "PERSONALITY ASSESSMENTS",
        description: "Assessments to evaluate and understand an individual's strengths and weaknesses, predict behaviour in various situations, and to guide personal development or therapeutic interventions"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278813/NEURO_PSYCHOLOGICAL_ASSESSMENTS_enh5sf.png",
        caption: "NEURO PSYCHOLOGICAL ASSESSMENTS",
        description: "Assessments to examine the relationship between brain and behaviour and to help to identify the cognitive strengths and weaknesses of an individual."
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
        caption: "TRAINING FOR CHILDREN",
        description: "We conduct skill-based training programmes for children to focus on developing practical abilities that go beyond academic knowledge, preparing them for real-world challenges and future opportunities."
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849147/TRAINING_FOR_STUDENTS_slwxru.jpg",
        caption: "TRAINING FOR STUDENTS",
        description: "We conduct training programmes for students to enhance skills and knowledge like career-specific skills, soft skills, and specialized training relevant to their field of study in various areas to prepare them for future academic or professional success."
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744278924/TRAINING_FOR_MARRIED_COUPLES_xu58ua.jpg",
        caption: "TRAINING FOR COUPLES",
        description: "We conduct training programmes to help couples to improve effective communication, to recognize and express feelings, to develop an awareness of communication styles and listening habit, understand their indifferences, to build a strong foundation for their future together and to prepare them to face potential challenges."
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849145/TRAINING_FOR_EMPLOYEES_i095sy.jpg",
        caption: "TRAINING FOR EMPLOYEES",
        description: "We conduct training programmes to enhance employee knowledge, skills, and abilities, to develop strategies to improve job performance, to promote professional growth and contribute to organizational goals."
      }
    ]
  },
  3: { // COACHING
    title: "Coaching",
    description: "Personalized mentoring for personal productivity",
    images: [
      {
        id: 1,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/CAREER_COACHING_zlsknw.jpg",
        caption: "CAREER COACHING",
        description: "A personalized process to enhance an individuals' career development which includes to explore the career paths, set objectives, implement strategies, explore career changes and improve their professional skills."
      },
      {
        id: 2,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/PERFORMANCE_COACHING_ig9bnf.png",
        caption: "PERFORMANCE COACHING",
        description: "A collaborative process focussed to enhance an individuals' work performance and achieve specific professional goals which include to identify the strengths and weaknesses, set clear objectives, and create actionable plans to improve skills and behaviours related to their role in the organization"
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849006/BUSINESS_COACHING_ks9hwq.jpg",
        caption: "BUSINESS COACHING",
        description: "Personalised assistance to help an individual or team improve their performance and achieve their goals by developing specific skills, clarifying goals, and providing guidance to overcome challenges."
      },
      {
        id: 4,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/COACHING_FOR_TIME_MANAGERS_fruf30.jpg",
        caption: "COACHING FOR FIRST TIME MANAGERS"
      },
      {
        id: 5,
         url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743849007/LIFE_COACHING_vfjyvo.jpg",
        caption: "LIFE COACHING"
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
        caption: "COUNSELLING AND TRAINING PROGRAMMES",
        description: "We provide counselling and training programmes for prisoners before and after their release."
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744282235/PROVIDE_FINANCIAL_HELP_JOB_ASSISTANCE_AND_TRAINING_PROGRAMMES_TO_HELP_WITH_SOCIAL_AND_PSYCHOLOGICAL_REINTEGRATION_FOR_PRISONERS_AFTER_THEI_dzndbs.jpg",
        caption: "FINANCIAL HELP AND JOB ASSISTANCE",
        description: "We provide financial help, job assistance, and training programmes to help with social and psychological reintegration for prisoners after their release."
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Promote_literacy_among_women_inside_prison_qowpzk.jpg",
        caption: "LITERACY PROMOTION FOR WOMEN",
        description: "We provide literacy promotion among women inside prison and render training on income generation activities and other life skills training programmes."
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744301929/providing_help_for_prisoners_family_members_jxlxdq.jpg",
        caption: "UPSKILLING AND JOB OPPORTUNITIES",
        description: "We provide upskilling for prisoners inside the prison and educate them on job opportunities after their release."
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744301929/PROVIDE_TRAINING_FOR_PRISONERS_ceuosc.jpg",
        caption: "SKILLS TRAINING",
        description: "We provide appropriate training for the prisoners to learn new skills inside the prison."
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744281997/ESTABLISH_CENTRES_FOR_EMPLOYMENT_GENERATION_FOR_PRISONERS_AFTER_THEIR_RELEASE_oo9kyj.jpg",
        caption: "EMPLOYMENT GENERATION CENTRES",
        description: "We provide centres for employment generation for prisoners after their release."
      },
      {
        id: 7,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744301929/provide_legal_assistance_for_prisoners_guibzz.jpg",
        caption: "LEGAL AND FINANCIAL SUPPORT",
        description: "We provide legal and financial support to economically downtrodden prisoners for legal aid and to secure bail."
      },
      {
        id: 8,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848398/Provide_rehabilitation_for_prisoners_who_are_mentally_ill_after_their_release_ixblwz.jpg",
        caption: "MENTAL HEALTH REHABILITATION",
        description: "We provide rehabilitation for prisoners who are mentally ill after their release."
      },
      {
        id: 9,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1743848397/Provide_educational_financial_and_social_support_to_prisoners_children_mrqmfi.jpg",
        caption: "SUPPORT FOR PRISONERS' CHILDREN",
        description: "We provide educational, financial and social support to children of economically downtrodden prisoners."
      },
      {
        id: 10,
        url: "https://res.cloudinary.com/dgidetrcl/image/upload/v1744301929/provide_counselling_and_training_for_prisoners_thgm1w.jpg",
        caption: "FAMILY ASSISTANCE",
        description: "We provide required relief and assistance to family members of economically downtrodden prisoners who are outside the prison."
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




export const reviewsData = [
  {
    id: 1,
    name: "Mrs. Beena and \nMr. Diwakar",
    role: "Couples - Marital Counselling",
    rating: 5,
    review: "We've found the sessions with Dr. Maria to be incredibly valuable. She created a safe and non-judgmental space for us to discuss challenges, and we appreciate her calm yet direct approach to guiding our conversations. After two sessions, myself and my husband felt like we have made significant progress in understanding each other better and learning new communication skills, which has led to a noticeable improvement in our relationship."
  },
  {
    id: 2,
    name: "Nishanth",
    role: "Student – Relationship Counselling",
    rating: 5,
    review: "I'm incredibly grateful for the counselling I received to address my relationship issues. The sessions provided a safe and supportive space to explore my feelings and communication patterns with my partner. Dr. Maria active listening and guidance helped me gain a better understanding of my own needs and how to communicate them more effectively. I felt empowered to navigate future challenges with more confidence and self-awareness."
  },
  {
    id: 3,
    name: "Mathesh",
    role: "Student – Counselling on Addiction",
    rating: 5,
    review: "I appreciate the non-judgmental environment and the way Dr. Maria actively listened without interruption. It made me feel safe to share my struggles. She was able to identify my triggers and suggested helpful coping mechanisms, which has been incredibly helpful in maintaining my sobriety. Her empathy and understanding helped me gain a deeper understanding of my addiction and the underlying issues contributing to it."
  }
];

