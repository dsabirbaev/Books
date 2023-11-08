import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledFlex, Wrapper, LinkSocial, DivOr, Label, Button, Form, Info } from "./style";
import { facebook, google } from "../../assets/index";
import userApi from "../../service/auth/userAPI";
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [key, setKey] = useState("");
    const [secret, setSecret] = useState("");


    const registerForm = (e) => {
        e.preventDefault()
        const info = {
            name,
            email,
            key,
            secret
        }
        if (info.name.trim().length && info.email.trim().length && info.key.trim().length && info.secret.trim().length){
            userApi.register(info).then((res) => {
                console.log(res)

                if(res.status === 200){
                    toast.success("Account created!", { autoClose: 1000 });
                    navigate("/signin");
                }
            }).catch((err) => {
                toast.error(`${err?.response?.data?.message}`, { autoClose: 1000 });
               
            })
            
        }else{
            toast.warn("Should fill all the fields!", { autoClose: 1000 });
        }
        
    }


    return (
        <StyledFlex align="center" justify="center">
            <ToastContainer />
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

                <Form onSubmit={(e) =>registerForm(e)}>

                    <Label htmlFor="name">
                        <span>Your name</span>
                        <input onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Name: " />
                    </Label>
                    <Label htmlFor="email">
                        <span>Your email</span>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" placeholder="Email: " />
                    </Label>
                    <Label htmlFor="key">
                        <span>Your key</span>
                        <input onChange={(e) => setKey(e.target.value)} type="text" id="key" placeholder="Key: " />
                    </Label>
                    <Label htmlFor="secret">
                        <span>Your secret</span>
                        <input onChange={(e) => setSecret(e.target.value)} type="text" id="secret" placeholder="Secret: " />
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

export default SignUp;