

const Timeline = () => {
  const timelineData = [
    {
      title: 'Precision Craftsmanship',
      description:
        'Our advanced CNC machines ensure every cut and detail is executed with unmatched accuracy, delivering designs that are both flawless and visually stunning.',
      icon: '/path-to-your-icon1.png', // Replace with the actual path to your image
      align: 'left',
    },
    {
      title: 'Custom Solutions',
      description:
        'We create furniture tailored to your specific needs, reflecting your style and fitting perfectly into your space, no matter the size or complexity.',
      icon: '/path-to-your-icon2.png', // Replace with the actual path to your image
      align: 'right',
    },
    {
      title: 'Experienced Team',
      description:
        'Our team of skilled designers and craftsmen brings years of expertise and a deep passion for creating furniture that exceeds expectations.',
      icon: '/path-to-your-icon3.png', // Replace with the actual path to your image
      align: 'left',
    },
    {
      title: 'Sustainability Focus',
      description:
        'We prioritize eco-friendly practices, using sustainable materials and reducing waste to create beautiful furniture while caring for the environment.',
      icon: '/path-to-your-icon4.png', // Replace with the actual path to your image
      align: 'right',
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
  {/* Vertical Line */}
  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300"></div>

  {/* Timeline Item 1 */}
  <div className="relative flex items-center mb-12">
    {/* Left Content */}
    <div className="w-1/2 text-right pr-8">
      <img src="/path-to-icon1.png" alt="Icon 1" className="w-12 h-12 mx-auto mb-4" />
      <h2 className="text-lg font-bold text-gray-800">Precision Craftsmanship</h2>
      <p className="text-gray-600">
        Our advanced CNC machines ensure every cut and detail is executed with unmatched accuracy, delivering designs that are both flawless and visually stunning.
      </p>
    </div>

    {/* Center Dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  </div>

  {/* Timeline Item 2 */}
  <div className="relative flex items-center mb-12">
    {/* Right Content */}
    <div className="w-1/2 text-left pl-8 ml-auto">
      <img src="/path-to-icon2.png" alt="Icon 2" className="w-12 h-12 mx-auto mb-4" />
      <h2 className="text-lg font-bold text-gray-800">Custom Solutions</h2>
      <p className="text-gray-600">
        We create furniture tailored to your specific needs, reflecting your style and fitting perfectly into your space, no matter the size or complexity.
      </p>
    </div>

    {/* Center Dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  </div>

  {/* Timeline Item 3 */}
  <div className="relative flex items-center mb-12">
    {/* Left Content */}
    <div className="w-1/2 text-right pr-8">
      <img src="/path-to-icon3.png" alt="Icon 3" className="w-12 h-12 mx-auto mb-4" />
      <h2 className="text-lg font-bold text-gray-800">Experienced Team</h2>
      <p className="text-gray-600">
        Our team of skilled designers and craftsmen brings years of expertise and a deep passion for creating furniture that exceeds expectations.
      </p>
    </div>

    {/* Center Dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  </div>

  {/* Timeline Item 4 */}
  <div className="relative flex items-center mb-12">
    {/* Right Content */}
    <div className="w-1/2 text-left pl-8 ml-auto">
      <img src="/path-to-icon4.png" alt="Icon 4" className="w-12 h-12 mx-auto mb-4" />
      <h2 className="text-lg font-bold text-gray-800">Sustainability Focus</h2>
      <p className="text-gray-600">
        We prioritize eco-friendly practices, using sustainable materials and reducing waste to create beautiful furniture while caring for the environment.
      </p>
    </div>

    {/* Center Dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  </div>
</div>

  );
};

export default Timeline;
