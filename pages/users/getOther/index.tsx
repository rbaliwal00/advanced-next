import { GetOther } from "@modules/users";
import { SuperTokensWrapper } from "@modules/look";

const Get_Other = (props) => {
    return (
        <SuperTokensWrapper>
            <GetOther {...props} />
        </SuperTokensWrapper>
    )
}

export default Get_Other;
