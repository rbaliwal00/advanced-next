import React from "react";
import UpdateSupplier from "@modules/users/containers/updateSupplier";
import { SuperTokensWrapper } from "@modules/look";

const UpdateContainer = (props) => {
    return (
        <SuperTokensWrapper>
            <UpdateSupplier {...props} />
        </SuperTokensWrapper>
    )
}

export default UpdateContainer;