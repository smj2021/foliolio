import React from 'react';
import { contact } from '../../portfolio';

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn'>
          Email Me
        </span>
      </a>
    </section>
  )
}

export default Contact;