import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

function EducationDetails() {
  const [studentInfo, setStudentInfo] = useState({
    ssc: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
    inter: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
    degree: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (section, field, value) => {
    setStudentInfo((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleFocus = (section, field) => {
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [`${section}-${field}`]: true,
    }));
  };

  const validate = (values) => {
    const errors = {};

    // SSC validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.ssc[field]) {
        errors[`ssc-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Inter validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.inter[field]) {
        errors[`inter-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Degree validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.degree[field]) {
        errors[`degree-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(studentInfo);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/forms/submiteducationdetails', studentInfo);
        console.log('Server response:', response.data);
      } catch (error) {
        console.log(error);
      }
      console.log('Form submitted:', studentInfo);
    }
  };

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          {/* SSC Section */}
          <h2 style={{ textAlign: 'center', color: '#333' }}>Education Details:</h2>
          <h3>S.S.C. / X Class </h3>
          {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
            <div key={`ssc-${field}`} style={inputContainerStyle}>
              <label htmlFor={`ssc-${field}`} style={inputLabelStyle}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                id={`ssc-${field}`}
                name={`ssc-${field}`}
                value={studentInfo.ssc[field]}
                onChange={(e) => handleChange('ssc', field, e.target.value)}
                onFocus={() => handleFocus('ssc', field)}
                style={inputStyle}
              />
              {touchedFields[`ssc-${field}`] && formErrors[`ssc-${field}`] && <p style={errorStyle}>{formErrors[`ssc-${field}`]}</p>}
            </div>
          ))}

          {/* Add other SSC fields */}
          <h3>Inter / XII / Polytechnic</h3>
          {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
            <div key={`inter-${field}`} style={inputContainerStyle}>
              <label htmlFor={`inter-${field}`} style={inputLabelStyle}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                id={`inter-${field}`}
                name={`inter-${field}`}
                value={studentInfo.inter[field]}
                onChange={(e) => handleChange('inter', field, e.target.value)}
                onFocus={() => handleFocus('inter', field)}
                style={inputStyle}
              />
              {touchedFields[`inter-${field}`] && formErrors[`inter-${field}`] && <p style={errorStyle}>{formErrors[`inter-${field}`]}</p>}
            </div>
          ))}

          {/* Degree Section */}
          <h3>Degree (Specify)(For MBA/MCA/M.E/M.Tech)</h3>
          {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
            <div key={`degree-${field}`} style={inputContainerStyle}>
              <label htmlFor={`degree-${field}`} style={inputLabelStyle}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                id={`degree-${field}`}
                name={`degree-${field}`}
                value={studentInfo.degree[field]}
                onChange={(e) => handleChange('degree', field, e.target.value)}
                onFocus={() => handleFocus('degree', field)}
                style={inputStyle}
              />
              {touchedFields[`degree-${field}`] && formErrors[`degree-${field}`] && <p style={errorStyle}>{formErrors[`degree-${field}`]}</p>}
            </div>
          ))}

          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

// Styles
const inputContainerStyle = {
  marginBottom: '20px',
};

const inputLabelStyle = {
  display: 'block',
  margin: '10px 0 5px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  backgroundColor: '#E0E0E0', // Grey background color
  border: '1px solid #ccc', // Border color
  borderRadius: '4px',
};

const errorStyle = {
  color: 'red',
  margin: '5px 0 0',
};

const submitButtonStyle = {
  backgroundColor: '#330101',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontWeight: '500',
  marginTop: '20px',
  outline: 'none',
};

export default EducationDetails;
