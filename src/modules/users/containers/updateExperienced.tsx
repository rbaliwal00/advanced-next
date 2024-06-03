import React from "react";

import { compose } from "@common";
import { withInsert, withGetOne } from "../operations";
import ExperiencedForm from "@components/form/ExperiencedFlow";
import { CircularProgress } from "@mui/material";
import { transformObject, getUpdateFormValues } from "@components/form/utilities";

const Container = (props) => {
    const {
        insertUserAuth,
        user,
        loadingUserData
        //router: { push },
    } = props;

    const onSubmit = async (values) => {
        const newFormValues = getUpdateFormValues(values);
        //console.log("check modified values here---", newFormValues);
        const result = await insertUserAuth(newFormValues);
        console.log("check result received", result)
        //push("/posts"); // Change the path according to your routing structure
    };

    if (loadingUserData) return <CircularProgress />
    return <ExperiencedForm prefillData={transformObject(user).data} onSubmit={onSubmit} />;
};

export default compose(withInsert, withGetOne)(Container);
