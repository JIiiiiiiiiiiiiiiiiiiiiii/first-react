import React from "react";

export default function App() {
  function signUp(formData) {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions");

    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietartRestrictions");

    const allData = {
      ...data,
      dietaryRestricitons,
    };
  }

  return (
    <section className="m-0 bg-[#2DD4BF] p-2.5 text-[#262626]">
      <h1 className="text-center">Signup Form</h1>
      <form className="flex flex-col px-10" action={signUp}>
        <label className="mb-1" htmlFor="email">
          Email:
        </label>
        <input
          className="h-8 rounded-[100px] border border-[#0D9488] indent-2.5"
          id="email"
          type="email"
          name="email"
          placeholder="me@gmail.com"
        />
        <br />

        <label className="mb-1" htmlFor="password">
          Password:
        </label>
        <input
          className="h-8 rounded-[100px] border border-[#0D9488] indent-2.5"
          id="password"
          type="password"
          name="password"
        />
        <br />

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="">--Choose a color--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <button className="mt-2.5 cursor-pointer rounded-[100px] border border-[#0D9488] px-7 py-2.5 transition-all duration-100 ease-in-out hover:border-[#042F2E] hover:bg-[#115E59] hover:text-white">
          Submit
        </button>
      </form>
    </section>
  );
}
