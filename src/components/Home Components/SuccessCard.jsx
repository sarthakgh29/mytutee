import React from 'react';
import Quote from '../../assets/images/quote.png';
import './SuccessCard.css';

export const SuccessCard = (props) => {
  return (
    <div className="Scard">
      <ul className='ScardUl'>
        <li><img src={Quote} alt="Quote" /></li>
        <li><h4 style={{ fontWeight: 'lighter' }}>{props.story}</h4></li>
        <li className="spacer"></li> {/* This pushes the next elements to the bottom */}
        <li><h3 style={{ color: "#E3651B" }}>{props.name}</h3></li>
        <li><h5>{props.exam}</h5></li>
      </ul>
    </div>
  );
};