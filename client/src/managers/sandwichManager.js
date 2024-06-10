const apiUrl = "/api/sandwich"

export const getSandwichesByUserId = (userId) => {
    return fetch(`${apiUrl}/users/${userId}`).then((res) => res.json());
}

export const deleteSandwichById = (sandwichId) => {
    return fetch(`${apiUrl}/${sandwichId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}