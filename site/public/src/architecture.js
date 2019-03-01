var c = document.getElementById("canvas");

if (c != undefined) {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 0.8;

  drawzOS("z/OS")
  drawContainer("IBM Container Service")
  drawNodeApp("CF - ICP");
  drawIsland(5, 590, 200, 50, "Synthea - Data Generation")
  drawIsland(230, 200, 100, 100, "API Connect")


ctx.lineWidth = 1.0;
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
}

function drawIsland(x,y, width, height, label){
  ctx.fillStyle = "#99DDE5"
  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(x,y,width,height);
  ctx.fillStyle = "#0F4C81"
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(label, x+10, y+ height/1.8);
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
