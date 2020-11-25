const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine, myWorld;

var player, enemy;
var playerImg, backgroundImg, enemyImg;

function preload() {
  playerImg = loadImage("images/player.png");
  backgroundImg = loadImage("images/background.png");
  enemyImg = loadImage("images/detective.png.png");
}

function setup() {

  createCanvas(displayWidth,displayHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  player_options = {
    isStatic:true,
  }
  player = Bodies.rectangle(displayWidth/2, displayHeight-50, 100, 100, player_options);
  World.add(myWorld, player);

  enemy_options = {
    isStatic:true,
  }
  enemy = Bodies.rectangle(displayWidth/4, displayHeight-100, 100, 100, enemy_options);
  World.add(myWorld, enemy);


}

function draw() {
  background(backgroundImg);  

  imageMode(CENTER);
  image(playerImg, player.position.x, player.position.y, 75, 75);

  imageMode(CENTER);
  image(enemyImg, enemy.position.x, enemy.position.y, 100, 100);

  keyPressed();
  enemyProperties();

  drawSprites();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    player.position.y = player.position.y - 50;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 50;
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 50;
  }
}

function enemyProperties() {

  enemy.position.x = player.position.x;
  enemy.position.y = player.position.y + 100;

  if (enemy.position.x == player.position.x && enemy.position.y == player.position.y) {

    player.position.x = displayWidth/2;
    player.position.y = displayHeight - 5;

  }

}