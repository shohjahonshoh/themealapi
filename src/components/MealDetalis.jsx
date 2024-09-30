import React from "react";

const MealDetails = ({ meal }) => {
  return (
    <div className="meal-details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(meal)
          .filter((key) => key.includes("strIngredient") && meal[key])
          .map((ingredientKey, index) => (
            <li key={index}>
              {meal[ingredientKey]} - {meal[`strMeasure${index + 1}`]}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MealDetails;
