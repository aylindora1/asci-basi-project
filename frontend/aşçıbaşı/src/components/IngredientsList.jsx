export default function IngredientsList({ ingredients, getRecipe }) {

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="malzemeler">
            <h2>Elinizdeki malzemeler:</h2>

            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Tarif için hazır mısınız?</h3>
                        <p>Malzeme listenize göre bir tarif oluşturun.</p>
                    </div>
                    <button onClick={getRecipe}>
                        Tarif oluştur
                    </button>
                </div>
            )}
        </section>
    )
}