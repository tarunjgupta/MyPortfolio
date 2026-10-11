// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import neonLogo from './assets/tech_logo/neon.svg';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import phpLogo from './assets/tech_logo/php.svg';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import RenderLogo from './assets/tech_logo/Render.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import dockerLogo from './assets/tech_logo/docker.svg';
import sonarqubeLogo from './assets/tech_logo/sonarqube.svg';
import fastapiLogo from './assets/tech_logo/fastapi.svg';
import apiLogo from './assets/tech_logo/api.svg';
import razorpayLogo from './assets/tech_logo/razorpay.svg';
import cloudinaryLogo from './assets/tech_logo/cloudinary.png';

// Experience Section Logo's
import lavalogo from './assets/company_logo/lavalogo.png';
import iconmalogo from './assets/company_logo/iconmalogo.png';

// Education Section Logo's
import schLogo from './assets/education_logo/schLogo.jpg';
import abesLogo from './assets/education_logo/abesLogo.png';

// Project Section Logo's
import food_order from './assets/work_logo/food_order.png';
import Pass_gen from './assets/work_logo/Pass_gen.png';
import qr_gen from './assets/work_logo/qr_gen.png';
import weather_app from './assets/work_logo/weather_app.png';
import chat_app from './assets/work_logo/chat_app.png';
import ems from './assets/work_logo/VendiQ.png';
import CueMaths from './assets/work_logo/CueMaths.png';
import mango from './assets/work_logo/mango.png';

export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'C', logo: cLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'RESTful APIs', logo: apiLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Neon', logo: neonLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'SonarQube', logo: sonarqubeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: RenderLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo },
      { name: 'Razorpay', logo: razorpayLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: lavalogo,
    role: "Graduate Engineer Trainee",
    company: "LAVA International Ltd.",
    location: "Noida, India",
    date: "Sept 2026 - Present",
    desc: "Developing backend PHP services for internal platforms (My LAVA & Empower), driving feature development, codebase migration, and long-term maintainability improvements. Resolved 2,000+ SonarQube issues (code smells, vulnerabilities, and bugs), enforcing coding standards and code quality assurance across multiple repositories. Also contributing to Java-based modules.",
    skills: [
      "PHP",
      "Java",
      "SonarQube",
      "Code Quality Assurance",
      "Backend Architecture",
      "RESTful APIs",
      "Codebase Migration",
    ],
    link: "https://drive.google.com/file/d/1G-MxSzoVOvQYDTKLi_6MaXvzdSWIFIHc/view?usp=sharing",
  },
  {
    id: 1,
    img: iconmalogo,
    role: "Associate US IT Recruiter",
    company: "ICONMA Staffing",
    location: "Noida, India",
    date: "July 6, 2024 - Sept 5, 2024 (Full-time)",
    desc: "Managed end-to-end talent acquisition pipelines for US technology clients on a full-time basis from July 6 to September 5. Sourced, screened, and evaluated high-caliber engineering candidates across diverse tech stacks, conducted technical qualification reviews, and coordinated client interview pipelines.",
    skills: [
      "US IT Staffing",
      "Talent Acquisition",
      "Technical Screening",
      "Candidate Sourcing",
      "Client Management",
      "Communication",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: abesLogo,
    school: "ABES ENGINEERING COLLEGE, GHAZIABAD",
    date: "Nov 2022 - Present",
    grade: "7.9 CGPA",
    desc: "B.Tech in Information Technology from ABES Engineering College (AKTU), Ghaziabad. Developing a strong foundation in programming, Data Structures and Algorithms, Web Development, and Backend Technologies. Actively involved in technical departments, software engineering, and community mentoring.",
    degree: "Bachelor in Information Technology - B.TECH",
  },
  {
    id: 1,
    img: schLogo,
    school: "St. Mary's School, Najibabad",
    date: "Apr 2020 - Feb 2021",
    grade: "85.2%",
    desc: "Completed Intermediate education from St. Mary’s School, Najibabad (ICSE Board), laying foundational knowledge in programming, Mathematics, and Computer Science.",
    degree: "ICSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: schLogo,
    school: "St. Mary's School, Najibabad",
    date: "Apr 2018 - March 2019",
    grade: "86.4%",
    desc: "Completed Matriculation from St. Mary’s School, Najibabad (ICSE Board), building a strong academic foundation and passion for computer systems and problem-solving.",
    degree: "ICSE(X) - PCM with Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Mangolyze",
    description:
      "A machine learning application that detects diseases in mango leaves using a Patch-Based Convolutional Neural Network (CNN). Utilizes MobileNetV2 Transfer Learning for multi-class classification across 4 categories achieving 92% accuracy, with patch-based segmentation (128x128 tiles) and Grad-CAM explainability heatmaps. Published research at ICDAM 2026.",
    image: mango,
    tags: [
      "Python", 
      "TensorFlow", 
      "Keras", 
      "Streamlit", 
      "OpenCV", 
      "MobileNetV2", 
      "Grad-CAM"
    ],
    github: "https://github.com/tarunjgupta/MangoDiseaseDetector",
    webapp: "https://mango-disease-app.streamlit.app/",
  },
  {
    id: 1,
    title: "VendiQ",
    description:
      "A full-stack Multi-Role Vendor Management System architected with MVC design principles and 3 role-based dashboards (Admin, Vendor, User). Engineered end-to-end e-commerce workflows, multi-vendor cart and checkout, real-time order tracking, and Chart.js analytics.",
    image: ems,
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Session", "Chart.js", "Bcrypt"],
    github: "https://github.com/tarunjgupta/EMS",
    webapp: "https://ems-fawn.vercel.app/",
  },
  {
    id: 2,
    title: "CueMaths",
    description:
      "CueMaths is a full-stack, production-ready educational application designed to help students solve complex math and logic problems. It leverages generative AI to provide step-by-step problem-solving guidance, analyze student mistakes to identify conceptual gaps, and dynamically generate adaptive follow-up questions tailored to the user's skill level.",
    image: CueMaths,
    tags: ["React", "Vite", "Tailwind CSS", "Recharts", "Node.js", "Express.js", "PostgreSQL", "JWT", "Python", "FastAPI", "Gemini Pro"],
    github: "https://github.com/tarunjgupta/CueMaths",
    webapp: "https://cue-maths-frontend.vercel.app/login",
  },
  {
    id: 3,
    title: "Food Ordering Website",
    description:
      "Full-stack Food Ordering Web Application using the MERN stack, featuring responsive UI, RESTful APIs, and Razorpay online payments with order verification.",
    image: food_order,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/tarunjgupta/FoodDelivery",
    webapp: "https://fooddelivery-frontend-7fm6.onrender.com/",
  },
  {
    id: 4,
    title: "Voxa Chat - Secure Real-Time Messaging App",
    description:
      "MERN stack real-time chat application with Socket.IO, JWT authentication, end-to-end encrypted messaging, and Cloudinary image sharing.",
    image: chat_app,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
    github: "https://github.com/tarunjgupta/Voxa_App",
    webapp: "https://voxa-frontend.onrender.com/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Dynamic weather application built using HTML, CSS, and JavaScript. Fetches real-time weather metrics from public APIs with responsive design.",
    image: weather_app,
    tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
    github: "https://github.com/tarunjgupta/Weather_App",
    webapp: "https://weather-app-uarf.onrender.com",
  },
  {
    id: 6,
    title: "QRcode Generator",
    description:
      "Responsive QR Code Generator built using HTML, CSS, and JavaScript. Generates and renders scannable QR codes instantly for URLs and text.",
    image: qr_gen,
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/tarunjgupta/QR_Generator",
    webapp: "https://qr-generator-a3s6.onrender.com",
  },
  {
    id: 7,
    title: "Password Generator",
    description:
      "Interactive high-entropy password generator built using HTML, CSS, and JavaScript with clipboard integration and customizable parameters.",
    image: Pass_gen,
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/tarunjgupta/Password_Generator",
    webapp: "https://password-generator-7yus.onrender.com",
  },
];