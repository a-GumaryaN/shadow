import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";

export const Container = styled.section<{ image: string }>`
background-image: ${({ image }) => `url(${image})`};
padding: 80px 100px;

@media only screen and (max-width:567px) {
  display:none;
}
`;

export const Wrapper = styled.div`
display: flex;
&:before{
  content: "\f10e";
  color: white;
  font-size: 30px;
  font-family: FontAwesome;
  margin-right: 15px;
}
`;

export const Title = styled(PureTitle)`
color: white;
font-size: 35px;
margin-bottom: 30px;
`;