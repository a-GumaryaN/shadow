import React from "react";
import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

const data: { id: number; icon: string; key: string; value: string }[] = [
  {
    id: 1,
    icon: "fa-phone",
    key: "Phone",
    value: "(0761) 654-123987",
  },
  {
    id: 2,
    icon: "fa-envelope",
    key: "Email",
    value: "info@yoursite.com",
  },
  {
    id: 3,
    icon: "fa-globe",
    key: "Website",
    value: "www.yoursite.com",
  },
  {
    id: 4,
    icon: "fa-map-marker",
    key: "Address",
    value: "99 S.t Jomblo Park Pekanbaru 28292. Indonesia",
  },
];

const ContactUsInfo = () => {
  return (
    <Container>
      <Title>contact</Title>

      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt.
      </Description>
      <ListContainer>
        <ul>
          {data.map(({ id, icon, key, value }) => {
            return (
              <IconItem key={id}>
                <Icon className={`fa ${icon}`} />
              </IconItem>
            );
          })}
        </ul>

        <ul>
          {data.map(({ id, icon, key, value }) => {
            return (
              <TitleItem key={id}>
                <Key>{key}</Key>
              </TitleItem>
            );
          })}
        </ul>
        <ul>
          {data.map(({ id, icon, key, value }) => {
            return <ValueItem key={id}>{":" + value}</ValueItem>;
          })}
        </ul>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (min-width: 687px) {
    max-width: 400px;
  }
`;

const Description = styled.p`
  color: #666666;
  font-weight: 300;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

const Icon = styled.i`
  color: #666666;
  margin-right: 10px;
`;

const Key = styled.p`
  color: #666666;
  margin-right: 30px;
`;

const Item = styled.li`
  margin-bottom: 10px;
`;

const IconItem = styled(Item)`
  margin-bottom: 10px;
`;

const TitleItem = styled(Item)`
  margin-bottom: 10px;
  font-weight: 600;
`;

const ValueItem = styled(Item)`
  margin-bottom: 10px;
  font-weight: 200;
`;

const ListContainer = styled.div`
  display: flex;
`;

const Title = styled(PureTitle)`
  margin-bottom: 30px;
`;

export default ContactUsInfo;
