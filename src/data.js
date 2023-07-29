//  icons
import {
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/furniture.jpg";
import Project2 from "./assets/img/projects/edulearn.jpg";
import Project3 from "./assets/img/projects/weeconsbulder.jpg";
import Project4 from "./assets/img/projects/MERNQuize.png";
import Project5 from "./assets/img/projects/Edu1.jpg";
import Project6 from "./assets/img/projects/health11.jpg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/tailwind.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/md-sadid/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/MDSadid-git",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "W Furniture",
    liveLink: "https://w-furniture.netlify.app/",
    git: "https://github.com/MDSadid-git/w-furniture",
    category: "Front-End",
  },
  {
    id: "2",
    image: Project2,
    name: "EDU Learn",
    liveLink: "https://edu-learn-demo.netlify.app/",
    git: "https://github.com/MDSadid-git/Edu-Learn",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Wecons Bulder",
    liveLink: "https://weecons-bulder.netlify.app/",
    git: "https://github.com/MDSadid-git/Weecons-bulder",
    category: "Front-End",
  },
  {
    id: "5",
    image: Project5,
    name: "EduManage",
    liveLink: "https://edumanage-83f56.web.app/",
    git: "https://github.com/EduManage/edumanage-client",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "Health Serves",
    liveLink: "https://clever-dusk-b35c1e.netlify.app/",
    git: "https://github.com/MDSadid-git/health-serves-client",
    category: "web development",
  },

  {
    id: "4",
    image: Project4,
    name: "MERN Quize",
    liveLink: "https://velvety-bienenstitch-0bfbab.netlify.app/",
    git: "https://github.com/MDSadid-git/MERN-Quiz-Assigment9",
    category: "branding",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Front-End",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "Full Stack Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at slhsadid@gamil.com & Phone number:01558085609",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bandar, Narayanganj",
    description: "Serving clients worldwide",
  },
];
