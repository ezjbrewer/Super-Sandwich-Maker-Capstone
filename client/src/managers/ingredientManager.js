const apiUrl = "/api/Ingredient"

export const getIngredientsByInput = (input) => {
    return fetch (`${apiUrl}/${input}`).then((res) => res.json());
}