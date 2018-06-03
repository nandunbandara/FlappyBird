/**
 * Created by nandunb on 6/3/18.
 */

window.onload = function(){

    canvas = document.getElementById("game-canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.addEventListener("keydown", keyPush);

    setInterval(game, 1000/15);

};

function loadBackground(){

    var ctx = document.getElementById("game-canvas");

    if(ctx.getContext){

        ctx = ctx.getContext("2d");

        //load background
        var backgroundImage = new Image();

        backgroundImage.onload = function(){
            ctx.drawImage(backgroundImage, 0, 0);
        };

        backgroundImage.src = "./assets/sprites/background-day.png";
    }


}

function game(){
    console.log("game check");

    loadBackground();


}

function keyPush(){
    console.log("key down");
}