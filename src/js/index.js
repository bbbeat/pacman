'use strict';

const TILE_SIZE = 85;


class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.stage = this.createStage; 
    };

    createStage() {
        const stageElm = document.createElement('div');
        stageElm.classname = 'stage'
        return stageElm; 
    };

    renderStageTo(element) {
        element.appendChild(this.stage);
    }}

const stage1 = new Stage(10, 10);
stage1.renderStageTo(document.querySelector('div'))


class Pacman {
    constructor(xpos, ypos, mouth) {
        this.xpos = xpos * TILE_SIZE;
        this.ypos = ypos * TILE_SIZE;
        this.mouth = mouth;
        this.pac = this.createPacman()
    }
    actionOnRight() {
        this.xpos += TILE_SIZE
        this.pac.style.backgroundPositionY = "0px"
    }
    actionOnLeft() {
        this.xpos -= TILE_SIZE
        this.pac.style.backgroundPositionY = "-85px"
    }
    actionOnUp() {
        this.ypos += TILE_SIZE
        this.pac.style.backgroundPositionY = "-170px"
    }
    actionOnDown() {
        this.ypos -= TILE_SIZE
        this.pac.style.backgroundPositionY = "-255px"
    }

    move(event) {
        if (event.code === 'ArrowRight') {
            this.actionOnRight()
        } else if (event.code === 'ArrowLeft') {
            this.actionOnLeft()
        } else if (event.code === 'ArrowDown') {
            this.actionOnUp()
        } else if (event.code === 'ArrowUp') {
            this.actionOnDown()
        }
    }
    update() {
        this.pac.style.left = `${this.xpos}px`
        this.pac.style.top = `${this.ypos}px`
    }
    createPacman() {
        const pacmanElm = document.createElement("div");
        pacmanElm.className = "entity entity--pac pacboy-active-light";
        document.addEventListener('keydown', (event) => {
            this.move(event)
            this.update()
        })
        return pacmanElm
    }
    renderTo(element) {
        element.appendChild(this.pac)
    }
}   
const pacman = new Pacman(10, 2.5, true)
pacman.renderTo(document.querySelector(".stage"))
