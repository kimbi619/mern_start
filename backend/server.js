import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express();

app.get('/', (req, res)=>{
    res.send("api is running on port 5000")
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV
app.listen(PORT, console.log(`server is running in ${MODE} mode on port ${PORT}`))