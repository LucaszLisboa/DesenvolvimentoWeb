const acres = document.querySelector("#acres")
const reset = document.querySelector("#reset")
const decres = document.querySelector("#decres")


acres.onclick = () => {
    count.textContent = parseInt(count.textContent) + 1;
}

reset.onclick = () => {
    count.textContent = 0;
}

decres.onclick = () => {
    count.textContent = parseInt(count.textContent) - 1;
    
    if(count.textContent < 0){
        count.textContent = 0;
    }
}