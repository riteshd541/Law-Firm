import React from 'react';
import './Card.css';

const Card = ({
  srcImage,
  altImage,
  headerTitle,
  jobTitle,
  subTitle,
  btnName,
}) => {
  return (
    <div className="card__container">
      <img src={srcImage} alt={altImage} className="card__img" />

      {/*  */}
      <div className="card__info">
        <h4>{headerTitle}</h4>
        {jobTitle && <h5>{jobTitle}</h5>}
        <p>{subTitle}</p>
      </div>
      {/*  */}

      {btnName && <button className="card__btn">{btnName}</button>}
    </div>
  );
};

export default Card;
