import styled from 'styled-components';

const Nav = styled.nav `
    display:flex;
    justify-content:space-between;
    align-items: center;
    height: 72px;
  
`

const StyledFlex = styled.div `
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
const StyledFont = styled.p `
    font-family: ${props => props.font || 'MulishRegular'};
    font-size: ${props => props.size || '14px'};
    color: ${props => props.color || '#fff'};
    letter-spacing: ${props => props.space || '0px'};
    span{
        color: #6200EE;
    }
`

export {
    Nav,
    StyledFlex,
    StyledFont
};