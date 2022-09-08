import styled from "styled-components";

// export const ParalaxImage = styled.div`

// `;
export const ParalaxImage = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props:{image:string})=>props.image || ""};
  position: fixed;
  z-index: -10;
`;