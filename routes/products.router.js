const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/', (req,res) => {
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

router.post('/', (req,res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.put('/:id', (req,res) => {
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated',
    id,
    data: body
  })
})

router.delete('/:id', (req,res) => {
  const {id} = req.params
  res.json({
    message: 'deleted',
    id,
  })
})

//-----------endpoint estatico debe ir antes de los endpoints dinamicos
router.get('/filter', (req,res) => {
  res.send('yo soy un filter')
})

router.get('/:id', (req,res) => {
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

module.exports = router
