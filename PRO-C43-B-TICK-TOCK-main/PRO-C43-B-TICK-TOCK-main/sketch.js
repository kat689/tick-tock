function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(24);
  textStyle("bold");
  text("CLOCK", 160,400); 
  text("12", 185,100);
  text("6", 185,340);
  text("9", 80,210);
  text("3", 300,210);

translate(200,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke("yellow");
  noFill();
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("Pink");
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("Light blue");
  let HrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,HrAngle);
  
 
  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(HrAngle);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  }
  
  