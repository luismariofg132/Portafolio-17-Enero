import React from "react";
import '../styles/About.css'
import { AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyle } from '../styleds/AboudStyleds'


const About = () => {
    return (
        <AboutStyle className="About">
            <div className="About-container">
                <AboutAvatar className="About-avatar">
                    <figure>
                        <AboutImg src="https://cdn-icons-png.flaticon.com/512/1783/1783695.png" alt="Mi Avatar" />
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>Luis Mario Franco Gómez</AboutH2>
                </AboutName>
                <AboutProfession className="About-profession">
                    <p>Aprendiz: Desarrollo Front End</p>
                </AboutProfession>
                <AboutLocation className="About-description">
                    <p>Filandia - Quindio</p>
                </AboutLocation>
            </div>
        </AboutStyle>
    )
}

export default About