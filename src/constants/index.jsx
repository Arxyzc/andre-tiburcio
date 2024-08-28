import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";

export const NAVIGATION_LINKS = [
  { label: 'navigation.about', href: "#about" },
  { label: 'navigation.projects', href: "#projects" },
  { label: 'navigation.skills', href: "#skills" },
  { label: 'navigation.experience', href: "#experience" },
  { label: 'navigation.contact', href: "#contact" },
];

export const PROFILE = {
  name: "Andre Tiburcio",
  info: "profile.info",
};

export const ABOUT = {
  text1:
    "about.text1",
  text2:
    "about.text2",
};

export const PROJECTS = [
  {
    title: "projects.project1.title",
    subtitle: "projects.project1.subtitle",
    image: image1,
  },
  {
    title: "projects.project2.title",
    subtitle: "projects.project2.subtitle",
    image: image2,
  },
  {
    title: "projects.project3.title",
    subtitle: "projects.project3.subtitle",
    image: image3,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "skills.skill1.experience",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "skills.skill2.experience",
  },
  {
    icon: <RiJavascriptFill className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
    experience: "skills.skill3.experience",
  },
  {
    icon: <SiPython className="text-4xl lg:text-6xl text-red-600" />,
    name: "Python",
    experience: "skills.skill4.experience",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "skills.skill5.experience",
  },
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-400" />,
    name: "HTML",
    experience: "skills.skill6.experience",
  },
  {
    icon: <SiFlutter className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Flutter",
    experience: "skills.skill7.experience",
  },
];

export const EXPERIENCES = [
  {
    name: "MENTE FRESCA",
    position: "experience.experience1.position",
    description: "experience.experience1.description",
    image: user1,
  },
  {
    name: "MUD",
    position: "experience.experience2.position",
    description: "experience.experience2.description",
    image: user2,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
