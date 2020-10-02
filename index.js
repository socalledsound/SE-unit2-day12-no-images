const myLittleGreenBall = new Ball(100,100,20, [0, 250, 0]);
const myBigBlueBall = new PlayerBall(300,300,100, [0, 0, 250]); 

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(210,220,240);
    myLittleGreenBall.display();
    myBigBlueBall.display();
}


