var c = document.getElementById("canvas");

if (c != undefined) {

  var ctx = c.getContext("2d");
  ctx.fillStyle = "#CCEEF2";
  ctx.strokeStyle = "#00ABC0"
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 0.8;

  ctx.fillRect(5,50,200,120);
  ctx.strokeRect(5,50,200,120);

  ctx.fillStyle = "#99DDE5"
  ctx.fillRect(25,90,160,60);
  ctx.strokeRect(25,90,160,60);
  ctx.fillStyle = "#CCEEF2";
  ctx.fillRect(355,50,200,120);
  ctx.strokeRect(355,50,200,120);

  ctx.fillStyle = "#99DDE5"
  ctx.fillRect(375,90,160,60);
  ctx.strokeRect(375,90,160,60);

  ctx.fillStyle = "#0F4C81"

  ctx.font = '12px sans-serif';

  ctx.fillText("CF - ICP", 25, 75);

  ctx.fillText("Patient UI - Node JS", 48, 125);



}
