const express = require('express')
const faker = require('faker')
const ProductService = require('../services/product.service')

const router = express.Router()
const service = new ProductService()

router.get('/', async (req,res, next) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req,res,next) => {
  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req,res) => {
  const body = req.body
  const newProduct = await service.create(body)

  res.status(201).json(newProduct)
})

router.put('/:id', async (req,res) => {
  try {
    const {id} = req.params
    const body = req.body
    const product = await service.update(id,body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})

router.delete('/:id', async (req,res) => {
  const {id} = req.params
  const response = await service.delete(id)
  res.json(response)
})

//-----------endpoint estatico debe ir antes de los endpoints dinamicos
router.get('/filter', (req,res) => {
  res.send('yo soy un filter')
})


//-------------------------------------------------------

module.exports = router
