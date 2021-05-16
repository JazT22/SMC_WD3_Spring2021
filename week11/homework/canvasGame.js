/*eslint-env browser*/
var canvas2 = document.getElementById("myGame");
var ctx = canvas2.getContext('2d');

let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth/2; //horizontal center
let cPosY = cHeight/2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;

let score = 0;


function drawFrame(){
    ctx.clearRect(0, 0, cWidth, cHeight);

    ctx.fillStyle = "pink";
    ctx.strokeStyle = "purple";

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
   
    ctx.font = "30px Arial";
    ctx.strokeText("click ", 10, 50);
    
    function event(){
        document.getElementById("scoreEl").innerHTML = score;
    }
    

    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; //reverse the horizontal direction
    }
    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0){
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; // change position by velocity
    cPosY = cPosY + cVelY; //

    window.requestAnimationFrame(drawFrame);
}

drawFrame();


canvas2.addEventListener("click", function(event){
    //console.log(event);
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);


    if(distX < cRadius && distY < cRadius){
        console.log("scoreEL");
        
        
    }
     
})

function changePink() {
  var canvas = document.getElementById("myGame");
    var ctx = canvas2.getContext('2d');
     ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = "red";
    ctx.strokeStyle = "orange";
}

