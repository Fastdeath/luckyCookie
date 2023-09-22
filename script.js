let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')

function cookieClick() {  
  toggle()
  refreshAnimation()
}

function openAnother() {
  toggle()
}

function refreshAnimation() {
  
}

function toggle() {
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
}