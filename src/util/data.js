export const faqData = [
  {
    visible:
      'What medication does the Reformr program use? Is it approved in New Zealand?',
    hidden: [
      'The Reformr Metabolic Reset Program includes a monthly supply of liraglutide (Saxenda). Saxenda is the only GLP-1 medication approved for the treatment of obesity in New Zealand.',
      'You can read more about Saxenda including how it works, how effective it is, and its side effects here.',
    ],
  },
  {
    visible: 'How is the medication taken?',
    hidden: [
      'The medical treatment involves daily administration via a pen with a tiny needle. The injection is easy, and most patients find it painless and straightforward.',
      'If deemed eligible, your doctor & pharmacist will provide more information before you administer your first dose.',
    ],
  },
  {
    visible: 'How much weight can I lose?',
    hidden: [
      'We encourage you to set a goal of losing 15% of your bodyweight in your first 12 months with Reformr.  By combining weight loss medication, health coaching, and sustainable lifestyle changes, you’ll have a good chance at reaching this goal.',
    ],
  },
  {
    visible: 'Are there any side effects?',
    hidden: [
      'As will all medications, the treatment offered by Reformr has the potential for side effects. The most common side effect is nausea, affecting around 40% of users. Fortunately this is usually mild and short-lived. Our program involves a slow dose escalation phase and we provide anti-nausea medication for free in case you need it. There are also other potential side effects, which you can read about here and discuss with our doctors.',
      'Our medical support team including doctors and pharmacists will check in on you and you can always reach out to your doctor if you are experiencing side effects.',
    ],
  },
  {
    visible: 'How long will I need to be on treatment for?',
    hidden: [
      'This depends on your weight loss goals, your body’s unique response to the medication.',
    ],
  },
  {
    visible: 'How much does the Reformr program cost?',
    hidden: [
      'Reformr’s Metabolic Reset Program includes prescription medication delivered to your door, unlimited consultations with your doctor, 1:1 health tracking, and a Welcome Kit - all for just $20 a day.',
      'Pharmacies charge almost this much for the medication alone, making Reformr the best value for money option on the market.',
    ],
  },
  {
    visible: 'How do the quiz and doctor consult work?',
    hidden: [
      'The Reformr quiz aims to get a hollistic overview of your weight loss journey and goals, lifestyle, diet, and medical history.',
      'This information will be used by your doctor for your telehealth consultation (your choice of a text-only live chat or a video conference) to gain a deeper understanding of your unique circumstances in order to recommend the best personalised treatments possible.',
    ],
  },
];

export const careersData = [
  {
    visible: 'Back-end Engineer',
    hidden: [
      "As a senior back-end engineer at Reformr, you'll be responsible for designing, developing, and maintaining our cloud-based infrastructure, services, and APIs.",
      "You'll work closely with our front-end developers, product managers, and data scientists to deliver a high-quality user experience and robust data-driven solutions.",
      "You'll have deep expertise in modern back-end technologies, such as Node.js, Python, MongoDB, and AWS, and experience in building scalable, secure, and fault-tolerant systems.",
    ],
  },
  {
    visible: 'Senior Product Manager',
    hidden: [
      "As a senior product manager at Reformr, you'll be responsible for driving the strategy and execution of our digital health products. You'll collaborate with cross-functional teams, including engineering, design, data, and clinical, to define and prioritise product features, create user stories and product roadmaps, and conduct user research and testing.",
      "You'll have experience in the healthcare industry, knowledge of regulatory compliance, and ability to communicate and influence stakeholders at all levels.",
    ],
  },
  {
    visible: 'Growth Marketer',
    hidden: [
      "As a growth marketer at Reformr, you'll be responsible for driving user acquisition, retention, and engagement across multiple channels, including social media, email, content marketing, and paid advertising. You'll develop and execute data-driven growth experiments, analyse metrics, and optimise campaigns to achieve business goals.",
      "You'll have a strong understanding of digital marketing tactics, customer psychology, and analytics tools, and ability to work independently and collaboratively.",
    ],
  },
  {
    visible: 'Partnering Doctors',
    hidden: [
      "As a partnering doctor at Reformr, you'll be responsible for providing clinical expertise, guidance, telehealth services to our members and feedback on our digital health products and services. You'll collaborate with our product and engineering teams to design and validate clinical workflows, algorithms, and decision support tools.",
      "You’ll join a growing team of partner doctors and allied health. You'll have a passion for innovation, patient-centric care, continuous learning, and hold an active FRACGP or FRACP (Endocrinology) certification. You'll work on a part-time or full-time basis, depending on your availability and interest.",
    ],
  },
];

/* These are labels for medical quiz questions based on the ChooseMany component (i.e. checkboxes). */
/* Each label maps to a corresponding boolean value. */
export const chooseManyLabels = {
  wm01_what_motivates_you: [
    'Physical appearance',
    'Physical health',
    'Mental health',
    'Feeling better day-to-day',
    'Family / friends',
    'Work',
    'Other',
  ],
  wm06_weight_loss_techniques: [
    'Diet',
    'Exercise',
    'Fasting',
    'Meal replacement shakes',
    'Prescription medication',
    'Surgery',
    'None of the above',
  ],
  wm12_health_vices: [
    'Frequently under stress',
    'Feeling hopeless about my weight',
    'Get less sleep than I need',
    'Drink more than 1 alcoholic beverage per day',
    'Use recreational drugs',
    'Smoke tobacco',
    'Vape',
    'None of the above',
  ],
  wm13_thyroid_activity: [
    'Hyperthyroidism (overactive thyroid)',
    'Hypothyroidism (underactive thyroid)',
    'Neither of these',
  ],
  wm14_thyroid_tumor: ['I have', 'Someone in my family has', 'Neither option'],
  wm15_health_ailments: [
    'Fatty liver',
    'Abnormal liver function',
    'Pancreatitis',
    'Other issues with pancreas',
    'Gallstones',
    'Inflamed gallbladder (cholecystitis)',
    'Kidney disease / reduced kidney function',
    'None of these',
  ],
  wm16_sugar_ailments: [
    'Diabetes (Type 2)',
    'Diabetes (Type 1)',
    'Diabetes (Other)',
    'Pre-diabetes',
    'High blood sugar (Hyperglycemia)',
    'Low blood sugar (Hypoglycemia)',
    'None of these issues',
  ],
  wm17_other_ailments: [
    'High blood pressure (Hypertension)',
    'High cholesterol or triglycerides',
    'Obstructive sleep apnoea',
    'Osteoarthritis or weight-related joint pain',
    'Heart disease (heart failure, heart attack, or other serious heart problem)',
    'Palpatations or abnormal heart rhythm',
    'Epilepsy / seizures',
    'GORD / heartburn / acid reflux',
    'Cancer',
    'None of these',
  ],
  wm18_mental_health: [
    'Depression',
    'Anxiety',
    'Bipolar disorder',
    'PTSD',
    'Schizophrenia or psychosis',
    'Self-harm',
    'Suicidal thoughts',
    'Previous suicide attempts',
    'None of the above',
  ],
  wm20_medications: [
    'Anti-inflammatories',
    'Heart medications',
    'Diuretics',
    'Diabetes medications',
    'Insulin',
    'Anti-convulsants',
    'Lithium',
    'Anti-depressants',
    'Anxiety medication',
    'Other medications',
    'Other supplements',
    'None of the above',
  ],
  wm22_past_procedures: [
    'Lap band',
    'Roux-en-Y gastric bypass',
    'Sleeve gastrectomy',
    'Gastric balloon',
    'Other',
    'None',
  ],
};

/* These are labels for the medical quiz question where there are several range sliders. */
/* Each label maps to a corresponding integer between 1 and 5. */
export const manyRangeLabels = {
  wm03_how_weight_affects: [
    'Physical health',
    'Mental health',
    'Socialising',
    'Hobbies',
    'Employment',
    'Family activities',
    'Exercise',
  ],
};

/* Blog tile and program images use public URL paths for Turbopack compatibility. */
const blogTileImages = {
  saxendaPenOpen: '/images/blog/tiles/saxenda-pen-open.jpg',
  saxendaPenClosed: '/images/blog/tiles/saxenda-pen-closed.jpg',
  ozempicPenOpen: '/images/blog/tiles/ozempic-pen-open.jpg',
  saxendaNeedleCoin: '/images/blog/tiles/saxenda-needle-with-coin.jpg',
  vegBaskets: '/images/blog/tiles/baskets-of-veg.jpg',
  womanSleeping: '/images/blog/tiles/woman-sleeping.jpg',
  cyclists: '/images/blog/tiles/smiling-cyclists.jpg',
  nutsAndDates: '/images/blog/tiles/nuts-and-dates.jpg',
  sunflowers: '/images/blog/tiles/woman-with-sunflowers.jpg',
  pharmacist: '/images/blog/tiles/pharmacist-with-packet.jpg',
  measuringWaist: '/images/blog/tiles/woman-measuring-waist.jpg',
  tapeAndFork: '/images/blog/tiles/tape-measure-with-fork.jpg',
  spoonWithSugar: '/images/blog/tiles/spoon-with-sugar.jpg',
};

/* The article details as appear on the blog page. */
export const blogTileData = [
  {
    title: 'Saxenda 101',
    image: blogTileImages.saxendaPenOpen,
    date: 'April 6, 2023',
    slug: 'saxenda-101',
  },
  {
    title: 'Tips for injecting your first dose of Saxenda',
    image: blogTileImages.saxendaPenClosed,
    date: 'March 25, 2023',
    slug: 'tips-for-injecting',
  },
  {
    title: 'Ozempic 101',
    image: blogTileImages.ozempicPenOpen,
    date: 'March 21, 2023',
    slug: 'ozempic-101',
  },
  {
    title: 'Breaking down the fear factor of Saxenda injections',
    image: blogTileImages.saxendaNeedleCoin,
    date: 'March 20, 2023',
    slug: 'fear-of-injections',
  },
  {
    title:
      '5 Strategies to break free from emotional eating and establish a healthier relationship with food ',
    image: blogTileImages.vegBaskets,
    date: 'March 19, 2023',
    slug: 'emotional-eating',
  },
  {
    title: 'Is sleep the missing link in your weight loss journey?',
    image: blogTileImages.womanSleeping,
    date: 'March 18, 2023',
    slug: 'sleeping-enough',
  },
  {
    title: '10 ways losing weight can change your life',
    image: blogTileImages.cyclists,
    date: 'March 17, 2023',
    slug: 'weight-loss-benefits',
  },
  {
    title: 'Everything you need to know about intermittent fasting',
    image: blogTileImages.nutsAndDates,
    date: 'March 16, 2023',
    slug: 'intermittent-fasting',
  },
  {
    title: 'Unlock the power of incidental exercise',
    image: blogTileImages.sunflowers,
    date: 'March 13, 2023',
    slug: 'incidental-exercise',
  },
  {
    title: 'Emerging weight loss medications',
    image: blogTileImages.pharmacist,
    date: 'February 27, 2023',
    slug: 'emerging-medications',
  },
  {
    title: '8 reasons you’re not losing weight',
    image: blogTileImages.measuringWaist,
    date: 'March 12, 2019',
    slug: 'not-losing-weight',
  },
  {
    title: "Calorie restriction: 5 reasons why you're not losing weight",
    image: blogTileImages.tapeAndFork,
    date: 'March 10, 2019',
    slug: 'calorie-restriction',
  },
  {
    title: 'Can sugar-free drinks help you lose weight?',
    image: blogTileImages.spoonWithSugar,
    date: 'March 8, 2019',
    slug: 'sugar-free-drinks',
  },
];

const programOutlineImages = {
  initialScreening: '/images/initial-screening.jpeg',
  paymentConfirmation: '/images/payment-confirmation.jpeg',
  medicalEvaluation: '/images/medical-evaluation.jpeg',
  consultation: '/images/consultation.jpeg',
  seamlessDelivery: '/images/seamless-delivery.jpeg',
};

/* The program outline at the start of the signup flow. */
export const programOutlineData = [
  {
    title: 'Initial Screening',
    image: programOutlineImages.initialScreening,
    description:
      'Take a short quiz to see if you are likely to be eligible for our program.',
  },
  {
    title: 'Payment Confirmation',
    image: programOutlineImages.paymentConfirmation,
    description:
      'Proceed to pay for your treatment. If later deemed unsuitable, a full refund will be issued. Identify is also verified through our secure online portal.',
  },
  {
    title: 'Medical Evaluation',
    image: programOutlineImages.medicalEvaluation,
    description:
      'Respond to a set of medical questions, enabling your practitioner to prepare for your upcoming consultation.',
  },
  {
    title: 'Consultation with your Practitioner',
    image: programOutlineImages.consultation,
    description:
      'Phone call where your practitioner will validate your details and, if appropriate, discuss your treatment plan.',
  },
  {
    title: 'Seamless Delivery',
    image: programOutlineImages.seamlessDelivery,
    description:
      'Enjoy complimentary shipping and discreet delivery of all necessary items to kickstart your journey.',
  },
];
