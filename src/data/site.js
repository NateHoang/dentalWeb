export const SITE = {
  name: "Nathan Hoang",
  tagline: "California Northstate University",
  school: "California Northstate University - College of Dental Medicine",
  city: "Sacramento, CA",
  address: "2200 X St, Sacramento, CA 95818",
  phoneLabel: "Sacramento",
  phoneHref: "tel:+1916-876-6100",
  phoneDisplay: "(916) 686-8914",
  email: "nathanHoangDental@gmail.com",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/nate.hoang/",
    linkedin: "https://www.linkedin.com/in/nathan-hoang-6395731b8/",
  },
};

export const ABOUT_SECTIONS = [
  { label: "Meet Nathan Hoang", id: "meet-nathan" },
  { label: "Meet Faculty", id: "meet-faculty" },
  { label: "Our Technology", id: "our-technology" },
  { label: "Patient Experience", id: "patient-experience" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Meet Nathan Hoang", to: "/about#meet-nathan" },
      { label: "Meet Faculty", to: "/about#faculty" },
      { label: "Our Technology", to: "/about#technology" },
      { label: "Patient Experience", to: "/about#experience" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Cleaning and Prevention",
        to: "/services/cleaning-and-prevention",
      },
      {
        label: "Crowns and Bridges",
        to: "/services/crowns-bridges",
      },
      { label: "Dental Fillings", to: "/services/dental-fillings" },
      { label: "Dental Implants", to: "/services/dental-implants" },
      { label: "Tooth Extractions", to: "/services/tooth-extractions" },
      { label: "Teeth Whitening", to: "/services/teeth-whitening" },
      { label: "Invisible Alignment", to: "/services/invisible-alignment" },
      { label: "Root Canal Therapy", to: "/services/root-canal-therapy" },
      { label: "Exams and X-rays", to: "/services/exams-and-xrays" },
    ],
  },
  { label: "Contact", to: "/#request-appointment" },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Patient Experiences", href: "#reviews" },
  { label: "Contact", href: "#request-appointment" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Website Terms", href: "#" },
];

export const HERO_ASSURANCES = [
  { icon: "shield", label: "Care under faculty supervision" },
  { icon: "clock", label: "Unhurried appointments" },
  { icon: "mail", label: "Clear next steps, always" },
];

export const SERVICES = [
  {
    icon: "shield",
    title: "Preventive Care",
    text: "Cleanings, exams and guidance to keep small problems from becoming big ones.",
  },
  {
    icon: "tooth",
    title: "Restorative Care",
    text: "Fillings and repairs to restore comfort and function to a damaged tooth.",
  },
  {
    icon: "sparkle",
    title: "Discuss Your Concerns",
    text: "Sensitivity, discomfort or a question you have been putting off — start here.",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Send a request",
    text: "Tell me how to reach you and what is bothering you.",
  },
  {
    n: "2",
    title: "Discuss your needs",
    text: "We talk through your concern and whether the clinic is a good fit.",
  },
  {
    n: "3",
    title: "Plan your visit",
    text: "The clinic confirms availability and next steps with you.",
  },
];

// PLACEHOLDER LAYOUT CONTENT ONLY.
// Replace with real, patient-approved testimonials before publishing.
export const REVIEWS = [
  {
    label: "Sample review",
    text: "A welcoming space to share your concerns without feeling rushed.",
  },
  {
    label: "Sample review",
    text: "Clear explanations at every step, so nothing felt like a surprise.",
  },
  {
    label: "Sample review",
    text: "Care centered around comfort, with plenty of room for questions.",
  },
  {
    label: "Sample review",
    text: "Straightforward answers and a plan that made sense to me.",
  },
];
