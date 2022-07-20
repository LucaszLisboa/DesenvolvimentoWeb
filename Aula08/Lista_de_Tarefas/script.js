const btn_adicionar = document.querySelector(".btn-adicionar")
const tarefaEl = document.querySelector(".box-label")
const pesquisaEl = document.querySelector(".barra-pesquisa")
const lista_tarefas = document.querySelector("#lista-tarefas")
const apagarEl = document.querySelector(".btn-apagar")



btn_adicionar.onclick = async () => {
    montarTarefa()
}

async function montarTarefa () {
    let task = document.createElement("div")
    task.classList.add("tarefa")

    let divTask = document.createElement("div")
    task.appendChild(divTask)

    let element = document.createElement('label');
    let input = document.createElement('input');
    let trash = document.createElement('img');
    let div_boxLabel = document.createElement('div');
    let div_btnApagar = document.createElement('button');

    input.setAttribute('type', 'checkbox');
    trash.setAttribute('src','images/trash.svg');
    div_boxLabel.setAttribute('class', 'box')
    div_btnApagar.setAttribute('class', 'btn-apagar');

    let objectJson = await apiCreateTask(pesquisaEl.value, false);
    element.innerText = " " + objectJson.description 

    divTask.appendChild(input);
    divTask.appendChild(element);
    div_btnApagar.appendChild(trash);
    task.appendChild(div_btnApagar);

    lista_tarefas.appendChild(task)
}

apagarEl.onclick = async () => {
    apiDeleteTask()
}

async function apiCreateTask(description, complete){
    const newTask = {description, complete}
    const url = "http://localhost:3000/tasks"
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)

    }

    const response = await fetch(url, options);
    return await response.json()
}

async function apiGetTasks(){
    
    const url = "http://localhost:3000/tasks";
    const responseGet = await fetch(url)
    return console.log(await responseGet.json())
}


async function apiUpdateTasks(id, complete){
    const url = `http://localhost:3000/tasks/${id}`
    const optionsUpdate = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(complete)

    }

    const responseUpdate = await fetch(url, optionsUpdate);
    return responseUpdate

}

async function apiDeleteTask(id){
    const url = `http://localhost:3000/tasks/${id}`;
    const optionsDelete = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },

    }

    const responseUpdate = await fetch(url, optionsDelete);
    return responseUpdate

}


// apiCreateTask("Tarefa de Teste", false); //cria uma nova task

apiGetTasks() //retorna a lista de tarefas

// apiUpdateTasks(19, {complete: true, description: "Irineu"}) //Atualiza as tasks

// apiDeleteTask(12) //Deleta task
