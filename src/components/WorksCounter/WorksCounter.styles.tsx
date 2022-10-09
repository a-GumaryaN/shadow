import styled from "styled-components";

export const Container = styled.div<{ image: string }>`
background-image: ${({ image }) => `url(${image})`};
padding: 100px;
`;

export const Wrapper = styled.div`
max-width: 1000px;
justify-content: space-around;
display: grid;

gap: 40px;

grid-template-columns: auto;

@media only screen and (min-width:687px) {
    grid-template-columns: auto auto;
    
}

@media only screen and (min-width:992px) {
    grid-template-columns: auto auto auto auto;
    
}



`;