import React from 'react';

const Footer2 = () => {
  return (
    <div className='flex flex-col lg:flex-row px-6 lg:px-20 py-4'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2 font-montserrat font-light text-foot3 mb-6 lg:mb-0'>
        <p className='text-center text-[12px] lg:text-[16px]'>Copyright © 2024 Pavitra Furnitures and Interiors Pvt Ltd. All rights reserved.</p>
      </div>

      {/* Right Section */}
      <div className='w-full text-[12px] lg:text-[16px] lg:w-1/2 flex justify-center lg:justify-end items-center gap-8 lg:gap-16 text-center lg:text-right font-montserrat font-light text-foot3 sm:text-center'>
        <a href="" className="hover:underline">Privacy Policy</a>
        <a href="" className="hover:underline">Legal Notice</a>
        <a href="" className="hover:underline">Report</a>
      </div>
    </div>
  );
};

export default Footer2;
