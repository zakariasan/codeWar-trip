const express = require('express');
const app  = express();
const PORT = process.env.PORT || 5000

const rappers = {
    'toto': { 
        'age':27,
        'birthname' :'Taha Fahssi',
        'birthLocation' : 'Casablanca, Morocco'
    },
    'lbenj': { 
        'age':29,
        'birthname' :'Zakaria Bennaji',
        'birthLocation' : 'Casablanca, Morocco'
    },
    '7 toun': { 
        'age':35,
        'birthname' :'Abd Laalim Ben Rabeh, ',
        'birthLocation' : 'Casablanca, Morocco'
    },
    'Dylan': { 
        'age':00,
        'birthname' :'Dylan ',
        'birthLocation' : 'Dylan'
    },

}

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    const rapper = req.params.rapperName;
    if(rappers[rapper]){ 
        res.json(rappers[rapper]);
    }else
    {
        res.json(rappers['Dylan'])
    }
})

app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}  Time to codeOn`));
