import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

export default class Game {

    constructor(gameWidth, gameHeight) {
     this.gameWidth = gameWidth;
     this.gameHeight = gameHeight;   
    }


    start(){
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [this.ball, this.paddle];

        new InputHandler(this.paddle);

    }

    draw(ctx) {

        this.gameObjects.forEach((object) => object.draw(ctx));

    }

    update(deltaTime){

        this.gameObjects.forEach((object) => object.update(deltaTime));
    }
}