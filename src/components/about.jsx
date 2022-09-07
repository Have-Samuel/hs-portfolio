/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../about.css';

function About() {
  return (
    <div>
      <div className="about-text">
        <div className="about-container">
          <img src='about-img.png' alt='about-image' className='about-image' />
          <div className='text-container'>
            <h1 className='name'>Have Samuel</h1>
            <h2 className='description'>Full-Stack Web Developer</h2>
            <img src='tech.png' alt='technologies' className='tech-images' />
          </div>
        </div>

        <p className='descript hs'>
          I am a full-stack web developer. I am currently on job search. A typical day for me involves 8 hours of coding, collaboration within multicultural teams and a perfect mimic of a real working environment.
          What makes me special is not limited to my technical skills but also means clear and effective communication is one of my core strengths.
        </p>
      </div>
    </div>
  );
}

export default About;
