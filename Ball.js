//the main ball class
class Ball {
    constructor({x, y, r, fillColor}){
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
//the playerball class derived from the main ball class
class PlayerBall extends Ball {
    // take the arguments in to the constructor function
    constructor({x, y, r, fillColor}) {
        //assign them to values in the main Ball object
        super({x, y, r, fillColor})
    }

    //our new move function that only belongs to the player ball
    move(axis, amount){
        if(axis === 'x'){
            this.x += amount;
        } else if( axis === 'y'){
            this.y += amount;
        }

    }

    
}