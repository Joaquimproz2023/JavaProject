var area = document.getElementById ("area")
area.addEventListener('mouseenter', enter)
function clique(){
    area.innerText="Clicked"
    area.style.background = 'green'
}

function out(){
    area.innerText="Out"
    area.style.background = 'red'
}
function enter(){
    area.innerText="Entered"
    area.style.background = 'blue'
}