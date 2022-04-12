/* eslint-disable no-undef, no-unused-vars */
let rectX;
let rect2;
let fnt;
let song;

function preload() {
  song = loadSound("assets/ezsaxmajjj.mp3");
}

function setup() {
  song.loop();
  song.setVolume(0.5);
  rectX = 500;
  rect2 = 25;
  createCanvas(600, 800, WEBGL);
  pixelDensity(0.4);
  // Put setup code here
  fnt = loadFont("assets/upheavtt.ttf");
}

function draw() {
  //randomdots
  translate(-300, -370, -3);
  //
  background("#051230");
  //
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(100);
  directionalLight(255, 0, 0.25, 0.25, 0, 0);
  pointLight(0, 0, 250, locX, locY, 250);

  var donatY = 0;
  // 290  440
  if (mouseY < 215) {
    donatY = 140;
  } else if (mouseY < 365) {
    donatY = 290;
  } else {
    donatY = 440;
  }

  push();
  translate(mouseX, donatY, 0, 0);
  normalMaterial();
  rotateY(90);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();
  //

  // Put drawings here
  textFont(fnt);
  textSize(80);
  text("LIVE", 450, 130);
  //

  //

  text("MAY 5th", 200, 270);

  //
  text("Istanbul", 380, 420);

  //

  push();
  translate(300, 140, 0);
  ambientMaterial(500);
  rotateX(frameCount * 0.01);
  box(rectX, 85, 70);
  pop();
  //
  push();
  translate(300, 290, 0);
  normalMaterial(250);
  rotateX(frameCount * -0.01);
  box(rectX, 85, 70);
  pop();
  //
  push();
  translate(300, 440, 0);
  rotateX(frameCount * 0.01);
  specularMaterial(150);
  box(rectX, 85, 70);
  pop();
  //

  //

  fill("#dfcec6");
  //text("PROJECT", 300, 640);
  //text("MAYONEZ", 300, 700);
  text("PROJECT", 300, 600);
  text("MAYONEZ", 300, 650);
  textFont(fnt);
  textSize(80);
  textAlign(CENTER, CENTER);

  //
}

function keyPressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function mousePressed() {
  rectX = rectX - 50;
  if (rectX < -500) {
    rectX = 500;
    // rect2 = rect2 + 70;
    //rect2 < 100;
  }
}
//
// This Redraws the Canvas when resized
