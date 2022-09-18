import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div<{ align: "rtl" | "ltr" }>`
  width: 100%;
  display: flex;

  justify-content: space-between;

  flex-direction: ${({ align }) => (align === "rtl" ? "row-reverse" : "row")};
`;

export const ProgressTitle = styled.div`
  font-size: 14px;
`;
export const ProgressPercent = styled.div`
  color: #777;
  letter-spacing: 1px;
transition: all 0.7s ease;
text-rendering: optimizeLegibility;
`;

export const ProgressBar = styled.div<{ align: "rtl" | "ltr" }>`
  background-color: #eee;
  width: 100%;
  height: 9px;
  display: flex;
  flex-direction: ${({ align }) => (align === "rtl" ? "row-reverse" : "row")};
`;

export const Progress = styled.div`
  height: 100%;
  background-color: black;
  transition: all 0.7s ease;
`;
