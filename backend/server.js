//entry point of the backend application
import express from 'express'
import data from './data.js'

const app = express()

// const prod = {
//             _id: 1,
//             name: "shirt",
//             category: "clothing",
//             image: './images/p1.jpg',
//             price: 120,
//             countInStock: 10,
//             brand: 'clothes world',
//             rating: .5,
//             numReviews: 2,
//             description: 'short description of this product'
//         }



app.get('/api/products/:id', (req, res)=> {
    const product = data.products.find( x=> x._id === req.params.id)
    if(product) {
        try {
            res.send(product)
        }
        catch(err) {
            // res.send({message: err.response && err.response.data.message ? err.response.data.message : err.message})
            res.send({message: "product found, but failed to complete"})
        }
    }
    else {
        res.status(404).send({message: "Product not found"})
    }

        
})

//note: homepage does not work without this one
app.get('/api/products', (req, res)=> {
    res.send(data.products)
})


app.get('/', (req, res)=> {
    res.send("server is ready")
})


// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`server at http://localhost:${port}`)
})