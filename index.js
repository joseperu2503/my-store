//-------------------------------------------
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const routerApi = require('./routes')

//------Routing-------------------------------
app.get('/', (req,res) => {
  res.send('hola mi server en express')
})

app.get('/nueva-ruta', (req,res) => {
  res.send('hola soy una nueva ruta')
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

routerApi(app)

//-----------------------------------------
app.listen(port,() => {
  console.log('Mi port ' + port)
})
