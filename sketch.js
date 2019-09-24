function preload(){
  // put preload code here
}

function setup() {

  createCanvas (windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
  frameRate(60);

}

function draw() {

  translate(width/2, height/2);
  stroke(0);
  line(250, 0, 250*cos(frameCount*2), 250*sin(frameCount*2));

  if (frameCount > 180){
    strokeWeight(3);
    strokeCap(SQUARE);
    stroke("teal");
    translate(500, 0)
    line(50, 0, 50*cos(frameCount*7.2), 50*sin(frameCount*7.2));
    }

  if (frameCount > 360){
      strokeWeight(6);
      strokeCap(ROUND);
      stroke("purple");
      translate(-1000, 0);
      line(50, 0, 50*cos(frameCount*7.2), 50*sin(frameCount*7.2));
      }

  if (frameCount > 540){
    strokeWeight(10);
  }

}
