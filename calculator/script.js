let display = document.querySelector("#display")
let clear = document.querySelector("#clear")
let eraser = document.querySelector("#eraser")
let output = document.querySelector("#output")

let btn = document.getElementsByClassName("btn")
Array.from(btn).forEach((e) => {
    e.addEventListener("click", () => {
        display.innerHTML += e.innerHTML
    })
})
clear.addEventListener("click", () => {
    display.innerHTML = "";
})

eraser.addEventListener("click", () => {
    let eraseone = display.innerHTML.slice(0, -1)
    display.innerHTML = eraseone
})

output.addEventListener("click", () => {
    try {
        let ans = eval(display.innerHTML);
        display.innerHTML = ans;
        } catch {
            display.innerHTML = "Error"
            setTimeout(() => {
                display.innerHTML = ""
            }, 1700);
            }
})