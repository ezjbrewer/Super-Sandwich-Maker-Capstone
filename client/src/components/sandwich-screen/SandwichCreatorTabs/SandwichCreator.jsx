import { Button } from "reactstrap"

export const SandwichCreator = ({setCurrentSandwich}) => {
    return(
        <div className="sandwich-create-view">
            <div className="tab-container">
                <div className="tab-options">
                    <Button>
                        Bread
                    </Button>
                    <Button>
                        Meats
                    </Button>
                    <Button>
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

            </div>
            <div className="sandwich-display-container">

            </div>
        </div>
    )
}