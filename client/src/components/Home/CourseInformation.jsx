import React from 'react';
import Container from '../Container';

const CourseInformation = () => {
  const ugCourses = [
    { course: '25 Day Python Course', intake: '02/09/2024' },
    { course: 'Become a Successful Data Scientist', intake: '09/09/2024' },
    { course: 'Become a Successful Data Analyst', intake: 'Upcoming' },
    { course: 'Become Expert in ML Ops', intake: 'Upcoming' },
    { course: 'Become a Successful Front-End Developer', intake: 'Upcoming' },
    { course: 'Become a Successful Data Visualization Expert', intake: '02/09/2024' },
    { course: 'Python for Data Analytics', intake: 'Upcoming' },
    { course: 'Find Your Career', intake: '24th July 2024' },
    { course: 'Become a Data Engineer', intake: 'Upcoming' },
    { course: 'Master AWS and DevOps', intake: 'Upcoming' },
    { course: '25 Day Frontend Course', intake: '02/09/2024' },
  ];

  return (
    <section id='courseinfo' className="my-20 py-10 bg-red-50">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">COURSES</h1>
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#410F11]">Courses & Start Dates</h2>
          <table className="w-full border-collapse border border-[#410F11] bg-[#C7BAB1]">
            <thead>
              <tr>
                <th className="border border-[#410F11] p-2 text-center">S.No.</th>
                <th className="border border-[#410F11] p-2 text-center">Course(s)</th>
                <th className="border border-[#410F11] p-2 text-center">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {ugCourses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-[#410F11] p-2 text-center">{index + 1}</td>
                  <td className="border border-[#410F11] p-2">{course.course}</td>
                  <td className="border border-[#410F11] p-2 text-center">{course.intake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default CourseInformation;