var dog,dogHappy,dogImg,food,foodStock;
var database;
function preload()
{
  dogImg=loadImage("Dog.png");
  dogHappy=loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  
  dog=createSprite(200,350,30,30);
  dog.addImage(dogImg);
  dog.scale=0.2;
  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    ddog.addImage(dogHappy);
  }
  drawSprites();
  text("Food Remaining:",200,150);
  textSize=30;
}

function readStock(data){
   foodS=data.val();
   } 
 function writeStock(x){ 
   x--; 
   database.ref('/').update({ food:x }) }