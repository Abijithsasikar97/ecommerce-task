import React from "react";
import styled from "styled-components";

const TitleEle = styled.h4`
  color: ${(props) => props.color};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = ({ color, content }) => {
  return <TitleEle color={color}>{content}</TitleEle>;
};

export default Title;
