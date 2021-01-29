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

class entity{
    constructor(stage, xpos, ypos, type) {
        this.stage = stage
        this.xpos = xpos;
        this.ypos = ypos;
        this.type = type;
        this.entity = this.createEntity();
        this.renderEntityTo()
    };

    createEntity() {
        const entity = document.createElement('div');
        entity.className = `entity  entity--${this.type}`;
        entity.style.left = `${this.xpos * TILE_SIZE}px` ;
        entity.style.top = `${this.ypos * TILE_SIZE}px` ;
        return entity;
    };

    renderEntityTo() {
        this.stage.stage.appendChild(this.entity)
    }

    
}

const pacman = new Pacman(stage1, 0, 0, true)
pacman.renderTo(stage1.stage)



const enteties = [
    new entity (stage1, -1, -1, "wall"),
    new entity (stage1, 0, -1, "wall"),
    new entity (stage1, 1, -1, "wall"),
    new entity (stage1, 2, -1, "wall"),
    new entity (stage1, 3, -1, "wall"),
    new entity (stage1, 4, -1, "wall"),
    new entity (stage1, 5, -1, "wall"),
    new entity (stage1, 6, -1, "wall"),
    new entity (stage1, 7, -1, "wall"),
    new entity (stage1, 8, -1, "wall"),
    new entity (stage1, 9, -1, "wall"),
    new entity (stage1, 10, -1, "wall"),
    new entity (stage1, 11, -1, "wall"),
    new entity (stage1, 12, -1, "wall"),
    new entity (stage1, -1, 6, "wall"),
    new entity (stage1, 0, 6, "wall"),
    new entity (stage1, 1, 6, "wall"),
    new entity (stage1, 2, 6, "wall"),
    new entity (stage1, 3, 6, "wall"),
    new entity (stage1, 4, 6, "wall"),
    new entity (stage1, 5, 6, "wall"),
    new entity (stage1, 6, 6, "wall"),
    new entity (stage1, 7, 6, "wall"),
    new entity (stage1, 8, 6, "wall"),
    new entity (stage1, 9, 6, "wall"),
    new entity (stage1, 10, 6, "wall"),
    new entity (stage1, 11, 6, "wall"),
    new entity (stage1, 12, 6, "wall"),
    new entity (stage1, -1, 0, "wall"),
    new entity (stage1, -1, 1, "wall"),
    new entity (stage1, -1, 2, "wall"),
    new entity (stage1, -1, 3, "wall"),
    new entity (stage1, -1, 4, "wall"),
    new entity (stage1, -1, 5, "wall"),
    new entity (stage1, 12, 0, "wall"),
    new entity (stage1, 12, 1, "wall"),
    new entity (stage1, 12, 2, "wall"),
    new entity (stage1, 12, 3, "wall"),
    new entity (stage1, 12, 4, "wall"),
    new entity (stage1, 12, 5, "wall"),
    new entity (stage1, 4, 3, "wall"),
    new entity (stage1, 4, 4, "wall"),
    new entity (stage1, 4, 5, "wall"),
    new entity (stage1, 9, 0, "wall"),
    new entity (stage1, 9, 1, "wall"),
    new entity (stage1, 9, 2, "wall"),
    new entity (stage1, 2, 0, "wall"),
    new entity (stage1, 2, 1, "wall"),
    new entity (stage1, 2, 2, "wall"),
    new entity (stage1, 1, 4, "apple"),
    new entity (stage1, 3, 3, "apple"),
    new entity (stage1, 7, 4, "apple"),
    new entity (stage1, 9, 3, "apple"),
    new entity (stage1, 8, 0, "apple"),
    new entity (stage1, 5, 5, "apple"),
    new entity (stage1, 1, 3, "bomb"),
    new entity (stage1, 5, 1, "bomb"),
    new entity (stage1, 6, 1, "bomb"),
    new entity (stage1, 1, 5, "bomb")
]


