import React from "react";
import { EduStyledP } from "../styleds/EducationStyleds";
import { H2Styled } from "../styleds/H2Styleds";

export const Education = () => {
    return (
        <div>
            <H2Styled name="Mis estudios"></H2Styled>
            <div className="Education-container">
                <div className="Ecucation-item">
                    <h1>Academia Geek - <span>2022</span></h1>
                    <EduStyledP>BootCamp Desarrollo Front End</EduStyledP>
                    <h1>UTP - <span>2022</span></h1>
                    <EduStyledP>Ingenieria de sistemas</EduStyledP>
                </div>
            </div>
        </div >
    )
}