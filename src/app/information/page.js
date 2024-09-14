'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import accordionData from '../../data/data.json'; 

const CareerInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [nestedActiveIndex, setNestedActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleNestedAccordion = (parentIndex, index) => {
    const newIndex = activeIndex === parentIndex ? (nestedActiveIndex === index ? null : index) : index;
    setActiveIndex(parentIndex);
    setNestedActiveIndex(newIndex);
  };

  return (
    <div className='pt-32 pb-7 px-5 bg-gray-100 min-h-screen'>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md flex justify-between items-center flex-col">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Career Information</h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore various career paths and find out more about each field, including key roles, skills required, and potential career growth. Use the sections below to navigate through different career categories.
        </p>

        <div>
          {accordionData.accordionData.map((section, index) => (
            <div key={section.title} className="mb-6">
              <button
                className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-t-md text-left focus:outline-none focus:ring-2 focus:ring-customOrange"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                <span className={`text-lg ${activeIndex === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                  &#9660;
                </span>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4 bg-gray-50 border-t border-gray-300">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="mb-6">
                      <button
                        className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-t-md text-left focus:outline-none focus:ring-2 focus:ring-customOrange"
                        onClick={() => toggleNestedAccordion(index, idx)}
                      >
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <span className={`text-lg ${nestedActiveIndex === idx ? 'rotate-180' : ''} transition-transform duration-300`}>
                          &#9660;
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${nestedActiveIndex === idx && activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="p-4 bg-gray-100 border-t border-gray-300">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-800">{detail.label}</h4>
                              <p className="text-sm text-gray-700">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href='/contact'>
          <button className='bg-customOrange text-white text-xl font-semibold px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-150'>
            Get A Free Counselling
          </button>
        </Link>
      </div>
    </div>
  );
};



export default CareerInfo;
