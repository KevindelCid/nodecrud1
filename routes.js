const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
   req.getConnection((err, conn)=>{
   if(err) return res.send(err) 

   conn.query('SELECT * FROM personas', (err,rows)=>{
    if(err) return res.send(err)
    res.json(rows)
   })
   })
})

routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
    if(err) return res.send(err) 

    conn.query('INSERT INTO personas set ?', [req.body],  (err,rows)=>{
     if(err) return res.send(err)
     res.send('se ha ingresado la persona')
    })
    })
 })

 routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
    if(err) return res.send(err) 

    conn.query('DELETE FROM personas WHERE id_persona = ?', [req.params.id],  (err,rows)=>{
     if(err) return res.send(err)
     res.send('se ha Eliminado la persona')
    })
    })
 })

 routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
    if(err) return res.send(err) 

    conn.query('UPDATE personas set ? WHERE id_persona = ?', [req.body, req.params.id],  (err,rows)=>{
     if(err) return res.send(err)
     res.send('se ha Actualizado la persona')
    })
    })
 })



module.exports = routes