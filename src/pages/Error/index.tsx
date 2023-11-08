import { Link } from "react-router-dom";
import { error } from "../../assets";
import { Wrapper, Button, BtnWrapper } from "./style";

const index = () => {
    return (
        <Wrapper>
            <img src={error} alt="error" />
            <BtnWrapper>
                <Button><Link to="/">Go Home Page</Link></Button>
                <Button>Reload Page</Button>
            </BtnWrapper>
        </Wrapper>
    );
};

export default index;