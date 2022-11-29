//-------------------------------------------
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://localhost:8080','http://prismadelnorte.com']
options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true)
    }
    else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors())

const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

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

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

//-----------------------------------------
app.listen(port,() => {
  console.log('Mi port ' + port)
})
