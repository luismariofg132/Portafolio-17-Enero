import React from "react";
import styled from "styled-components";
import { Abilities } from "../components/Abilities";
import About from "../components/About";
import { Certification } from "../components/Certification";
import { Education } from "../components/Education"

const StyledPadre = styled.div`
display: grid;
grid-template-columns: 35vw 65vw;
`

const StyledDiv = styled.div`
   display: flex;
   margin: 0;
   height: 100vh;
   justify-content: center;
   align-items: center;
   font-family: system-ui;
   color: #757575;
   font-size: 1.3em;
   text-shadow: 1px 1px rgba(0,0,0,0.5);
`

const StyledDivInfo = styled.div`
    display: flex;
    flex-direction: column;
   margin: 0;
   height: 100vh;
   justify-content: flex-start;
   font-family: system-ui;
   color: #757575;
   font-size: 1em;
   text-shadow: 1px 1px rgba(0,0,0,0.5);
`

// const StyledP = styled.p`
//     color: #f5e960;
//     padding: .15em .4em;
//     background: #dfb2f4;
//     border-radius: 20px;
//     border: 2px solid #f2f5ff;
// `

const App = () => {
    return (
        <StyledPadre>
            <StyledDiv>
                <About />
            </StyledDiv>
            <StyledDivInfo>
                <Education />
                <Certification />
                <Abilities />
            </StyledDivInfo>
        </StyledPadre>
    )
}

export default App