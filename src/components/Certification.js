import React from "react";
import { H2Styled } from "../styleds/H2Styleds";
import { EduStyledP } from "../styleds/EducationStyleds";

export const Certification = () => {
    return (
        <div>
            <H2Styled name="Certificaciones"></H2Styled>
            <div className="Certificaciones-container">
                <EduStyledP>Tecnico en programacion de software</EduStyledP>
                <h1>SENA - <span>2021</span></h1>
            </div>
        </div>
    )
}