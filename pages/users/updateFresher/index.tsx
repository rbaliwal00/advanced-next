import UpdateOnce from "@modules/users/containers/updateOnce";
import { SuperTokensWrapper } from "@modules/look";

const UpdateContainer = (props) => {
    return (
        <SuperTokensWrapper>
            <UpdateOnce {...props}/>
        </SuperTokensWrapper>
    )
}

export default UpdateContainer;