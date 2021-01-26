const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bgImage;
var Ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var Hero;
var monster;
var rope;

function preload() {
//preload the images here

bgImage = loadImage("images/GamingBackground.png");

}
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  Ground = new ground(500, 600, 1250, 20);

  Hero = new hero(200,200,200,200);

  
  box1 = new Box(900,100,50,50);
  box2 = new Box(900,100,50,50);
  box3 = new Box(900,100,50,50);
  box4 = new Box(900,100,50,50);
  box5 = new Box(900,100,50,50);
  box6 = new Box(900,100,50,50);

  box7 = new Box(800,100,50,50);
  box8 = new Box(800,100,50,50);
  box9 = new Box(800,100,50,50);
  box10 = new Box(800,100,50,50);
  box11 = new Box(800,100,50,50);
  box12 = new Box(800,100,50,50);

  box13 = new Box(700,100,50,50);
  box14 = new Box(700,100,50,50);
  box15 = new Box(700,100,50,50);
  box16 = new Box(700,100,50,50);
  box17 = new Box(700,100,50,50);
  box18 = new Box(700,100,50,50);
  box19 = new Box(700,100,50,50);
  box20 = new Box(700,100,50,50);

  monster = new Monster(1000, 200, 150, 150);

  rope = new Rope(Hero.body,{x:500,y:50});

  Engine.run(engine);
}

function draw() {
  background(bgImage);

  Engine.update(engine);

  Ground.display();

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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  Hero.display();

  monster.display();

  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(Hero.body,{x:mouseX,y:200});
}

