let main=document.querySelector(".main")
let QRtext=document.querySelector("#text")
let QRimg=document.querySelector("#QRimg")
let img=document.querySelector("#Img")
let generate=document.querySelector("#generate")

let download=document.querySelector("#download")



let QR=()=>{

if(QRtext.value!==""){
    setTimeout(()=>{
        QRimg.classList.remove("hidden")
    },1000)
    setTimeout(()=>{
        img.classList.remove("hidden")
    },800)
    QRimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRtext.value;
main.classList.remove("h-[200px]")
main.classList.add("h-[350px]")

}
else{
QRtext.classList.add("animate-slide")
QRtext.classList.remove("border-gray-500")
QRtext.classList.remove()
QRtext.classList.add("border-red-600")
img.classList.add("hidden")
QRimg.classList.add("hidden")
main.classList.remove("h-[350px]")
main.classList.add("h-[200px]")

setTimeout(()=>{
    QRtext.classList.remove("animate-slide")
    QRtext.classList.add("border-gray-500")
QRtext.classList.remove("border-red-600")

},700)
}

}

generate.addEventListener("click",()=>{
    QR();

})