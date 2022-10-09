import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  overflow: hidden;
`;

export const SlideConainer = styled.div<{
  contentsNumbers: number;
  slideNumber: number;
}>`
  width: ${({ contentsNumbers }) => contentsNumbers * 100 + "%"};
  position: relative;
  right: ${({ slideNumber }) => (slideNumber - 1) * 100 + "%"};
  display: flex;
  overflow: hidden;
  margin-bottom: 40px;
  transition: all 1s ease;
`;

export const Slide = styled.div``;

export const Description = styled.p`
  color: white;
  margin-bottom: 30px;
  line-height: 30px;
  letter-spacing: 1px;
`;

export const Title = styled.h4`
  color: white;
  font-weight: 400;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

export const Subtitle = styled.p`
  color: white;
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 13px;
  letter-spacing: 3px;
  color: #999;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled.div<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: ${({ isActive }) => (isActive ? "white" : 0)};
  margin-right: 20px;
`;