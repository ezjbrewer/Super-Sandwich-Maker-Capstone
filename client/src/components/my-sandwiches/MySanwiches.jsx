import { useEffect, useState } from "react";
import { getSandwichesByUserId } from "../../managers/sandwichManager.js";
import { Button } from "reactstrap";

export const MySandwiches = ({ loggedInUser }) => {
  const [userSandwiches, setUserSandwiches] = useState([]);

  useEffect(() => {
    getSandwichesByUserId(loggedInUser?.id).then(setUserSandwiches);
  }, [loggedInUser]);

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
                <Button>
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
