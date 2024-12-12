import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BenefitsCard from './BenfitsCard';
import stats from '../Assets/Images/status-up.png';
import ppl from '../Assets/Images/people.png';
import brief from '../Assets/Images/briefcase.png';

const Benefits = () => {
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
      className='mb-[50px] py-[80px] px-[20px] md:px-[40px] mt-[80px] md:mt-[0px] w-full'
    >
      <h2 className=" text-[28px] font-[500] text-[#00192E] text-center mb-[10px]  ">How we can help you</h2>
<div className=" justify-center items-center flex  bg-[#ff8c00] h-[5px] w-[60px] rounded-[40px] mx-auto mb-[50px] "></div>

      <div className="text-[28px] md:text-[40px] text-[#00192e] font-[600]  mb-[40px] md:mb-[40px] text-center">
        Get The Best Out of AI Africa
      </div>
      <div className="flex flex-row mt-[40px] items-center justify-around h-[350px] px-3 rounded-[40px] gap-[10px] bg-[#007BE5] ">
        {/* <motion.div
          className="flex flex-col md:flex-row gap-[40px] md:gap-[80px]"
          variants={containerVariants}
        > */}
          {/* <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={stats}
              title='Skill Development Resources (Nigeria)'
              bodyText="Access to curated online courses, workshops, and training programs relevant to the Nigerian job market."
            />
          </motion.div> */}
          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={ppl}
              title="Self-assessment"
              bodyText="Evaluate your strengths, skills, academic background, and interests to gain insight into your ideal career path.."
            />
          {/* </motion.div> */}
        </motion.div>
        {/* <motion.div
          className="fl"
          variants={containerVariants}
        
        > */}

        <div className=" h-[200px] w-[2px]  bg-[#EDF0EE40] "></div>

          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={brief}
              title="Personalized guidance"
              bodyText="Access customized and personalized  recommendations on skills, and learning pathways to support your journey."
            />
          </motion.div>

          <div className=" h-[200px] w-[2px]  bg-[#EDF0EE40] "></div>


          <motion.div variants={cardVariants}>
            <BenefitsCard
              imageSrc={brief}
              title="Action planning"
              bodyText="Set achievable milestones and develop a step-by-step plan to reach your personal and professional goals."
            />
          {/* </motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Benefits;
