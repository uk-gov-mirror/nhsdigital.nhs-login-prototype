// External dependencies
const express = require('express');
const router = express.Router();
const request = require('request');



// User chooses how to provide image of ID (take photo or upload) - service-access-photo-id-instructions.html

router.post('/registration/choice-id-capture', function (req, res) {

  var id_how = req.session.data['idHow']

  if (id_how == "upload") {
    res.redirect('service-access-photo-id-upload')
  } else {
    res.redirect('service-access-photo-id-camera')
  }
})



// User chooses how they want to do the face match (iProov face scan or video selfie) - service-access-video-selfie.html

router.post('/registration/choice-face-match', function (req, res) {

  var face_how = req.session.data['faceHow']

  if (face_how == "video") {
    res.redirect('service-access-video-selfie-triage')
  } else {
    res.redirect('service-access-iproov-enrolment')
  }
})


// nhs-number.html routing

router.post('/registration/nhs-number-checking', function (req, res) {

  var nhs_number_choice = req.session.data['nhs-number-choice']

  if (nhs_number_choice == "yes") {
    res.redirect('dob-enter')
  } else {
    res.redirect('name-enter')
  }
})



// Clear all session data
router.get('/clear', (req, res) => {
  req.session.data = {}
  res.redirect('/index')
})

module.exports = router;