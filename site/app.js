/* dependency setup */
process.env.UV_THREADPOOL_SIZE = 128;

var express = require("express");
var bodyParser = require('body-parser');
var log4js = require('log4js');
var logger = log4js.getLogger();
var backendApi = require("./backendApi")

logger.level = 'debug';
logger.debug("launching summit health endpoint");

/* end of dependency setup */

var port = process.env.PORT || 8080;

var app = express();

var MODE = {"TEST":1,"Z":2,"OPENSHIFT":3}

var CURRENTMODE = MODE.TEST;

app.post('mode', function(req, res) {
  logger.debug('called the mode endpoint ' + req.query.mode);
});

app.get('/mode',function(req, res){
  res.send({"mode":CURRENTMODE});
});

app.get('/info', function(req, res) {

  logger.debug('called the information endpoint for ' + req.query.id);

  var patientdata = {

    personal: {},

    medications: [],

    appointments: ['2018-01-15 1:00 - Dentist', '2018-02-14 4:00 - Internal Medicine', '2018-09-30 8:00 - Pediatry']
  }

  var patientInfo = backendApi.getPatientInfo(req.query.id);
  var patientMedications = backendApi.getPatientMedications(req.query.id);

  patientInfo.then(function(patientInfoResult) {
    patientdata.personal = patientInfoResult;

    patientMedications.then(function(patientMedicationsResult) {
      patientdata.medications = patientMedicationsResult;

      res.send(patientdata);
    })
  })

});

app.get('/measurements', function(req, res) {

  logger.debug('called the measurements endpoint for ' + req.query.id);

  var patientMeasurements = backendApi.getPatientMeasurements(req.query.id);

  patientMeasurements.then(function(patientMeasurementsResult) {
    measurements = patientMeasurementsResult;

    res.send(measurements);
  })

});

app.post('/login', function(req, res) {

  logger.debug('called the login endpoint for ' + req.query.username);

  var patientLogin = backendApi.patientLogin(req.query.username, req.query.password);

  patientLogin.then(function(id) {
    res.send({id: id});
  })

})

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json())

app.listen(port);
logger.debug("Listening on port ", port);
