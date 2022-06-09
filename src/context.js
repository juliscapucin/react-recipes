import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "http://recipes.wordpresssites.host/wp-json/wp/v2/recipes/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const recipes = await response.json();

      const filteredRecipes = recipes.filter((item) => {
        if (item.title.rendered.toLowerCase().includes(searchTerm)) return item;
      });

      console.log(filteredRecipes);

      if (recipes) {
        const newRecipes = filteredRecipes.map((item) => {
          const { id, acf, slug } = item;
          const { name, duration, course, image_url } = acf;
          return {
            id,
            name,
            slug,
            image: image_url,
            duration,
            course,
          };
        });
        setRecipes(newRecipes);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Fetch recipes every time searchTerm changes
  useEffect(() => {
    fetchRecipes();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, recipes, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };