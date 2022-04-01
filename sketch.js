var count=0;
var form, game;
var nextbuttonimage;
var gametitle
var debris, debrisImg;
var bg;
var spaceship, shipImg;
function preload(){

debrisImg=loadImage("images/Debris 1.png")
shipImg=loadImage("images/spaceship.jpg")
bgImg=loadImage("images/background.jpg")
}

function setup()
{
createCanvas(windowWidth, windowHeight);
game= new Game();
form= new Form();
form.next2.hide();
}
function draw(){
background(bgImg);
form.display();
if(count==1){
game.display();
}

drawSprites();
//form.next2.click(function(){spawnDebris();})
/*if(form.next2.mousePressed()){
spawnDebris()
}*/

}

