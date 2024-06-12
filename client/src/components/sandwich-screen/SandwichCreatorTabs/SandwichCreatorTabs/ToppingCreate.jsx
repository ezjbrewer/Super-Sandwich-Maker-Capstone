import { useState } from "react"
import { Button, Label } from "reactstrap"

export const renderToppingChoices = ({ setCurrentSandwich, currentSandwich, currentViewIngredients, toppingChoice, setToppingChoice, setSelectedView }) => {
    const [toppings, setToppings] = useState([]);
    const [isToppingEmpty, setIsEmpty] = useState(false);
    
    const noOptionsChosen = "Please select an option to continue";

    const handleToppingChange = (event) => {
        const selectedTopping = JSON.parse(event.target.value);
    
        if (currentSandwich.sandwichIngredients.some(i => i.id == selectedTopping.id)) {
            const index = currentSandwich.sandwichIngredients.findIndex(i => i.id == selectedTopping.id);
            if (index > -1) {
                currentSandwich.sandwichIngredients.splice(index, 1);
            }
        }

        if (event.target.checked) {
            setToppingChoice([...toppingChoice, selectedTopping]);
        } else {
            setToppingChoice(toppingChoice.filter(topping => topping.id !== selectedTopping.id));
        }
    }

    const handleToppingSave = () => {
        if (toppingChoice.length === 0) {
            setIsEmpty(true)
            return;
        }

        const uniqueToppings = toppingChoice.filter((topping) =>
            !currentSandwich.sandwichIngredients.some(
                (ingredient) => ingredient.id === topping.id && ingredient.typeId <= 3
            )
        );

        setCurrentSandwich((sandwich) => ({
            ...sandwich,
            sandwichIngredients: [
                ...sandwich.sandwichIngredients.filter((ingredient) => ingredient.typeId !== 3 || ingredient.typeId !== 4),
                ...uniqueToppings,
            ],
        }));
        
        setIsEmpty(false);
        setSelectedView(1);
    }

    return(
        <div className="ingredients">
            <h3 className="ingredient-heading">Select your topping choices</h3>
                <div className="ingredient-list">
                {currentViewIngredients.map((i) => {
                    return(
                        <div key={i.id}>
                            <input
                                type="checkbox"
                                name="topping"
                                value={JSON.stringify(i)}
                                checked={
                                    toppingChoice.some((t) => t.id == i.id) ||
                                    currentSandwich.sandwichIngredients.some((m) => m.id == i.id)
                                }
                                onChange={handleToppingChange}
                            />
                            <Label>
                                {i.name}
                            </Label>
                        </div>
                    )
                })}
                {isToppingEmpty ?
                    <div>
                        {noOptionsChosen}
                    </div>
                    :
                    <div></div>
                }
                <Button onClick={() => handleToppingSave()}>
                    Add
                </Button>
            </div>
        </div>
    )
}