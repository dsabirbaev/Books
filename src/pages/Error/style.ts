
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    row-gap: 20px;
    height: 100vh;
    width: 100vw;
    
`

const Button = styled.button`
    border-radius: 4px;
    border: 1px solid #6200EE;
    background-color: #fff;
    padding: 10px 24px;
    color: #6200EE;
    transition: all 0.3s ease;
    font-size: 16px;        
    font-family: MulishMedium;
    cursor: pointer;
    &:hover{
        background-color: #6200EE;
        color: #fff;
    }
    &:hover a{
        color: #fff;
    }
`

const BtnWrapper = styled.div`
    display:flex;
    align-items: center;
    column-gap: 12px;
`
export {Wrapper, Button, BtnWrapper};