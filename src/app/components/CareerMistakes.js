import React from 'react'

const CareerMistakes = () => {
    return (
        <div className='p-4 md:p-10'>
            <section className='bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4 text-black'>Career Mistakes to Avoid</h2>
                <ul className='list-disc list-inside text-lg mb-4 text-black'>
                    <li className='mb-2'>
                        <strong className='text-black'>Ignoring Personal Interests:</strong> Choosing a career solely based on external factors like salary or job market trends can lead to dissatisfaction. Make sure to consider your own interests and passions.
                    </li>
                    <li className='mb-2'>
                        <strong className='text-black'>Not Researching Enough:</strong> Failing to thoroughly research the career options, including job roles, required skills, and growth prospects, can lead to poor decisions. Invest time in understanding the career path you’re interested in.
                    </li>
                    <li className='mb-2'>
                        <strong className='text-black'>Underestimating Skill Requirements:</strong> Some careers require specific skills or qualifications. Ensure you are aware of these requirements and assess whether you’re willing to acquire them.
                    </li>
                    <li className='mb-2'>
                        <strong className='text-black'>Ignoring Work-Life Balance:</strong> Choosing a career without considering work-life balance can lead to burnout. Evaluate how a career aligns with your personal life and well-being.
                    </li>
                    <li className='mb-2'>
                        <strong className='text-black'>Following Trends Blindly:</strong> Career trends can be fleeting. Base your career choice on your own strengths and interests rather than following trends without consideration.
                    </li>
                </ul>
                <p className='text-lg text-black'>
                    Avoid these common pitfalls to make a more informed and fulfilling career choice. Remember, choosing a career is a personal decision and should align with both your professional goals and personal values.
                </p>
            </section>
        </div>
    )
}

export default CareerMistakes