const apiUrl = "/api/sandwich"

export const getSandwichesByUserId = (userId) => {
    return fetch(`${apiUrl}/users/${userId}`).then((res) => res.json());
}