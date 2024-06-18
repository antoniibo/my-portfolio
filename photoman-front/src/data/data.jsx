// about me for carousel about section
export const sections = [
    {
        title: "A little bit of creativity",
        paragraphs: [
            "My creative spark appeared in childhood, in picturesque Kyiv, where I was born and grew up. From the very beginning, I felt an unquenchable desire for creativity. Drawing was my first hobby, and although I was not a master at it, it led me to the theater group. It was the theater that opened the door to the wider world of creativity for me. Here I not only developed my artistic abilities, but also learned self-organization and the ability to find a way out of difficult situations.",
            "These early experiences laid the foundation for my later career and became an important part of my life. They taught me to appreciate the creative process and find joy in self-expression. And while my interests and skills have evolved, the core has remained the same: the desire to create, innovate and impact the world around me.",
            "Now as a programmer and designer, I continue to use these lessons to bring my ideas to life and share them with others. Each new project is another step in my creative journey."
        ]
    },
    {
        title: "What is special about my approach?",
        paragraphs: [
            "My approach to projects is characterised by a deep analysis of the market and existing proposals that have similar goals or ideas. Before starting work, I research what already exists and determine how I can improve or differentiate my project. It is important to me to understand the main visitors and the style that will interest them enough to stay on the page and find what they are looking for.",
            "My stylistic decisions are always inspired by nature and the city where I was born and grew up — Kyiv. This city is one of the capitals of modern progress and design, and its spirit is felt in each of my projects. I strive to embody the aesthetics and dynamics of Kyiv in my works, creating a design that reflects modern trends while at the same time preserving its unique character.",
            "Every project for me is an opportunity to add my own mark to the world of technology and creativity, using the knowledge and skills I have acquired. I strive to create not just functional solutions but also ones that tell a story and evoke emotions. This is what makes my approach special and sets my projects apart from others."
        ]
    },
    {
        title: "Why am I learning new things?",
        paragraphs: [
            "Development is a continuous process, and as a trained programmer, I understand the importance of constant learning. My desire to turn ideas into reality pushes me to learn new things so that my decisions are as accurate and effective as possible. My journey started with the basics of HTML, CSS, and JavaScript, but now I'm taking it a step further by mastering React. I am also deeply interested in learning about business, leadership, and how to enjoy your work.",
            "I believe that development in the field of programming goes hand in hand with the development of personal qualities. The ability to manage a business, to be a leader, and to find joy in my work are key skills that help me not only as a professional but also as a person. These lessons allow me to be flexible, open to new opportunities, and ready for the challenges of the modern world.",
            "Each new project, each line of code, and each decision are steps on my path to mastery. And I look forward to further adventures in this exciting world of technology and innovation."
        ]
    },
    {
        title: "My hobbies?",
        paragraphs: [
            "Cinema and theatre are a real feast for my eyes and mind, a source of new ideas and discoveries. I love reading books because they are a treasure trove of incredible stories that make my imagination run wild. I also like hiking, especially in the wild, because nature is an integral source of inspiration for my life and creativity.",
            "Each film and each play is an opportunity to look at the world from a different angle and discover new facets of human nature. Books open before me boundless universes, where every page is a path to new discoveries. And when I walk along the paths that lead into the depths of the forest or to the top of the mountain, I feel myself being filled with the strength and peace that only nature can give.",
            "These hobbies not only enrich my life but also play a key role in my professional activities. They inspire me to create, explore, and implement new ideas. And I am glad that I can share these experiences with you through my projects and creations."
        ]
    }
];

// projects for projects section
import snakeScreen from '../assets/TheSnake.png'
import payrollScreen from '../assets/PayRoll.png'
import goodJScreen from '../assets/juiceLogo.png'
import apiScreen from '../assets/APIimg.png'
import BnW from '../assets/BnW.png'

export const projects = [
    {
        id: 1,
        hot: true,
        date: '05/2024',
        title: "GoodJuice.inc",
        image: goodJScreen,
        description: [
            "GoodJuice.inc’s website serves as a digital showcase for a company that prides itself on offering a diverse range of unique and high-quality beverages. The website is designed to be both visually appealing and functional, providing visitors with an immersive experience in exploring the company’s story and product offerings in two different languages.", 
            "The GoodJuice.inc website is a perfect blend of beauty and functionality, designed to captivate and inform visitors. It stands as a testament to the company’s commitment to quality and customer satisfaction, offering a starting point for consumers to discover and engage with unique businesses and their products."
        ],
        url: "https://archiprojecttest.000webhostapp.com/",
        github: "https://github.com/antoniibo/GoodJuice"
    },
    {
        id: 2,
        hot: true,
        date: '03/2024',
        title: "The Snake Game",
        image: snakeScreen,
        description: [
            "The Snake Game is a modern rendition of the classic Snake game, emphasizing the core gameplay mechanics and logical implementation. Developed using React.js and CSS, this project was a personal challenge to recreate the nostalgic experience of the snake game, focusing on the fluidity and responsiveness of the snake’s movements rather than the visual aesthetics.", 
            "The Snake Game is a testament to the enduring appeal of the classic Snake game. It strips down the gaming experience to its fundamental elements, delivering a pure and engaging challenge that tests both logic and dexterity. While it may not win any beauty contests, its charm lies in its clever design and solid gameplay."
        ],
        url: "temporary unavailable",
        github: "https://github.com/antoniibo/snake-game"
    },
    {
        id: 3,
        hot: true,
        date: '12/2023',
        title: "App with API",
        image: apiScreen,
        description: [
            "App with API is a versatile web and mobile service designed to manage a company’s employee database efficiently. It allows for the secure storage, retrieval, and updating of private employee information. The system’s server-based architecture ensures consistent data across both web and mobile platforms.",
            "App with API stands out as a reliable and secure solution for companies aiming to maintain an up-to-date and accessible employee directory. Its dual-platform approach caters to the dynamic needs of modern businesses, promoting efficiency and connectivity within the workplace."
        ],
        url: "temporary unavailable",
        github: "https://github.com/antoniibo/App-with-API"
    },
    {
        id: 4,
        hot: true,
        date: '11/2023',
        title: "Payroll System",
        image: payrollScreen,
        description: [
            "Payroll system is a comprehensive payroll management system designed for businesses seeking to streamline their payroll processes. Built with C# on the Windows Forms platform, this system offers a user-friendly interface that simplifies the complex task of payroll calculations.",
            "Payroll system is poised to become an indispensable tool for companies looking to modernize their payroll systems. By automating the payroll process, it not only enhances accuracy but also contributes to overall operational efficiency."
        ],
        url: "temporary unavailable",
        github: "https://github.com/antoniibo/PayrollSystem"
    },
    {
        id: 5,
        hot: false,
        date: '07/2024',
        title: "Black and White",
        image: BnW,
        description: [
            "Its the hardest project for me",
            "I am not jocking",
            "Really"
        ],
        url: "currently working on it",
        github: "https://github.com/antoniibo/black-n-white"
    }
];
// certs for certification section
import progCert4 from '../assets/ProgCert4.jpg'
import honours from '../assets/Honours.jpg'
export const certifications = [
    {
        id: 1,
        title:'Google Business Certification',
        dateS:'23/02/2024',
        dateF:'28/05/2024',
        image: progCert4
    },
    {
        id: 2,
        title:'Certificate IV in IT (Programming)',
        dateS:'14/07/2023',
        dateF:'01/12/2023',
        image: progCert4
    },
    {
        id: 3,
        title:'Certificate III in Spoken and Written English',
        dateS:'14/08/2022',
        dateF:'30/06/2023',
        image: progCert4
    },
    {
        id: 4,
        title:'Diploma of completion of Secondary Education with Honours',
        dateS:'01/09/2011',
        dateF:'01/06/2022',
        image: honours
    }
]
// skills for skills section
export const skills = [
    'HTML', 'CSS', 'JS', 'Node.js', 'React', 'React Native', 'Json',
    'Express.js', 'Nodemailer', 'C#', 'Git', 'SQL', 'MongoDB', 'VsCode',
    'Vs', 'GitHub', 'Android Studio', 'Figma', 'Windows', 'Android', 'IOS'
];