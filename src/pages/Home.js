import React from "react";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <RecipeList />
    </main>
  );
};

export default Home;
