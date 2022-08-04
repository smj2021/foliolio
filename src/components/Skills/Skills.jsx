import React from 'react';
import { skills } from '../../portfolio';
import uniqid from 'uniqid';
import './skills.css';

const Skills = () => {
  // if (!skills.length) return null;
  const { known, learning } = skills;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul>
        <h3>Known</h3>
        {known.map((know, index) => {
          return (
            <li key={uniqid()} className="known__skills">{know}</li>
          )
        })}
      </ul>
      <ul>
        <h3>Learning</h3>
        {learning.map((learn, index) => {
          return (
            <li key={uniqid()} className="learning__skills">{learn}</li>
          )
        })}
      </ul>
    </section>
  )
}
export default Skills;
