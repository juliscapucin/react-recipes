import React from "react";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <RecipeList />
      <SearchForm />
    </main>
  );
};

export default Home;
