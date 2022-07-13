// Creating a file to hold props which I will import into each .jsx file as a destructured variable read with a .forEach()/.map()
const header = {
  homepage: '',
  title: '',
}

const about = {
  name: 'Michael Schwartz',
  role: 'DevOps Engineer',
  description: 'fill with blurb',
  resume: 'resume link here',
  social: {
    linkedin: 'https://www.linkedin.com/in/schwartzbewithyou/',
    github: 'https://github.com/smj2021',
  }
}



export {
  header, about, experience, projects, skills, contact
}