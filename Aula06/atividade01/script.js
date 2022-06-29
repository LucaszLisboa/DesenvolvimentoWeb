const start = document.querySelector(".botao")

let seg = 0;
let min = 0;
let hor = 0;
let flag = 0;
let intervalo = 0;

function contadorSegundos(){
    seg += 1;

    if(seg > 59){
        min += 1;
        seg = 0;
    }
    if(min > 59){
        hor += 1;
        min = 0;
        seg = 0;
    }
}

start.onclick = () => {
    flag += 1;

    if(flag == 1){
        intervalo = setInterval(() => {
            contadorSegundos()
            segundos.innerHTML = seg;
            minutos.innerHTML = min;
            hour.innerHTML = hor;
    
        }, 5)
        start.innerHTML = "Pause";
        start.classList.remove("botao");
        start.classList.add("botao-pause");
    }

    if(flag == 2){
        clearInterval(intervalo);
        start.innerHTML = "Reset";
        start.classList.remove("botao-pause");
        start.classList.add("botao-reset");
    }

    if(flag == 3){
        segundos.innerHTML = "00";
        minutos.innerHTML = "00";
        hour.innerHTML = "00";
        seg = 0;
        min = 0;
        hour = 0;
        flag = 0;
        start.innerHTML = "Start"
        start.classList.remove("botao-reset");
        start.classList.add("botao");
    }

}
console.log(flag)






