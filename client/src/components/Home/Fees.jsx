import React from 'react';
import Container from '../Container';

const Fees = () => {
  return (
    <section id='fees' className="bg-[#F4F4F4] p-8">
      <Container>
        <div className="my-8">
          <h1 className="text-4xl font-bold text-center mb-16">Course Pricing - Academic Year 2023-2024</h1>
          <table className="w-full border-collapse border border-[#410F11] bg-white">
            <thead>
              <tr>
                <th className="border border-[#410F11] p-4">Course</th>
                <th className="border border-[#410F11] p-4">Standard</th>
                <th className="border border-[#410F11] p-4">Premium</th>
                <th className="border border-[#410F11] p-4">Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#410F11] p-4">Data Science</td>
                <td className="border border-[#410F11] p-4">Rs. 30,000</td>
                <td className="border border-[#410F11] p-4">Rs. 50,000</td>
                <td className="border border-[#410F11] p-4">Rs. 75,000</td>
              </tr>
              <tr>
                <td className="border border-[#410F11] p-4">Data Analytics</td>
                <td className="border border-[#410F11] p-4">Rs. 25,000</td>
                <td className="border border-[#410F11] p-4">Rs. 45,000</td>
                <td className="border border-[#410F11] p-4">Rs. 70,000</td>
              </tr>
              <tr>
                <td className="border border-[#410F11] p-4">Software Development</td>
                <td className="border border-[#410F11] p-4">Rs. 35,000</td>
                <td className="border border-[#410F11] p-4">Rs. 55,000</td>
                <td className="border border-[#410F11] p-4">Rs. 80,000</td>
              </tr>
              <tr>
                <td className="border border-[#410F11] p-4">Cloud Computing</td>
                <td className="border border-[#410F11] p-4">Rs. 40,000</td>
                <td className="border border-[#410F11] p-4">Rs. 60,000</td>
                <td className="border border-[#410F11] p-4">Rs. 85,000</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-center text-sm text-gray-600">
            (* Prices are subject to change based on updates and promotions. Please contact us for the most current pricing.)
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Fees;