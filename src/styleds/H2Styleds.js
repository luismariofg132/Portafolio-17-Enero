import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 2.5em;
font-weight: 400;
letter-spacing: 8px;
margin: 0.5em 0 0 0;
color: #448AFF;
`;

export const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>