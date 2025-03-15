import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  // const ingredientsList = ingredients.map((data) => <li className="text-[#475467] leading-7" key={data}>{data}</li>);

  function addIngredient(formData) {
    const newIngredients = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredients]);
  }

  return (
    <main className="p-[30px_30px_10px]">
      <form
        action={addIngredient}
        className="flex h-[38px] justify-center gap-3"
      >
        <input
          className="max-w-[400px] min-w-[150px] flex-grow rounded-[6px] border border-gray-300 px-[13px] py-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          type="text"
          placeholder="e.g. potato"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="w-[150px] rounded-[6px] bg-[#141413] text-[0.875rem] font-medium text-[#FAFAF8] before:mr-1 before:content-['+']">
          Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="mb-12 list-disc" aria-live="polite">
            {ingredients.map((data) => (
              <li className="leading-7 text-[#475467]" key={data}>
                {data}
              </li>
            ))}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container flex items-center justify-between rounded-md bg-[#F0EFEB] px-7 py-2.5">
              <div>
                <h3 className="text-lg leading-6 font-medium">
                  Ready for a recipe?
                </h3>
                <p className="text-sm leading-6 text-[#6B7280]">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                onClick={() => setRecipeShown((prev) => !prev)}
                className="cursor-pointer rounded-md bg-[#D17557] px-4 py-2.5 text-sm text-[#FAFAF8] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
