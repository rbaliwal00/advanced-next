import type { ReactElement } from "react";

import type { NextPageWithLayout } from "./_app";
import Layout from "./layout";
import LanguageSelection from "@components/language-selection";
import { LanguageData } from "@modules/common/util";
import { SuperTokensWrapper } from "@modules/look";

const Page: NextPageWithLayout = () => {
  // return <LanguageSelection languageData={LanguageData} />;
  return (
    <SuperTokensWrapper>
      <LanguageSelection languageData={LanguageData} />
    </SuperTokensWrapper>
  
  )
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
