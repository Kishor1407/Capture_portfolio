import React, {useState} from "react";
import styled from "styled-components";
import {About} from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import {scrollReveal} from "../animation"

const FaqSection = () => {
 const [element, controls] = useScroll();
    return (
      <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
          <h2>Any Question <span> FAQ </span></h2>
          <AnimateSharedLayout>
          <Toggle title="How do i start?">
              <div className="answer">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae.
                  </p>
              </div>
          </Toggle>  
          <Toggle title="Daily Schedule">
              <div className="answer">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae.
                  </p>
              </div>
          </Toggle>
          <Toggle title="Diffrent payment methods">
              <div className="answer">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae.
                  </p>
              </div>
          </Toggle>
          <Toggle title="What products do you offer">   
              <div className="answer">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae.
                  </p>
              </div>
          </Toggle>
          </AnimateSharedLayout>
      </Faq>
    )
}

const Faq = styled(About)`
   display: block;
   span{
       display: block;
   }
   h2{
       padding-bottom: 1.5rem;
       font-weight: lighter;
       font-size: 3.5rem;
   }
   .faq-line{
       background: #cccccc;
       height: 0.2rem;
       margin: 2rem 0rem;
       width: 100%;
   }
   .question{
       padding: 0.5rem 0rem;
       cursor: pointer;  
   }
   .answer{
       padding: 0.5rem 0rem;
       p{
           padding: 0.5rem 0rem;
           font-size: 1rem;
       }
   }
`;


export default FaqSection;