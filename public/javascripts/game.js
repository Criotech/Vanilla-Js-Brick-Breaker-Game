import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';

import { buildLevel, level1 } from './levels.js';

export default class Game {

    constructor(gameWidth, gameHeight) {
     this.gameWidth = gameWidth;
     this.gameHeight = gameHeight;   
    }


    start(){
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.bricks = buildLevel(this, level1);

        this.gameObjects = [this.ball, this.paddle, ...this.bricks];

        new InputHandler(this.paddle);

    }

    draw(ctx) {

        this.gameObjects.forEach((object) => object.draw(ctx));

    }

    update(deltaTime){

        this.gameObjects.forEach((object) => object.update(deltaTime));
    }
}