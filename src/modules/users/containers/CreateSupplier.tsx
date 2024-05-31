import React from "react";

import { compose } from "@common";
import SupplierForm from "@components/form/SupplierFlow";
import { withCreatePost } from "../operations";

const Container = (props) => {
    const {
        createUserProfile,
        // router: { push },
    } = props;

    const onSubmit = async (object) => {
        await createUserProfile(object);
        // push("/posts");
    };
    return <SupplierForm {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
