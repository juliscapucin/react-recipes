import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "http://recipes.wordpresssites.host/wp-json/wp/v2/recipes/";

const SingleRecipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    async function getRecipe() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const findRecipe = data.find((item) => item.slug === id);

        if (findRecipe.acf) {
          const {
            name,
            image_url,
            duration,
            course,
            type,
            category,
            instructions,
            ingredients,
          } = findRecipe.acf;

          const newRecipe = {
            name,
            image: image_url,
            duration,
            course,
            type,
            category,
            instructions,
            ingredients,
          };

          setRecipe(newRecipe);
        } else {
          setRecipe(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getRecipe();
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
          <h3>Ingrediënten</h3>
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
