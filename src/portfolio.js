// Creating a file to hold props which I will import into each .jsx file as a destructured variable read with a .forEach()/.map()
const header = {
  homepage: '',
  title: '',
}

// All props will be optional and can be filled at the discretion of the user

const about = {
  name: 'Michael Schwartz',
  role: 'Front-End Engineer',
  description: 'fill with blurb',
  resume: 'resume link here',
  social: {
    linkedin: 'https://www.linkedin.com/in/schwartzbewithyou/',
    github: 'https://github.com/smj2021',
  },
}

const educations = [
  {
    school: 'General Assembly',
    degree: 'Software Engineering Immersive Certificate',
    year: '2021',
  },
  {
    school: 'American University, School of International Service',
    degree: 'M.A. International Peace and Conflict Resolution',
    year: '2012',
  },
  {
    school: 'University of Pittsburgh',
    degree: 'B.A. Political Science (Cum Laude)',
    year: '2009',
  }
]

const experience = {
  jobs: 'Junior DevOps Engineer, Accenture',
}

const projects = [
  {
    name: 'Cal Count',
    description:
      'Cal Count is a Python and Django web application I built as an addition to my team project, Workout City (PUMP). Data storage is performed by the integration of a PostgreSQL database.',
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'Bootstrap'],
    sourceCode: 'https://github.com/smj2021/CalCount',
    livePreview: 'Not yet deployed',
  },
  {
    name: 'PUMP',
    description:
      'PUMP is a Python and Django web application which allows users to securely create and manage fitness routines and nutrition plans from their desktop or mobile device. Data storage is performed by the integration of a PostgreSQL database.',
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'Bootstrap'],
    sourceCode: 'https://github.com/fattony26/workout-city',
    livePreview: 'https://workoutcity.herokuapp.com/',
  },
  {
    name: 'Anime City',
    description:
      'Anime City is a full-stack (MERN) web application utilizing the Jikan API to allow users to query and create lists of their favorite anime and manga series, as well as connecting them to platforms on which they are able to watch the items on their lists.',
    stack: ['JavaScript', 'ExpressJS', 'Node.js', 'React', 'MongoDB', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/smj2021/anime_city',
    livePreview: 'https://anime-city-mgm.herokuapp.com/',
  },
  {
    name: "Chef's Corner",
    description:
      "Chef's Corner is a full-stack (MEN) web application built allowing users to add recipes to a database and build individualized cookbooks for storing their favorite recipes.",
    stack: ['JavaScript', 'ExpressJS', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/smj2021/foodbook',
    livePreview: 'https://project-food-book.herokuapp.com/',
  },
]

const skills = {
  known: ['HTML5', 'CSS3', 'React', 'JavaScript', 'Node.js', 'ExpressJS', 'Python', 'Django', 'AWS', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Kubernetes', 'Docker', 'Git/Version Control', 'CI/CD'],
  learning: ['AngularJS', 'TypeScript', 'Java 11']
}

export {
  header, about, educations, experience, projects, skills, contact
}