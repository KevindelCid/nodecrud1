
const express = require("express")
const mysql = require("mysql")
const myconn = require('express-myconnection')

const app = express();
const routes = require('./routes')

app.set('port', process.env.PORT || 3233)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'node1'
}

// middlewares ---------------------------------------

app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())


// routes ----------------------------------
app.get('/', (req, res) =>{
    res.send('entramos a la ruta apis')
})


app.use('/api',routes)

// app ----------------------------
app.listen(app.get('port'),()=>{
    console.log('el servidor ha iniciado con el puerto '
    + app.get('port'))
})
