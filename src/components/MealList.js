import React from "react";
import { useDispatch } from "react-redux";
import { fetchMealDetails } from "../redux/actions";

const MealList = ({ meals }) => {
  const dispatch = useDispatch();

  const handleMealClick = (mealId) => {
    dispatch(fetchMealDetails(mealId));
  };

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="meal-card"
          onClick={() => handleMealClick(meal.idMeal)}
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default MealList;
