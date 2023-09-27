const ingredientInput = document.getElementById("ingredient-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const ingredients = ingredientInput.value.trim();
    if (ingredients === "") {
        alert("Please enter ingredients.");
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
        .then((response) => response.json())
        .then((data) => {
            displayRecipes(data.meals);
        })
        .catch((error) => {
            console.error("Error fetching recipes:", error);
        });
});

function displayRecipes(recipes) {
    resultsContainer.innerHTML = "";

    if (!recipes) {
        resultsContainer.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
            <h3>${recipe.strMeal}</h3>
        `;
        resultsContainer.appendChild(recipeCard);
    });
}
