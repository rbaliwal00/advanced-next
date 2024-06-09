import React from "react";

import { compose } from "@common";
import { withInsert, withGetOne } from "../operations";
import ExperiencedForm from "@components/form/ExperiencedFlow";
import { CircularProgress } from "@mui/material";
import { transformObject, getUpdateFormValues } from "@components/form/utilities";
import { useRouter } from "next/router";

const Container = (props) => {
    const {
        insertUserAuth,
        user,
        loadingUserData,
        refetchUserData
        //router: { push },
    } = props;

    // React.useEffect(() => {
    //     console.log("props---+", props);
    //     refetchUserData();
    // }, []);

    const router = useRouter()

    const onSubmit = async (values) => {
        const newFormValues = getUpdateFormValues(values);
        const result = await insertUserAuth(newFormValues);
        setTimeout(() => router.push('/users/get-one'), 500);
        
    };

    if (loadingUserData) return <CircularProgress />
    return <ExperiencedForm {...props} prefillData={transformObject(user)} onSubmit={onSubmit} />;
};

export default compose(withInsert, withGetOne)(Container);
