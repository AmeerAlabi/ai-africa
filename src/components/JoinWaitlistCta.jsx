import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const JoinWaitlistCTA = () => {
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
        ease: "easeOut" 
      }
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      className="flex flex-col md:mx-auto mx-auto rounded-[8px] w-[97%] md:w-[900px] items-center h-full md:h-[350px] justify-center py-10 px-4 bg-[#007BE5] md:rounded-[10px] mt-[70px]"
    >
      <motion.h2
        className="text-white text-[24px] md:text-[32px] font-[600] text-center mb-[20px]"
        variants={containerVariants}
      >
        Join Our Waitlist
      </motion.h2>
      <motion.p
        className="text-white text-[14px] md:text-[16px] text-center mb-[30px]"
        variants={containerVariants}
      >
        Be the first to know when we launch. Enter your email to join our waitlist.
      </motion.p>
      <div className="flex flex-col md:flex-row items-center w-full max-w-[400px] md:max-w-[600px]">
        <motion.input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 text-[#007BE5] md:rounded-tl-[30px] md:rounded-bl-[30px] outline-none mb-4 md:mb-0 md:mr-0"
          variants={inputVariants}
        />
        <motion.button
          className="w-full md:w-auto px-6 py-3 md:rounded-tr-[30px] md:rounded-br-[30px] bg-[#FF8C00] text-white font-[600] hover:bg-[#e67e00] transition-all"
          variants={buttonVariants}
        >
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JoinWaitlistCTA;
