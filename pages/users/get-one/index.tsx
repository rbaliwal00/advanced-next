import { SuperTokensWrapper } from "@modules/look";
import { GetOne } from "@modules/users";

const Get_One = (props) => {
  return (
    <SuperTokensWrapper>
      <GetOne {...props} />
    </SuperTokensWrapper>
  );
};

export default Get_One;
