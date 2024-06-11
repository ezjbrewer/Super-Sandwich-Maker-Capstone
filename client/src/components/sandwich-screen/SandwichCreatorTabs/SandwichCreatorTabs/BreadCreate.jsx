import { useState } from "react"
import { Label, Button } from "reactstrap"

export const renderBreadChoices = ({ setCurrentSandwich, currentSandwich, currentViewIngredients, setInput, breadChoice, setBreadChoice }) => {
    const [bread, setBread] = useState({});
    const [isBreadEmpty, setEmpty] = useState(false);

    const emptyBreadChoiceMsg = "Bread is required to make a sandwich..."

    const handleBreadChoiceSave = () => {
        if (!breadChoice.id) {
            setEmpty(true)
            return;
        }
        if (!currentSandwich.sandwichIngredients.some(i => i.id === breadChoice.id)) {
            const updatedIngredients = currentSandwich.sandwichIngredients.filter(i => i.typeId !== 1);
            setCurrentSandwich(sandwich => ({...sandwich, sandwichIngredients: [...updatedIngredients, breadChoice]}));
            setEmpty(false);
            setInput(2);
        }
    }

    return(
        <div className="ingredients">
            <h3 className="ingredient-heading">Select your bread</h3>
            <div className="ingredient-list">
                {currentViewIngredients.map((i) => {
                    return(
                        <div key={i.id}>
                            <input
                                type="radio"
                                name="bread"
                                onChange={() => {setBreadChoice(i)}}
                                checked={breadChoice.id === i.id}
                            />
                            <Label>
                                {i.name}
                            </Label>
                        </div>
                    )
                })}
                {isBreadEmpty ?
                    <div>
                        {emptyBreadChoiceMsg}
                    </div>
                    :
                    <div></div>
                }
                <Button onClick={() => {handleBreadChoiceSave()}}>
                    Add
                </Button>
            </div>
        </div>
    )
}