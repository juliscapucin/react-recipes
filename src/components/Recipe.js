import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, name, slug, duration, course, image }) => {
  return (
    <article className='recipe'>
      <Link to={`/recipe/${slug}`}>
        <div className='image-container'>
          <img src={image} alt={name} className='recipe-image' />
        </div>
      </Link>
      <div className='recipe-footer'>
        <Link to={`/recipe/${slug}`}>
          <h3>{name}</h3>
        </Link>
        <h4>{course}</h4>
        <p>{duration}</p>
        <Link to={`/recipe/${slug}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Recipe;
