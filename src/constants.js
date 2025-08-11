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
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import RenderLogo from './assets/tech_logo/Render.png'
import emailJsLogo from './assets/tech_logo/emailJs.png'
import cloudinaryLogo from './assets/tech_logo/cloudinary.png'

// Experience Section Logo's
import codeaplphalogo from './assets/company_logo/codealphalogo.png';


// Education Section Logo's
import schLogo from './assets/education_logo/schLogo.jpg';
import abesLogo from './assets/education_logo/abesLogo.png';

// Project Section Logo's
import food_order from './assets/work_logo/food_order.png';
import Pass_gen from './assets/work_logo/Pass_gen.png';
import qr_gen from './assets/work_logo/qr_gen.png';
import weather_app from './assets/work_logo/weather_app.png';
import chat_app from './assets/work_logo/chat_app.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'EmailJs', logo: emailJsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: RenderLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo},
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codeaplphalogo,
      role: "Frontend Developer",
      company: "CodeAlpha",
      date: "July 2025 - August 2025",
      desc: "Focused on building dynamic and responsive web applications using the Tailwind CSS, Material UI and React, with a strong emphasis on frontend development. Designed and developed intuitive user interfaces using React.js, collaborated with UI/UX teams, and ensured seamless user experiences through performance optimization and responsive design in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: abesLogo,
      school: "ABES ENGINEERING COLLEGE, GHAZIABAD",
      date: "Nov 2022 - Present",
      grade: "7.5 CGPA",
      desc: "I have completed my B.Tech in Information Technology from ABES Engineering College, Ghaziabad. During my time at ABES, I developed a strong foundation in programming, Data Structures and Algorithms, Web Development, and Backend Technologies. I studied key subjects such as DSA, DBMS, Operating Systems, and Software Engineering. I was actively involved in technical clubs and served as the Head of the Technical Department, where I organized events and mentored juniors. These experiences significantly contributed to my technical growth and leadership skills.",
      degree: "Bachelor in Information Technology - B.TECH",
    },
    {
      id: 1,
      img: schLogo,
      school: "St. Mary's School, Najibabad",
      date: "Apr 2020 - Feb 2021",
      grade: "85.2%",
      desc: "I completed my Intermediate education from St. Mary’s School, Najibabad, where I developed a strong interest in programming. It was during this time that I began exploring the basics of Java and fundamental programming concepts. I also laid the groundwork in subjects like Mathematics and Computer Science, which fueled my passion for technology and set the stage for my journey into software development.",
      degree: "ICSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: schLogo,
      school: "St. Mary's School, Najibabad",
      date: "Apr 2018 - March 2019",
      grade: "86.4%",
      desc: "I completed my 10th standard from St. Mary’s School, Najibabad, where I built a strong academic foundation and developed an early interest in computers and technology. This phase played a key role in shaping my curiosity and problem-solving mindset.",
      degree: "ICSE(X) - PCM with Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Food Ordering Website",
      description:
        "I developed a full-stack Food Ordering Web Application using the MERN stack, featuring a responsive and user-friendly frontend built with React.js and Tailwind CSS. The application allows users to browse food items, place orders, and view their order history. The backend, built with Express.js and MongoDB, manages food data, orders, and user interactions through secure and efficient RESTful APIs. I also integrated Razorpay to enable secure online payments, ensuring orders are only saved upon successful transaction verification. The project is fully deployed with uptime monitoring in place to keep the backend consistently available, providing a smooth and reliable user experience.",
      image: food_order,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Express", "MongoDb", "RazorPay", "Render", "UpTimeRobot"],
      github: "https://github.com/tarunjgupta/FoodDelivery",
      webapp: "https://fooddelivery-frontend-7fm6.onrender.com/",
    },
    {
      id: 1,
      title: "Voxa Chat - Secure Real-Time Messaging App",
      description:
        "Voxa Chat is a MERN stack-based, single-room chat application with real-time text and image messaging powered by Socket.IO. It features secure user authentication with account creation and login, along with end-to-end encryption to ensure private communication. Designed for personal or small-team use, Voxa Chat delivers a fast, responsive, and seamless chatting experience across devices.",
      image: chat_app,
      tags: ["HTML", "TailwindCSS", "JavaScript", "React JS", "Express", "MongoDb", "Socket.IO", "bcrypt", "JWT", "Cloudinary","Render"],
      github: "https://github.com/tarunjgupta/FoodDelivery",
      webapp: "https://fooddelivery-frontend-7fm6.onrender.com/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A simple yet functional weather application built using HTML, CSS, and JavaScript. It fetches real-time weather data from a public API based on user-input city names and dynamically displays temperature, humidity, wind speed, and weather conditions. The app features a clean, responsive UI and demonstrates API integration, asynchronous JavaScript, and DOM manipulation. It serves as a lightweight utility tool and showcases strong fundamentals of frontend development without any frameworks.",
      image: weather_app,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/tarunjgupta/Weather_App",
      webapp: "https://weather-app-uarf.onrender.com",
    },
      {
      id: 3,
      title: "QRcode Generator",
      description: 
        "A simple and responsive QR Code Generator built using HTML, CSS, and JavaScript. It allows users to generate QR codes instantly by entering any text, URL, or custom string. The application dynamically creates a QR code using the input provided and displays it for scanning. Ideal for quickly sharing links or information in a scannable format.",
      image: qr_gen,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/tarunjgupta/QR_Generator",
      webapp: "https://qr-generator-a3s6.onrender.com",
    },
    {
      id: 4,
      title: "Password Generator",
      description:
        "A secure and interactive password generator built using HTML, CSS, and JavaScript. It allows users to instantly generate strong 12-character passwords combining uppercase, lowercase, numbers, and special characters. The app includes a user-friendly \"Copy to Clipboard \" feature for easy password reuse and emphasizes responsive design and seamless user experience. This project highlights core JavaScript skills like DOM manipulation, event handling, and randomization logic to ensure high-entropy password creation.",
      image: Pass_gen,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/tarunjgupta/Password_Generator",
      webapp: "https://password-generator-7yus.onrender.com",
    },


  ];  