import React from "react";

import { compose } from "@common";
import { withInsert, withGetOne } from "../operations";
import ExperiencedForm from "@components/form/ExperiencedFlow";
import { CircularProgress } from "@mui/material";
import { transformObject, getUpdateFormValues } from "@components/form/utilities";
import { SuperTokensWrapper } from "@modules/look";
import { useRouter } from "next/router";

const Container = (props) => {
    const {
        insertUserAuth,
        user,
        loadingUserData
        //router: { push },
    } = props;

    const router = useRouter()

    const onSubmit = async (values) => {
        const newFormValues = getUpdateFormValues(values);
        const result = await insertUserAuth(newFormValues);
        if(result){
            router.push('/users/get-one');
        }
    };

    if (loadingUserData) return <CircularProgress />
    return <SuperTokensWrapper>
                <ExperiencedForm prefillData={transformObject(user).data} onSubmit={onSubmit} />;
            </SuperTokensWrapper>
};

export default compose(withInsert, withGetOne)(Container);
