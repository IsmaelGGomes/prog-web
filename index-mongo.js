const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Frase = require('./frase.model');
app.use(express.json());


// Conexão banco de dados
const db_host = 'localhost';
const port = 8080
const db_port = 27017;
const db_db   = 'frases';   
const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_db}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });


app.get('/', (req, res) => {
    res.send('logando novamente')
})

app.get('/frases', (req, res) => {
    Frase.find({})
        .then((frases) => {
            res.send(frases);
        })
        .catch((err) => {
            res.status(500).send();
        })
})

app.post('/frases', async (req, res) => {
    // var frase = {
    //     autor: req.body.autor,
    //     frase: req.body.frase
    // }
    // Frase.create(frase)
    //     .then((f)=> {
    //         // res.status(201).send()
    //         res.status(201).send(f)
    //     }).catch(()=> {
    //         res.status(500).send()
    //     })
    const data = await req.body

    data.forEach((data) => {
        Frase.create((data)
        .then((f)=> {
            // res.status(201).send()
            res.status(201).send(f)
        }).catch(()=> {
            res.status(500).send()
        })
        )
    })
})

app.delete('/frases/:id', (req, res) => {
    var id = req.params.id
    Frase.findByIdAndDelete(id)
        .then(()=> {
            res.status(200).send();
        }).catch(()=> {
            res.status(404).send();
        })
})

app.put('/frases/:id', (req, res) => {
    var id = req.params.id
    var f = req.body
    
    Frase.findById(id)
        .then((frase)=> {
            frase.autor = f.autor;
            frase.frase = f.frase;
            frase.save().then(()=> {
                res.status(200).send();
            }).catch(()=> {
                res.status(500).send();
            })
        }).catch((err)=> {
            console.log(err);
            res.status(500).send();
        })
})

app.listen(port, (err) => {
    if (err) {
        console.log('erro aplication', err)
    }
    console.log(`aplicação rodando na porta ${port}`)
})


