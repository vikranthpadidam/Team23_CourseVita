// FacultyList.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FacultyList.css"; // Import the CSS file

const FacultyList = ({ faculty }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card p-2 m-2"
        onClick={() => navigate(`/faculty/book-appointment/${faculty._id}`)}
      >
        <div className="card-header faculty-header">{faculty.firstName}</div>
        <div className="card-body faculty-info">
          {/* <p>
            <b>Domine:</b> {faculty.branch}
          </p> */}
          <p>
            <p>
              <b>Task:</b> {faculty.taskDescription}
            </p>
            <b>Expertise:</b> {faculty.experience}
          </p>
          <p>
            <b>Duration:</b> {faculty.timings[0]} - {faculty.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default FacultyList;
