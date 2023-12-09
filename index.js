const express = require('express');
const app = express();

const port = 8080

const frases = [
    {id:10, autor: 'lucio negrete', frase: 'frae de mariaaa'},
    {id:11, autor: 'ismael', frase: 'frae de iiiimariaaa'},
    {id:12, autor: 'lucas', frase: 'frae de maasdasdriaaa'},
    {id:13, autor: 'xandão', frase: 'fraesdasda de mariaaa'},
]

app.get('/', (req, res) => {
    res.send('logando novamente')
})

app.listen(port, (err) => {
    if (err) {
        console.log('erro aplication', err)
    }
    console.log(`aplicação rodando na porta ${port}`)
})
