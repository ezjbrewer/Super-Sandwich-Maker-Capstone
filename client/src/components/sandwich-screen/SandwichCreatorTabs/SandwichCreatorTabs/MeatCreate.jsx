import { Label } from "reactstrap"

export const renderMeatChoices = ({setCurrentSandwich}, currentViewIngredients) => {
    
    
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
            </div>
        </div>
    )
}