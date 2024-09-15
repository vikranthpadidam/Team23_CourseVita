import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

function PersonalDetails() {
    const [formData, setFormData] = useState({
        admissionNo: '',
        rollNo: '',
        program: '',
        studentName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        fatherOccupation: '',
        nationality: '',
        motherOccupation: '',
        branch: '',
        gender: '',
        fatherAnnualIncome: '',
        motherAnnualIncome: '',
        religion: '',
        bloodgroup: '',
        identificationMarks: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setTouchedFields((prevFields) => ({
            ...prevFields,
            [name]: true,
        }));
    };

    const validate = (values) => {
        const errors = {};

        if (!values.admissionNo) {
            errors.admissionNo = 'Admission number is required';
        } else if (isNaN(values.admissionNo)) {
            errors.admissionNo = 'Enter a valid admission number';
        }

        if (!values.rollNo) {
            errors.rollNo = 'Roll number is required';
        } else if (isNaN(values.rollNo)) {
            errors.rollNo = 'Enter a valid roll number';
        }
        if (!values.program) {
            errors.program = 'Program is required';
        }

        if (!values.studentName) {
            errors.studentName = "Student name is required";
        }

        if (!values.fatherName) {
            errors.fatherName = "Father's name is required";
        }

        if (!values.motherName) {
            errors.motherName = "Mother's name is required";
        }

        if (!values.dob) {
            errors.dob = "Date of birth is required";
        }

        if (!values.fatherOccupation) {
            errors.fatherOccupation = "Father's occupation is required";
        }

        if (!values.nationality) {
            errors.nationality = "Nationality is required";
        }

        if (!values.motherOccupation) {
            errors.motherOccupation = "Mother's occupation is required";
        }

        if (!values.branch) {
            errors.branch = "Branch is required";
        }

        if (!values.gender) {
            errors.gender = "Gender is required";
        }

        if (!values.fatherAnnualIncome) {
            errors.fatherAnnualIncome = "Father's annual income is required";
        } else if (isNaN(values.fatherAnnualIncome)) {
            errors.fatherAnnualIncome = "Enter a valid annual income";
        }

        if (!values.motherAnnualIncome) {
            errors.motherAnnualIncome = "Mother's annual income is required";
        } else if (isNaN(values.motherAnnualIncome)) {
            errors.motherAnnualIncome = "Enter a valid annual income";
        }

        if (!values.religion) {
            errors.religion = "Religion is required";
        }

        if (!values.bloodgroup) {
            errors.bloodgroup = "Blood group is required";
        }

        if (!values.identificationMarks) {
            errors.identificationMarks = "Identification marks are required";
        }

        return errors;
    };

    const navigate = useNavigate();
    useEffect(() => {
        setFormErrors(validate(formData));
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            navigate('/AdmissionDetails');
            try {
                const response = await axios.post('http://localhost:5000/forms/submitpersonaldetails', formData);
                console.log('Server response:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <Layout>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                    <h1 style={{ textAlign: 'center', color: '#333' }}>ADMISSION FORM</h1>
                    <h5 style={{ textAlign: 'center' }}>(Fill in CAPITAL letters only)</h5>

                    <label htmlFor="admissionNo" style={{ ...inputLabelStyle }}>
                        Admission Number:
                    </label>
                    <input
                        type="text"
                        id="admissionNo"
                        name="admissionNo"
                        value={formData.admissionNo}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.admissionNo && <p style={{ color: 'red' }}>{formErrors.admissionNo}</p>}

                    <label htmlFor="rollNo" style={{ ...inputLabelStyle }}>
                        Roll Number/Hall Ticket No:
                    </label>
                    <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.rollNo && <p style={{ color: 'red' }}>{formErrors.rollNo}</p>}

                    <label htmlFor="program" style={{ ...inputLabelStyle }}>
                        Program:
                    </label>
                    <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Program</option>
                        <option value="B.E./B.TECH">B.E./B.TECH</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="Others">Others</option>
                    </select>
                    {touchedFields.program && <p style={{ color: 'red' }}>{formErrors.program}</p>}

                    <label htmlFor="branch" style={{ ...inputLabelStyle }}>
                        Branch:
                    </label>
                    <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Branch</option>
                        <option value="IT">Information Technology (IT)</option>
                        <option value="CSE">Computer Science and Engineering (CSE)</option>
                        <option value="MECH">Mechanical Engineering (MECH)</option>
                        <option value="CIVIL">Civil Engineering (CIVIL)</option>
                        <option value="AIML">Artificial Intelligence and Machine Learning (AIML)</option>
                        <option value="ECE">Electronic Engineering (ECE)</option>
                        <option value="BIOTECH">Biotechnology (BIOTECH)</option>
                    </select>
                    {touchedFields.branch && <p style={{ color: 'red' }}>{formErrors.branch}</p>}

                    <h3 style={{ color: '#333' }}>Personal Details:</h3>

                    <label htmlFor="studentName" style={{ ...inputLabelStyle }}>
                        Name of the Student (As per S.S.C / X Class):
                    </label>
                    <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.studentName && <p style={{ color: 'red' }}>{formErrors.studentName}</p>}

                    <label htmlFor="fatherName" style={{ ...inputLabelStyle }}>
                        Father's Name (As per S.S.C / X Class):
                    </label>
                    <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.fatherName && <p style={{ color: 'red' }}>{formErrors.fatherName}</p>}

                    <label htmlFor="motherName" style={{ ...inputLabelStyle }}>
                        Mother's Name (As per S.S.C / X Class):
                    </label>
                    <input
                        type="text"
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.motherName && <p style={{ color: 'red' }}>{formErrors.motherName}</p>}

                    <label htmlFor="dob" style={{ ...inputLabelStyle }}>
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.dob && <p style={{ color: 'red' }}>{formErrors.dob}</p>}

                    <label htmlFor="gender" style={{ ...inputLabelStyle }}>
                        Gender:
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {touchedFields.gender && <p style={{ color: 'red' }}>{formErrors.gender}</p>}

                    <label htmlFor="fatherOccupation" style={{ ...inputLabelStyle }}>
                        Father's Occupation:
                    </label>
                    <input
                        type="text"
                        id="fatherOccupation"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.fatherOccupation && <p style={{ color: 'red' }}>{formErrors.fatherOccupation}</p>}

                    <label htmlFor="fatherAnnualIncome" style={{ ...inputLabelStyle }}>
                        Annual Income:
                    </label>
                    <input
                        type="text"
                        id="fatherAnnualIncome"
                        name="fatherAnnualIncome"
                        value={formData.fatherAnnualIncome}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.fatherAnnualIncome && <p style={{ color: 'red' }}>{formErrors.fatherAnnualIncome}</p>}

                    <label htmlFor="motherOccupation" style={{ ...inputLabelStyle }}>
                        Mother's Occupation:
                    </label>
                    <input
                        type="text"
                        id="motherOccupation"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.motherOccupation && <p style={{ color: 'red' }}>{formErrors.motherOccupation}</p>}

                    <label htmlFor="motherAnnualIncome" style={{ ...inputLabelStyle }}>
                        Annual Income:
                    </label>
                    <input
                        type="text"
                        id="motherAnnualIncome"
                        name="motherAnnualIncome"
                        value={formData.motherAnnualIncome}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.motherAnnualIncome && <p style={{ color: 'red' }}>{formErrors.motherAnnualIncome}</p>}

                    <label htmlFor="nationality" style={{ ...inputLabelStyle }}>
                        Nationality:
                    </label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.nationality && <p style={{ color: 'red' }}>{formErrors.nationality}</p>}

                    <label htmlFor="religion" style={{ ...inputLabelStyle }}>
                        Religion:
                    </label>
                    <input
                        type="text"
                        id="religion"
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.religion && <p style={{ color: 'red' }}>{formErrors.religion}</p>}

                    <label htmlFor="bloodGroup" style={{ ...inputLabelStyle }}>
                        Blood Group:
                    </label>
                    <select
                        id="bloodGroup"
                        name="bloodgroup"
                        value={formData.bloodgroup}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    {touchedFields.bloodgroup && <p style={{ color: 'red' }}>{formErrors.bloodgroup}</p>}

                    <label htmlFor="studentIdentification" style={{ ...inputLabelStyle }}>
                        Student Identification Marks (As per Class X):
                    </label>
                    <input
                        type="text"
                        id="studentIdentification"
                        name="identificationMarks"
                        value={formData.identificationMarks}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.identificationMarks && <p style={{ color: 'red' }}>{formErrors.identificationMarks}</p>}

                    <button type="submit" style={{ ...submitButtonStyle }}>
                        Next
                    </button>
                </form>
            </div>
        </Layout>
    );
}

// Styles
const inputLabelStyle = {
    display: 'block',
    margin: '10px 0 5px',
    color: '#555',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#E0E0E0', // Grey background color
    border: '1px solid #ccc', // Border color
    borderRadius: '4px',
};

const submitButtonStyle = {
    backgroundColor:  '#330101',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'relative',
    left: '230px',
    fontSize: '1.2rem',
    width: '250px',
    fontWeight: '500',
    margin: '40px',
    outline: 'none',
};

export default PersonalDetails;