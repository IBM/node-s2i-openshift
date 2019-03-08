if (!sessionStorage.getItem("patientid")) {
  console.log("Redirecting to login");
  window.location = '/login.html';
} else {
  var patientlogout = document.getElementById('logout');
  patientlogout.innerHTML = sessionStorage.getItem("patientusername") + "/logout";
}

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

if (c != undefined) {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 1.5;

  ctx.fillStyle = "#0F4C81";
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText("Patient System", 5, 20);
  ctx.fillText("Analytics System", 455, 20);

  drawzOS("z/OS");
  drawContainer("IBM Container Service");
  drawNodeApp("CF - ICP");
  drawIsland(5, 590, 200, 50, "Synthea - Data Generation", NORMAL);
  drawIsland(230, 200, 100, 100, "API Connect", NORMAL);

  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(240, 220);
  ctx.lineTo(170, 140);

  ctx.moveTo(175, 280);
  ctx.lineTo(240, 280);

  ctx.moveTo(320, 280);
  ctx.lineTo(385, 350);

  ctx.moveTo(100, 530);
  ctx.lineTo(100, 605);

  ctx.stroke();

  c.onmousemove = function(e) {
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
      console.log('node app');
      displayInfo(modernAppInfo);
      drawNodeApp("CF - ICP", HIGHLIGHTED);
      drawIsland(230, 200, 100, 100, "API Connect", HIGHLIGHTED);
      drawzOS("z/OS", DIMMED);
      drawContainer("IBM Container Service", DIMMED);
      drawComponent(25, 240, "z/OS Connect", HIGHLIGHTED);
      drawComponent(25, 480, "Patient Records - DB2", HIGHLIGHTED);
      drawComponent(25, 320, "Cobol processing", HIGHLIGHTED);
      drawIsland(5, 590, 200, 50, "Synthea - Data Generation", DIMMED);

      general = false;
    }

    if (x > 355 && x < 555 && y > 50 && y < 410) {
      console.log('analytics app');
      drawContainer("IBM Container Service", HIGHLIGHTED);
      drawNodeApp("CF - ICP", DIMMED);
      drawIsland(230, 200, 100, 100, "API Connect", HIGHLIGHTED);
      drawzOS("z/OS", DIMMED);
      drawComponent(25, 240, "z/OS Connect", HIGHLIGHTED);
      drawComponent(25, 480, "Patient Records - DB2", HIGHLIGHTED);
      drawComponent(25, 320, "Cobol processing", HIGHLIGHTED);
            drawIsland(5, 590, 200, 50, "Synthea - Data Generation", DIMMED);

      displayInfo(analyticsInfo);
      general = false;
    }

    if (x > 5 && x < 205 && y > 590 && y < 630) {
        drawIsland(5, 590, 200, 50, "Synthea - Data Generation", HIGHLIGHTED);
        drawNodeApp("CF - ICP", DIMMED);
        drawIsland(230, 200, 100, 100, "API Connect", DIMMED);
        drawzOS("z/OS", DIMMED);
        drawContainer("IBM Container Service", DIMMED);
        drawComponent(25, 480, "Patient Records - DB2", HIGHLIGHTED);
        drawIsland(230, 200, 100, 100, "API Connect", DIMMED);
        general = false;
    }

    if (general === true) {
      displayInfo(generalInfo)
      drawNodeApp("CF - ICP", NORMAL);
      drawIsland(230, 200, 100, 100, "API Connect", NORMAL);
      drawzOS("z/OS", NORMAL);
      drawContainer("IBM Container Service", NORMAL);
      drawIsland(5, 590, 200, 50, "Synthea - Data Generation", NORMAL);
    }

    // ctx.clearRect(0, 0, canvas.width, canvas.height); // for demo

    // while(r = rects[i++]) {
    //   // add a single rect to path:
    //   ctx.beginPath();
    //   ctx.rect(r.x, r.y, r.w, r.h);
    //
    //   // check if we hover it, fill red, if not fill it blue
    //   ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
    //   ctx.fill();
    // }
  }

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

  // var title = document.getElementById("archtitle");
  // title.innerHTML = info.title;


}

function fillStripes(context, x, y, width, height) {
  var color1 = "#FFFFFF",
    color2 = "#CCEEF2";
  var numberOfStripes = 80;
  for (var i = 0; i < numberOfStripes * 2; i++) {
    var thickness = width / numberOfStripes;
    context.beginPath();
    context.strokeStyle = i % 2 ? color1 : color2;
    context.lineWidth = thickness;
    context.lineCap = 'round';
    context.moveTo(x + i * thickness + thickness / 2 - width, y);
    context.lineTo(x + i * thickness + thickness / 2, y + height);
    context.stroke();
  }
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
  var height = 60;
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
  ctx.fillText(label, x + 10, y + 35);
}

function drawNodeApp(label, state) {
  drawSubsystem(5, 50, 200, 120, label, state);
  drawComponent(25, 90, "Patient UI - Node JS", state);
}

function drawContainer(label, state) {
  drawSubsystem(355, 50, 200, 360, label, state);
  drawComponent(375, 90, "Analytics UI - Node JS", state);
  drawComponent(375, 170, "Analytics App - Node JS", state);
  drawComponent(375, 250, "Analytics API - Node JS", state);
  drawComponent(375, 330, "Allergy data lake - Mongo", state);
}

function drawSubsystem(x, y, width, height, label, state) {

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

  ctx.fillRect(x, y, width, height);
  // fillStripes(ctx, x, y, width, height);
  ctx.strokeRect(x, y, width, height);

  if (state === DIMMED) {
    ctx.fillStyle = LOWFONT
  } else {
    ctx.fillStyle = NAVY
  }

  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x + 20, y + 25);
}

function drawzOS(label, state) {
  drawSubsystem(5, 200, 200, 360, label, state);
  drawComponent(25, 240, "z/OS Connect", state);
  drawComponent(25, 320, "Cobol processing", state);
  drawComponent(25, 400, "Machine Learning - Python", state);
  drawComponent(25, 480, "Patient Records - DB2", state);
}

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

var machinelearning = {}

var datasythesis = {}
