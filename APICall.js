fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const body = document.createElement('body');
        data.forEach(item => {
            const p = document.createElement('p')
            p.innerHTML = data.firs_name;
            body.appendChild(p);
        });
        
    });
       
 