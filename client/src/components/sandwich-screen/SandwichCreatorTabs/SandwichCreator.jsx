import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { getIngredientsByInput } from "../../../managers/ingredientManager.js";
import { renderBreadChoices } from "./SandwichCreatorTabs/BreadCreate.jsx";
import { renderMeatChoices } from "./SandwichCreatorTabs/MeatCreate.jsx";
import { renderToppingChoices } from "./SandwichCreatorTabs/ToppingCreate.jsx";

export const SandwichCreator = ({setCurrentSandwich}) => {
    const [currentIngredients, setIngredients] = useState([]);
    const [input, setInput] = useState(1);

    useEffect(() => {
        getIngredientsByInput(input).then(setIngredients)
    }, [input])

    const renderIngredients = () => {
        switch(input) {
            case 1:
                return <div>{renderBreadChoices(setCurrentSandwich={setCurrentSandwich}, currentIngredients)}</div>
            case 2:
                return <div>{renderMeatChoices(setCurrentSandwich={setCurrentSandwich}, currentIngredients)}</div>
            case 3:
                return <div>{renderToppingChoices(setCurrentSandwich={setCurrentSandwich}, currentIngredients)}</div>
        }
    }
    
    return(
        <div className="sandwich-create-view">
            <div className="tab-container">
                <div className="tab-options">
                    <Button onClick={() => setInput(1)}>
                        Bread
                    </Button>
                    <Button onClick={() => setInput(2)}>
                        Meats
                    </Button>
                    <Button onClick={() => setInput(3)}>
                        Toppings
                    </Button>
                </div>
                <div className="complete-sandwich-btn-container">
                    <Button>
                        Complete Sandwich
                    </Button>
                </div>
            </div>
            <div className="ingredients-container">
                {renderIngredients()}
            </div>
            <div className="sandwich-display-container">

            </div>
        </div>
    )
}