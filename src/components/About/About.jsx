import React from 'react';
import { about } from '../../portfolio';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
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

        <div>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn'>Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <BsGithub />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <BsLinkedin />
                </a>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  )
}

export default About;
