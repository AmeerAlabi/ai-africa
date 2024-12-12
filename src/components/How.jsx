import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import how from '../Assets/Images/how.png';
import pattern1 from '../Assets/Images/Dot group 2.png';
import tick from '../Assets/Images/SVG (1).png'

const How = () => {
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
        duration: 0.8, 
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
      className="relative w-full flex flex-col-reverse md:flex-row justify-around items-center p-6 md:p-12 mt-16 gap-8 md:gap-12"
    >
      <motion.img 
        src={pattern1} 
        alt="Pattern" 
        className="absolute -top-8 right-8 w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain z-0 opacity-60" 
        variants={patternVariants} 
      />

<motion.div 
        className="relative z-10 w-full md:w-[400px] hidden md:flex justify-center md:justify-start"
        variants={patternVariants}
      >
        <img src={how} alt="Why choose us" className="w-full h-auto md:h-[350px] rounded-[20px] object-cover" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full md:w-[600px] flex flex-col justify-center md:justify-start gap-4"
        variants={containerVariants}
      >
        <motion.div 
          className="text-xl md:text-xl font-400 w-[101px] justify-center flex h-[30px] text-white rounded-[40px] bg-[#FF8C00] md:text-left mb-2"
          variants={patternVariants}
        >
          Our How
        </motion.div>
        <motion.div 
          className="text-2xl md:text-4xl font-medium text-black md:text-left mb-4"
          variants={patternVariants}
        >
          AI Africa: Personalized Career Pathway Solutions
        </motion.div>

        <motion.div className="" variants={patternVariants}>
          <img src={how} alt="Why choose us" className="w-full md:hidden flex  h-auto md:h-[550px] object-cover" />
        </motion.div>  

        <motion.div 
          className="text-lg md:text-xl font-normal text-black mb-4 flex items-start gap-[7px] "
          variants={patternVariants}
        >
          <img src={tick} alt="" className=" w-[25px] h-[25px] " />
          <span className="text-lg md:text-xl font-normal text-black mb-4">
          AI Africa's solution is a comprehensive platform that leverages AI-powered assessments and tailored recommendations to guide users towards their ideal career paths. By offering personalized support through virtual mentorship, AI Africa provides users with the tools they need to navigate their career journey effectively. This innovative approach ensures that each user receives individualized guidance, helping them to make informed decisions about their future. The platform's assessments analyze a user's skills, interests, and goals, matching them with suitable career opportunities that align with their strengths and aspirations.
          </span>
        </motion.div>

        {/* <motion.div 
          className="w-[120px] h-[45px] bg-[#FF8C00] cursor-pointer flex justify-center items-center rounded-full text-white font-medium text-center"
          variants={patternVariants}
        >
          Read More
        </motion.div> */}
      </motion.div>
      
     
    </motion.div>
  );
};

export default How;
