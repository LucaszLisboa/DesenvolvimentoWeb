const data = { username: 'lucaszlisboa'};

fetch('https://api.github.com/users/lucaszlisboa/repos', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}) 

.then(data => {
    eu(data);
    return data.JSON();
})

function eu(response){
    console.log(response);
}