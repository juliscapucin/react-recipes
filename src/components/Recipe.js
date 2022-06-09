import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, name, slug, duration, course, image }) => {
  return (
    <article className='recipe'>
      <div className='image-container'>
        <img src={image} alt={name} />
      </div>
      <div className='recipe-footer'>
        <h3>{name}</h3>
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
