let sideBar = document.querySelector(".side-bar")
function showSideBar(icon){
    if(icon.style.left == "340px"){
        icon.style.left = "0"
        sideBar.style.left= "-340px"
    }
    else{
        icon.style.left = "340px"
        sideBar.style.left= "0"
    }
}

let overlay = document.querySelector(".overlay")
let qrCode = document.querySelector(".qr")
let key = document.querySelector(".key")
function showQR(){
    overlay.classList.remove("d-none")
    qrCode.classList.remove("d-none")
    key.classList.remove("bg-white")
    key.classList.remove("text-secondary")
    key.style.backgroundColor = "#040726"
    key.style.color = "#fff"
}
function hideQR(){
    overlay.classList.add("d-none")
    qrCode.classList.add("d-none")
    key.classList.add("bg-white")
    key.classList.add("text-secondary")
}
overlay.addEventListener("click",function(){
    hideQR()
})