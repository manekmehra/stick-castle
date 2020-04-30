function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var r1,r2,r3,r4
  r1 = new Building  (10,300,600,40)
  r2 = new Building  (80,300,700,50)
  r3 = new Building  (150,300,500,70)
  r4 = new Building  (300,300,750,90)

}

function draw() {
  background(255,255,255);
 r1.display();
 r2.display();
 r3.display();
 r4.display();

}