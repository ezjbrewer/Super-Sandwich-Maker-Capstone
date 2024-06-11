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

    const renderView = () => {
        switch(selectedView) {
            case 1:
                return <div>{defaultView()}</div>;
            case 2:
                return <SandwichCreator setCurrentSandwich={setCurrentSandwich} />;
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
                            {/* Implement list of ingredients after finishing create a sandwich view */}
                        </div>
                    }
                </div>
                <div className="my-sandwich-price">
                    Total: $0.00
                </div>
                <div className="my-sandwich-create">
                    <Button onClick={() => setSelectedView(2)} className="add-ingredient-btn">
                        Add Ingredients
                    </Button>
                </div>
            </div>
        )
    }

    return(
        <div>{renderView()}</div>
    )
}