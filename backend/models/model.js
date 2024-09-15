// models/admission.js
const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    admissionNo: String,
    rollNo: String,
    program: String,
    studentName: String,
    fatherName: String,
    motherName: String,
    dob: String,
    fatherOccupation: String,
    nationality: String,
    motherOccupation: String,
    branch: String,
    gender: String,
    fatherAnnualIncome: String,
    motherAnnualIncome: String,
    religion: String,
    bloodgroup: String,
    identificationMarks: String,
});

const admissionSchema = new mongoose.Schema({
    dateOfAdmission: String,
    cetHallTicketNo: String,
    selectedSpecialCategory: String,
    selectedArea: String,
    selectedCategory: String,
    selectedAdmissionCategory: String,
    cetRank: String,
    selectedCET: String,
    feeReimbursement: String,
    selectedScholarshipEligibility: String,
});

const communicationSchema = new mongoose.Schema({
    permanentAddress: {
        houseNo: String,
        street: String,
        landmark: String,
        area: String,
        mandal: String,
        district: String,
        pincode: String,
        state: String,
    },
    correspondenceAddress: {
        houseNo: String,
        street: String,
        landmark: String,
        area: String,
        mandal: String,
        district: String,
        pincode: String,
        state: String,
    },
    contactDetails: {
        studentAadharNo: String,
        studentMobileNo: String,
        studentEmail: String,
    },
    parentContactDetails: {
        parentMobileNo: String,
        parentEmail: String,
    },
})

const studentInfoSchema = new mongoose.Schema({
  ssc: {
    board: String,
    hallTicketNumber: String,
    maxMarks: String,
    marksSecured: String,
    totalAggregate: String,
    groupPercentage: String,
    passingMonthYear: String,
  },
  inter: {
    board: String,
    hallTicketNumber: String,
    maxMarks: String,
    marksSecured: String,
    totalAggregate: String,
    groupPercentage: String,
    passingMonthYear: String,
  },
  degree: {
    board: String,
    hallTicketNumber: String,
    maxMarks: String,
    marksSecured: String,
    totalAggregate: String,
    groupPercentage: String,
    passingMonthYear: String,
  },
});

const Personal = mongoose.model('Personal', personalSchema);
const Admission = mongoose.model('Admission', admissionSchema);
const communication = mongoose.model('communication', communicationSchema);
const StudentInfoModel = mongoose.model('StudentInfo', studentInfoSchema);

module.exports = {
    Personal,
    Admission,
    communication,
    StudentInfoModel
};
