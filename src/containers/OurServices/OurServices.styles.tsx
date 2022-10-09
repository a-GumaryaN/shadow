import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";

export const Container = styled.section`
padding: 100px 20px;
`;

export const Wrapper = styled.div`
max-width: 1000px;
margin: auto;
`;

export const Title = styled(PureTitle)`
margin-bottom: 60px;
`;

export const CardContainer = styled.div`
display: grid;

gap: 30px;

align-items: center;

grid-template-columns: auto;

@media only screen and (min-width: 687px) {
  grid-template-columns: auto auto;
}

@media only screen and (min-width: 992px) {
  grid-template-columns: auto auto auto;
}
`;