const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const port = 8080
const db_port = 27017;
const db_db   = 'frases';   
const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_db}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });


app.get('/', (req, res) => {
    res.send('logando novamente')
})

app.get('/frases', (req, res) => {
    //
})

app.post('/frases', (req, res) => {
    //console.log(req.body);
    //res.send('pronto')
    frases.push(req.body)
    res.status(201).send()
})

app.delete('/frases/:id', (req, res) => {
    var id = req.params.id
    var index = frases.findIndex((frase) => frase.id == id)
    // response -1 quer dizer que não foi encontrado
    if (index == -1) {
        res.status(404).send()
    } else {
        frases.splice(index, 1)
        res.status(200).send()
    }
})

app.put('/frases/:id', (req, res) => {
    var id = req.params.id
    var frase = req.body
    var index = frases.findIndex((frase) => frase.id == id)
    
    if (index == -1) {
        res.status(404).send()
    } else {
        frases[index].autor = frase.autor
        frases[index].frase = frase.frase
        res.status(200).send()
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log('erro aplication', err)
    }
    console.log(`aplicação rodando na porta ${port}`)
})


