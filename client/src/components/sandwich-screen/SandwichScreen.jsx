import { useState } from "react"
import { Button } from "reactstrap"
import { SandwichCreator } from "./SandwichCreatorTabs/SandwichCreator.jsx"

export const SandwichScreen = ({loggedInUser}) => {
    const [currentSandwich, setCurrentSandwich] = useState(
        {
            customerId: loggedInUser.id,
            sandwichIngredients: []
        }
    )
    const [selectedView, setSelectedView] = useState(1)
    const [breadChoice, setBreadChoice] = useState({});

    const renderView = () => {
        switch(selectedView) {
            case 1:
                return <div>{defaultView()}</div>;
            case 2:
                return <SandwichCreator currentSandwich={currentSandwich} setCurrentSandwich={setCurrentSandwich} setSelectedView={setSelectedView} breadChoice={breadChoice} setBreadChoice={setBreadChoice}/>;
        }
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
                            <Button onClick={() => setCurrentSandwich({customerId: loggedInUser.id, sandwichIngredients: []}, setBreadChoice({}))}>
                                Delete Sandwich
                            </Button>
                        </div>
                    }
                </div>
                <div className="my-sandwich-price">
                    Total: $0.00
                </div>
                {currentSandwich.sandwichIngredients.length === 0 ?
                <div className="my-sandwich-create">
                    <Button onClick={() => setSelectedView(2)} className="add-ingredient-btn">
                        Add Ingredients
                    </Button>
                </div>
                :
                <div>
                    <Button>
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