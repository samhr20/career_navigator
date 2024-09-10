'use client'
import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen flex justify-between items-center flex-col">
      <h1 className="mt-24 text-3xl font-bold text-center mb-6 md:mb-8">Career Information</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-base md:text-lg mb-6">
          Explore various career paths and find out more about each field, including key roles, skills required, and potential career growth. Use the sections below to navigate through different career categories.
        </p>

        <div>
          {accordionData.map((section, index) => (
            <div key={section.title} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-t-md text-left focus:outline-none focus:ring-2 focus:ring-customOrange"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg md:text-xl font-semibold">{section.title}</h2>
                <span className={`text-lg ${activeIndex === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                  &#9660;
                </span>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4 bg-gray-50 border-t border-gray-300">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      <button
                        className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-t-md text-left focus:outline-none focus:ring-2 focus:ring-customOrange"
                        onClick={() => toggleNestedAccordion(index, idx)}
                      >
                        <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                        <span className={`text-lg ${nestedActiveIndex === idx ? 'rotate-180' : ''} transition-transform duration-300`}>
                          &#9660;
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${nestedActiveIndex === idx && activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="p-4 bg-gray-100 border-t border-gray-300">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="mb-4">
                              <h4 className="text-sm font-semibold">{detail.label}</h4>
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
      </div>
      <Link href={'/contact'} className='mt-5 ' >
        <button className='bg-customOrange font-semibold text-xl text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors'>
          Get A Free Counselling
        </button>
      </Link>
    </div>
  );
};


const accordionData = [
  {
    title: 'Technology Careers',
    content: [
      {
        title: 'Software Developer',
        details: [
          { label: 'Overview', description: 'Designs and develops software applications. Requires strong programming skills and problem-solving abilities.' },
          { label: 'Salary', description: 'The average salary ranges from $80,000 to $120,000 per year depending on experience and location.' },
          { label: 'Tips', description: 'Stay updated with the latest technologies and programming languages. Build a strong portfolio to showcase your skills.' },
          { label: 'Job Outlook', description: 'The demand for software developers is high, with a projected growth rate of 22% over the next decade.' }
        ]
      },
      {
        title: 'Data Scientist',
        details: [
          { label: 'Overview', description: 'Analyzes complex data to help businesses make informed decisions. Needs expertise in statistics, machine learning, and data visualization.' },
          { label: 'Salary', description: 'The average salary ranges from $90,000 to $140,000 per year.' },
          { label: 'Tips', description: 'Focus on building strong analytical and statistical skills. Gain experience with big data tools and technologies.' },
          { label: 'Job Outlook', description: 'Data science is a rapidly growing field with high demand and excellent career prospects.' }
        ]
      },
      // Additional Technology Careers
      {
        title: 'Web Developer',
        details: [
          { label: 'Overview', description: 'Builds and maintains websites. Requires knowledge of web technologies and programming languages.' },
          { label: 'Salary', description: 'The average salary ranges from $60,000 to $100,000 per year.' },
          { label: 'Tips', description: 'Master front-end and back-end technologies. Build a diverse portfolio of web projects.' },
          { label: 'Job Outlook', description: 'Strong demand due to the increasing number of businesses needing an online presence.' }
        ]
      },
      {
        title: 'Cybersecurity Analyst',
        details: [
          { label: 'Overview', description: 'Protects organizations from cyber threats. Requires expertise in network security and risk management.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $120,000 per year.' },
          { label: 'Tips', description: 'Stay updated with the latest security trends and threats. Obtain relevant certifications.' },
          { label: 'Job Outlook', description: 'High demand due to increasing cyber threats and data breaches.' }
        ]
      },
      {
        title: 'UX/UI Designer',
        details: [
          { label: 'Overview', description: 'Focuses on user experience and interface design for digital products. Requires creativity and understanding of user behavior.' },
          { label: 'Salary', description: 'The average salary ranges from $70,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Develop strong design and prototyping skills. Gather user feedback to improve designs.' },
          { label: 'Job Outlook', description: 'Growing demand for user-centered design in digital products.' }
        ]
      }
    ]
  },
  {
    title: 'Healthcare Careers',
    content: [
      {
        title: 'Doctor',
        details: [
          { label: 'Overview', description: 'Provides medical care and diagnoses illnesses. Requires extensive education and training in medicine.' },
          { label: 'Salary', description: 'The average salary ranges from $150,000 to $250,000 per year, depending on specialty and location.' },
          { label: 'Tips', description: 'Prepare for a long educational path. Develop strong communication and problem-solving skills.' },
          { label: 'Job Outlook', description: 'Strong job growth is expected due to an aging population and increasing healthcare needs.' }
        ]
      },
      {
        title: 'Nurse',
        details: [
          { label: 'Overview', description: 'Assists doctors and provides care to patients. Requires a nursing degree and excellent patient care skills.' },
          { label: 'Salary', description: 'The average salary ranges from $60,000 to $90,000 per year, depending on experience and location.' },
          { label: 'Tips', description: 'Develop strong interpersonal skills and gain experience in different healthcare settings.' },
          { label: 'Job Outlook', description: 'Nursing is a high-demand profession with strong job growth projected in the coming years.' }
        ]
      },
      {
        title: 'Pharmacist',
        details: [
          { label: 'Overview', description: 'Dispenses medications and provides advice on their proper use. Requires a Doctor of Pharmacy (Pharm.D.) degree.' },
          { label: 'Salary', description: 'The average salary ranges from $85,000 to $130,000 per year.' },
          { label: 'Tips', description: 'Stay updated with new medications and treatments. Develop strong communication skills.' },
          { label: 'Job Outlook', description: 'Good job growth as healthcare needs continue to increase.' }
        ]
      },
      {
        title: 'Physical Therapist',
        details: [
          { label: 'Overview', description: 'Helps patients improve their movement and manage pain through physical therapy. Requires a Doctor of Physical Therapy (DPT) degree.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $100,000 per year.' },
          { label: 'Tips', description: 'Gain experience through internships and develop strong patient interaction skills.' },
          { label: 'Job Outlook', description: 'Strong demand due to an aging population and increasing awareness of physical therapy benefits.' }
        ]
      },
      {
        title: 'Medical Laboratory Technician',
        details: [
          { label: 'Overview', description: 'Performs laboratory tests to diagnose diseases and monitor patient health. Requires a degree in medical laboratory technology.' },
          { label: 'Salary', description: 'The average salary ranges from $50,000 to $70,000 per year.' },
          { label: 'Tips', description: 'Pay attention to detail and maintain accuracy in testing procedures.' },
          { label: 'Job Outlook', description: 'Growing demand due to the increasing number of diagnostic tests and medical procedures.' }
        ]
      }
    ]
  },
  {
    title: 'Engineering Careers',
    content: [
      {
        title: 'Civil Engineer',
        details: [
          { label: 'Overview', description: 'Designs and oversees construction projects like bridges and roads. Needs strong analytical skills and knowledge of engineering principles.' },
          { label: 'Salary', description: 'The average salary ranges from $70,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Gain experience through internships and develop a strong understanding of civil engineering principles.' },
          { label: 'Job Outlook', description: 'Job opportunities are expected to grow with increased infrastructure projects and urban development.' }
        ]
      },
      {
        title: 'Mechanical Engineer',
        details: [
          { label: 'Overview', description: 'Works on designing and improving mechanical systems. Requires expertise in mechanics, thermodynamics, and materials science.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $105,000 per year.' },
          { label: 'Tips', description: 'Focus on hands-on experience and internships to enhance your practical skills.' },
          { label: 'Job Outlook', description: 'Strong job prospects due to the continuous need for mechanical systems and machinery.' }
        ]
      },
      {
        title: 'Electrical Engineer',
        details: [
          { label: 'Overview', description: 'Designs and develops electrical systems and equipment. Requires strong knowledge of electrical theory and systems.' },
          { label: 'Salary', description: 'The average salary ranges from $80,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Pursue relevant certifications and stay current with electrical engineering advancements.' },
          { label: 'Job Outlook', description: 'Good job growth expected with increased demand for electrical systems and energy efficiency solutions.' }
        ]
      },
      {
        title: 'Chemical Engineer',
        details: [
          { label: 'Overview', description: 'Designs processes for large-scale chemical production. Requires expertise in chemistry and process engineering.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $105,000 per year.' },
          { label: 'Tips', description: 'Develop strong problem-solving skills and gain hands-on experience through internships.' },
          { label: 'Job Outlook', description: 'Growing demand for chemical engineers in various industries including pharmaceuticals and energy.' }
        ]
      },
      {
        title: 'Aerospace Engineer',
        details: [
          { label: 'Overview', description: 'Designs and tests aircraft, spacecraft, and missiles. Requires advanced knowledge in aerodynamics and propulsion systems.' },
          { label: 'Salary', description: 'The average salary ranges from $85,000 to $120,000 per year.' },
          { label: 'Tips', description: 'Pursue aerospace engineering internships and stay updated with aerospace technology advancements.' },
          { label: 'Job Outlook', description: 'Stable job outlook with opportunities in defense and space exploration sectors.' }
        ]
      },
      {
        title: 'Industrial Engineer',
        details: [
          { label: 'Overview', description: 'Optimizes production processes and systems to improve efficiency. Requires knowledge of engineering principles and process improvement.' },
          { label: 'Salary', description: 'The average salary ranges from $70,000 to $100,000 per year.' },
          { label: 'Tips', description: 'Focus on improving process efficiency and developing strong analytical skills.' },
          { label: 'Job Outlook', description: 'Good job growth expected with increased focus on manufacturing and process improvement.' }
        ]
      }
    ]
  },
  {
    title: 'Business Careers',
    content: [
      {
        title: 'Marketing Manager',
        details: [
          { label: 'Overview', description: 'Develops marketing strategies to promote products or services. Requires creativity, strategic thinking, and strong communication skills.' },
          { label: 'Salary', description: 'The average salary ranges from $85,000 to $120,000 per year.' },
          { label: 'Tips', description: 'Stay updated with marketing trends and tools. Develop strong analytical skills to measure campaign success.' },
          { label: 'Job Outlook', description: 'Good job growth expected as companies increasingly focus on digital marketing strategies.' }
        ]
      },
      {
        title: 'Financial Analyst',
        details: [
          { label: 'Overview', description: 'Analyzes financial data to provide investment recommendations. Needs expertise in finance, economics, and data analysis.' },
          { label: 'Salary', description: 'The average salary ranges from $70,000 to $100,000 per year.' },
          { label: 'Tips', description: 'Develop strong analytical skills and stay informed about financial markets and trends.' },
          { label: 'Job Outlook', description: 'Strong demand for financial analysts with growth in investment and financial services sectors.' }
        ]
      },
      {
        title: 'Human Resources Manager',
        details: [
          { label: 'Overview', description: 'Oversees recruitment, employee relations, and compliance. Requires strong interpersonal and organizational skills.' },
          { label: 'Salary', description: 'The average salary ranges from $80,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Develop strong leadership and negotiation skills. Gain experience in HR through internships.' },
          { label: 'Job Outlook', description: 'Stable job growth with increasing importance of effective human resource management.' }
        ]
      },
      {
        title: 'Sales Manager',
        details: [
          { label: 'Overview', description: 'Manages sales teams and develops strategies to increase sales. Requires strong leadership and sales skills.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Build strong sales strategies and develop a deep understanding of customer needs.' },
          { label: 'Job Outlook', description: 'Good job growth as companies seek to increase revenue and market share.' }
        ]
      },
      {
        title: 'Business Consultant',
        details: [
          { label: 'Overview', description: 'Provides expert advice to improve business operations and strategies. Requires strong analytical and problem-solving skills.' },
          { label: 'Salary', description: 'The average salary ranges from $85,000 to $120,000 per year.' },
          { label: 'Tips', description: 'Develop expertise in a specific industry and build a strong professional network.' },
          { label: 'Job Outlook', description: 'Growing demand for consultants to help businesses navigate complex challenges and opportunities.' }
        ]
      },
      {
        title: 'Accountant',
        details: [
          { label: 'Overview', description: 'Prepares and examines financial records. Requires attention to detail and knowledge of accounting principles.' },
          { label: 'Salary', description: 'The average salary ranges from $60,000 to $85,000 per year.' },
          { label: 'Tips', description: 'Obtain relevant certifications like CPA and develop strong analytical skills.' },
          { label: 'Job Outlook', description: 'Steady demand for accountants due to ongoing financial reporting and compliance requirements.' }
        ]
      }
    ]
  },
  {
    title: 'Arts and Design Careers',
    content: [
      {
        title: 'Graphic Designer',
        details: [
          { label: 'Overview', description: 'Creates visual content for print and digital media. Requires strong design skills and proficiency in design software.' },
          { label: 'Salary', description: 'The average salary ranges from $50,000 to $75,000 per year.' },
          { label: 'Tips', description: 'Build a strong portfolio and stay updated with design trends and software updates.' },
          { label: 'Job Outlook', description: 'Good job prospects as businesses continue to require design services for marketing and branding.' }
        ]
      },
      {
        title: 'Interior Designer',
        details: [
          { label: 'Overview', description: 'Plans and decorates interior spaces to enhance their functionality and aesthetics. Needs creativity and knowledge of design principles.' },
          { label: 'Salary', description: 'The average salary ranges from $55,000 to $85,000 per year.' },
          { label: 'Tips', description: 'Gain experience through internships and develop a keen eye for design and spatial arrangements.' },
          { label: 'Job Outlook', description: 'Positive job growth expected as demand for well-designed and functional living spaces continues to rise.' }
        ]
      },
      {
        title: 'Fashion Designer',
        details: [
          { label: 'Overview', description: 'Designs clothing and accessories. Requires creativity, trend awareness, and knowledge of fashion trends.' },
          { label: 'Salary', description: 'The average salary ranges from $60,000 to $90,000 per year.' },
          { label: 'Tips', description: 'Build a strong portfolio and network within the fashion industry.' },
          { label: 'Job Outlook', description: 'Competitive field with opportunities in fashion houses and independent design.' }
        ]
      },
      {
        title: 'Illustrator',
        details: [
          { label: 'Overview', description: 'Creates visual images for various media. Requires artistic talent and proficiency in illustration techniques.' },
          { label: 'Salary', description: 'The average salary ranges from $50,000 to $75,000 per year.' },
          { label: 'Tips', description: 'Develop a unique style and build a diverse portfolio of illustrations.' },
          { label: 'Job Outlook', description: 'Demand for illustrators in publishing, advertising, and digital media.' }
        ]
      },
      {
        title: 'Animator',
        details: [
          { label: 'Overview', description: 'Creates animated content for films, games, and digital media. Requires skills in animation software and storytelling.' },
          { label: 'Salary', description: 'The average salary ranges from $60,000 to $85,000 per year.' },
          { label: 'Tips', description: 'Build a strong portfolio and stay updated with the latest animation techniques and tools.' },
          { label: 'Job Outlook', description: 'Growing demand in entertainment and digital media industries.' }
        ]
      },
      {
        title: 'Art Director',
        details: [
          { label: 'Overview', description: 'Oversees visual aspects of projects in advertising, film, and media. Requires strong leadership and design skills.' },
          { label: 'Salary', description: 'The average salary ranges from $75,000 to $110,000 per year.' },
          { label: 'Tips', description: 'Gain experience in design and project management, and build a strong professional network.' },
          { label: 'Job Outlook', description: 'Stable job growth with opportunities in various creative industries.' }
        ]
      }
    ]
  },
  {
    title: 'Education Careers',
    content: [
      {
        title: 'Teacher',
        details: [
          { label: 'Overview', description: 'Educates students in various subjects. Requires a teaching degree and certification.' },
          { label: 'Salary', description: 'The average salary ranges from $50,000 to $75,000 per year.' },
          { label: 'Tips', description: 'Develop strong communication skills and engage with students effectively.' },
          { label: 'Job Outlook', description: 'Steady demand for teachers in various educational settings.' }
        ]
      },
      {
        title: 'School Counselor',
        details: [
          { label: 'Overview', description: 'Provides guidance and support to students. Requires a degree in counseling or psychology.' },
          { label: 'Salary', description: 'The average salary ranges from $55,000 to $80,000 per year.' },
          { label: 'Tips', description: 'Build strong counseling skills and stay informed about educational and psychological resources.' },
          { label: 'Job Outlook', description: 'Growing demand for school counselors to support student well-being and academic success.' }
        ]
      },
      {
        title: 'Education Administrator',
        details: [
          { label: 'Overview', description: 'Manages educational institutions or programs. Requires strong leadership and organizational skills.' },
          { label: 'Salary', description: 'The average salary ranges from $70,000 to $100,000 per year.' },
          { label: 'Tips', description: 'Develop management skills and gain experience in educational settings.' },
          { label: 'Job Outlook', description: 'Stable job growth with opportunities in schools and educational organizations.' }
        ],
      }
    ],
  }]

export default CareerInfo;
