import UpdateExperienced from "@modules/users/containers/updateExperienced";
import { SuperTokensWrapper } from "@modules/look";

const UpdateContainer = (props) => {
    return ( 
    <SuperTokensWrapper>
        <UpdateExperienced {...props} />
    </SuperTokensWrapper>
    )
}

export default UpdateContainer;