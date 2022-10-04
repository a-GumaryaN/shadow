import React from "react";
import styled from "styled-components";
import { ourClients } from "../../constants/images";

const OurClients = () => {
  return (
    <Container>
        <Title>Take a look our clients</Title>
      <Subtitle>Big Brands trust us</Subtitle>
      <ListContainer className="wrapped">
        {ourClients.map((item) => {
          return (
            <li>
              <img src={item} alt="" />
            </li>
          );
        })}
      </ListContainer>
    </Container>
  );
};

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 0;
`;

const Title = styled.h4`
font-size: 30px;
letter-spacing: 1px;
margin-bottom: 30px;
`;

const Subtitle = styled.h4`
font-size: 20px;
letter-spacing: 2px;
font-weight: 200;
margin-bottom: 30px;
`;

const ListContainer = styled.ul`
display: grid;

grid-template-columns: auto ;

@media only screen  and (min-width:567px){
    grid-template-columns: auto auto  auto  ;
    
}

@media only screen  and (min-width:992px){
    grid-template-columns: auto auto  auto auto  auto auto;
    
}

`;

const ItemList = styled.li``;

export default OurClients;
