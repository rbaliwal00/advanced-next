import React from "react";

import { compose } from "@common";
import ThemeCard from "@components/form/Themecard";
import { withGetUser } from "../operations";



const Container = (props) => {
    const {
        data: user,
        // router: { push },
    } = props;
    console.log("cehck datae---", user)

    return <div />
};

export default compose(withGetUser)(Container);
