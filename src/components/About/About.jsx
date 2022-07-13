import React from 'react';
import { about } from '../../portfolio';
import './about.css';

const About = () => {
  // Destructuring about variable so I can call props throughout jsx
  const { name, role, description, resume, social } = about

  return (
    <section className="about-me" id="about">
      <div>
        {name && (
          <h1>
            Hi, I&apos;m <span className='about__name'>{name}.</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>



      </div>
    </section>
  )
}

export default About;
