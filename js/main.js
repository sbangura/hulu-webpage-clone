//let logBtn = document.getElementsByClassName("login-btn")
//let moduleVisibily = document.getElementsByClassName("modal")
//let closeBtn1 = document.getElementsByClassName("close")

const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

//let newDisplay = { display: "block"}
//
//
//
//logBtn.addEventListener('click', modulePop)
//
//function modulePop(){
//    moduleVisibily.style.display = 'block'
//}


loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)


function openModal(){
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display = 'none'
}

function outsideClick(e){
    if(e.target == modal) {
        closeModal()
    }
}