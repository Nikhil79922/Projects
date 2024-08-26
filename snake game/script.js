let inputVelocity = { x: 0, y: 0 }
let board = document.querySelector(".main")
let LastPaintTime = 0
let Speed = 9;
let snakearr = [
    { x: 2, y: 12 }
]
let foodarr = { x: 4, y: 3 }
let score = 0;
let highscoreval;

let moveAudio = new Audio("/music/move.mp3")
let gameoverAudio = new Audio("/music/gameover.mp3")
let foodAudio = new Audio("/music/food.mp3")
let musicAudio = new Audio("/music/music.mp3")
// alert(`Press "W" or "S" or "A" or "D" to start the Game`)
//game function
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - LastPaintTime) / 1000 < 1 / Speed) {
        return
    }
    LastPaintTime = ctime;
    GameEngine()
}

let isCollide = (snakearr) => {
    for (let index = 1; index < snakearr.length; index++) {
        if (snakearr[index].x === snakearr[0].x && snakearr[index].y === snakearr[0].y) {
            return true;
        }
    }
    if (snakearr[0].x <= 0 || snakearr[0].x >= 18 || snakearr[0].y >= 18 || snakearr[0].y <= 0) {
        return true;
    }
}
//game engine
let GameEngine = () => {
    if (isCollide(snakearr)) {
        musicAudio.pause();
        gameoverAudio.play()
        inputVelocity = { x: 0, y: 0 };
        img.classList.remove("h-[0px]")
        img.classList.add("h-[600px]")
        btn.classList.remove("hidden")
        snakearr = [
            { x: 2, y: 12 }
        ]
        scorebox.innerHTML = `Score: ${score}`
    }
    if (snakearr[0].x == foodarr.x && snakearr[0].y == foodarr.y) {
        foodAudio.play();
        snakearr.unshift({ x: snakearr[0].x + inputVelocity.x, y: snakearr[0].y + inputVelocity.y })
        let a = 2;
        let b = 17;
        foodarr = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        score++;
        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highbox.innerHTML = `HighScore: ` + highscoreval;
        }
        scorebox.innerHTML = `Score: ${score}`
    }

    for (let i = snakearr.length - 2; i >= 0; i--) {
        snakearr[i + 1] = { ...snakearr[i] };
    }
    snakearr[0].x += inputVelocity.x;
    snakearr[0].y += inputVelocity.y;
  
    //display food
    board.innerHTML = "";
    food = document.createElement('div');
    food.style.gridRowStart = foodarr.y;
    food.style.gridColumnStart = foodarr.x;
    food.classList.add("food")
    board.appendChild(food);
    //display snake head and body
    snakearr.forEach((e, index) => {
        snake = document.createElement('div');
        snake.style.gridRowStart = e.y;
        snake.style.gridColumnStart = e.x;
        if (index === 0) {
            snake.classList.add("head")
        }
        else {
            snake.classList.add("body")
        }
        board.appendChild(snake);
    });
}

//main logic
let highscore = localStorage.getItem("highscore")
if (highscore == null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));
}
else {
    highscoreval = JSON.parse(highscore);
    highbox.innerHTML = `HighScore: ` + highscoreval;
}

window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {

    musicAudio.play()
    btn.classList.add("hidden")

    switch (e.key) {
        case "w":
            inputVelocity.x = 0;
            inputVelocity.y = -1;
            moveAudio.play();
            musicAudio.play()
            break;
        case "s":
            inputVelocity.x = 0;
            inputVelocity.y = 1;
            moveAudio.play()
            musicAudio.play()
            break;
        case "a":
            inputVelocity.x = -1;
            inputVelocity.y = 0;
            moveAudio.play()
            musicAudio.play()
            break;
        case "d":
            inputVelocity.x = 1;
            inputVelocity.y = 0;
            moveAudio.play()
            musicAudio.play()
            break;

        default:
            break;
    }
})

btn.addEventListener("click",()=>{
    img.classList.remove("h-[600px]")
        img.classList.add("h-[0px]")
        score=0
        scorebox.innerHTML = `Score: ${score}`


})