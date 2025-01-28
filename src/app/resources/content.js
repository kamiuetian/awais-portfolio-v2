import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhammad",
  lastName: "Kamran",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar2.jpeg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, AI, and share insights on
      building scalable applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kamiuetian",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammadkamran09/",
  },
  {
    name: "Portfolio",
    icon: "globe",
    link: "https://muhammadkamran.dev/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:m.kamran@cuiatk.edu.pk",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Smart Systems with Code and AI</>,
  subline: (
    <>
      I'm Muhammad Kamran, a <InlineCode>Full Stack Developer</InlineCode>{" "}
      specializing in scalable web applications, AI-driven solutions, and
      automation tools.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Muhammad Kamran is a Full Stack Developer with extensive experience in
        web development, AI, and automation. He has worked on innovative
        projects ranging from AI-powered chatbots to resume-building platforms,
        delivering scalable and efficient solutions for diverse industries.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MyIslam.org",
        timeframe: "July 2023 - Present",
        role: "Full Stack Developer (Remote)",
        achievements: [
          <>
            Developed new functionalities for the existing system at
            MyIslam.org.
          </>,
          <>
            Created Node.js-based tools for bulk page creation to enhance
            scalability.
          </>,
          <>Automated data extraction processes using Python and Selenium.</>,
          <>Developed custom JavaScript apps integrated with WordPress.</>,
        ],
      },
      {
        company: "DollarTube Inc.",
        timeframe: "June 2018 - June 2023",
        role: "Full Stack Developer (Remote)",
        achievements: [
          <>
            Built an AI-powered chatbot for the Cardano ecosystem using React.js
            and Node.js.
          </>,
          <>
            Streamlined content management by automating data uploads to
            WordPress CMS.
          </>,
          <>Managed Linux servers to ensure secure and smooth operations.</>,
          <>
            Developed a video-sharing platform using the CodeIgniter framework.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "COMSATS University Islamabad",
        description: <>PhD in Computer Science (In progress)</>,
      },
      {
        name: "UET Taxila",
        description: <>MSc and BSc in Software Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>JavaScript, TypeScript, PHP, Python, Java</>,
      },
      {
        title: "Frontend",
        description: <>React.js, Next.js, Redux, TailwindCSS</>,
      },
      {
        title: "Backend",
        description: <>Node.js, Express, Django, FastAPI</>,
      },
      {
        title: "Databases",
        description: <>MongoDB, MySQL, PostgreSQL, Firebase</>,
      },
      {
        title: "Automation & AI",
        description: <>Selenium, LangChain, Generative AI</>,
      },
      {
        title: "DevOps & Cloud",
        description: <>AWS, Docker, Linux Server Management</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about myself and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Design and development projects by ${person.name}`,
  projects: [
    {
      name: "Cardano AI",
      description:
        "An AI-powered chatbot for the Cardano ecosystem using Node.js, React.js, Pinecone, MySQL, and LangChain (RAG).",
    },
    {
      name: "Resume Builder",
      description:
        "A resume-building platform using Next.js, MySQL, Redux, and Firebase Authentication for creating and customizing resumes efficiently.",
    },
    {
      name: "GM Insurance Services",
      description:
        "A website offering insurance services, built with React.js, Node.js, GraphQL, Redux, and MongoDB.",
    },
    {
      name: "MyIslam.org",
      description:
        "A WordPress-powered platform with custom JavaScript functionalities, data automation with Python and Selenium, and Node.js for scalability.",
    },
    {
      name: "ADA Yield",
      description:
        "A landing page for a Cardano-based token, developed with WordPress and JavaScript for an engaging user experience.",
    },
  ],
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
