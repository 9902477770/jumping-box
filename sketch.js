var canvas;
var music;
var block1,block2,block3,block4
var ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(0,580,360,30)
    block1.shapeColor="red" 
    block2=createSprite(295,580,200,30)
    block2.shapeColor="orange" 
    block3=createSprite(515,580,200,30)
    block3.shapeColor="gold" 
    block4=createSprite(740,580,220,30)
    block4.shapeColor="neavy blue" 


    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white and black"
    ball.velocityX=4
    ball.velocityY=9

}

function draw() {
    background(rgb(169,169,169));                   
   edges=createEdgeSprites()
   ball.bounceOff(edges)
   if(block1.isTouching(ball)&&ball.bounceOff(block1)){
ball.shapeColor=rgb(0,0,225)
music.play()
   }
   if(block2.isTouching(ball)){
    ball.shapeColor=rgb(255,128,0)
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
       }
       if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor=rgb(153,0,76)
           }
           if(block4.isTouching(ball)&&ball.bounceOff(block4)){
            ball.shapeColor=rgb(0,100,0)
               }

   drawSprites()
    //add condition to check if box touching surface and make it box
}
