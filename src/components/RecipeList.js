import React from "react";
import Recipe from "./Recipe";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const RecipeList = () => {
  const { recipes, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (recipes.length < 1) {
    return <h2>No recipe matched your search criteria</h2>;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>recipes</h2>
      <div className='recipes-center'>
        {recipes.map((item) => {
          return <Recipe key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default RecipeList;
