var bg,bg1;
var dpipe,dpiper,dpipeGroup;
var upipe,upiper,upipeGroup;
var bird,birdi;
var PLAY=1,END=0,gamestate=PLAY;

function preload() {
  bg1=loadImage("background.jpg")
  dpipe=loadImage("pipeDown.png")
  upipe=loadImage("pipeup.png")
  birdi=loadImage("preview.jpeg")
}
function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,230,400,400);
  bg.addImage(bg1);
  bg.scale=7;
  
  bird=createSprite(100,200,20,20)
  bird.addImage(birdi);
  bird.scale=0.5;

  upipeGroup=createGroup();
  dpipeGroup=createGroup();
  
}

function draw() {
  background(220);
  
  
  if(gamestate===PLAY) {
    uppipe();
    downpipe();
  if(keyDown("space")){
    bird.velocityY=-4;
  }
     bird.velocityY=bird.velocityY+0.4;
    
    if(upipeGroup.isTouching(bird) || dpipeGroup.isTouching(bird)) {
      gamestate=END;
      upipeGroup.setVelocityXEach(0);
      dpipeGroup.setVelocityXEach(0);
      bird.velocityY=0;
    }
  }
  

  drawSprites();
}

function uppipe() {
  if(frameCount%80===0) {
     upiper=createSprite(400,200,70,30)
  upiper.addImage(upipe);
    upiper.scale=3;
    upiper.velocityX=-3;
    upiper.y=Math.round(random(500,350))
    console.log(upiper.y);
    upipeGroup.add(upiper)
  }
}
function downpipe() {
  if(frameCount%80===0) {
     dpiper=createSprite(400,200,70,30)
  dpiper.addImage(dpipe);
    dpiper.scale=3;
    dpiper.velocityX=-3;
    dpiper.y=upiper.y-400;
    dpipeGroup.add(dpiper)
  }
}