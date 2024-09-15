// import React from 'react';
// import { eligibilityicon } from '../../assets/home';
// import Container from '../Container';

// export default function Eligibility() {
//   const specificLink = 'https://cbit.ac.in/wp-content/uploads/2021/08/AdmissionProcedure-2021-22-..pdf'; // Replace with the actual link

//   return (
//     <section id="eligibility" className="my-14">
//       <Container>
//         <div className=" bg-[#410F11] rounded-xl relative">
//           <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
//             <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
//               Eligibility Criteria for Admissions.
//             </h1>
//             <a
//               href={specificLink}
//               target='_blank'
//               className="capitalize bg-white hover:bg-[#549B4A] hover:text-white transition-colors px-14 py-3 rounded-sm font-bold text-black"
//             >
//               Click here
//             </a>
//           </article>
//           <div className="absolute lg:right-[5%] right-[0] lg:-top-[0%] -top-[0%] md:block hidden">
//             <img src={eligibilityicon} alt="illustration" className="w-72" />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { eligibilityicon } from '../../assets/home';
import Container from '../Container';

export default function Eligibility() {
  const specificLink = 'https://cbit.ac.in/wp-content/uploads/2021/08/AdmissionProcedure-2021-22-..pdf'; // Replace with the actual link
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = () => {
    window.open(specificLink, '_blank');
  };

  return (
    <section id="eligibility" className="my-14">
      <Container>
        <div
          className={`bg-[#410F11] rounded-xl relative transition-transform duration-300 ${
            isHovered ? 'scale-105' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
              Eligibility Criteria for Admissions.
            </h1>
            <a
              href={specificLink}
              target="_blank"
              className="capitalize bg-white hover:bg-[#549B4A] hover:text-white transition-colors px-14 py-3 rounded-lg font-bold text-black"
              onClick={handleLinkClick}
            >
              Click here
            </a>
          </article> */}
          <div className="absolute lg:right-[5%] right-[0] lg:-top-[0%] -top-[0%] md:block hidden">
            <img src={eligibilityicon} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
    </section>
  );
}