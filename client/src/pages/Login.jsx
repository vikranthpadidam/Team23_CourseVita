import React from "react";
import "../styles/RegisterStyles.css"; // Your existing styles
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import  course  from "../assets/home/course.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:5000/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/H");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <div className="form-container back1">
     
      <div className="form-content">
      <div className="logo-container">
        <img src={course} alt="CBIT Logo" className="cbit-logo" />
      </div>
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
         < div className='d-flex flex-column '>
    <div className='d-flex flex-row justify-content-center '>
<Link to='/register' className='m-3 text-center'>Already user login here</Link></div>
<br/>
<div className='d-flex flex-row justify-content-center '>

<button className='btn btn-success b' type='submit'>
login
</button>
</div>

</div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
