import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  const handleClick = (name) => {
    // remove the recipe using its name
    const updatedRecipes = recipes.filter((recipe) => recipe.name !== name);
    
    // List the updated recipes
    setRecipes(updatedRecipes);
  };
  
  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} alt={`${name}`} />
      </td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td><button name="delete" onClick={() => handleClick(name)}>Delete</button></td>
    </tr>
  ));
    
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
