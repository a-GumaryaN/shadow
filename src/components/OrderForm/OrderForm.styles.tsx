import styled from "styled-components";
import PureBotton from "../PureBotton/PureBotton";
import PureTitle from "../PureTitle/PureTitle";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width:687px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled(PureTitle)`
  margin-bottom: 30px;
`;

export const PureInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid #eee;
  outline: 0;
  &:focus {
    border: 2px solid #843534;
  }
`;

export const Error = styled.p`
  color: red;
`;

export const InutBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Botton = styled(PureBotton)`
  text-transform: uppercase;
  margin-top: 30px;
  width: 200px;
  background-color: #666;
  border: 1px solid #666;
  font-weight: 600;
  color: white;
  &:hover {
    color: #666;
    background-color: white;
  }
`;

export const MessageBox = styled.textarea`
width: 100%;
  border: 2px solid #eee;
  padding: 16px;
  outline: 0;
  resize: none;
  &:focus {
    border: 2px solid #843534;
  }
`;
