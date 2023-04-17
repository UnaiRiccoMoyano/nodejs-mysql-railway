import express from "express";
import {pool} from "./db.js"
import {PORT} from "./config.js"
const app = express()

app.get('/',(req, res) => {
    res.send('Welcome to server')
})

app.get('/ping', async(req, res)=>{
    const [result] = await pool.query(`Select 'hello world' as RESULT`)
    res.json(result[0])
})

app.get('/create', async(req, res)=>{
    const result = await pool.query(`INSERT INTO users (name) VALUES ('Andres')`)
    res.json(result)
})

app.get('/show', async(req, res)=>{
    const [rows] = await pool.query(`select * from users`)
    res.json(rows)
})

app.listen(PORT)
console.log('Server on port '+PORT)
