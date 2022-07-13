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



apiCreateTask("Tarefa de Teste", false); //cria uma nova task

apiGetTasks() //retorna a lista de tarefas

apiUpdateTasks(19, {complete: true, description: "Irineu"}) //Atualiza as tasks

// apiDeleteTask(12) //Deleta task