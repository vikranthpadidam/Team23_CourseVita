// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const { Personal, Admission, communication ,StudentInfoModel} = require('../models/model');

router.post('/submitpersonaldetails', async (req, res) => {
    try {
        const formDataPersonal = req.body;
        const newPersonal = new Personal(formDataPersonal);
        const savedPersonal = await newPersonal.save();
        res.json(savedPersonal);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.post('/submitAdmissionDetails', async (req, res) => {
    try {
        const formDataAdmission = req.body;
        const newAdmission = new Admission(formDataAdmission);
        const savedAdmission = await newAdmission.save();
        res.json(savedAdmission);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});


router.post('/submitcomunicationdetails', async (req, res) => {
    try {
        const formDatacommunication = req.body;
        const newcommunication = new communication(formDatacommunication);
        const savedcommunication = await newcommunication.save();
        res.json(savedcommunication);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});


router.post('/submiteducationdetails', async (req, res) => {
    try {
        const formDataeducation = req.body;
        const newcommunication = new StudentInfoModel(formDataeducation);
        const savedcommunication = await newcommunication.save();
        res.json(savedcommunication);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

module.exports = router;


