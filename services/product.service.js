const faker = require('faker')

class ProductService {

  constructor(){
    this.products = []
    this.generate()
  }

  generate(){
    const limit = 100

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  async find(){
    return this.products
  }

  async findOne(id){
    const name = this.getTotal()
    return this.products.find(item => item.id == id)
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct)
    return newProduct
  }

  async update(id,data){
    const index = this.products.findIndex(item => item.id == id)
    if(index ==  -1){
      throw new Error('Product not found')
    }
    else{
      const product = this.products[index]
      this.products[index] = {
        ...product,
        ...data
      }
      return this.products[index]
    }
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id == id)
    if(index ==  -1){
      throw new Error('Product not found')
    }
    else{
      this.products.splice(index, 1)
      return {message: 'producto eliminado'}
    }
  }
}

module.exports = ProductService
