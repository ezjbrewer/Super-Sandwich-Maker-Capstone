import { Label } from "reactstrap"

export const renderToppingChoices = ({setCurrentSandwich}, currentViewIngredients) => {
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
            </div>
        </div>
    )
}