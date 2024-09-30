import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "./redux/actions";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetalis";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals);
  const selectedMeal = useSelector((state) => state.selectedMeal);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to TheMealDB</h1>
      <MealList meals={meals} />
      {selectedMeal && <MealDetails meal={selectedMeal} />}
    </div>
  );
};

export default App;
