
class Ball {
    constructor(x, y, r, fillColor){
        this.x = x;
        this.y = y;
        this. r = r;
        this.fillColor = fillColor;
    }

    display(){
        fill(this.fillColor);
        ellipse(this.x, this.y, this.r * 2);
    }
}

class PlayerBall extends Ball {
    constructor(x, y, r, fillColor) {
        super(x, y, r, fillColor)
    }

    
}