import React from 'react';
import { SuccessCard } from './SuccessCard';
import './Success.css';

export const Success = () => {
  return (
    <div className="Success">
      <h1 style={{textAlign:"center"}}>My Success Stories</h1>
      <ul className='cardList'>
        <li>
          <SuccessCard 
            story={<>Scoring high on the SAT felt like a dream, but with the expert guidance and tutoring from Priya Varat Sir and Team, I achieved <strong>1540!</strong> Grateful to MyTutee for their support!</>} 
            name="Rohan Anegola" 
            exam="SAT 2020" 
          />
        </li>
        <li>
          <SuccessCard 
            story={<>Achieving <strong>112/120</strong> in my TOEFL was a dream come true! This wouldn’t have been possible without the invaluable guidance of Priya Varat Sir. Thank you, Sir!</>} 
            name="Hateez Khan" 
            exam="TOEFL 2021" 
          />
        </li>
        <li>
          <SuccessCard 
            story="PV Sir guided me through every step of my study abroad journey, helping me secure admissions to top U.S. and Canadian universities, including Arizona State, UBC, and more." 
            name="Dhruv Khanna" 
            exam="Study Abroad 2021" 
          />
        </li>
      </ul>
    </div>
  );
};