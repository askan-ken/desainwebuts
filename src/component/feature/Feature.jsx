import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className="desa__feature-container__feature">
      <div className="desa__feature-container__feature-title">
        <div />
        <h1 className='gradient__text'>{title}</h1>
      </div>
      <div className="desa__feature-container_feture-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature