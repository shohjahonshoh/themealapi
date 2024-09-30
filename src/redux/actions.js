export const fetchMeals = () => async (dispatch) => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  dispatch({ type: "FETCH_MEALS", payload: data.meals });
};

export const fetchMealDetails = (mealId) => async (dispatch) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  dispatch({ type: "FETCH_MEAL_DETAILS", payload: data.meals[0] });
};
