import React from 'react';
import './Card.css';

export const Card = (props) => {
  return (
    <div className='Card' style={{ backgroundColor: props.color || 'white', boxShadow: props.shadow }}>
      <div className='CardImageContainer'>
        <img 
          src={props.imgsrc} 
          alt='Card' 
          className='CardImage' 
        />
      </div>
      <h2 className='CardHeading' style={{ color: props.headColor || 'black' }}>{props.Heading}</h2>
      <h5 
        className='CardDescription' 
        style={{ textAlign: props.alignText, color: props.subColor || 'black' }}
      >
        {props.description}
      </h5>
    </div>
  );
}