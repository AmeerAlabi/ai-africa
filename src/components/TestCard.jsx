import React from 'react';

const TestCard = ({ name, role, profileImage, quoteImage, testimonial }) => {
  return (
    <div className="relative w-[340px] mx-auto mb-8">
      {/* Orange Box Underneath */}
      <div className="absolute inset-0 transform translate-y-[50px] -translate-x-[25px] flex justify-center h-[200px] w-[390px] bg-orange-100 border-[2px] border-[#FF8C00] rounded-lg shadow-lg"></div>

      {/* Main Card */}
      <div className="relative p-6 bg-[#007BE5] border-[1px] border-[#282D45] rounded-lg shadow-lg">
        {/* Profile Section */}
        <div className="flex justify-between items-center mb-4 space-x-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold">{name}</h3>
              <p className="text-sm text-gray-300">{role}</p>
            </div>
          </div>
          <img src={quoteImage} alt="Quote" className="w-[57px] h-[41px]" />
        </div>

        {/* Testimonial Text */}
        <p className="text-white">
          "{testimonial}"
        </p>
      </div>
    </div>
  );
};

export default TestCard;
