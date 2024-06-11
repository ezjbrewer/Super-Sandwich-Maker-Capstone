import { Label } from "reactstrap"

export const renderBreadChoices = ({setCurrentSandwich}, currentViewIngredients) => {
    
    
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
                            />
                            <Label>
                                {i.name}
                            </Label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}