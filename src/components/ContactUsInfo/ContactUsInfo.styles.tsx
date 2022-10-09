import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

export const Container = styled.div`
@media only screen and (min-width: 687px) {
  max-width: 400px;
}
`;

export const Description = styled.p`
color: #666666;
font-weight: 300;
font-size: 14px;
line-height: 25px;
letter-spacing: 1px;
margin-bottom: 30px;
`;

export const Icon = styled.i`
color: #666666;
margin-right: 10px;
`;

export const Key = styled.p`
color: #666666;
margin-right: 30px;
`;

export const Item = styled.li`
margin-bottom: 30px;
`;

export const IconItem = styled(Item)`
  margin-bottom: 30px;
`;

export const TitleItem = styled(Item)`
margin-bottom: 30px;
font-weight: 600;
`;

export const ValueItem = styled(Item)`
margin-bottom: 30px;
font-weight: 200;
`;

export const ListContainer = styled.div`
display: flex;
`;

export const Title = styled(PureTitle)`
margin-bottom: 30px;
`;