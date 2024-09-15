const express = require("express");
const multer = require("multer");
const upload =require("../middlewares/multer")
const path = require("path");
const {
  loginController,
  registerController,
  authController,
  applyAdminController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookeAppointmnetController,
  getAppointmentsController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userControllers");
const pdfController = require("../controllers/pdfcontroller");
const authMiddleware = require("../middlewares/authMiddleware");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  const allowedExtensions = [".jpg", ".jpeg", ".png"];

  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png formats are allowed!"), false);
  }
};
//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);
router.post("/apply-admin", authMiddleware, applyAdminController);
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
router.get("/getAllFaculty", authMiddleware, getAllDoctorsController);
router.get("/getAllFaculty", authMiddleware, getAllDoctorsController);
router.post(
  "/book-appointment",
  upload.single("file"),
  authMiddleware,
  bookeAppointmnetController
);

router.get("/get-appointments", authMiddleware, getAppointmentsController);
//----rerlwjrlw
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);
router.get("/user-appointments", authMiddleware, userAppointmentsController);
router.post(
  "/convert",
  upload.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
    { name: "file4" },
    { name: "file5" },
    { name: "file6" },
    { name: "file7" },
    { name: "file8" },
    { name: "file9" },
    { name: "file10" },
    { name: "file11" },
    { name: "file12" },
    { name: "file13" },
    { name: "file14" },
    { name: "file15" },
    { name: "file16" },
  ]),
  pdfController.convertAndDownload
);
module.exports = router;
