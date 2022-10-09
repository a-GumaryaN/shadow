import React from "react";
import {
  ValueItem,
  Container,
  Description,
  Icon,
  IconItem,
  Key,
  ListContainer,
  Title,
  TitleItem,
} from "./ContactUsInfo.styles";

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

export default ContactUsInfo;
