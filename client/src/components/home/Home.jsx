import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    const navigate = useNavigate();
    
    const welcomeMsgPart1 = "After an unsuccessful dog walking business, brothers Camillo and Giuseppe decided to throw their hand into crafting artisan sandwiches from their Sicilian hearts.";
    const welcomeMsgPart2 = "Fast-forward forty years to today, and they are now bringing their sandwiches to customers digitally. Try from the many different variations upon which a sandwich could be made!";

    return(
        <div className="home-page">
            <div className="home-card">
                {welcomeMsgPart1}
                <br /><br />
                {welcomeMsgPart2}
            </div>
            <div className="home-btn-card">
                <div>
                    <Button style={{ border: '3.5px solid black' }} className="home-btn" onClick={() => navigate("/sandwichscreen")}>
                        Make your very own sandwich!
                    </Button>
                </div>
            </div>
        </div>
    )
}