console.log("Logic")
let turn = "X";
let isgameover = false;
const changeturns = () => {
    return turn === "X" ? "O" : "X"
}
const checkwin = () => {
    let boxes = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2 ,20 ,80, 180],
        [3, 4, 5,20 ,225, 180],
        [6, 7, 8,20 ,370, 180],
        [0, 3, 6,-130 ,225, 90],
        [1, 4, 7,20 ,225, 90],
        [2, 5, 8,170 ,225, 90],
        [0, 4, 8,20 ,225, 45],
        [6, 4, 2,20 ,225, 135]
    ]
    wins.forEach(e => {
        if ((boxes[e[0]].innerHTML === boxes[e[1]].innerHTML) && (boxes[e[2]].innerHTML === boxes[e[1]].innerHTML) && (boxes[e[0]].innerHTML !== "")) {
            isgameover = true;
            document.querySelector("#status1").innerHTML = `${boxes[e[0]].innerHTML} Won `
                 document.querySelector("#line").style.width="32vw";
                 const box = document.querySelector('#line');
                 box.style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg) scale(1.5)`;
                 document.querySelector(".image").style.width="50vw";
                 e.removeEventListener('click',);
        } 
    })
}
// checkwin()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((e) => {
    let boxtext = e.querySelector(".boxtext")
    e.addEventListener("click", (element) => {
        if (boxtext.innerHTML == "") {
            boxtext.innerHTML = turn;
        }
        turn = changeturns();
        if (!isgameover) {
            document.querySelector("#status1").innerHTML = `Turn for ${turn}`;
        }
        checkwin()
    })
})
status2.addEventListener("click", () => {
    let reset = document.getElementsByClassName("boxtext")
    Array.from(reset).forEach((e) => {
        e.innerHTML=""
        document.querySelector("#status1").innerHTML = `Turn for ${turn}`
        document.querySelector("#line").style.width="0vw";
        document.querySelector(".image").style.width="0vw";
    })
}
)