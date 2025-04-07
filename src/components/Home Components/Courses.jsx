import React from 'react';
import './Courses.css';

export const Courses = (props) => {
  return (
    <div className='Courses' style={{ background: props.gradient }}>
      <h1>{props.heading}</h1>
      <h3 className='CoursesSubhead'>{props.subhead}</h3>
      <ul className='CoursesList'>
        {props.cards.map((card, index) => (
          <li key={index} className='CoursesItem'>{card}</li>
        ))}
      </ul>
    </div>
  );
};