import React from "react";
//animation
import { motion } from "framer-motion"; 
import {pageAnimation, titleAnim} from "../animation";
import styled from "styled-components";


const ContactUs = () => {
    return (
      <ContactStyle  exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}> 
         <Title>
           <Hide>
             <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
           </Hide>
         </Title>
         <div>           
            <Hide>
               <Social variants={titleAnim}>
                 <Circle />
                    <h2>Send us a message.</h2>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnim}>
                 <Circle />
                    <h2>Send an email.</h2>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnim}>
                 <Circle />
                    <h2>Send a greet.</h2>
               </Social>
            </Hide>
         </div>
      </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
   padding: 5rem 10rem;
   color: #353535;
   min-height: 90vh;
   @media (max-width: 800px){
     justify-content: center;
   }
`;

const Title = styled.div`
 margin-bottom: 4rem;
 color: black;
`
const Hide = styled.div`
 overflow: hidden;
`;

const Circle = styled.div`
 border-radius: 50%;
 width: 3rem;
 height: 3rem;
 background: #353535;
 @media (max-width: 1300px){
    width:2rem;
    height: 2rem;
 }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
  }
  @media (max-width: 800px){
      h2{
         font-size: 2.5rem; 
      } 
   }
   @media (max-width: 550px){
      h2{
         font-size: 2rem; 
      } 
   }
`;

export default ContactUs;