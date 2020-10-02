//const myLittleGreenBall = new Ball(100,100,20, [0, 250, 0]);
const myPlayerBall = new PlayerBall(300,300,100, [0, 0, 250]); 

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(210,220,240);
    //myLittleGreenBall.display();
    
    
    if(keyIsDown(RIGHT_ARROW)){
        myPlayerBall.move('x', 1);
    }


    myPlayerBall.display();








}


