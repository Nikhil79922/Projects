let audio = new Audio('music.mp3')
let audio2 = new Audio('gameover.mp3')

let point = 0;
document.onkeydown = (e) => {

    if (e.keyCode == 32 || e.keyCode == 38) {
        dinoani = document.querySelector("#dino");
        dinoani.classList.add("animate-none")

        setTimeout(() => {
            dinoani.classList.remove("animate-none")

        }, 700)
    }
    if (e.keyCode == 39) {
        let dino = document.querySelector("#dino")
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dx + 112 + `px`;
    }
    if (e.keyCode == 37) {
        let dino = document.querySelector("#dino")
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = (dx - 112) + `px`;
    }
}

setInterval(() => {
    let dino = document.querySelector("#dino")
    let dragon = document.querySelector("#dragon")
    let gameover = document.querySelector(".gameover")
    score = document.querySelector(".score")

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"))

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX)
    if (offsetX < 105 && offsetY < 52) {
        gameover.classList.remove("hidden")
        dragon.classList.remove("animate-fadeIn")
        let reset = document.querySelector(".btn")
        reset.classList.remove("hidden")
        dinoani.classList.remove("animate-none")
      
        audio2.play();

        setTimeout(() => {
            audio2.pause();
            console.log("fucked")
        }, 1000);

    }

}, 50)

//Update Score
document.addEventListener('DOMContentLoaded', () => {
    const courtNumber = document.querySelector('#dragon');

    courtNumber.addEventListener('animationiteration', () => {
        let currentNumber = parseInt(point);
        document.querySelector(".score").innerHTML = `Your Score : ${currentNumber + 1} `
        point += 1;

        restart.addEventListener("click", () => {

            point = 0;
            document.querySelector(".score").innerHTML = `Your Score : 0`
        })
    });
});

//Restart
let restart = document.querySelector(".btn")
let over = document.querySelector(".gameover")
restart.addEventListener("click", () => {
    dragon.classList.add("animate-fadeIn")
    let re = document.querySelector("#reset")
    re.classList.add("hidden")
    let over = document.querySelector("#over")
    over.classList.add("hidden")
})
