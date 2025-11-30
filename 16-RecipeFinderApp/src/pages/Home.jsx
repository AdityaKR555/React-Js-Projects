import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [item, setItem] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const searchItem = async (e) => {
    e.preventDefault();

    if (item.trim() === "") return;
   
    setLoading(true);

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
    );

    setLoading(false);

    setRecipes(response.data.meals || []);

    setItem("");
  };

  return (

    <div className="bg-cyan-50 pb-10 min-h-screen">
      {/* .........input.......... */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 text-cyan-950">
          Welcome to RecipeFinder
        </h1>
        <p className="text-center mt-4 text-md md:text-lg text-black font-medium">
          Discover delicious recipes from around the world!
        </p>
        <div className="flex justify-center mt-7 items-center">
          <form onSubmit={searchItem}>
            <input
              type="text"
              className="border-2 border-gray-500 focus:outline-none focus:border-cyan-900 w-85 px-3 py-1.5 text-xl text-cyan-950 rounded-full "
              placeholder="Search for Recipes..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyan-950 px-3.5 text-md py-3 ml-3.5 rounded-full hover:bg-black"
            >
              🔍
            </button>
          </form>
        </div>
      </div>

      {/* .........output......... */}

      <div>
        {loading && <Loader />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        {recipes === null && (
          <p className="text-center text-gray-500 w-[95vw]">
            Search recipes to begin...
          </p>
        )}
        {recipes?.length === 0 && (
          <p className="text-center text-gray-500 w-[95vw]">
            Try again with Correct Spelling...
          </p>
        )}

        {recipes?.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:scale-102 duration-300 transotion-all border border-black pt-3"
            onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-[90%] m-auto rounded-2xl border border-black" />
            <h2 className="text-xl font-bold text-cyan-950 py-3 px-6">{recipe.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
