
import { logo, bell, search, user } from "../../assets/index";
import {Nav, StyledFlex, StyledFont} from "./style.js";

const index = () => {
    return (
        <header>
            <div className="container">
                <Nav>
                    <StyledFlex align="center" column="24px">
                        <StyledFlex align="center" column="20px">
                            <a href="#"><img src={logo} alt="logo" /></a>
                            <StyledFont space="0.576px" font="MulishBold" size="18px"><span>Books</span> List</StyledFont>   
                        </StyledFlex>
                        <StyledFlex align="center" column="12px">
                            <img src={search} alt="search" />
                            <input type="text" placeholder="Search for any training you want "/>
                        </StyledFlex>
                    </StyledFlex>
                    <StyledFlex align="center" column="24px">
                        <img src={bell} alt="bell" />
                        <img src={user} alt="user" />
                    </StyledFlex>

                    
                </Nav>
            </div>
        </header>
    );
};

export default index;