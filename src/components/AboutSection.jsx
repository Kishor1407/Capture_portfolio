 import React from "react";
 import home1 from "../img/home1.png";
 import { About, Description, Image, Hide } from "../styles";
 //Framer motion
 import { motion } from "framer-motion";

 const AboutSection = () => {

    // const titleAnim = {
    //     hidden: {opacity:0},
    //     show: {opacity:1, transition:{duration:2}}
    // }
    // const container = {
    //     hidden: {x:100},
    //     show: {x:0, transition:{duration:0.75, ease:"easeOut", staggerChildren:0.75}}
    // }

     return(
       <About>
           <Description>
             {/* <motion.div variants={container}  initial="hidden" animate="show" className="title"> */}
             <motion.div className="title">
                 <Hide>
                     <motion.h2>We work to make </motion.h2>
                 </Hide>
                 <Hide>
                     <motion.h2>your <span>dream</span> come </motion.h2>
                 </Hide>
                 <Hide>
                     <motion.h2 >true. </motion.h2>
                 </Hide>
             </motion.div>
             <p>Contact us for any Photography and Videography ideas that you have.
              We have professional skills.</p>
              <button>Contact Us</button>
           </Description>
           <Image>
               <img src={home1}  alt="Guy with a camera" />
           </Image>
       </About>
     )
 }



 export default AboutSection;