import React from "react";
import Recipe from "./Recipe";

const RecipeList = () => {
    return (
        <div>
            <Recipe
            title= "Pastel de chocolate"
            ingredientes = "harina, huevos, chocolate, azucar, manteca"
            procedure = "mezclar y poner al horno" 
            />
            <Recipe
            title= "Ensalada Ceasar"
            ingredientes = "pechuga de pollo, lechuga, apio, nuez, crema"
            procedure = "mezclar y poner a la heladera"
            />
            <Recipe
            title= "Papas fritas"
            ingredientes = "papas, aceite, sal"
            procedure = "pelar, cortar, freir"
            />
        </div>
    )
}

export default RecipeList;