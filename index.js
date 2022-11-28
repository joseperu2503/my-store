//-------------------------------------------
const express = require('express')
const app = express()
const port = 3000

//------Routing-------------------------------
app.get('/', (req,res) => {
  res.send('hola mi server en express')
})

app.get('/nueva-ruta', (req,res) => {
  res.send('hola soy una nueva ruta')
})

app.get('/products', (req,res) => {
  res.json({
    name: 'junior',
    lastname: 'perez'
  })
})

//-----------------------------------------
app.listen(port,() => {
  console.log('Mi port ' + port)
})
