import { useState } from "react"
import { Button, Label } from "reactstrap"

export const renderMeatChoices = ({ setCurrentSandwich, currentSandwich, currentViewIngredients }) => {
    const [meatChoice, setMeatChoice] = useState([])
    
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