const mainEl = document.querySelector('#main');
const listaEl = document.querySelector('#lista');

fetch('https://api.github.com/users/lucaszlisboa/repos', {
        method: 'GET',
        headers: { 
            "Content-type": "application/json;charset=UTF-8"}
        

    }) 
    .then(response => response.json())
    .then(response => response.forEach(display))
    .catch(err => console.log('Erro de solicitação', err));
   

function display(response){
    console.log(response);
    let element = document.createElement('div');
    element.innerHTML = response.name;
    listaEl.appendChild(element);
    
}