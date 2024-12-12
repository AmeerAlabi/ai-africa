import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import google from '../Assets/Images/Google.png';
import app from '../Assets/Images/App store.png';
import fb from '../Assets/Images/fe_facebook.png';
import twitter from '../Assets/Images/akar-icons_twitter-fill.png';
import link from '../Assets/Images/bi_linkedin.png';
import ig from '../Assets/Images/ri_instagram-fill.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import symbol from '../Assets/Images/Symbol.png'


const Footer = () => {
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

  const iconVariants = {
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
      className="mt-[120px] w-full  bg-[#007BE5] h-[320px] py-1"
    >
      <div className="flex flex-col  px-8 md:px-10 lg:px-20 mt-[80px]  text-center">
    
        <motion.div
          className=" mt-[10px] border-b-[1px] pb-[30px] mb-[20px] flex justify-between items-center "
          variants={containerVariants}
        >
          <div className=" flex gap-[20px] ">
            <h3 className=" text-[20px] font-[400] text-white ">About Us</h3>
            <h3 className=" text-[20px] font-[400] text-white "> FAQs </h3>
          </div>
          <div className=" flex gap-[40px] ">
            <FaYoutube size={20} color='#fff' />
            <FaFacebook size={20} color='#fff' />
            <FaTwitter size={20} color='#fff' />
            <FaInstagram size={20} color='#fff'  />
          </div>
        </motion.div>
        <motion.div
          className="mt-[70px] flex justify-between  items-center gap-[10px]"
          variants={containerVariants}
        >
          <div className=" flex gap-[10px] items-center ">
            <div className=" w-[210px] h-[50px] bg-[#FF8C00] rounded-[10px] "></div>
            <div className=" w-[210px] h-[50px] bg-[#FF8C00] rounded-[10px] "></div>
          </div>

          <div className="flex gap-[5px] items-center ">
<img src={symbol} alt="" className=" w-[40px] h-[40px] " />
      <div className="text-[32px] text-[white] font-bold">AI AFRICA</div>
      </div>

       <div className=" flex gap-[20px] ">
        <h3 className=" text-[20px] text-white font-[400] ">Terms of Service </h3>
        <h3 className=" text-[20px] text-white font-[400] ">Privacy Policy</h3>
       </div>

        </motion.div>
        {/* <motion.div
          className="text-[12px] font-normal text-white mt-[120px]"
          variants={containerVariants}
        >
          @ COPYRIGHT | AI Africa 2024 | All Rights Reserved
        </motion.div> */}
        {/* <motion.div
          className="flex justify-center mt-[20px] items-center gap-[10px]"
          variants={containerVariants}
        >
          <motion.img
            src={fb}
            alt="Facebook"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={twitter}
            alt="Twitter"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={link}
            alt="LinkedIn"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
          <motion.img
            src={ig}
            alt="Instagram"
            className="cursor-pointer w-[30px] h-[30px]"
            variants={iconVariants}
          />
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Footer;
