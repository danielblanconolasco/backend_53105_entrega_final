import express from 'express'
const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/cart.router.js'

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})
