import  express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();
const port = 8080;

const productManager = new ProductManager();

app.listen(port, () => console.log("servidor con express"))

app.get('/products', async (req, res) => {
    const limit = parseInt(req.query.limit)
    const products = await productManager.getProducts()

    if (!isNaN(limit) && limit > 0) {
        const showProducts = products.slice(0, limit)
        res.json(showProducts)
    } else {
        res.json(products)
    }
    
})

app.get('/products/:pid', async (req, res) => {
    const pid = req.params.pid
    const productId = await productManager.getProductById(pid)

    if (!productId)  {
        return res.json({error: "Producto no encontrado"}) 
    } else {

    res.json(productId)
    }
})

