// if (!sessionStorage.getItem("patientid")) {
//   console.log("Redirecting to login");
//   window.location = '/login.html';
// } else {
//   var patientlogout = document.getElementById('logout');
//   patientlogout.innerHTML = sessionStorage.getItem("patientusername") + "/logout";
// }

var generalInfo = {
  title: "Summit Health Software Architecture",
  subtitle: "An Open Source Case Study",
  description: "Summit Health is an experimental project, and open source reference architecture for integrating a legacy data system, with modern cloud technology.",
  technologies: ["IBM zSystems", "IBM Cloud Container Service", "IBM Cloud Private", "IBM Watson Data Platform", "IBM API Connect"],
  pattern: ""
}

var modernAppInfo = {
  title: "Writing a Modern Web UI using existing System Z application",
  subtitle: "Agile UI development",
  description: "In this pattern, we show how to rapidly prototype a new web UI built on Node JS, using HTML5 technology, surfacing legacy data in fresh ways. ",
  technologies: ["IBM zSystems", "IBM Cloud Private", "IBM API Connect"],
  pattern: ""
}

var analyticsInfo = {
  title: "A health data analytics app that integrates with historic data",
  subtitle: "Creating a full stack big data app",
  description: "In this pattern, we build a full stack containerized application that delves into big data, using Node JS and the Watson Data Platform.",
  technologies: ["IBM zSystems", "IBM Cloud Container Service", "IBM API Connect"],
  pattern: ""
}

var syntheaInfo = {
  title: "Conditioning data on ZOS",
  subtitle: "Data preparation from Synthea",
  description: "In this pattern, we look at tips and tricks for conditioning big sets of generated data for storage on DB2/zOS.",
  technologies: ["IBM zSystems", "IBM DB2"],
  pattern: ""
}

var mlInfo = {
  title: "Machine learning with big data and zOS",
  subtitle: "Jupiter Notebooks and zOS",
  description: "In this pattern, we look at tips and tricks for working with data science and DB2/zOS.",
  technologies: ["IBM zSystems", "IBM DB2"],
  pattern: ""
}

var chosenpattern = null;

var c = document.getElementById("canvas");

var AQUA = "#00ABC0";
var NAVY = "#0F4C81";
var AQUALIGHT = "#99DDE5";
var EXTRALIGHT = "#CCEEF2";
var HIGHLIGHT = "#F88F58";
var HIGHFILL = "#fcddcc";
var HIGHCOMPONENTFILL = "#fab08a";

var LOWFILL = "#e5f6f8";
var LOWSTROKE = "#cceef2";
var LOWFONT = "#99dde5";

var HIGHLIGHTED = 0;
var DIMMED = 1;
var NORMAL = 2;

var DIMMEDORANGE = "fef3ee";

if (c != undefined) {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 1.5;
  ctx.fillStyle = "#0F4C81";
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText("Patient System", 5, 20);
  ctx.fillText("Analytics System", 455, 20);
  drawDefault();
  ctx.lineWidth = 1;

  // c.onmousemove = mouseMove;
}


function mouseMove(e) {
  // important: correct mouse position:
  var rect = this.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top,
    i = 0,
    r;

  var element = document.getElementById("archtitle");
  // element.innerHTML = ""

  var general = true;

  if (x > 5 && x < 205 && y > 50 && y < 170) {
    drawFrontEndPattern();
    general = false;
  }

  /* Container Service */

  if (x > 355 && x < 555 && y > 50 && y < 410) {
    drawContainerServicePattern();
    general = false;
  }

  /* Patient Records */

  if (x > 5 && x < 205 && y > 490 && y < 540) {
    drawPatientRecordsPattern();
    general = false;
  }

  if (general === true) {
    drawDefault();
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawFrontEndPattern(source) {

  if (chosenpattern == null || chosenpattern != source) {

    if(chosenpattern != null){
      clearSelectedborder(chosenpattern);
    }

    chosenpattern = source;

    clearCanvas();
    console.log('node app');
    displayInfo(modernAppInfo);
    drawNodeApp("CF - ICP", HIGHLIGHTED);
    drawAPIConnect(HIGHLIGHTED);
    drawzOS(DIMMED);
    drawContainer("IBM Container Service", DIMMED);
    drawZOSConnect(DIMMED);
    drawPatientRecords(DIMMED);
    drawCobolProcessing(DIMMED);
    drawSynthea(DIMMED);

    ctx.strokeStyle = HIGHLIGHT;
    ctx.beginPath();
    ctx.moveTo(240, 140);
    ctx.lineTo(170, 120);
    ctx.stroke();

    setSelectedborder(source);

  } else {
    clearSelectedborder(source);

    chosenpattern = null;
    drawDefault();
  }
}

function drawDefault(source) {
  clearCanvas();
  displayInfo(generalInfo)
  drawContainer("IBM Container Service", NORMAL);
  drawNodeApp("CF - ICP", NORMAL);
  drawAPIConnect(NORMAL)
  drawzOS(NORMAL);
  drawSynthea(NORMAL);
  drawConnections();
}

function drawMachinelearning(){
  
}


function drawContainerServicePattern(source) {

  if (chosenpattern == null || chosenpattern != source) {

    if(chosenpattern != null){
      clearSelectedborder(chosenpattern);
    }

    chosenpattern = source;


  clearCanvas();
  console.log('analytics app');
  drawContainer("IBM Container Service", HIGHLIGHTED);
  drawNodeApp("CF - ICP", DIMMED);
  drawAPIConnect(HIGHLIGHTED);
  drawzOS(HIGHLIGHTED);
  drawZOSConnect(HIGHLIGHTED);
  drawPatientRecords(HIGHLIGHTED);
  drawCobolProcessing(HIGHLIGHTED);
  drawMachineLearning(DIMMED);
  drawSynthea(DIMMED);
  displayInfo(analyticsInfo);


  ctx.strokeStyle = HIGHLIGHT;
  ctx.beginPath();


  ctx.moveTo(175, 240);
  ctx.lineTo(240, 220);

  /* API CONNECT TO ZOS CONNECT */

  ctx.moveTo(320, 220);
  ctx.lineTo(385, 280);


  ctx.stroke();


      setSelectedborder(source);

    } else {
      clearSelectedborder(source);

      chosenpattern = null;
      drawDefault();
    }
}

function setSelectedborder(source){
  source.style.border = "1px solid " + HIGHLIGHT;
}

function clearSelectedborder(source){
  source.style.border = "1px solid white";

  // source.onhover = function()
  // {
  //     source.style.border = "1px dashed " + HIGHLIGHT;
  // }
}

function drawPatientRecordsPattern(source) {

  if (chosenpattern == null || chosenpattern != source) {

    if(chosenpattern != null){
      clearSelectedborder(chosenpattern);
    }

    chosenpattern = source;

    clearCanvas();
    drawzOS(HIGHLIGHTED);
    drawSynthea(HIGHLIGHTED);
    drawNodeApp("CF - ICP", DIMMED);
    drawZOSConnect(DIMMED);
    drawMachineLearning(DIMMED);
    drawContainer("IBM Container Service", DIMMED);
    drawCobolProcessing(DIMMED)
    drawPatientRecords(HIGHLIGHTED);
    drawAPIConnect(DIMMED);

    ctx.strokeStyle = HIGHLIGHT;
    ctx.beginPath();
    ctx.moveTo(100, 430);
    ctx.lineTo(100, 505);
    ctx.stroke();

    displayInfo(syntheaInfo);

    setSelectedborder(source);

  } else {
    clearSelectedborder(source);
    chosenpattern = null;
    drawDefault();
  }
}

function drawConnections(state) {
  ctx.strokeStyle = AQUA;
  ctx.beginPath();

  /* API CONNECT TO CF UI */

  ctx.moveTo(240, 140);
  ctx.lineTo(170, 120);

  /* API CONNECT TO ZOS CONNECT */

  ctx.moveTo(175, 240);
  ctx.lineTo(240, 220);

  /* API CONNECT TO ZOS CONNECT */

  ctx.moveTo(320, 220);
  ctx.lineTo(385, 280);

  /* SYNTHEA TO DB */

  ctx.moveTo(100, 430);
  ctx.lineTo(100, 505);

  ctx.stroke();
}

function drawPatientRecords(state) {
  drawComponent(25, 400, "Patient Records - DB2", state);
}

function drawSynthea(state) {
  drawIsland(5, 490, 200, 50, "Synthea - Data Generation", state);
}

function drawZOSConnect(state) {
  drawComponent(25, 220, "z/OS Connect", state);
}

function drawAPIConnect(state) {
  drawIsland(230, 130, 100, 100, "API Connect", state);
}

function drawCobolProcessing(state) {
  drawComponent(25, 280, "Cobol processing", state);
}

function drawAnalyticsUI(state) {
  drawComponent(375, 90, "Analytics UI - Node JS", state);
}

function drawAnalyticsApp(state) {
  drawComponent(375, 150, "Analytics App - Node JS", state);
}

function drawAnalyticsAPI(state) {
  drawComponent(375, 210, "Analytics API - Node JS", state);
}

function drawDataLake(state) {
  drawComponent(375, 270, "Allergy data lake - Mongo", state);
}

function drawMachineLearning(state) {
  drawComponent(25, 340, "Machine Learning - Python", state);
}

function displayInfo(info) {

  var title = document.getElementById("archtitle");
  title.innerHTML = info.title;

  var subtitle = document.getElementById("subtitle");
  subtitle.innerHTML = info.subtitle;

  var description = document.getElementById("description");
  description.innerHTML = info.description;

  var techlist = document.getElementById("techlist");
  techlist.innerHTML = ""

  info.technologies.forEach(function(technology) {

    var li = document.createElement('li');
    li.innerHTML = technology;
    techlist.appendChild(li);
  })
}


function drawIsland(x, y, width, height, label, state) {

  switch (state) {

    case HIGHLIGHTED:
      ctx.fillStyle = HIGHCOMPONENTFILL;
      ctx.strokeStyle = HIGHLIGHT

      break;

    case NORMAL:
      ctx.fillStyle = AQUALIGHT;
      break;

    case DIMMED:
      ctx.fillStyle = LOWFILL;
      ctx.strokeStyle = LOWSTROKE;
      break;

    default:
      ctx.fillStyle = AQUALIGHT;
      break;
  }

  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
  if (state === DIMMED) {
    ctx.fillStyle = LOWFONT
  } else {
    ctx.fillStyle = NAVY
  }
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x + 10, y + height / 1.8);
}

function drawComponent(x, y, label, state) {

  var height = 40;
  var width = 160;

  switch (state) {

    case HIGHLIGHTED:
      ctx.fillStyle = HIGHCOMPONENTFILL;
      ctx.strokeStyle = HIGHLIGHT;
      break;

    case NORMAL:
      ctx.fillStyle = AQUALIGHT;
      break;

    case DIMMED:
      ctx.fillStyle = LOWFILL;
      break;

    default:
      ctx.fillStyle = AQUALIGHT;
      break;
  }

  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
  if (state === DIMMED) {
    ctx.fillStyle = LOWFONT
  } else {
    ctx.fillStyle = NAVY
  }
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x + 10, y + 25);
}

function drawNodeApp(label, state) {
  drawSubsystem(5, 50, 200, 100, label, state);
  drawComponent(25, 90, "Patient UI - Node JS", state);
}

function drawContainer(label, state) {
  drawSubsystem(355, 50, 200, 280, label, state);
  drawAnalyticsUI(state)
  drawAnalyticsApp(state)
  drawAnalyticsAPI(state)
  drawDataLake(state);
}

function setColors(state) {

  switch (state) {

    case HIGHLIGHTED:
      ctx.fillStyle = HIGHFILL;
      ctx.strokeStyle = HIGHLIGHT
      break;

    case NORMAL:
      ctx.fillStyle = EXTRALIGHT;
      ctx.strokeStyle = AQUA;
      break;

    case DIMMED:
      ctx.fillStyle = LOWFILL;
      ctx.strokeStyle = LOWSTROKE;
      break;

    default:
      ctx.fillStyle = EXTRALIGHT;
      ctx.strokeStyle = AQUA
      break;
  }
}

function drawSubsystem(x, y, width, height, label, state) {

  setColors(state);

  var cs = ctx.strokeStyle;

  ctx.fillRect(x, y, width, height);
  fillStripes(ctx, x, y, width, height)
  ctx.strokeStyle = cs;
  ctx.strokeRect(x, y, width, height);

  if (state === DIMMED) {
    ctx.fillStyle = LOWFONT
  } else {
    ctx.fillStyle = NAVY
  }

  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x + 20, y + 25);
}

function drawzOS(state) {
  var label = "z/OS";
  drawSubsystem(5, 180, 200, 280, label, state);
  drawZOSConnect(state);
  drawCobolProcessing(state);
  drawMachineLearning(state);
  drawPatientRecords(state);
}

var machinelearning = {}
var datasythesis = {}

function fillStripes(context, x, y, width, height) {
  var color1 = "#FFFFFF",
    color2 = "#CCEEF2";

  var starty = y;
  var endx = x;
  var startx = x;

  var gap = 5;

  do {
    starty = starty + gap;
    endx = endx + gap;
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 1.5;
    context.lineCap = 'round';
    context.moveTo(x, starty);
    context.lineTo(endx, y);
    context.stroke();

  } while (starty < height + y && endx + 5 < width + x)

  if (width > height) {

    endx = height + gap;

    do {
      starty = height + y;
      startx = startx + gap;
      endx = endx + gap;
      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 1.5;
      context.lineCap = 'round';
      context.moveTo(startx, starty);
      context.lineTo(endx, y);
      context.stroke();

    } while (endx + gap < width + x)

    endx = x + width
    endy = y - gap;
    starty = y + height;

    do {
      startx = startx + gap;
      endy = endy + gap;
      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 1.5;
      context.lineCap = 'round';
      context.moveTo(startx, starty);
      context.lineTo(endx, endy);
      context.stroke();

    } while (endy + gap < height + y)

  }

  if (height > width) {

    endx = width + x;
    endy = y - gap;
    startx = x;
    starty = width + y - gap;

    do {
      starty = starty + gap;
      endy = endy + gap;
      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 1.5;
      context.lineCap = 'round';
      context.moveTo(startx, starty);
      context.lineTo(endx, endy);
      context.stroke();

    } while (starty + gap < height + y)

    starty = y + height - gap;
    startx = x;
    endx = x + width;
    // endy = y + width-gap;

    do {
      startx = startx + gap;
      endy = endy + gap;
      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 1.5;
      context.lineCap = 'round';
      context.moveTo(startx, starty);
      context.lineTo(endx, endy);
      context.stroke();

    } while (startx + gap < width + x)

  }
}
