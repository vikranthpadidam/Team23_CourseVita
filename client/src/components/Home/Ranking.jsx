import React, { useState } from 'react';
import Container from '../Container';

const AdmissionCard = ({ title, info, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Open the URL in a new tab/window
    window.open(url, '_blank');
  };

  return (
    <div
      className={`bg-red-50 p-6 rounded-md shadow-md border border-[#410F11] border-4 mx-5 transform transition-transform duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{info}</p>
      <button
        className="bg-[#B64647] hover:bg-[#410F11] text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        View Ranks
      </button>
    </div>
  );
};

const Ranking = () => {
  return (
    <section id='ranking'>
      {/* <Container>
        <h1 className="text-4xl font-bold text-center mb-8">Previous Year Ranking for Admissions</h1>

        <div className="flex justify-around p-8 ">
          <AdmissionCard
            title="PGECET 2022-23"
            info="Admission Ranks for Post Graduate Engineering Common Entrance Test."
            url="https://www.cbit.ac.in/wp-content/uploads/2019/05/TSPGECET-2022-23-Admisssion-Ranks_rotated.pdf"
          />
          <AdmissionCard
            title="ICET 2022-23"
            info="Admission Ranks for Integrated Common Entrance Test."
            url="https://www.cbit.ac.in/wp-content/uploads/2019/05/ICET-2022-23-Admission-Ranks..pdf"
          />
          <AdmissionCard
            title="EAMCET 2022-23"
            info="Admission Ranks for Engineering, Agriculture and Medical Common Entrance Test."
            url="https://www.cbit.ac.in/wp-content/uploads/2019/05/tseamcet-ranks-2022-23-final-round-alloted.pdf"
          />
          <AdmissionCard
            title="ECET 2022-23"
            info="Admission Ranks for Engineering Common Entrance Test."
            url="https://www.cbit.ac.in/wp-content/uploads/2019/05/tsecet-ranks-2022-23.pdf"
          />
        </div>
      </Container> */}
    </section>
  );
};

export default Ranking;