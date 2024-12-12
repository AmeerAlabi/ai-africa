import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer"; 
import bg from "../Assets/Images/bg_circular_lines.png";
import { FaApple, FaArrowAltCircleRight, FaGooglePlay } from "react-icons/fa";
import sch1 from '../Assets/Images/Ellipse 4.png';
import sch2 from '../Assets/Images/Ellipse 5 (1).png';
import sch3 from '../Assets/Images/Ellipse 5 (2).png';
import sch4 from '../Assets/Images/Ellipse 5.png';
import sch5 from '../Assets/Images/Ellipse 6 (1).png';
import sch6 from '../Assets/Images/Ellipse 6.png';
import sch7  from '../Assets/Images/Ellipse 7.png';
import sch8  from '../Assets/Images/Ellipse 8 (1).png';
import sch9 from '../Assets/Images/Ellipse 8 (2).png';
import card from '../Assets/Images/Card Wrapper.png';
import { FaArrowRightToCity, FaArrowRotateRight, FaArrowsTurnRight } from "react-icons/fa6";
import Arrow from '../Assets/Images/ArrowLineUpRight.png'
import logo1 from '../Assets/Images/Logo Wrapper.png'
import logo2 from '../Assets/Images/Logo Wrapper (1).png'
import logo from '../Assets/Images/Logo Wrapper (2).png'

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mt-[20px] h-[730px] border-[1px] md:mt-2 w-full flex flex-col items-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[#010342] z-0"></div>
      {/* Background Image */}
      <div className="absolute inset-0 bg-contain bg-no-repeat z-10" style={{ backgroundImage: `url(${bg})`, opacity: 0.1 }}></div>

      {/* Corner Card Images */}
  {/* Top Right - Card Component */}
<div className="absolute top-[120px] right-6">
  <div className="left-[35px] w-[270px] py-1 h-auto px-4 bg-gradient-to-r from-[#e3e9f788] to-[#ffffffb2]  opacity-80 rounded-full flex items-center justify-between z-60">
    {/* Left section with icon and text */}
    <div className="flex items-center gap-3">
      {/* Icon Circle */}
      {/* <div className="w-[30px] h-[30px] rounded-full bg-blue-500"></div> */}
      <img src={logo} alt="" className=" w-[30px] h-[30px] rounded-full " />
      
      {/* Text Content */}
      <div className="flex flex-col">
        {/* Header (Name & Organization) */}
        <h1 className="text-sm font-semibold text-white">Athena Hedge</h1>
        <h3 className="text-xs font-medium text-white opacity-60 -mt-1">Lasustech</h3>

        {/* Message */}
        <p className="text-xs font-semibold text-white mt-2 leading-tight">
          What are shortfall of frontend?
        </p>
      </div>
    </div>
    
    {/* Right Arrow Icon */}
    <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
  </div>
</div>

<div className="absolute top-[120px] left-6">
  <div className="left-[35px] w-[270px] py-1 h-auto px-4 bg-gradient-to-r from-[#e3e9f788] to-[#ffffffb2] opacity-80 rounded-full flex items-center justify-between z-60">
    {/* Left section with icon and text */}
    <div className="flex items-center gap-3">
      {/* Icon Circle */}
            <div className="w-[30px] h-[30px] rounded-full bg-blue-500"></div>


      
      {/* Text Content */}
      <div className="flex flex-col">
        {/* Header (Name & Organization) */}
        <h1 className="text-sm font-semibold text-white">Athena Hedge</h1>
        <h3 className="text-xs font-medium text-white opacity-60 -mt-1">Lasustech</h3>

        {/* Message */}
        <p className="text-xs font-semibold text-white mt-2 leading-tight">
          What are shortfall of frontend?
        </p>
      </div>
    </div>
    
    {/* Right Arrow Icon */}
    <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
  </div>
</div>

{/* Bottom Left - Card Component */}
<div className="absolute bottom-[280px] left-6">
  <div className="left-[35px] w-[270px] py-1 h-auto px-4 bg-gradient-to-r from-[#e3e9f788] to-[#ffffffb2] bg-opacity-50 opacity-80 rounded-full flex items-center justify-between z-60">
    {/* Left section with icon and text */}
    <div className="flex items-center gap-3">
      {/* Icon Circle */}
      <img src={logo2} alt="" className=" w-[30px] h-[30px] rounded-full " />

      
      {/* Text Content */}
      <div className="flex flex-col">
        {/* Header (Name & Organization) */}
        <h1 className="text-sm font-semibold text-white">Athena Hedge</h1>
        <h3 className="text-xs font-medium text-white opacity-60 -mt-1">Lasustech</h3>

        {/* Message */}
        <p className="text-xs font-semibold text-white mt-2 leading-tight">
          What are shortfall of frontend?
        </p>
      </div>
    </div>
    
    {/* Right Arrow Icon */}
    <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
  </div>
</div>

{/* Bottom Right - Card Component */}
<div className="absolute bottom-[280px] right-6">
  <div className="left-[35px] w-[270px] py-1 h-auto px-4 bg-gradient-to-r from-[#e3e9f788] to-[#ffffffb2] bg-opacity-50 opacity-80 rounded-full flex items-center justify-between z-60">
    {/* Left section with icon and text */}
    <div className="flex items-center gap-3">
      {/* Icon Circle */}
      <img src={logo1} alt="" className=" w-[30px] h-[30px] rounded-full " />

      
      {/* Text Content */}
      <div className="flex flex-col">
        {/* Header (Name & Organization) */}
        <h1 className="text-sm font-semibold text-white">Athena Hedge</h1>
        <h3 className="text-xs font-medium text-white opacity-60 -mt-1">Lasustech</h3>

        {/* Message */}
        <p className="text-xs font-semibold text-white mt-2 leading-tight">
          What are shortfall of frontend?
        </p>
      </div>
    </div>
    
    {/* Right Arrow Icon */}
    <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
  </div>
</div>

      {/* Content */}
      <div className="relative mt-[50px] z-20 w-full flex flex-col items-center text-center p-6">
        <h1 className="text-[64px] font-bold bg-gradient-to-r from-white to-[#FF7C0F] bg-clip-text text-transparent mb-2">
          Discover Your Path:
        </h1>
        <h2 className="text-[60px] font-semibold bg-gradient-to-r from-white to-[#FFFFFF94] bg-clip-text text-transparent mb-6">
          <span>The AI-Powered Guide for</span>
          <span className="block -mt-4">Ambitious African Youth</span>
        </h2>
        <p className="text-[22px] text-[#FFFFFFB2] max-w-lg mx-auto mb-8">
          Your Journey, Your Future: AI-Powered Support to Help You Discover the Right Career, Build Skills, and Achieve Your Goals One Step at a Time.
        </p>

        {/* Download Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex  cursor-not-allowed w-[279px] justify-center  items-center px-6 py-3 bg-[#007BE5] text-[white] rounded-lg shadow-md">
            <FaApple className="mr-2" /> Download on the App Store
          </button>
          <button className="flex w-[279px] cursor-not-allowed justify-center items-center px-6 py-3 bg-[#007BE5] text-[white] rounded-lg shadow-md">
            <FaGooglePlay className="mr-2" /> Get it on Google Play
          </button>
        </div>
      </div>

      {/* Full-Width Orange Bar */}
      <div className="w-full h-[120px] mt-[18px] rounded-tl-[48px] rounded-tr-[48px] bg-orange-500 py-4 flex justify-center items-center gap-[40px] z-20">
        {/* Full-Width Image Bar */}
        <img src={sch1} alt="Image 1" className="mx-2 h-16" />
        <img src={sch2} alt="Image 1" className="mx-2 h-16" />
        <img src={sch3} alt="Image 1" className="mx-2 h-16" />
        <img src={sch4} alt="Image 1" className="mx-2 h-16" />
        <img src={sch5} alt="Image 1" className="mx-2 h-16" />
        <img src={sch6} alt="Image 1" className="mx-2 h-16" />
        <img src={sch7} alt="Image 1" className="mx-2 h-16" />
        <img src={sch8} alt="Image 1" className="mx-2 h-16" />
        <img src={sch9} alt="Image 1" className="mx-2 h-16" />
      </div>
    </motion.div>
  );
};


export default Hero;
