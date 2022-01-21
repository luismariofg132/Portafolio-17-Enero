import React from "react";
import { H2Styled } from "../styleds/H2Styleds";
import { StyledDivWrap, StyledLabel } from "../styleds/AbilitiesStyled";

export const Abilities = () => {
    return (
        <div>
            <H2Styled name="Habilidades"></H2Styled>
            <StyledDivWrap>
                <StyledLabel>
                    <p>HTML</p>
                    <progress max="100" value="75"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>CSS</p>
                    <progress max="100" value="70"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>JavaScript</p>
                    <progress max="100" value="80"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>ReactJS</p>
                    <progress max="100" value="30"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>PHP</p>
                    <progress max="100" value="40"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>MySQL</p>
                    <progress max="100" value="70"></progress>
                </StyledLabel>
                <StyledLabel>
                    <p>Python</p>
                    <progress max="100" value="20"></progress>
                </StyledLabel>
            </StyledDivWrap>
        </div>
    )
}