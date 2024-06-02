import React from "react";

import { compose } from "@common";
import { withGetOne } from "../operations";
import FilledCard from "@components/form/FilledCard";
import { CircularProgress } from "@mui/material";


const Container = (props) => {
    const {
        user,
        loadingUserData
        // router: { push },
    } = props;

    if (loadingUserData) return <CircularProgress />
    return <FilledCard type={'recruiter'} formDetails={user} />
};

export default compose(withGetOne)(Container);
