import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import why from '../Assets/Images/why.png';
import pattern1 from '../Assets/Images/Ellipse 29.png';
import pattern2 from '../Assets/Images/Ellipse 30.png';
import pattern3 from '../Assets/Images/Dot group 1.png';
import tick from '../Assets/Images/SVG.png'
import span from '../Assets/Images/span.png'

const Why = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut", 
        staggerChildren: 0.2 
      }
    },
  };

  const patternVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative w-full flex flex-col md:flex-row justify-around items-center p-6 md:p-12 mt-16 gap-8 md:gap-12"
    >
      {/* Background Patterns */}
      {/* <motion.img 
        src={pattern1} 
        alt="Pattern 1" 
        className="absolute  md:block hidden top-0 left-5 w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain z-0" 
        variants={patternVariants} 
      />
      <motion.img 
        src={pattern2} 
        alt="Pattern 2" 
        className="absolute md:block hidden bottom-1/2 right-32 w-[20px] h-[20px] md:w-[20px] md:h-[20px] object-contain z-0" 
        variants={patternVariants} 
      />
      <motion.img 
        src={pattern2} 
        alt="Pattern 2" 
        className="absolute md:block hidden -top-5 left-2 w-[20px] h-[20px] md:w-[20px] md:h-[20px] object-contain z-0" 
        variants={patternVariants} 
      />
      <motion.img 
        src={pattern3} 
        alt="Pattern 3" 
        className="absolute md:block hidden top-1/2 -left-8 w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain z-0" 
        variants={patternVariants} 
      /> */}


 {/* Image content */}
 {/* <motion.div 
        className="relative z-10 w-full md:w-[400px] hidden md:flex justify-center md:justify-start" 
        variants={patternVariants}
      >
        <img src={why} alt="Why choose us" className="w-full h-auto md:h-[550px] object-cover" />
      </motion.div> */}


      {/* Text content */}
      <motion.div 
        className="relative z-10 w-full md:w-[500px] flex flex-col justify-start gap-4 " 
        variants={containerVariants}
      >
        <motion.div 
          className="text-xl md:text-xl font-[400] w-[101px] h-[28px]  rounded-[40px] text-[white] justify-center flex items-center bg-[#007BE5] mb-2 md:text-left"
          variants={patternVariants}
        >
          Our Why
        </motion.div>
        <motion.div 
          className="text-2xl md:text-4xl font-medium text-black mb-4 md:text-left" 
          variants={patternVariants}
        >
          Navigating Career Challenges
        </motion.div>

        <motion.div className="" variants={patternVariants}>
          <img src={why} alt="Why choose us" className="w-full md:hidden flex h-auto md:h-[550px] object-cover" />
        </motion.div>

        <motion.div 
          className="text-base flex  items-start gap-[7px] md:text-lg font-normal text-black mb-4"
          variants={patternVariants}
        >
          <img src={tick} alt="" className=" w-[25px] h-[25px] " />
          <span className="text-base  gap-[7px] md:text-lg font-normal text-black mb-4">
           African youths often face challenges with dedicated career counseling, leaving young people without guidance on choosing and pursuing appropriate career paths. This also leads to a mismatch between skills and available jobs.
          </span>
        </motion.div>
        
        <motion.div 
          className="text-base flex gap-[7px]  items-start md:text-lg font-normal text-black mb-4"
          variants={patternVariants}
        >
          <img src={tick} alt="" className=" w-[25px] h-[25px] " />
          <span className="text-base  gap-[7px] md:text-lg font-normal text-black mb-4">
          Limited access to quality educational programs could be a barrier, and the available programs could be outdated with the current demands in the job market, leaving graduates ill-equipped for available opportunities.
          </span>
        </motion.div>

        {/* <motion.div 
          className="w-[120px] h-[45px] bg-[#FF8C00] cursor-pointer flex justify-center items-center rounded-full text-white font-medium text-center mt-4"
          variants={patternVariants}
        >
          Read More
        </motion.div> */}
      </motion.div>
      
      {/* Image content */}
      <motion.div 
        className="relative z-10 w-full md:w-[400px] hidden md:flex justify-center md:justify-end" 
        variants={patternVariants}
      >
        <img src={span} alt="Why choose us" className="w-full h-auto md:h-[350px] rounded-[20px] object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default Why;
