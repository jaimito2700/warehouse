const { application } = require("express")
const express= require("express")
const app=express()
const PORT = process.env.PORT|| 3000
app.get('/',(req,res)=>{

res.send('HOLA MUNDO')    
})

app.get('/products',(req,res)=>{

    res.send('productos en construccion')    
    })

app.get('/peoples',(req,res)=>{

        res.send('personas en construccion')    
        })

app.listen(PORT,()=>{
    console.log('listo')
})