import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

export const Container = styled.div`
  display: flex;
`;

export const Icon = styled.i`
  font-size: 30px;
  margin-top: 3px;
  margin-right: 30px;
`;

export const Wrapper = styled.div`
max-width: 350px;
`;

export const Title = styled(PureTitle)`
font-size: 18px;
margin-bottom: 20px;
`;
export const Description = styled.p`
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 1px;
color: #999;
`;