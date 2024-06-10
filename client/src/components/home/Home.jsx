import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    
    const welcomeMsgPart1 = "After an unsuccessful dog walking business, brothers Camillo and Giuseppe decided to throw their hand into crafting artisan sandwiches from their Sicilian hearts.";
    const welcomeMsgPart2 = "Fast-forward forty years to today, and they are now bringing their sandwiches to customers digitally. Try from the many different variations upon which a sandwich could be made!";
    
    const seeThisVariable = "This variable is to establish whether or not I can make a pull request within a created branch and merge that pull request."

    return(
        <div>
            <div className="welcome-info">
                {welcomeMsgPart1}
                <br /><br />
                {welcomeMsgPart2}
            </div>
            <div className="create-sandwich-btn-container">
                <div>
                    <Button onClick={() => navigate("/sandwichscreen")}>
                        Make your very own sandwich!
                    </Button>
                </div>
            </div>
        </div>
    )
}