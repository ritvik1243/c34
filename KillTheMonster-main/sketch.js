const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var background,backgroundImg;
var hero;
var ground;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15;

function preload() {
    backgroundImg = loadImage("Images/GamingBackground.png");

}

function setup() {
  createCanvas(1200,400);
 
  engine = Engine.create();
  world =  engine.world;

  hero = new Hero(100,100,100,100);

  ground = new Ground(600,300,300,10);

    box1 = new Box(500,270,40,30);
    box2 = new Box(550,270,40,30);
    box3 = new Box(600,270,40,30);
    box4 = new Box(650,270,40,30);
    box5 = new Box(700,270,40,30);

    box6 = new Box(525,235,40,30);
    box7 = new Box(575,235,40,30);
    box8 = new Box(625,235,40,30);
    box9 = new Box(675,235,40,30);

    box10 = new Box(547,200,40,30);
    box11 = new Box(597,200,40,30);
    box12 = new Box(647,200,40,30);

    box13 = new Box(572,165,40,30);
    box14 = new Box(622,165,40,30);

    box15 = new Box(597,130,40,30);
}

function draw() {
  background(backgroundImg);

  hero.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
}

