// create the blocks 

const gameGrid = document.querySelector('.grid'); 
const gridWidth = 630; 
const gridHeight = 450; 

const blockHeight = 20; 
const blockWidth = 100; 
const ballDiameter = 20; 

const userStart = [230, 10]
let currentPosition = userStart; 

const ballStart = [270, 40]; 
let ballCurrentPos = ballStart; 

const gameOver = document.querySelector('#gameOver'); 




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



function createUser() {    
    userBlock.style.bottom = currentPosition[1] +'px'; 
    userBlock.style.left = currentPosition[0] + 'px';     
    userBlock.classList.add('block'); 
    userBlock.style.background = 'blue'; 
    gameGrid.appendChild(userBlock) 
}

function moveUser(e) {
    switch(e.key){
        case "ArrowLeft":
            currentPosition[0] -= 10;     
            if (currentPosition[0] > 0){
                createUser(); 
                
            }
            break; 
            
        case "ArrowRight": 
            currentPosition[0] += 10; 
            if (currentPosition[0] < gridWidth-blockWidth){
                createUser(); 
            }
            break; 
            
    }
}

document.addEventListener('keydown', moveUser); 

// create a ball and make it move 


let yDirection = 2; 
let xDirection = 2; 

function drawBall(){
    ball.style.left = ballCurrentPos[0] + 'px'; 
    ball.style.bottom = ballCurrentPos[1] + 'px';    
}

const ball = document.createElement('div');
ball.classList.add('ball'); 
ball.style.background = 'black'; 
drawBall() 
gameGrid.appendChild(ball) 



function moveBall(){
    ballCurrentPos[0] += xDirection; 
    ballCurrentPos[1] += yDirection;   
    drawBall() 
    checkForCollision()
}

let timerID = setInterval(moveBall, 20); 


function checkForCollision(){
    // check for block collisions 
    for (let i = 0; i < blocks.length; i ++){
        if (
            ballCurrentPos[0] > blocks[i].bottomLeft[0] && ballCurrentPos[0] < blocks[i].bottomRight[0] &&
            (ballCurrentPos[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPos[1] < blocks[i].topLeft[1]
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block')); 
            allBlocks[i].classList.remove('block'); 
            blocks.splice(i, 1); 
            changeDirection() 
        }
    }


    // check for wall collisions 
    if (ballCurrentPos[0] >= (gridWidth-ballDiameter)||
        ballCurrentPos[1] >= (gridHeight-ballDiameter) ||
        ballCurrentPos[0] <= 0){
        changeDirection() 
        console.log(ballCurrentPos[1])
    }

    //check for game over 
    if (ballCurrentPos[1] <= 0){
        clearInterval(timerID); 
        console.log('game over')
        gameOver.textContent = 'gameOver'
    }
}

function changeDirection(){
    if (xDirection === 2 && yDirection ===2){
        yDirection =-2; 
        return
    }
    if (xDirection  === -2 && yDirection=== 2){
        xDirection =2
        return 
    } else {
        xDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === -2){
        xDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2 ){
        xDirection = 2
        return
    }

    
}


createUser() 
drawBlock() 
drawBall() 


// I will create blocks dynamicaly by defining a function that creates individual
// blocks. 