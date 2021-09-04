import { useEffect, useState } from "react";

const LoggedInAsUser = ({children, currentUser}) => {
    const [currentUserActive, setCurrentUserActive] = useState(false);

    useEffect(() => {
        if(!currentUser) setCurrentUserActive(false)
        else setCurrentUserActive(true)
    }, [currentUser])

    if(currentUserActive) return children[0]
    else return children[1]

}

export default LoggedInAsUser;