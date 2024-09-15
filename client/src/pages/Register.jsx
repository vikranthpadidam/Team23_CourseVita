import React from 'react'
import axios from 'axios';
import '../styles/RegisterStyles.css';
import {Form, Input,message} from 'antd';
import  course  from "../assets/home/course.png";


import { Link,useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
    const onfinishHandler=async(values)=>{
       try{
const res=await axios.post('http://localhost:5000/api/v1/user/register',values)
if(res.data.success){
    message.success('Registered successfully');
    navigate('/login');
}else{
    message.error(res.data.message);
}
       }
       catch(error){
        console.log(error)
        message.error('something went wrong')
       }
    };
  return (
   <div className='back1'>
    <div className='form-container'>
  <div className='form-content'>
  <div className="logo-container">
        <img src={course} alt="CBIT Logo" className="cbit-logo" />
      </div>
<Form layout="vertical" onFinish={onfinishHandler} className='register-form'>

<Form.Item label="Name" name="name">
    <Input type="text" required/>
</Form.Item>
<Form.Item label="Email" name="email">
    <Input type="email" required/>
</Form.Item>
<Form.Item label="Password" name="password">
    <Input type="password" required/>
</Form.Item>
<div className='d-flex flex-column '>
    <div className='d-flex flex-row justify-content-center '>
<Link to='/login' className='m-3 text-center'>Already user login here</Link></div>
<br/>
<div className='d-flex flex-row justify-content-center '>

<button className='btn btn-success b' type='submit'>
Register
</button>
</div>

</div>
</Form>
</div>
   </div> 
   </div>
  )
}

export default Register