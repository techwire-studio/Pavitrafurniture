import { useState } from 'react';
import { X } from 'lucide-react';
import * as emailjs from 'emailjs-com';
import {motion} from "framer-motion"

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true)
    e.preventDefault();

    // Replace these with your actual EmailJS details
    const serviceId = 'service_462e88g';
    const templateId = 'template_f5yebn2';
    const userId = 'L3Ns4ni0n522aYs9D';

    // Prepare the email template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.phoneNo
    };

    // Send email
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully', response.status, response.text);
        alert('Thank you for submitting the details, we will get back to you soon!');
        onClose(); // Close modal after successful submission
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNo: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        alert('Failed to send quote request. Please try again.');
      });
  };

  if (!isOpen) return null;

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:.5}}
     className="fixed  p-4 m-auto   inset-0 z-[100]  bg-text-primary flex justify-center items-center w-11/12 md:w-fit lg:w-fit h-fit border border-modal-border">
      <div className="bg-white p-2 lg:p-8 md:p-8 rounded-lg w-full max-w-lg relative ">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 lg:top-9 md:top-9 lg:right-8 md:right-8 text-gray-600 hover:text-gray-900"
        >
          <X size={24} color={"black"} />
        </button>
        
        <h2 className=" text-2xl font-bold text-bg-primary mb-6 text-center">Contact Us</h2> 

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-lg mx-auto mt-10 font-montserrat"
        >
          {/* Input Fields (First Name and Last Name) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="py-4 px-3 w-full  border border-modal-border bg-modal-bg rounded-[5px]"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="py-4 px-3 w-full  border border-modal-border bg-modal-bg rounded-[5px]"
            />
          </div>

          {/* Email Address */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="py-4 px-3 w-full  border border-modal-border bg-modal-bg rounded-[5px]"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="py-4 px-3 w-full  border border-modal-border bg-modal-bg rounded-[5px]"
          />

          {/* Description */}
          {/* <textarea
            placeholder="Description (optional)"
            className="py-2 px-3 w-full bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 h-32 resize-none"
          ></textarea> */}

          {/* Submit Button */}
          <button
      type="submit"
      className={`w-fit m-auto text-white font-sans bg-bg-primary font-semibold py-4 px-10 lg:px-20 
        ${isSubmitted ? 'bg-bg-green' : 'bg-bg-primary'} font-sans text-text-primary`}
      onClick={handleSubmit}
    >
      {isSubmitted ? 'Thank You!' : 'Submit'}
    </button>
        </form>
      </div>
    </motion.div>
  );
};

export default QuoteModal;
