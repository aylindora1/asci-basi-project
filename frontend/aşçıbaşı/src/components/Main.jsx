import React from "react"
import { getRecipeFromMistral } from "../ai"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    return (
        <main>
            <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="örneğin: kekik"
                    aria-label="Malzeme ekle"
                    name="ingredient"
                />
                <button>Malzeme ekle</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>        
    )
}