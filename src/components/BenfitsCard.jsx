import React from 'react';

const BenefitsCard = ({ imageSrc, title, bodyText }) => {
  return (
    <div className='w-[343px]  h-[187px] flex flex-col justify-center items-center gap-[12px]'>
      <img src={imageSrc} alt="" className="w-[64px] h-[64px]" />
      <div className="text-[20px] font-bold text-[white]">{title}</div>
      <div className="text-[18px] font-normal text-center text-[white]">{bodyText}</div>
    </div>
  );
};

export default BenefitsCard;
