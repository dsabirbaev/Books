


import { Link } from "react-router-dom";
import { StyledFlex, Wrapper, LinkSocial, DivOr, Label, Button, Form, Info } from "./style";
import { facebook, google } from "../../assets/index";

const SignIn = () => {
    return (
        <StyledFlex align="center" justify="center">
            <Wrapper>
                <h2>Sign Up</h2>
                <LinkSocial href="#">
                    <img src={google} alt="google" />
                    <span>Continue with Google</span>
                </LinkSocial>

                <LinkSocial href="#">
                    <img src={facebook} alt="facebook" />
                    <span>Continue with Facebook</span>
                </LinkSocial>

                <DivOr>
                    <span></span> OR <span></span>
                </DivOr>

                <Form>

                    <Label htmlFor="name">
                        <span>Your name</span>
                        <input type="text" id="name" placeholder="Name: " />
                    </Label>
                    <Label htmlFor="email">
                        <span>Your email</span>
                        <input type="text" id="email" placeholder="Email: " />
                    </Label>
                    <Label htmlFor="key">
                        <span>Your key</span>
                        <input type="text" id="key" placeholder="Key: " />
                    </Label>
                    <Label htmlFor="secret">
                        <span>Your secret</span>
                        <input type="text" id="secret" placeholder="Secret: " />
                    </Label>
                    <Button type="submit">
                        SUBMIT
                    </Button>

                    <Info>Already signed up? Go to <Link to="/signin">sign in</Link>.</Info>
                </Form>
            </Wrapper>
        </StyledFlex>
    );
};

export default SignIn;