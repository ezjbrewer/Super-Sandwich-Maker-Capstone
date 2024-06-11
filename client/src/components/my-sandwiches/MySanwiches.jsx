import { useEffect, useState } from "react";
import { deleteSandwichById, getSandwichesByUserId } from "../../managers/sandwichManager.js";
import { Button } from "reactstrap";

export const MySandwiches = ({ loggedInUser }) => {
  const [userSandwiches, setUserSandwiches] = useState([]);

  useEffect(() => {
    fetchSandwiches(loggedInUser?.id)
  }, [loggedInUser]);
  
  const handleSandwichDeletion = (id) => {
    deleteSandwichById(id).then(() => {
        fetchSandwiches(loggedInUser.id);
    })
  }

  const fetchSandwiches = (id) => {
    getSandwichesByUserId(id).then((data) => {
        setUserSandwiches(data)
    })
  }

  return (
    <div className="my-sandwich-container">
      <div className="my-sandwich-heading">
        <h2>My Sandwiches</h2>
      </div>
      {userSandwiches.length === 0 ? (
        <div>No sandwiches created yet</div>
      ) : (
        <div className="my-sandwich-list">
          {userSandwiches.map((sandwich) => (
            <div key={sandwich.id}>
              <h3>{sandwich?.sandwichIngredients.find(si => si.ingredient.typeId === 1)?.ingredient.name} Sandwich</h3>
              <ul>
                {sandwich.sandwichIngredients
                  .filter(si => si?.ingredient.typeId !== 1)
                  .map((si) => (
                    <li key={si.id}>{si?.ingredient.name}</li>
                  ))}
              </ul>
              <div className="my-sandwich-options">
                <Button onClick={() => handleSandwichDeletion(sandwich.id)}>
                    🗑️
                </Button>
                <Button>
                    ✏️
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
