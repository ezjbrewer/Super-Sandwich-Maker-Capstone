import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { SandwichCreator } from "./SandwichCreatorTabs/SandwichCreator.jsx"
import { getSandwichById, postSandwich, updateSandwich } from "../../managers/sandwichManager.js"
import { useNavigate } from "react-router-dom"

export const handleEditSandwichFromSandwich = (id) => {
    sandwichIdVar = id;
    return
}

let sandwichIdVar = 0;

export const SandwichScreen = ({loggedInUser}, editId) => {
    const [currentSandwich, setCurrentSandwich] = useState(
        {
            customerId: loggedInUser.id,
            sandwichIngredients: []
        }
    )
    const [selectedView, setSelectedView] = useState(1);
    const [breadChoice, setBreadChoice] = useState({});
    const [price, setPrice] = useState(0.00)
    const navigate = useNavigate();

    useEffect(() => {
        if (sandwichIdVar !== 0) {
            getSandwichById(sandwichIdVar).then((data) => {
                editSandwichPlacement(data)
            });
        }
    }, [sandwichIdVar]);

    useEffect(() => {
        let totalPrice = 0.00;
        currentSandwich?.sandwichIngredients.forEach((si) => {
            totalPrice += si?.price
        })
        
        setPrice(totalPrice);
    }, [currentSandwich])

    const editSandwichPlacement = (data) => {
        const breadIngredient = data.sandwichIngredients.find((si) => si.ingredient.typeId === 1);
        setBreadChoice(breadIngredient?.ingredient || {});

        setCurrentSandwich({
            ...currentSandwich,
            sandwichIngredients: data.sandwichIngredients.map(si => si.ingredient)
        });
    }

    const renderView = () => {
        switch(selectedView) {
            case 1:
                return <div>{defaultView()}</div>;
            case 2:
                return <SandwichCreator currentSandwich={currentSandwich} setCurrentSandwich={setCurrentSandwich} setSelectedView={setSelectedView} breadChoice={breadChoice} setBreadChoice={setBreadChoice} sandwichIdVar={sandwichIdVar}/>;
        }
    }

    const handleSaveSandwich = () => {
        
        const sandwichToPost = {
            CustomerId: currentSandwich.customerId,
            Ingredients: currentSandwich.sandwichIngredients.map(ingredient => ({
                id: ingredient.id,
                name: ingredient.name,
                price: ingredient.price,
                calories: ingredient.calories,
                typeId: ingredient.typeId
            }))
        };

        if (sandwichIdVar !== 0)
            {
                handleUpdateSandwich(sandwichToPost)
                return;
            }

        postSandwich(sandwichToPost)
        .then(response => {
            navigate("/mysandwiches");
        })
        .catch(error => {
            console.error("Error saving sandwich:", error);
        });
    }

    const handleUpdateSandwich = (sandwichObj) => {
        sandwichObj.id = sandwichIdVar;
        updateSandwich(sandwichObj).then(() => {
            sandwichIdVar = 0;
            navigate("/mysandwiches");
            return;
        })
    }
    
    const defaultView = () => {
        return(
            <div>
                <div className="my-sandwich-heading">
                    <h2>My Sandwich</h2>
                </div>
                <div className="my-sandwich-container">
                    {currentSandwich.sandwichIngredients.length === 0 ?
                        <div>
                            <p>No ingredients selected</p>
                        </div>
                        :
                        <div>
                            <h3>{currentSandwich.sandwichIngredients.find(si => si.typeId === 1)?.name} Sandwich</h3>
                            <ul>
                                {currentSandwich.sandwichIngredients
                                    .filter(si => si?.typeId !== 1)
                                    .map((s) => (
                                        <li key={s.id}>{s.name}</li>
                                ))}
                            </ul>
                            <Button onClick={() => setSelectedView(2)}>
                                Edit Sandwich
                            </Button>
                            {sandwichIdVar === 0 ?
                                <Button onClick={() => setCurrentSandwich({customerId: loggedInUser.id, sandwichIngredients: []}, setBreadChoice({}), console.log(sandwichIdVar))}>
                                    Delete Sandwich
                                </Button>
                            :
                                <div></div>
                            }
                        </div>
                    }
                </div>
                <div className="my-sandwich-price">
                    {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </div>
                {currentSandwich.sandwichIngredients.length === 0 ?
                <div className="my-sandwich-create">
                    <Button onClick={() => setSelectedView(2)} className="add-ingredient-btn">
                        Add Ingredients
                    </Button>
                </div>
                :
                <div>
                    <Button onClick={() => handleSaveSandwich()}>
                        Save Sandwich
                    </Button>
                </div>}
            </div>
        )
    }

    return(
        <div>{renderView()}</div>
    )
}