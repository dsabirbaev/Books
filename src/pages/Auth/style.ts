
import styled from 'styled-components';

interface StyledFlexProps {
    direction?: string;
    align?: string;
    justify?: string;
    column?: string;
}

const StyledFlex = styled.div<StyledFlexProps>`
    display:flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content:${props => props.justify || 'stretch'};
    column-gap: ${props => props.column || '0'};
    height: 100vh;
    width: 100vw;
    
`


const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   /* align-items: center;
   justify-content: center; */
   padding: 28px 28px;
   background-color: #fff;
   width: 430px;
   border-radius: 12px;
   h2{
    font-family: MulishBold;
    font-size: 36px;
    color: #151515;
    margin-bottom: 20px;
   }
`


const LinkSocial = styled.a`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    column-gap: 16px;
    border-radius: 4px;
    border: 1px solid #151515;
    padding: 10px 0px;
    margin-bottom: 10px;
    padding-left: 100px;
    span{
        font-family: MulishMedium;
        font-size: 16px;
        color: #151515;
    }
    
`

const DivOr = styled.div`
    margin: 20px 0px;
    font-size: 12px;
    color: #24272C;
    display: flex;
    align-items: center;
    column-gap: 2px;
    justify-content: center;
    span{
        background-color: #24272C;
        width: 180px;
        height: 1px;   
        display: block;   
    }

`

const Label = styled.label `
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span{
        font-family: MulishMedium;
        font-size: 14px;
        color: #151515;
    }
    input{
        width: 100%;
        outline: none;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
        padding: 14px 16px;
        box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);

        &::placeholder{
            color: #EBEBEB;
            font-size: 16px;
           
        }
    }
`

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    background-color: #6200EE;
    color:#fff;
    outline: none;
    border: none;
    padding: 10px 24px;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

const Info = styled.p`
        font-family: MulishLight;
        font-size: 14px;
        color: #333;
        margin-top: 12px;
`

export { StyledFlex, Wrapper, LinkSocial, DivOr, Label, Button, Form, Info};