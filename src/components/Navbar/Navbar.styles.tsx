import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-components";

export const Nav = style.nav`
width:100%;
display:flex;
justify-content:space-between;
padding:10px 80px;
align-items:center;
position:fixed;
background-color:white;
`;

export const NavMenu = style.ul`
display:flex;
justify-content:space-around;

`;

export const NavItem = style.li`
margin: 0 10px;

& a{
    color:#333;
    text-transform:uppercase;
    font-size:13px;
}

&:hover& a {
    color:#858585
}

@media only screen and (max-width:768px){
    display:none;
}

`;

export const SocialMedias = style.ul`
display:flex;
`;

export const SocialMedia = styled(Link)`
margin: 0 10px;
@media only screen and (max-width:768px){
    display:none;
}
`;


export const Logo=styled(Link)`
width:120px;

& img{
    width: 100%;
}
`;