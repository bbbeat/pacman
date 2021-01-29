'use strict';

const TILE_SIZE = 85;
let xpos = 940

const pac = document.querySelector(".entity--pac")
document.addEventListener('keydown', moveRight) 
 function moveRight() {
    if(event.code === 'ArrowRight') {
        xpos += TILE_SIZE
    pac.style.left = `${xpos}px`
    }
 }

class Pacman {
    constructor (xpos, ypos, mouth) {
        this.xpos = xpos * TILE_SIZE;
        this.ypos = ypos * TILE_SIZE;
        this.mouth = mouth;
    }
};
    render() {
        const pacmanElm = document.createElement("div");
        pacmanElm.className = "entity entity--pac pacboy-active-light";
        
        document.addEventListener('keydown', moveRight) 
        function moveRight() {
           if(event.code === 'ArrowRight') {
               xpos += 85
           pac.style.left = `${xpos}px`
           }
        }
    }
    moveRight() {

    }