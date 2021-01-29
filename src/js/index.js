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
<<<<<<< HEAD
        this.pac = this.createPacman()
    }
    move(event) {
        if (event.code === 'ArrowRight') {
            this.xpos += TILE_SIZE
        } else if (event.code === 'ArrowLeft') {
            this.xpos -= TILE_SIZE
        } else if (event.code === 'ArrowDown') {
            this.ypos += TILE_SIZE
        } else if (event.code === 'ArrowUp') {
            this.ypos -= TILE_SIZE
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
=======
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
    };

    moveRight() 
    
};
>>>>>>> fe3fa343b8e00a73c5e095d554557efcc099c4a8
