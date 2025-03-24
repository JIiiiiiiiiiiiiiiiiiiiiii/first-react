export default function IngredientsList(props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="mb-12 list-disc" aria-live="polite">
        {props.ingredients.map((data) => (
          <li className="leading-7 text-[#475467]" key={data}>
            {data}
          </li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
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
            onClick={props.getRecipe}
            className="cursor-pointer rounded-md bg-[#D17557] px-4 py-2.5 text-sm text-[#FAFAF8] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
