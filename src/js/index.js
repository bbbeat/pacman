'use strict';

const TILE_SIZE = 85;


class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.stage = this.createStage(); 
    };

    createStage() {
        const stageElm = document.createElement('div');
        stageElm.className = 'stage'
        return stageElm; 
    };

    renderStageTo(element) {
        console.log(element)
        element.appendChild(this.stage);
    }}

const stage1 = new Stage(12, 6);
stage1.renderStageTo(document.querySelector('div'))


class Pacman {
    constructor(stage, xpos, ypos, mouth) {
        this.stage = stage;
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
        this.pac = this.createPacman()
    }
    actionOnRight() {
        if (this.xpos < this.stage.width -1) {
            this.xpos += 1
        }
        this.pac.style.backgroundPositionY = "0px"
    }
    actionOnLeft() {
        if (this.xpos > 0) {
            this.xpos -= 1
        }
        this.pac.style.backgroundPositionY = "-85px"
    }
    actionOnDown() {
        if (this.ypos < this.stage.height - 1) {
            this.ypos += 1
        }
        this.pac.style.backgroundPositionY = "-170px"
    }
    actionOnUp() {
        if (this.ypos > 0) {
            this.ypos -= 1
        }
        this.pac.style.backgroundPositionY = "-255px"
    }

    move(event) {
        if (event.code === 'ArrowRight') {
            this.actionOnRight()
        } else if (event.code === 'ArrowLeft') {
            this.actionOnLeft()
        } else if (event.code === 'ArrowDown') {
            this.actionOnDown()
        } else if (event.code === 'ArrowUp') {
            this.actionOnUp()
        }
    }
    update() {
        this.pac.style.left = `${this.xpos * TILE_SIZE}px`
        this.pac.style.top = `${this.ypos * TILE_SIZE}px`
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
        console.log(this.stage.height)
    }
}   
const pacman = new Pacman(stage1, 0, 0, true)
pacman.renderTo(document.querySelector(".stage"))
