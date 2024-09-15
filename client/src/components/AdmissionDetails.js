import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

function AdmissionDetails() {
    const [formData, setFormData] = useState({
        dateOfAdmission: '',
        cetHallTicketNo: '',
        selectedCET: '',
        cetRank: '',
        selectedAdmissionCategory: '',
        selectedCategory: '',
        casteName: '',
        selectedSpecialCategory: '',
        selectedArea: '',
        feeReimbursement: '',
        selectedScholarshipEligibility: '',
    });

    const [touchedFields, setTouchedFields] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleDropdownChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.dateOfAdmission) {
            errors.dateOfAdmission = 'Date of Admission is required';
        }

        if (!values.cetHallTicketNo) {
            errors.cetHallTicketNo = 'CET Hall Ticket No. is required';
        } else if (isNaN(values.cetHallTicketNo)) {
            errors.cetHallTicketNo = 'Enter a valid CET HallTicket Number';
        }

        if (!values.selectedCET) {
            errors.selectedCET = 'Qualified CET Type is required';
        }

        if (!values.cetRank) {
            errors.cetRank = 'CET Rank is required';
        } else if (isNaN(values.cetRank)) {
            errors.cetRank = 'Enter a valid CET Rank';
        }

        if (!values.selectedAdmissionCategory) {
            errors.selectedAdmissionCategory = 'Admission Category is required';
        }

        if (!values.selectedCategory) {
            errors.selectedCategory = 'Category is required';
        }

        if (!values.casteName) {
            errors.casteName = 'Caste Name is required';
        }

        if (!values.selectedSpecialCategory) {
            errors.selectedSpecialCategory = 'Special Category is required';
        }

        if (!values.selectedArea) {
            errors.selectedArea = 'Area is required';
        }

        if (!values.feeReimbursement) {
            errors.feeReimbursement = 'Please select Fee Reimbursement';
        }

        if (!values.selectedScholarshipEligibility) {
            errors.selectedScholarshipEligibility = 'Scholarship Eligibility is required';
        }

        return errors;
    };

    const navigate = useNavigate();

    useEffect(() => {
        setFormErrors(validateForm(formData));
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                navigate('/CommunicationDetails');
                const response = await axios.post('http://localhost:5000/forms/submitAdmissionDetails', formData);
                console.log('Server response:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <Layout>
            <div>
                <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>Admission Details:</h2>
                    <label htmlFor="dateOfAdmission" style={{ ...inputLabelStyle }}>
                        Date of Admission:
                    </label>
                    <input
                        type="date"
                        id="dateOfAdmission"
                        name="dateOfAdmission"
                        value={formData.dateOfAdmission}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.dateOfAdmission && <p style={{ color: 'red' }}>{formErrors.dateOfAdmission}</p>}

                    <label style={{ ...inputLabelStyle }}>Qualified CET Type:</label>
                    <select
                        value={formData.selectedCET}
                        onChange={handleDropdownChange}
                        name="selectedCET"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select CET Type</option>
                        <option value="eamcet">EAMCET</option>
                        <option value="jee">JEE</option>
                        <option value="ecet">ECET</option>
                        <option value="icet">ICET</option>
                    </select>
                    {touchedFields.selectedCET && <p style={{ color: 'red' }}>{formErrors.selectedCET}</p>}

                    <label htmlFor="cetHallTicketNo" style={{ ...inputLabelStyle }}>
                        CET Hall Ticket No.:
                    </label>
                    <input
                        type="text"
                        id="cetHallTicketNo"
                        name="cetHallTicketNo"
                        value={formData.cetHallTicketNo}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.cetHallTicketNo && <p style={{ color: 'red' }}>{formErrors.cetHallTicketNo}</p>}

                    <label htmlFor="cetRank" style={{ ...inputLabelStyle }}>
                        CET Rank:
                    </label>
                    <input
                        type="text"
                        id="cetRank"
                        name="cetRank"
                        value={formData.cetRank}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.cetRank && <p style={{ color: 'red' }}>{formErrors.cetRank}</p>}

                    <label htmlFor="selectedAdmissionCategory" style={{ ...inputLabelStyle }}>
                        Admission Category:
                    </label>
                    <select
                        value={formData.selectedAdmissionCategory}
                        onChange={handleDropdownChange}
                        name="selectedAdmissionCategory"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Admission Category</option>
                        <option value="convenorquota">Convenor Quota(A-Category)</option>
                        <option value="merit">Merit</option>
                        <option value="nri">NRI</option>
                        <option value="nriSponsored">NRI Sponsored</option>
                        <option value="spot">SPOT</option>
                    </select>
                    {touchedFields.selectedAdmissionCategory && (
                        <p style={{ color: 'red' }}>{formErrors.selectedAdmissionCategory}</p>
                    )}

                    <label htmlFor="selectedCategory" style={{ ...inputLabelStyle }}>
                        Category:
                    </label>
                    <select
                        value={formData.selectedCategory}
                        onChange={handleDropdownChange}
                        name="selectedCategory"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Category</option>
                        <option value="oc">OC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="bc-a">BC-A</option>
                        <option value="bc-b">BC-B</option>
                        <option value="bc-c">BC-C</option>
                        <option value="bc-d">BC-D</option>
                        <option value="bc-e">BC-E</option>
                        <option value="others">OTHERS(Specify)</option>
                    </select>
                    {touchedFields.selectedCategory && <p style={{ color: 'red' }}>{formErrors.selectedCategory}</p>}

                    <label htmlFor="casteName" style={{ ...inputLabelStyle }}>
                        Caste Name:
                    </label>
                    <input
                        type="text"
                        id="casteName"
                        name="casteName"
                        value={formData.casteName}
                        onChange={handleChange}
                        style={{ ...inputStyle }}
                    />
                    {touchedFields.casteName && <p style={{ color: 'red' }}>{formErrors.casteName}</p>}

                    <label htmlFor="selectedSpecialCategory" style={{ ...inputLabelStyle }}>
                        Special Category:
                    </label>
                    <select
                        value={formData.selectedSpecialCategory}
                        onChange={handleDropdownChange}
                        name="selectedSpecialCategory"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Special Category</option>
                        <option value="phc">PHC</option>
                        <option value="ncc">NCC</option>
                        <option value="cap">CAP</option>
                        <option value="sports">SPORTS</option>
                    </select>
                    {touchedFields.selectedSpecialCategory && (
                        <p style={{ color: 'red' }}>{formErrors.selectedSpecialCategory}</p>
                    )}

                    <label htmlFor="selectedArea" style={{ ...inputLabelStyle }}>
                        Area:
                    </label>
                    <select
                        value={formData.selectedArea}
                        onChange={handleDropdownChange}
                        name="selectedArea"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Area</option>
                        <option value="ou">OU</option>
                        <option value="au">AU</option>
                        <option value="svu">SVU</option>
                        <option value="others">OTHERS</option>
                    </select>
                    {touchedFields.selectedArea && <p style={{ color: 'red' }}>{formErrors.selectedArea}</p>}

                    <label htmlFor="feeReimbursement" style={{ ...inputLabelStyle }}>
                        Fee Reimbursement:
                    </label>
                    <select
                        value={formData.feeReimbursement}
                        onChange={handleDropdownChange}
                        name="feeReimbursement"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Fee Reimbursement</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {touchedFields.feeReimbursement && (
                        <p style={{ color: 'red' }}>{formErrors.feeReimbursement}</p>
                    )}

                    <label htmlFor="selectedScholarshipEligibility" style={{ ...inputLabelStyle }}>
                        Scholarship Eligibility:
                    </label>
                    <select
                        value={formData.selectedScholarshipEligibility}
                        onChange={handleDropdownChange}
                        name="selectedScholarshipEligibility"
                        style={{ ...inputStyle }}
                    >
                        <option value="">Select Scholarship Eligibility</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {touchedFields.selectedScholarshipEligibility && (
                        <p style={{ color: 'red' }}>{formErrors.selectedScholarshipEligibility}</p>
                    )}

                    <button
                        type="submit"
                        style={{
                            ...submitButtonStyle,
                        }}
                    >
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

export default AdmissionDetails;
