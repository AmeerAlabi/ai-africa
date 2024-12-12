import React from 'react';
import TestCard from './TestCard';
import quoteIcon from '../Assets/Images/quote (2).png';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      role: 'Customer',
      profileImage: 'https://via.placeholder.com/150',
      quoteImage: quoteIcon,
      testimonial: "This service was amazing! I am very happy with the results and will definitely recommend it to others.",
    },
    {
      name: 'Jane Smith',
      role: 'Client',
      profileImage: 'https://via.placeholder.com/150',
      quoteImage: quoteIcon,
      testimonial: "Absolutely fantastic! Exceeded my expectations in every way.",
    },
    {
      name: 'Jane Smith',
      role: 'Client',
      profileImage: 'https://via.placeholder.com/150',
      quoteImage: quoteIcon,
      testimonial: "Absolutely fantastic! Exceeded my expectations in every way.",
    },
  ];

  return (
    <div className=" flex justify-center  mb-[150px] mt-[30px] gap-[10px] ">
      {testimonialsData.map((data, index) => (
        <TestCard
          key={index}
          name={data.name}
          role={data.role}
          profileImage={data.profileImage}
          quoteImage={data.quoteImage}
          testimonial={data.testimonial}
        />
      ))}
    </div>
  );
};

export default Testimonials;
