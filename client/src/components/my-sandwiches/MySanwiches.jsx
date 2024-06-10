import { useEffect, useState } from "react"
import { getSandwichesByUserId } from "../../managers/sandwichManager.js"

export const MySandwiches = ({loggedInUser}) => {
    const [userSandwiches, setUserSandwiches] = useState([])

    useEffect(() => {
        getSandwichesByUserId(loggedInUser?.id).then(setUserSandwiches)
    }, [loggedInUser])
    
    return(
        <div>
            Connected!!!
        </div>
    )
}