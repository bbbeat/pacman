'use strict';

const TILE_SIZE = 85;
// const pac = document.querySelector(".entity--pac")
// document.addEventListener('keydown', move) 
//  function move() {
//     if(event.code === 'ArrowRight') {
//         xpos += TILE_SIZE
//     pac.style.left = `${xpos}px`
//     } else if(event.code === 'ArrowLeft') {
//         xpos -= TILE_SIZE
//     pac.style.left = `${xpos}px`
//     } else if(event.code === 'ArrowDown') {
//         ypos += TILE_SIZE
//     pac.style.top = `${ypos}px`
//     } else if(event.code === 'ArrowUp') {
//         ypos -= TILE_SIZE
//     pac.style.top = `${ypos}px`
//     }
//  }

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
pacman.renderTo(document.querySelector(".container"))
