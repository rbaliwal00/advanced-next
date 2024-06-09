import React from "react";
import UpdateRecruiter from "@modules/users/containers/updateRecruiter";
import { SuperTokensWrapper } from "@modules/look";

const UpdateContainer = (props) => {
    return ( 
        <SuperTokensWrapper>
            <UpdateRecruiter {...props} />
        </SuperTokensWrapper>
    )
}

export default UpdateContainer;