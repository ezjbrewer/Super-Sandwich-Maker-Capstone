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

export const postSandwich = (sandwichObj) => {
    return fetch(`${apiUrl}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sandwichObj)
    }).then((res) => res.json());
}

export const getSandwichById = (id) => {
    return fetch(`${apiUrl}/${id}`).then((res) => res.json());
}

export const updateSandwich = (sandwichObj) => {
    return fetch(`${apiUrl}/${sandwichObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sandwichObj)
    }).then((res) => res.json());
    }
