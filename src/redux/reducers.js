
const initialState = {
  meals: [],
  selectedMeal: null,
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return { ...state, meals: action.payload };
    case "FETCH_MEAL_DETAILS":
      return { ...state, selectedMeal: action.payload };
    default:
      return state;
  }
};

export default mealReducer;
