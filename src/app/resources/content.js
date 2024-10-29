import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Awais",
  lastName: "Yusaf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar2.jpeg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AwaisYusaf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/awaisyusaf",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/awaisyusaf",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:awaixkhan3@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Smart Systems with Code and AI</>,
  subline: (
    <>
      I'm Awais, a <InlineCode>Software Engineer</InlineCode> who builds
      practical, scalable solutions.
      <br /> I specialize in full stack development and AI, focusing on solving{" "}
      <br />
      real problems across different industries.
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Awais Yusaf is a dedicated Software Engineer with expertise in full
        stack development, AI, and cloud computing. He has developed innovative
        solutions across healthcare, e-commerce, and telecom sectors, always
        aiming to solve complex challenges with scalable and efficient
        technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Logixsy",
        timeframe: "2024 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Setup an SMTP server for email marketing on Contabo server and ran a
            marketing campaign of 400k emails
          </>,
          <>
            Developed scrapping tools for collecting data from 97 Dominos
            restaurant websites and data extraction from PDF using Camelot.
          </>,
          <>
            Developed an MVP for an Employee Management system which will track
            employees attendance and performance using their mobile location.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //     src: '/images/projects/project-01/cover-01.jpg',
          //     alt: 'Once UI Project',
          //     width: 16,
          //     height: 9
          // }
        ],
      },
      {
        company: "Soltech",
        timeframe: "2023 - 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed advanced data collection tools with Puppeteer and Selenium
            for daily updates to an AWS RDS database.
          </>,
          <>
            Enhanced medical data extraction accuracy from reports by developing
            AWS Step Functions and Lambda functions for OCR with Textract.
          </>,
          <>
            Innovated with OpenAI Assistants to create HIPAA-compliant, dynamic
            medical timelines, aiding legal case preparations for US courts.
          </>,
          <>
            Collaborated with healthcare and legal experts to customize
            technology solutions, ensuring compliance with HIPAA standards.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "COMSATS University Islamabad",
        description: <>{"Bachelor's in Computer Science."}</>,
      },

      {
        name: "PIAIC",
        description: <>{"Certified Cloud Native Apps Developer."}</>,
      },
      //   {
      //     name: "Build the Future",
      //     description: <>Studied online marketing and personal branding.</>,
      //   },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Crafting modern, responsive web apps using Next.js, React, Redux,
            and TailwindCSS for a seamless user experience.
          </>
        ),
        images: [],
      },

      {
        title: "Backend",
        description: (
          <>
            Designing scalable backend systems with Node.js, Express,Flask and
            FastAPI, ensuring efficient server-side functionality.
          </>
        ),
        images: [],
      },

      {
        title: "Generative AI",
        description: (
          <>
            Leveraging AI models like GPT to build intelligent, context-aware
            applications that push the boundaries of innovation.
          </>
        ),
        images: [],
      },

      {
        title: "Database Architecture",
        description: (
          <>
            Creating optimized database schemas with SQL and NoSQL technologies
            for efficient data storage and retrieval.
          </>
        ),
        images: [],
      },

      {
        title: "DevOps",
        description: (
          <>
            Streamlining development and deployment through containerized
            environments using Docker for scalable and reproducible systems.
          </>
        ),
        images: [],
      },

      {
        title: "Cloud Infrastructure",
        description: (
          <>
            Managing cloud infrastructure with AWS services like EC2, S3, and
            RDS to ensure secure, scalable, and reliable applications.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about myself and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
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
