import styled from "styled-components";

export const SkillsContainer = styled.section`
width: 100%;
background-color: white;
margin: auto;
padding: 100px 10px;
& > h3 {
  margin-bottom: 60px;
}
`;

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 687px) {
  flex-direction: column;
}
`;

export const ProgressContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

&:nth-of-type(1) {
  align-items: flex-end;
  margin-right: 20px;
}

& > h4 {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 2px;
}

& > * {
  margin-bottom: 40px;
}
`;