export interface Coach {
  id: string;
  name: string;
  credentials: string;
  photo: string;
  location: {
    city: string;
    state: string;
  };
  virtual: boolean;
  inPerson: boolean;
  specialties: string[];
  priceRange: "$$" | "$$$" | "$$$$";
  bio: string;
  websiteUrl: string;
  yearsExperience: number;
}

export const coaches: Coach[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    credentials: "NBC-HWC, RDN",
    photo: "",
    location: { city: "Portland", state: "Oregon" },
    virtual: true,
    inPerson: true,
    specialties: ["Nutrition", "Weight Management", "Chronic Disease"],
    priceRange: "$$$",
    bio: "Registered dietitian and certified health coach specializing in evidence-based nutrition for adults over 50. Focuses on sustainable dietary changes grounded in peer-reviewed research.",
    websiteUrl: "https://example.com",
    yearsExperience: 8,
  },
  {
    id: "marcus-thompson",
    name: "Marcus Thompson",
    credentials: "NBC-HWC, CSCS",
    photo: "",
    location: { city: "Seattle", state: "Washington" },
    virtual: true,
    inPerson: true,
    specialties: ["Exercise", "Strength Training", "Fall Prevention"],
    priceRange: "$$$",
    bio: "Certified strength and conditioning specialist who combines exercise science with health coaching. Works primarily with older adults on building functional strength and reducing fall risk.",
    websiteUrl: "https://example.com",
    yearsExperience: 12,
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    credentials: "NBC-HWC, MA",
    photo: "",
    location: { city: "Boise", state: "Idaho" },
    virtual: true,
    inPerson: false,
    specialties: ["Behavior Change", "Stress Management", "Healthy Aging"],
    priceRange: "$$",
    bio: "Health coach with a background in behavioral psychology. Uses motivational interviewing and evidence-based behavior change techniques to help clients build lasting habits.",
    websiteUrl: "https://example.com",
    yearsExperience: 5,
  },
  {
    id: "david-park",
    name: "David Park",
    credentials: "NBC-HWC, MPH",
    photo: "",
    location: { city: "Vancouver", state: "Washington" },
    virtual: true,
    inPerson: true,
    specialties: ["Chronic Disease", "Diabetes Prevention", "Nutrition"],
    priceRange: "$$$$",
    bio: "Public health professional turned health coach with deep expertise in chronic disease prevention. Partners with healthcare providers to support patients managing diabetes, hypertension, and metabolic syndrome.",
    websiteUrl: "https://example.com",
    yearsExperience: 15,
  },
  {
    id: "amira-washington",
    name: "Amira Washington",
    credentials: "NBC-HWC",
    photo: "",
    location: { city: "Spokane", state: "Washington" },
    virtual: true,
    inPerson: false,
    specialties: ["Exercise", "Healthy Aging", "Motivation"],
    priceRange: "$$",
    bio: "Former physical therapy assistant who transitioned to health coaching to help older adults stay active and independent. Believes movement should be enjoyable, not punishing.",
    websiteUrl: "https://example.com",
    yearsExperience: 3,
  },
  {
    id: "james-mitchell",
    name: "James Mitchell",
    credentials: "NBC-HWC, MS",
    photo: "",
    location: { city: "Eugene", state: "Oregon" },
    virtual: false,
    inPerson: true,
    specialties: [
      "Nutrition",
      "Supplement Guidance",
      "Sarcopenia Prevention",
    ],
    priceRange: "$$$",
    bio: "Exercise physiologist and health coach focused on muscle health and nutritional strategies for preventing age-related muscle loss. Research-informed approach grounded in the latest evidence.",
    websiteUrl: "https://example.com",
    yearsExperience: 10,
  },
];
