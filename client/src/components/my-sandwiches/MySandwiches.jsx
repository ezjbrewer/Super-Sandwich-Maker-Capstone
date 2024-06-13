import { useEffect, useState } from "react";
import { deleteSandwichById, getSandwichesByUserId } from "../../managers/sandwichManager.js";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { handleEditSandwichFromSandwich } from "../sandwich-screen/SandwichScreen.jsx";
import "./MySandwich.css"

export const MySandwiches = ({ loggedInUser }) => {
  const [userSandwiches, setUserSandwiches] = useState([]);
  const navigate = useNavigate();

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

  const handleSandwichUpdateNav = (id) => {
    navigate("/sandwichscreen")
    handleEditSandwichFromSandwich(id)
  }

  return (
    <div className="my-sandwich-container">
      <div style={{ textDecoration: 'underline' }} className="my-sandwich-heading">
        <h2>My Sandwiches</h2>
      </div>
      {userSandwiches.length === 0 ? (
        <div>No sandwiches created yet</div>
      ) : (
        <div className="my-sandwich-lists">
          {userSandwiches.map((sandwich) => (
            <div className="sandwich" key={sandwich.id}>
              <div>
                <h3>{sandwich?.sandwichIngredients.find(si => si.ingredient.typeId === 1)?.ingredient.name} Sandwich</h3>
                <ul>
                  {sandwich.sandwichIngredients
                    .filter(si => si?.ingredient.typeId !== 1)
                    .map((si) => (
                      <li key={si.id}>{si?.ingredient.name}</li>
                    ))}
                </ul>
              </div>
              <div className="my-sandwich-options">
                <Button className="btn" outline onClick={() => handleSandwichDeletion(sandwich.id)}>
                    🗑️
                </Button>
                <Button outline onClick={() => handleSandwichUpdateNav(sandwich.id)}>
                    ✏️
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="total-amount">
        <h4>Total: {userSandwiches.length}</h4>
      </div>
    </div>
  );
};
