import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cards from './Cards';
import goal from '../Assets/Images/goal.png';
import pers from '../Assets/Images/pers.png';
import cert from '../Assets/Images/cert.png';
import pattern1 from '../Assets/Images/Ellipse 29.png';
import identify from '../Assets/Images/Group 1000003980.png'
import guidiance from '../Assets/Images/Group 1000003981.png'
import track from '../Assets/Images/Group 1000003982.png'

const Processes = () => {
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
        duration: 0.6, 
        ease: "easeOut", 
        staggerChildren: 0.2 
      }
    },
  };

  const cardVariants = {
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
      className='relative mt-[40px] mb-[50px] h-full  w-full'
    >
      {/* Background Pattern */}
      
<h2 className=" text-[28px] font-[500] text-[#00192E] text-center mb-[10px]  ">How it Works</h2>
<div className=" justify-center items-center flex  bg-[#ff8c00] h-[5px] w-[60px] rounded-[40px] mx-auto mb-[50px] "></div>
      <div className="text-[48px] font-[600] text-[#00192E] mb-[40px] text-center relative z-10">
        Your 3-Step Process
      </div>

      <div className="  flex justify-center mb-[20px] gap-[65px] items-center  ">
        <img src={identify} alt="" className=" w-[150px] h-[150px] " />
         <div className=" w-[100px] h-[3px] bg-[#00192e] "></div>

        <img src={guidiance} alt="" className="  h-[150px] w-[150px] " />
        
        <div className=" w-[100px] h-[3px] bg-[#00192e] "></div>

        <img src={track} alt="" className=" w-[150px] h-[150px] " />
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col md:flex-row gap-[20px] items-center justify-center"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <Cards
            imageSrc={goal}
            title="Identify goals - Define Your Path:"
            bodyText="Discover and set clear career and life goals that align with your strengths and aspirations."
            // bgColor="bg-[#007BE5]"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Cards
            imageSrc={cert}
            title="Get guidance - Receive Personalized Recommendations"
            bodyText="Access tailored advice, resources, and action plans to help you grow and achieve your goals."
            // bgColor="bg-[#007BE5]"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Cards
            // imageSrc={pers}
            title="Track progress - Stay on Course:"
            bodyText="Monitor your achievements and milestones as you progress toward your goals, adjusting as needed to stay focused and achieve success."
            // bgColor="bg-[#007BE5]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Processes;
