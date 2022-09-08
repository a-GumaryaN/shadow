import { FC } from "react";
import styled from "styled-components";

const Button: FC<{
  className?: string;
  children: any;
  onClick: Function;
  styles?: any;
}> = ({ className, children, onClick, styles }) => {
  return (
    <button style={styles} className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default styled(Button)`
  border: 1px solid black;
  background-color: 0;
  padding: 10px 25px;
  border-radius: 50px;

  & {
    color: black;
    background-color: white;
  }
  &:hover {
    background-color: black;
    color: white;
  }

  &.black {
    color: white;
    background-color: black;
  }
  &.black:hover {
    background-color: white;
    color: black;
  }
`;
