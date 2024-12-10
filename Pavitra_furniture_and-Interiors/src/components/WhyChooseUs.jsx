import React from "react";
import line from "../assets/Line 115.png"
import image1 from "../assets/handcraft 1.png"
import dot from "../assets/Ellipse 644.png"

const WhyChooseUs = () => {
  const items = [
    { id: 1, text: "Left Content", image: image1},
    { id: 2, text: "Right Content", image: image1},
    { id: 3, text: "Left Content", image: image1} ,
    { id: 4, text: "Right Content", image: image1},
  ];

  return (
    <div className="relative flex justify-center">
      {/* Center Line */}
      <div className="absolute w-[2px] h-[8] bg-gray-400">
        <img src={line} alt="" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <div>
                <img src={dot} alt="" />
            </div>
            <div
              className={`w-1/2 p-4 border  ${
                index % 2 === 0 ? "ml-8" : "mr-8"
              }`}
            >
              <img src={item.image} alt="" />
              <p className="text-lg font-bold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
