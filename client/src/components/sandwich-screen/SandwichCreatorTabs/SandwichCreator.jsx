import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { getIngredientsByInput } from "../../../managers/ingredientManager.js";
import { renderBreadChoices } from "./SandwichCreatorTabs/BreadCreate.jsx";
import { renderMeatChoices } from "./SandwichCreatorTabs/MeatCreate.jsx";
import { renderToppingChoices } from "./SandwichCreatorTabs/ToppingCreate.jsx";

export const SandwichCreator = ({currentSandwich, setCurrentSandwich, setSelectedView, breadChoice, setBreadChoice, sandwichIdVar}) => {
    const [currentViewIngredients, setIngredients] = useState([]);
    const [input, setInput] = useState(1);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [meatChoice, setMeatChoice] = useState([]);
    const [toppingChoice, setToppingChoice] = useState([]);
    const [fieldEmpty, setFieldEmpty] = useState(false);
    
    useEffect(() => {
        getIngredientsByInput(input).then(setIngredients)
    }, [input])

    useEffect(() => {
        if (sandwichIdVar !== 0) {
            setMeatChoice(currentSandwich.sandwichIngredients.filter(si => si?.typeId === 2));
            setToppingChoice(currentSandwich.sandwichIngredients.filter(si => si?.typeId >= 3));
        }
    }, [sandwichIdVar, currentSandwich])

    const renderIngredients = () => {
        switch(input) {
            case 1:
                return <div>{renderBreadChoices({ setCurrentSandwich, currentSandwich, currentViewIngredients, setInput, breadChoice, setBreadChoice})}</div>
            case 2:
                return <div>{renderMeatChoices({ setCurrentSandwich, currentSandwich, currentViewIngredients, setInput, setIsVegetarian, isVegetarian, meatChoice, setMeatChoice})}</div>
            case 3:
                return <div>{renderToppingChoices({ setCurrentSandwich, currentSandwich, currentViewIngredients, toppingChoice, setToppingChoice, setSelectedView})}</div>
        }
    }

    const handleCompleteSandwich = () => {
        const hasBread = currentSandwich.sandwichIngredients.some(s => s.typeId === 1);
        const hasTopping = currentSandwich.sandwichIngredients.some(s => s.typeId === 3 || s.typeId === 4);
    
        if (!hasBread || !hasTopping) {
            setFieldEmpty(true);
        } else {
            setFieldEmpty(false);
            setSelectedView(1);
        }
    }
    
    return(
        <div className="sandwich-create-view">
            <div className="tab-container">
                <div className="tab-options">
                    <Button style={{margin: '10px 0px'}} className="tab-btn" onClick={() => setInput(1)}>
                        Bread
                    </Button>
                    <Button style={{margin: '10px 0px'}} className="tab-btn" onClick={() => setInput(2)}>
                        Meats
                    </Button>
                    <Button style={{margin: '10px 0px'}} className="tab-btn" onClick={() => setInput(3)}>
                        Toppings
                    </Button>
                    {fieldEmpty ?
                    <div>Fill out required forms</div>
                    :
                    <div></div>}
                    <Button onClick={() => handleCompleteSandwich()} style={{margin: '400px 0px'}} className="tab-btn">
                        Complete Sandwich
                    </Button>
                </div>
            </div>
            <div className="ingredients-container">
                {renderIngredients()}
            </div>
            <div>
                <div className="sandwich-display" style={{ border: '3.5px solid black' }}>
                    <div className="bread-display">
                        Bread: {
                            currentSandwich.sandwichIngredients.some(si => si?.typeId === 1) ?
                            currentSandwich.sandwichIngredients.find(si => si.typeId === 1)?.name :
                            "None"
                        }
                    </div>
                    <div className="meat-display">
                        Meat: {
                            currentSandwich.sandwichIngredients.some(si => si?.typeId === 2) ?
                            currentSandwich.sandwichIngredients.filter(si => si.typeId === 2)
                            .map((s) => `${s.name}, `) :
                            "None"
                        }
                    </div>
                    <div className="topping-display">
                        Topping: {
                            currentSandwich.sandwichIngredients.some(si => si?.typeId >= 3) ?
                            currentSandwich.sandwichIngredients.filter(si => si.typeId >= 3)
                            .map((s) => `${s.name}, `) :
                            "None"
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}