import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";

export const Container = styled.section`
padding: 100px 10px;
`;

export const Title = styled(PureTitle)`
margin-bottom: 30px;
`;

export const CardWrapper = styled.div`
display: grid;
grid-template-columns: auto;
justify-content: space-around;
gap: 30px;


@media only screen and (min-width:687px) {
grid-template-columns: auto auto;
}

@media only screen and (min-width:992px) {
grid-template-columns: auto auto auto auto;
}

`;
