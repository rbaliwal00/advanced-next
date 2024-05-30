import React from "react";

import { compose } from "@common";
import ThemeCard from "@components/form/Themecard";
import { withGetOne } from "../operations";



const Container = (props) => {
    const {
        user,
        loadingUserData
        // router: { push },
    } = props;
    console.log("check  values herer----", user, loadingUserData)

    return <ThemeCard type={'supplier'} formDetails={user} />
};

export default compose(withGetOne)(Container);
