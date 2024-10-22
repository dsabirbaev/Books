import styled from 'styled-components';



const Nav = styled.nav `
    display:flex;
    justify-content:space-between;
    align-items: center;
    height: 72px;
  
`

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

    input{
        background-color: transparent;
        border:none;
        outline:none;
        width: 264px;
        color: #fff;
        padding: 2px;
        &::placeholder {
            color: #FEFEFE;
            font-size: 16px;
            letter-spacing: 0.16px;
            font-family: MulishRegular;
        }
    }
    
    
`

interface FontProps {
    font?: string;
    size?: string;
    color?: string;
    space?: string;
}
const StyledFont = styled.p<FontProps>`
    font-family: ${props => props.font || 'MulishRegular'};
    font-size: ${props => props.size || '14px'};
    color: ${props => props.color || '#fff'};
    letter-spacing: ${props => props.space || '0px'};
    span{
        color: #6200EE;
    }
`

const Login = styled.a`
    width: 120px;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 16px;        
    font-family: MulishMedium;
    transition: all 0.3s ease;
    &:hover{
        background-color: #6200EE;
        color: #fff;
    }
`

export {
    Nav,
    StyledFlex,
    StyledFont,
    Login
};