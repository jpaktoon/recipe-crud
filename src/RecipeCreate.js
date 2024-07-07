import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission

    // Create a new recipe object
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    // Add the new recipe to the existing recipes array
    setRecipes([...recipes, newRecipe]);

    // Reset the form fields
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleNameChange}
                  value={name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleCuisineChange}
                  value={cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  onChange={handlePhotoChange}
                  value={photo}
                />
              </label>
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={handlePreparationChange}
                value={preparation}
              />
            </td>
            <td>
              <button onClick={handleClick} type="submit">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
