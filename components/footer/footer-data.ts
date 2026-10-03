import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export const footerContact = {
  phone: "+91 8871732589",
  email: "ontimemediaproduction@gmail.com",
  address: "Sehore, Madhya Pradesh",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM",
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const footerSocialLinks: FooterSocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/", icon: FaYoutube },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
];
