import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ addToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        setMenuItems(response.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-[#2F855A]"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-[#D69E2E] mt-20">
        Error loading menu: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#6B4423]">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.length > 0 ? (
          menuItems.map((dish) => (
            <div
              key={dish.idMeal}
              className="bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#6B4423] mb-2">
                  {dish.strMeal}
                </h3>
                <p className="text-[#2D3748] mb-4">
                  {dish.strInstructions.substring(0, 100)}...
                </p>
                <div className="flex justify-between">
                  <Link
                    to={`/dish/${dish.idMeal}`}
                    className="text-center bg-[#2F855A] text-[#F7FAFC] py-2 px-4 rounded hover:bg-[#38A169] transition duration-300"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToOrder(dish)} // Use addToOrder here
                    className="text-center bg-[#D69E2E] text-[#F7FAFC] py-2 px-4 rounded hover:bg-[#ECC94B] transition duration-300"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-[#2D3748]">
            No menu items available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
