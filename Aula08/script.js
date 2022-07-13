const mainEl = document.querySelector('#main');

fetch('https://api.github.com/users/lucaszlisboa/repos', {
        method: 'GET',
        headers: {"Content-type": "application/json;charset=UTF-8"}

    }) 
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Erro de solicitação', err));
  

    function exibirRepos(response){
        console.log(response);

        JSON.stringify(response);

        let name = document.createElement('div')
        let linkName = document.createTextNode(response.html_url);
        let link = document.createElement('a')
        link.appendChild(linkName)

        link.title = response.html_url;

        name.classList.add('name')
        link.classList.add('link')

        name.innerText = response.name;
        link.href = response.html_url
        link.target = "_blank"

        mainEl.appendChild(name);
        mainEl.appendChild(link);
    }