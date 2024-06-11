import { useState } from "react"
import { Button, Label } from "reactstrap"

export const renderToppingChoices = ({ setCurrentSandwich, currentSandwich, currentViewIngredients }) => {
    const [toppingChoices, setToppingChoice] = useState([])
    
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
                            />
                            <Label>
                                {i.name}
                            </Label>
                        </div>
                    )
                })}
                <Button>
                    Add Ingredient
                </Button>
            </div>
        </div>
    )
}