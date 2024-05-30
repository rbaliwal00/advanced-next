import React from "react";

import { compose } from "@common";
import RecruiterForm from "@components/form/HirerFlow";
import { withCreatePost } from "../operations";

const Container = (props) => {
    const {
        createUserProfile,
        // router: { push },
    } = props;

    const onSubmit = async (object) => {
        const result = await createUserProfile(object);
        console.log("check here--- result api", result);
        // push("/posts");
    };
    return <RecruiterForm {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
