// import Hero from "../components/Home/Hero";
// import Whycbit from "../components/Home/Whycbit";
// import CourseInformation from "../components/Home/CourseInformation";
// import Eligibility from "../components/Home/Eligibility"
// import Ranking from "../components/Home/Ranking"
// import Fees from "../components/Home/Fees";
// // import Trusted from "../components/Home/Trusted";
// export default function Home() {
//     return (
//       <main>
//         <Hero/>
//         <Whycbit/>
//         <CourseInformation/>
//         <Eligibility />
//         <Ranking />
//         <Fees />
//         {/* <Trusted /> */}
//       </main>
//     );
//   }
import React from 'react';
import Hero from '../components/Home/Hero';
import Whycbit from '../components/Home/Whycbit';
import CourseInformation from '../components/Home/CourseInformation';
import Eligibility from '../components/Home/Eligibility';
import Ranking from '../components/Home/Ranking';
import Fees from '../components/Home/Fees';

export default function Home() {
  return (
    <main>
      {/* Add style tag for the specified styles */}
      <style>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }

          /* Hover effect for links */
          a:hover {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>

      <Hero />
      <Whycbit />
      <CourseInformation />
      <Eligibility />
      <Ranking />
      <Fees />
      {/* <Trusted /> */}
    </main>
  );
}

  