import styled from "styled-components";
import PureBotton from "../PureBotton/PureBotton";
import PureTitle from "../PureTitle/PureTitle";

export const Section = styled.div`
  width: 100%;
  background-color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 40px 25px;
  margin: auto;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 30px;
  letter-spacing: 1px;
  line-height: 30px;
  color: #666666;
`;

export const Subtitle = styled.h4`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  padding-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;


export const Title = styled(PureTitle)`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: 5px;
`;

export const Botton = styled(PureBotton)`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  texttransform: uppercase;
  padding: 10px 30px;
`;