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
        localStorage.setItem("currId", result.id);
        // push("/posts");
    };
    return <RecruiterForm {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
