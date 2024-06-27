let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;
document.body.appendChild(rrafshi);

const ctx = rrafshi.getContext('2d');


let br = document.createElement("br");
document.body.appendChild(br);

let startOver = document.createElement("button");
startOver.innerText = "Staet Over";
startOver.style.fontSize = "20px";
startOver.style.padding = "10px";
startOver.style.visibility = "hidden";
document.body.appendChild(startOver);

let points = 0;
let gameOver = false;


let bgrReady = false;
let bgrImg = new Image();
bgrImg.src = "images/background.png";
bgrImg.onload = function () {
    bgrReady = true;
}

let macaReady = false;
let maca = {};
    maca.x = 300;
    maca.y = 300;
    maca.width = 128;
    maca.height = 128;
    maca.speed = 6; 
let catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function () {
    macaReady = true;
}

let miuReady = false;
let miu = {};
    miu.x = 50;
    miu.y = 50;
    miu.width = 52;
    miu.height = 54;
let mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function () {
    miuReady = true;
}


addEventListener("keydown", function(e) {
    if(e.key == "w"){
         maca.y -=maca.speed;

}
    if(e.key == "s"){
        maca.y +=maca.speed;
       
    }

    if(e.key == "a"){
        maca.x -=maca.speed;
        
    }

    if(e.key == "d"){
        maca.x +=maca.speed;
       
    }

});

let miuPosition = function (){
    miu.x = Math.floor(Math.random() * 442) + 20;
    miu.y = Math.floor(Math.random() * 360) + 50;
}

let count = 20;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
   
  }
}, 1000);

let render = function () {
    if(bgrReady){ ctx.drawImage(bgrImg, 0, 0)}
   if(macaReady){ctx.drawImage(catImg, maca.x, maca.y)}
if(miuReady){ctx.drawImage(mouseImg, miu.x, miu.y);}

   if(maca.x > (rrafshi.width - maca.width/2)){
    maca.x = 0 - maca.width/2;
   }
    if(maca.x < (0 - maca.width/2))
    { maca.x = rrafshi.width - maca.width/2 - 6}

    if(maca.y > (rrafshi.height - maca.height/2)){
        maca.y = 0 - maca.height/2;
       }

       if(maca.y < (0 - maca.height/2))
       { maca.y = rrafshi.height - maca.height/2 - 6}

       
       if(
        maca.x < (miu.x + miu.width )
        && maca.y > (miu.y - maca.height)
        && maca.x > (miu.x - maca.width)
        && maca.y < (miu.y + miu.height)
       ){
        miuPosition();
        if(count != 0){
            points++;
        }
       
       }

       ctx.font = "20px serif";
       ctx.fillStyle = "white"
       ctx.fillText("Points:  " +points, 20, 30)


       ctx.font = "20px serif";
       ctx.fillStyle = "white"
       ctx.fillText("Time:  "+count , 400, 30);

     

       if (points >= 5  && count == 0) {
        ctx.fillText("YOU WIN  " , 200, 30);
        
       }
    
       if (points <= 4 && count == 0) {
        ctx.fillText("YOU LOSE  " , 200, 30);
       
       }

     

      
}

let coun = function(){
    if(count == 0){
        gameOver = true;
        startOver.style.visibility = "visible"
    }
  }

startOver.addEventListener("click", function(){
    location.reload();
})

setInterval(render, 10);
