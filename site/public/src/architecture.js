var c = document.getElementById("canvas");

if (c != undefined) {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 0.5;

  drawzOS()
  drawContainer()
  drawNodeApp();
}

function drawComponent(x, y){
  var height = 60;
  var width = 160;
  ctx.fillStyle = "#99DDE5"
  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(x,y,width,height);
}

function drawNodeApp(){
  drawSubsystem(5,50,200,120);
  drawComponent(25,90);

  ctx.fillStyle = "#0F4C81"
  ctx.font = '12px sans-serif';
  ctx.fillText("CF - ICP", 25, 75);
  ctx.fillText("Patient UI - Node JS", 48, 125);
}

function drawContainer(){
  drawSubsystem(355,50,200,360);
  drawComponent(375,90);
  drawComponent(375,170);
  drawComponent(375,250);
  drawComponent(375,330);
}

function drawSubsystem(x,y,width,height){
  ctx.fillStyle = "#CCEEF2";
  ctx.strokeStyle = "#00ABC0"
  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(5,200,200,360);
}

function drawzOS(){
  drawSubsystem(5,200,200,360);
  drawComponent(25,240);
  drawComponent(25,320);
  drawComponent(25,400);
  drawComponent(25,480);
}
