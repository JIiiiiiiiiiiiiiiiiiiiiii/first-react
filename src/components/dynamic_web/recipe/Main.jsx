import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  // const ingredientsList = ingredients.map((data) => <li className="text-[#475467] leading-7" key={data}>{data}</li>);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
  }

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
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShow={toggleRecipeShow}
        />
      )}
      {recipeShown && <Recipe />}
    </main>
  );
}
