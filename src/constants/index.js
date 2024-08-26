import {
  frontend,
  backend,
  ux,
  machineLearning,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  c,
  nodejs,
  git,
  research,
  sql,
  mongo,
  miller,
  clubfinity,
  ace,
  freshwatch,
  minesweeper,
  chicago,
  python,
  photoshop,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Machine Learning',
    icon: machineLearning,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'Mongo',
    icon: mongo,
  },
  
];

const experiences = [
  {
    title: 'Integrated Solutions Intern',
    company_name: 'Miller Electric Company',
    icon: miller,
    iconBg: '#333333',
    date: 'May 2024 - Aug 2024',
  },
  {
    title: 'Full Stack Engineer: Core Product Team',
    company_name: 'Clubfinity',
    icon: clubfinity,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Manager',
    company_name: 'Ace Hardware',
    icon: ace,
    iconBg: '#333333',
    date: 'June 2022 - Aug 2023',
  },
  {
    title: 'Customer Associate',
    company_name: 'Ace Hardware',
    icon: ace,
    iconBg: '#333333',
    date: 'July 2021 - June 2022',
  },
];

const projects = [
  {
    id: 'project-2',
    name: 'Research.uf',
    description: 'An innovative application for the University of Florida designed to streamline the process of finding and applying for research opportunities.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: research,
    repo: 'https://github.com/GatorApps/research.gatorapps.org',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Clubfinity',
    description:
      'A comprehensive mobile application serving as a centralized hub for all UF campus clubs.',
    tags: [
    ],
    image: photoshop,
    repo: '',
    demo: '',
  },
  {
    id: 'project-1',
    name: 'Fresh Watch',
    description:
      'An application that provides an efficient way for customers to track their groceries\' expiration dates.',
    tags: [
    ],
    image: freshwatch,
    repo: 'https://github.com/lrwilliams33/FreshWatch',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Chicago Crimes',
    description: 'Software aimed at aggregating and categorizing crime data in Chicago for the year 2020.',
    tags: [
    ],
    image: chicago,
    repo: 'https://github.com/lrwilliams33/Chicago-Crime-Project',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Minesweeper',
    description: `A recreation of the classic game Minesweeper. Utilized the SFML library.`,
    tags: [
    ],
    image: minesweeper,
    repo: 'https://github.com/lrwilliams33/Minesweeper',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
