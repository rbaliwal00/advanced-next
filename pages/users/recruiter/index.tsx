import React from "react";
import { CreateRecruiter } from "@modules/users";
import { SuperTokensWrapper } from "@modules/look";

const RecruiterParentForm = (props) => {
    return ( 
        <SuperTokensWrapper isProfileCreation={true}
            redirectIfLoggedIn={true}
            auth={true}>
            <CreateRecruiter {...props}/>
        </SuperTokensWrapper>
    )
}

export default RecruiterParentForm;