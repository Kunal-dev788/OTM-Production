export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
};

export const testimonialItems: TestimonialItem[] = [
  {
    id: "rahul-mehta",
    quote:
      "On Time Media handled our social media and campaign creatives brilliantly. Real results and great support.",
    name: "Rahul Mehta",
    role: "Brand Manager",
    avatar: "https://i.pravatar.cc/160?img=12",
    avatarAlt: "Rahul Mehta profile photo",
  },
  {
    id: "sneha-kapoor",
    quote:
      "Professional, creative and reliable. They understood our campaign goals and delivered beyond expectations.",
    name: "Sneha Kapoor",
    role: "Marketing Head",
    avatar: "https://i.pravatar.cc/160?img=47",
    avatarAlt: "Sneha Kapoor profile photo",
  },
  {
    id: "arjun-patel",
    quote:
      "A fantastic team for our political outreach and digital campaigns. Strong strategy and excellent execution.",
    name: "Arjun Patel",
    role: "Business Consultant",
    avatar: "https://i.pravatar.cc/160?img=32",
    avatarAlt: "Arjun Patel profile photo",
  },
];
