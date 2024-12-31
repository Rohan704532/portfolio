import Gemini from "../assets/projects/Gemini.png";
import tomato from "../assets/projects/tomato.png";
import calendar from "../assets/projects/calendar.png";
import uber_booking from "../assets/projects/uber_booking.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 4 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, Docker, AWS and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Associate Software Engineer",
    company: "Hexaware technologies",
    description: `Responsible for developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "Contextine Software pvt ltd.",
    description: `A highly skilled Node.js developer specializing in building efficient ETL (Extract, Transform, Load) pipelines to process and manage customer data. I ensure seamless integration of backend services with frontend systems by deploying production-ready code, enabling data-driven insights and enhanced user experiences.`,
    technologies: ["Node.js", "AWS", "Redis", "Docker"],
  }
];

export const PROJECTS = [
  {
    title: "Gemini clone",
    image: Gemini,
    description:
      "Gemini uses large language models (LLMs) that learn by reading trillions of words. They can pick up on patterns that make up language and reply to questions using common language patterns. They also learn from your prompts, responses, and feedback.",
    technologies: ["React", "Node.js", "MongoDB","Tailwind"],
    sourceCode: "https://github.com/Rohan704532/gemini-clone",
    url: "https://gemini-clone-frontend-1wno.onrender.com/"
  },
  {
    title: "Effortless Meeting Scheduling with Calendar Sync",
    image: calendar,
    description:
      "A user-friendly meeting scheduler that seamlessly syncs with your calendar to help you organize and manage appointments effortlessly. Simplify scheduling and avoid conflicts with real-time calendar integration",
    technologies: ["Next.js"],
    sourceCode:"https://github.com/Rohan704532/calmarshal",
    url:"https://calmarshal.vercel.app/dashboard"
  },
  {
    title: "Uber-Taxi booking app",
    image: uber_booking,
    description:
      "Book rides instantly, track drivers in real time, and enjoy a user-friendly interface for both riders and drivers. Designed with cutting-edge technology to deliver convenience and reliability.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    sourceCode:"https://github.com/Rohan704532/Uber-clone",
    url:"https://uber-clone-frontend.onrender.com/"
  },
  {
    title: "Food Delivery App with payment integrated system and admin page",
    image: tomato,
    description:
      "Streamline food delivery with our app featuring seamless payment integration and an intuitive admin panel. Manage orders, payments, and user interactions effortlessly for a complete dining experience.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    sourceCode:"https://github.com/Rohan704532/food-delivery",
    url:"https://food-delivery-frontend-g2od.onrender.com/",
    adminPage:"https://food-delivery-admin-go5m.onrender.com/"
  },
];

export const CONTACT = {
  address: "Kalyan East, Mumbai, Maharashtra, India",
  phoneNo: "+91-7045328059",
  email: "rohan704532@gmail.com",
};
