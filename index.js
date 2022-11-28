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
  res.json([
    {
      name: 'junior',
      lastname: 'perez'
    },
    {
      name: 'jose',
      lastname: 'perez'
    },
  ])
})

app.get('/products/:id', (req,res) => {
  const {id} = req.params

  res.json([
    {
      id: id,
      name: 'junior',
      lastname: 'perez'
    }
  ])
})

app.get('/categories/:categoryId/products/:productId', (req,res) => {
  const {categoryId, productId} = req.params

  res.json([
    {
      categoryId,
      productId,
      name: 'junior',
      lastname: 'perez'
    }
  ])
})

//-----------------------------------------
app.listen(port,() => {
  console.log('Mi port ' + port)
})
