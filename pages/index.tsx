import type { ReactElement } from "react";

import type { NextPageWithLayout } from "./_app";
import Layout from "./layout";
import LanguageSelection from "@components/language-selection";
import { LanguageData } from "@modules/common/util";

const Page: NextPageWithLayout = () => {
  return <LanguageSelection languageData={LanguageData} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
