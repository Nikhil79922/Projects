let len = document.querySelector("#passlen")
let first = document.querySelector("#first")
const passbox = document.querySelector("#Display")
let btn = document.querySelector("#butn")
var lenvalue = 0

len.addEventListener("input", () => {
    lenvalue = len.value;
    first.classList.add("text-red-500")
    let set1 = setInterval(() => {
        if (len.value == "") {
            first.classList.remove("text-red-500")
            clearInterval(set1)
        }
    }, 100)
})

let uppercase = document.querySelector("#Uppercase");
let second = document.querySelector("#second");
uppercase.addEventListener("change", () => {
    second.classList.add("text-red-500")
    let set2 = setInterval(() => {
        if (uppercase.checked == false) {
            second.classList.remove("text-red-500")
            clearInterval(set2)
        }
    }, 100)
    if (uppercase.checked == true) {
        passbox.classList.remove("thick-strike")
        passbox.innerHTML = `Generate Password`;
        passbox.classList.remove("text-black");
        passbox.classList.add("text-gray-500")
    }
})

let lowercase = document.querySelector("#Lowercase");
let third = document.querySelector("#third");
lowercase.addEventListener("change", () => {
    third.classList.add("text-red-500")
    let set3 = setInterval(() => {
        if (lowercase.checked == false) {
            third.classList.remove("text-red-500")
            clearInterval(set3)
        }
    }, 100)
    if (lowercase.checked == true) {
        passbox.classList.remove("thick-strike");
        passbox.innerHTML = `Generate Password`;
        passbox.classList.remove("text-black");
        passbox.classList.add("text-gray-500")
    }
})

let number = document.querySelector("#Number");
let fourth = document.querySelector("#fourth");
number.addEventListener("change", () => {
    fourth.classList.add("text-red-500")
    let set4 = setInterval(() => {
        if (number.checked == false) {
            fourth.classList.remove("text-red-500")
            clearInterval(set4)
        }
    }, 100)
    if (number.checked == true) {
        passbox.classList.remove("thick-strike");
        passbox.innerHTML = `Generate Password`;
        passbox.classList.remove("text-black");
        passbox.classList.add("text-gray-500")
    }
})

let symbol = document.querySelector("#Symbol");
let fifth = document.querySelector("#fifth");
symbol.addEventListener("change", () => {
    fifth.classList.add("text-red-500")
    let set5 = setInterval(() => {
        if (symbol.checked == false) {
            fifth.classList.remove("text-red-500")
            clearInterval(set5)
        }
    }, 100)
    if (symbol.checked == true) {
        passbox.classList.remove("thick-strike");
        passbox.innerHTML = `Generate Password`;
        passbox.classList.remove("text-black");
        passbox.classList.add("text-gray-500")
    }
})

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

let generateLetter = (data) => {
    return data[Math.floor(Math.random() * data.length)]
}

let finalpass = "";
let generatedpassword = (password) => {
    if (uppercase.checked == true) {
        password += generateLetter(upperSet)
    }
    if (lowercase.checked == true) {
        password += generateLetter(lowerSet)
    }
    if (number.checked == true) {
        password += generateLetter(numberSet)
    }
    if (symbol.checked == true) {
        password += generateLetter(symbolSet)
    }

    //RECURSIVE FUNCTION 
    if (password.length < lenvalue && password != "") {
        generatedpassword(password)
        console.log(parent.length)
    }
    else {
        finalpass = password.substring(0, lenvalue)
    }
    if (password != "" && lenvalue > 0) {
        passbox.innerHTML = finalpass;
        passbox.classList.remove("thick-strike")
        passbox.classList.remove("text-gray-500")
        passbox.classList.add("text-black")
    }
    else {
        passbox.classList.add("text-gray-500")
        passbox.classList.add("font-bold")
        passbox.classList.add("animate-spin")
        passbox.classList.add("thick-strike")
        passbox.innerHTML = `None`;
        let set6 = setInterval(() => {
            passbox.classList.remove("animate-spin")
            clearInterval(set6)
        }, 400);
    }
    let copytext = document.querySelector("#copybtn");
    let copiedtext = document.querySelector(".copied");
    let dot = document.querySelector(".dot");
    if (finalpass != "") {
        copytext.addEventListener("click", () => {
            let input = document.querySelector("#Display").innerHTML
            navigator.clipboard.writeText(input).then(() => {
                copiedtext.classList.remove("hidden")
                dot.classList.remove("hidden")
                let set6 = setTimeout(() => {
                    copiedtext.classList.add("hidden")
                    dot.classList.add("hidden")
                    clearTimeout(set6);
                }, 1400)
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
        )
    }
}

btn.addEventListener("click", () => {
    generatedpassword("");
})



