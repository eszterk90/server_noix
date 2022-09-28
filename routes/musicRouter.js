const express = require('express');
const router = express.Router();
const {getAllTracksByUser, audioUpload} = require('../controllers/musicController')
// const {checkLoggedIn} = require('../middleware/checkLoggedIn')
const multer = require('multer')
const upload = multer();


router.post('/upload', upload.single('file'), audioUpload)
router.get('/mysongs', getAllTracksByUser)

module.exports = router;