var c = document.getElementById("canvas");

if (c != undefined) {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 0.5;

  drawzOS("z/OS")
  drawContainer("IBM Container Service")
  drawNodeApp("CF - ICP");
}

function drawComponent(x, y, label){
  var height = 60;
  var width = 160;
  ctx.fillStyle = "#99DDE5"
  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(x,y,width,height);
  ctx.fillStyle = "#0F4C81"
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x+10, y+ 35);
}

function drawNodeApp(label){
  drawSubsystem(5,50,200,120, label);
  drawComponent(25,90, "Patient UI - Node JS");
}

function drawContainer(label){
  drawSubsystem(355,50,200,360, label);
  drawComponent(375,90, "Analytics UI - Node JS");
  drawComponent(375,170, "Analytics App - Node JS");
  drawComponent(375,250, "Analytics API - Node JS");
  drawComponent(375,330, "Allergy data lake - Mongo");
}

function drawSubsystem(x,y,width,height, label){
  ctx.fillStyle = "#CCEEF2";
  ctx.strokeStyle = "#00ABC0"
  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(x,y,width,height);
  ctx.fillStyle = "#0F4C81"
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x+20, y+25);
}

function drawzOS(label){
  drawSubsystem(5,200,200,360, label);
  drawComponent(25,240, "z/OS Connect");
  drawComponent(25,320, "Cobol processing");
  drawComponent(25,400, "Machine Learning - Python");
  drawComponent(25,480, "Patient Records - DB2");
}
