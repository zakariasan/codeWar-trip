const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers :{'Content-Type' : 'application/json'},
        body : JSON.stringify({
            name : 'Darth vadar'
        })
    }).then(res => {
        if(res.ok) return res.json();
    })
        .then(data => window.location.reload())
})



update.addEventListener('click', _=>{
    fetch('/quotes', {
        method : 'put',
        headers :{'Content-Type' : 'application/json'},
        body : JSON.stringify({
            name : 'Darth vadar',
            quote : 'I find your lack of faith distrubing.'

        })

    })
        .then(res => {
            if(res.ok) return res.json()
        })
        .then(resp => window.location.reload(true))

})
