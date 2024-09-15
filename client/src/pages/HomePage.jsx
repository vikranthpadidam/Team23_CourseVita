import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import FacultyList from "../components/FacultyList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [faculty, updateFaculty] = useState([]);
  const { user } = useSelector((state) => state.user);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/user/getAllFaculty",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        updateFaculty(res.data.data);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Conditionally render content based on the user's role
  const renderContent = () => {
    if (user && user.isAdmin) {
      // Render content for admin
      return <p>Welcome Admin! This is the admin content.</p>;
    } else if (user && user.isDoctor) {
      // Render content for faculty
      return <p>Welcome Faculty! This is the faculty content.</p>;
    } else {
      // Render content for students (assuming neither isAdmin nor isDoctor is true)
      return (
        <>
          <h1 className="text-center">Home Page</h1>
          <Row className="faculty-list">
            {faculty &&
              faculty.map((faculty) => (
                <FacultyList key={faculty._id} faculty={faculty} />
              ))}
          </Row>
        </>
      );
    }
  };

  return <Layout>{renderContent()}</Layout>;
};

export default HomePage;
