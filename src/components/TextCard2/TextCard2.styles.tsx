import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width:687px){
    position: relative;
    &:nth-of-type(even){
      left: 60px;
    }
    
    &:nth-of-type(odd){
      left: -60px;
    }
  }
`;

export const Icon = styled.i`
  color: white;
  font-size: 27px;
  margin-right: 20px;
  margin-top: 6px;
`;

export const Wrapper = styled.div``;

export const Number = styled.h4`
  color: white;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: white;
  max-width: 30px;
  letter-spacing: 2px;
`;