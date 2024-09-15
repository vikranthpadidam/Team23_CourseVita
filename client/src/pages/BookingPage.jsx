import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message, Upload, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import "../styles/bookingpage.css";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [faculty, setFaculty] = useState(null);
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/faculty/getFacultyById",
        { facultyId: params.facultyId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setFaculty(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBooking = async () => {
    try {
      if (!file || !comment) {
        message.error("File and Comment are Required");
        return;
      }

      dispatch(showLoading());

      const formData = new FormData();
      formData.append("file", file);
      formData.append("comment", comment);
      formData.append("facultyId", params.facultyId);
      formData.append("userId", user._id);
      formData.append("doctorInfo", JSON.stringify(faculty));
      formData.append("userInfo", JSON.stringify(user));

      const res = await axios.post(
        "http://localhost:5000/api/v1/user/book-appointment",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        message.success(res.data.message);
        setIsAvailable(false);
        getUserData(); // Refresh faculty data after booking
      } else {
        message.error(res.data.message);
        setIsAvailable(false);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h3 className="text-center text-dark ">Booking Page</h3>
        {faculty && (
          <div className="doctor-info">
            <h4>
              {faculty.firstName} {faculty.lastName}
            </h4>
  
            <div className="file-comment-section">
              <Upload
                beforeUpload={(file) => {
                  setFile(file);
                  return false; // Prevent auto upload
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Task File</Button>
              </Upload>

              <Input.TextArea
                className="mt-3"
                placeholder="Enter comments for the booking"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button className="btn btn-book-now mt-3" onClick={handleBooking}>
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
