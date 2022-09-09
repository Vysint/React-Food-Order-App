import {Fragment} from "react";
import AvailablMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailablMeals/>
    </Fragment>
  )
};

export default Meals;
