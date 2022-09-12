import styled from "styled-components";

export const Container = styled.footer`
  background-color: black;
  padding: 40px 30px;
`;

export const FooterLogo = styled.img`
  margin-bottom: 10px;
`;

export const Content = styled.div`
  max-width: 456px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  color: #848484;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 10px;
  margin-bottom: 40px;
`;

export const SocialMedias = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > li {
    margin: 0 10px;
  }
  & li a i{
    color: white;
  }
`;

export const CopyRight = styled.p`
  color: #848484;
  font-size: 12px;
  letter-spacing: 1px;
`;
