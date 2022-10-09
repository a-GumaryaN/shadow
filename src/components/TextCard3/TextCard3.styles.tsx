import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;

export const Number = styled.p`
font-size: 100px;
font-weight: 400;
color: #dedede;
`;

export const HeaderTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Icon = styled.i`
font-size: 35px;
margin-bottom: 15px;
`;

export const Title = styled(PureTitle)`
font-weight: 700;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Description= styled.p`
color: #666666;
font-weight: 200;
letter-spacing: 1px;
text-align: center;

`;