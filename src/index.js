import express from 'express'
import { categoriesRouter } from './routes/categories.js'
import { productRouter } from './routes/products.js'

const app = express()

app.use(express.json())

app.use('/api/v1/products', productRouter)
app.use('/api/v1/categories', categoriesRouter)

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})