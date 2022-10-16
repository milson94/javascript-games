// create the blocks 

const gameGrid = document.querySelector('.grid'); 
const gridWidth = 630; 

const blockHeight = 20; 
const blockWidth = 100; 
let blockPositionX = 100; 
let blockPositionY = 50; 



class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]; 
        this.bottomRight = [xAxis+blockWidth, yAxis]; 
        this.topLeft = [xAxis, yAxis+blockHeight]; 
        this.topRight =[xAxis+blockWidth, yAxis+blockHeight]; 
    }
}

const blocks = [
    new Block(5, 420), 
    new Block(107, 420), 
    new Block(209, 420), 
    new Block(311, 420), 
    new Block(413, 420), 
    new Block(515, 420), 
    new Block(5, 398), 
    new Block(107, 398), 
    new Block(209, 398), 
    new Block(311, 398), 
    new Block(413, 398), 
    new Block(515, 398),
    new Block(5, 376), 
    new Block(107, 376), 
    new Block(209, 376), 
    new Block(311, 376), 
    new Block(413, 376), 
    new Block(515, 376),
]

function drawBlock(){
    for (let i = 0; i < blocks.length; i++){
        const block = document.createElement('div'); 
        block.style.left = blocks[i].bottomLeft[0] + 'px'; 
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'; 
        block.classList.add('block'); 
        gameGrid.appendChild(block); 
    }
}


// create user
const userBlock = document.createElement('div'); 
const ball = document.createElement('div');


let userLeftSide = 50; 



function createUser() {    
    userBlock.style.bottom = '15px'; 
    userBlock.style.left = userLeftSide + 'px';     
    userBlock.classList.add('block'); 
    userBlock.style.background = 'blue'; 
    gameGrid.appendChild(userBlock) 
}

function moveUser(e) {
    switch(e.key){
        case "ArrowLeft":
            userLeftSide -= 10;     
            if (userLeftSide > 0){
                createUser(); 
                
            }
            break; 
            
        case "ArrowRight": 
            userLeftSide += 10; 
            if (userLeftSide < gridWidth-blockWidth){
                createUser(); 
            }
            break; 
            
    }
}

document.addEventListener('keydown', moveUser); 

// create a ball and make it move 

function drawBall(){
    userBlock.style.left = '10px'; 
    userBlock.style.bottom = '10px'; 
    userBlock.classList.add('ball'); 
    userBlock.style.background = 'black'; 
    gameGrid.appendChild(ball) 
}



createUser() 
drawBlock() 


// I will create blocks dynamicaly by defining a function that creates individual
// blocks. 