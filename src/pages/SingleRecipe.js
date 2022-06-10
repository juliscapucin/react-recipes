import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
// const url = "http://recipes.wordpresssites.host/wp-json/wp/v2/recipes/";

import { useGlobalContext } from "../context";

const SingleRecipe = () => {
  const { recipes, loading, setLoading } = useGlobalContext();
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    const newRecipe = recipes.find((item) => item.slug === id);

    if (newRecipe) {
      const {
        name,
        image,
        duration,
        course,
        type,
        category,
        instructions,
        ingredients,
      } = newRecipe;

      setRecipe(newRecipe);
    } else {
      setRecipe(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!recipe) {
    return <h2 className='section-title'>No recipe to display</h2>;
  }

  const {
    name,
    image,
    duration,
    course,
    type,
    category,
    instructions,
    ingredients,
  } = recipe;

  return (
    <section className='section recipe-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='plate'>
        <div className='image-container'>
          <img src={image} alt={name} />
        </div>
        <div className='plate-info'>
          <div className='plate-items'>
            <span className='plate-data'>Category:</span>
            {category}
          </div>
          <div className='plate-items'>
            <span className='plate-data'>Type:</span>
            {type}
          </div>
          <div className='plate-items'>
            <span className='plate-data'>Duration:</span>
            {duration}
          </div>
          <div
            className='plate-ingredients'
            dangerouslySetInnerHTML={{ __html: ingredients }}
          ></div>
          <div
            className='plate-instructions'
            dangerouslySetInnerHTML={{ __html: instructions }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipe;
