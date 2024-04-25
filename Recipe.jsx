import React from "react";
import RecipeTitle from "./RecipeTitle";
import RecipeProcedure from "./RecipeProcedure";

const Recipe = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Ingredientes {props.ingredientes} </p>
            <p>Procedimiento {props.procedure}</p>
        </div>
    )
}

export default Recipe;