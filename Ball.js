//the main ball class
class Ball {
    constructor({x, y, r, fillColor}){
        this.x = x;
        this.y = y;
        this. r = r;
        this.fillColor = fillColor;
        this.eyeColor = [250, 250, 250];
        this.eyeDistanceFromCenter = this.r * 0.55;
        this.eyeAngle = -2.5;
        this.eyeAngleInc = 0.05;
        this.eyeX = Math.sin(this.eyeAngle) * this.eyeDistanceFromCenter + this.x;
        this.eyeY = Math.cos(this.eyeAngle) * this.eyeDistanceFromCenter + this.y;
        this.eyeSize = this.r * 0.6;
        
    }


    rotateEye(direction, amount = this.eyeAngleInc){
        if(direction === 'right'){
            this.eyeAngle -= amount;
        } else if(direction === 'left'){
            this.eyeAngle += amount;
        }
       
        this.eyeX = Math.sin(this.eyeAngle) * this.eyeDistanceFromCenter + this.x;
        this.eyeY = Math.cos(this.eyeAngle) * this.eyeDistanceFromCenter + this.y;

    }

    display(){
        fill(this.fillColor);
        ellipse(this.x, this.y, this.r * 2);
        fill(this.eyeColor);
        ellipse(this.eyeX,this.eyeY, this.eyeSize);
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
        if(amount > 0){
            this.rotateEye('right');
        } else if(amount < 0){
            this.rotateEye('left');
        }
       
    }

    

}


class GreenBall extends Ball {
        // take the arguments in to the constructor function
        constructor({x, y, r, fillColor}) {
            //assign them to values in the main Ball object
            super({x, y, r, fillColor})
            this.speed = 0.25;
        }


        move(){
            this.rotateEye('left');
            this.x -= this.speed;
            
        }
}