import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(
        (ingredient) => <li key={ingredient}>{ingredient}</li>
    )

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
            {ingredients.length > 0 && <section className="malzemeler">
                <h2>Elinizdeki malzemeler:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Tarif için hazır mısınız?</h3>
                        <p>Malzeme listenize göre bir tarif oluşturun.</p>
                    </div>
                    <button>Tarif oluştur</button>
                </div>}
            </section>}
        </main>        
    )
}