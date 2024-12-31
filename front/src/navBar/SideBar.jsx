import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 p-2 bg-gray-100 border border-gray-300 rounded-md 
        text-gray-700 hover:bg-gray-200 block"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 text-gray-800
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static
      `}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Navigation</h2>
          <nav>
            <ul className="space-y-4 mb-6">
              <li><a href="#section1" className="block py-2 hover:bg-gray-100">Section 1</a></li>
              <li><a href="#section2" className="block py-2 hover:bg-gray-100">Section 2</a></li>
              <li><a href="#section3" className="block py-2 hover:bg-gray-100">Section 3</a></li>
            </ul>
          </nav>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-600">
                We are a dedicated team committed to innovation and excellence. Our mission is to create meaningful solutions that address real-world challenges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Our Approach</h3>
              <p className="text-sm text-gray-600">
                By combining cutting-edge technology with human-centric design, we develop strategies that are both scalable and adaptable to changing environments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Vision Statement</h3>
              <p className="text-sm text-gray-600">
                To continuously push boundaries, challenge conventions, and create transformative experiences that make a positive impact on our global community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;