import React from "react";
import RecipeTitle from "./RecipeTitle";
import RecipeProcedure from "./RecipeProcedure";

const Recipe = (props) => {
    return (
        <div>
            <h2><RecipeTitle/></h2>
            <p><RecipeProcedure/> </p>
        </div>
    )
}

export default Recipe;