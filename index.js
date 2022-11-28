//-------------------------------------------
const express = require('express')
const faker = require('faker')
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
  const products = []
  const {size} = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    products.push({
      id: index + 1 ,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products)
})

app.get('/users', (req,res) => {
  const {limit, offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parametros')
  }
})

//-----------endpoint estatico debe ir antes de los endpoints dinamicos
app.get('/products/filter', (req,res) => {
  res.send('yo soy un filter')
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
//-------------------------------------------------------


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
