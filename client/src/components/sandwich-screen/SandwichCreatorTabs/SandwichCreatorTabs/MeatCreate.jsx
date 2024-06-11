import { useState } from "react"
import { Button, Label } from "reactstrap"

export const renderMeatChoices = ({ setCurrentSandwich, currentSandwich, currentViewIngredients, setInput, setIsVegetarian, isVegetarian, meatChoice, setMeatChoice }) => {
    const [meats, setMeats] = useState([])
    const [isEmpty, setIsEmpty] = useState(false);

    const noOptionsChosen = "Please select an option to continue";

    const handleVegetarianChoice = (event) => {
        setIsVegetarian(event.target.checked)
        if (event.target.checked) {
            setMeatChoice([])
        }
    }

    const handleMeatChange = (event) => {
        const selectedMeat = JSON.parse(event.target.value);
    
        if (event.target.checked) {
            setMeatChoice([...meatChoice, selectedMeat]);
        } else {
            setMeatChoice(meatChoice.filter(meat => meat.id !== selectedMeat.id));
        }
    }

    const handleMeatSave = () => {
        if (meatChoice.length === 0 && !isVegetarian)
            {
                setIsEmpty(true)
                return;
            }

        const uniqueMeats = meatChoice.filter((meat) =>
            !currentSandwich.sandwichIngredients.some(
                (ingredient) => ingredient.id === meat.id && ingredient.typeId === 2
            )
        );

        setCurrentSandwich((sandwich) => ({
            ...sandwich,
            sandwichIngredients: [
                ...sandwich.sandwichIngredients.filter((ingredient) => ingredient.typeId !== 2),
                ...uniqueMeats,
            ],
        }));
        
        setIsEmpty(false);
        setInput(3);
    }
    
     return(
        <div className="ingredients">
            <h3 className="ingredient-heading">Select your meat choices</h3>
            <div className="ingredient-list">
                {currentViewIngredients.map((i) => {
                    return(
                        <div key={i.id}>
                            <input
                                type="checkbox"
                                name="meat"
                                value={JSON.stringify(i)}
                                checked={!isVegetarian && meatChoice.some(m => m.id == i.id)}
                                disabled={isVegetarian}
                                onChange={handleMeatChange}
                            />
                            <Label>
                                {i.name}
                            </Label>
                        </div>
                    )
                })}
                <div key="0">
                    <input
                        onChange={handleVegetarianChoice}
                        type="checkbox"
                        checked={isVegetarian}
                        name="vegetarian"
                    />
                    <Label>
                        Vegetarian - No Meat
                    </Label>
                </div>
                {isEmpty ?
                    <div>
                        {noOptionsChosen}
                    </div>
                    :
                    <div>
                    </div>
                }
                <Button onClick={() => handleMeatSave()}>
                    Add
                </Button>
            </div>
        </div>
    )
}