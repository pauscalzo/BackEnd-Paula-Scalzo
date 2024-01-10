const fs = require("fs");

class ProductManager {
    constructor () {
    this.products = [];
    this.path = "products.json";
    };

    getProducts(){
        try {
            if (fs.accessSync(this.path)){
                const data = fs.readFileSync(this.path, "utf8");
                this.products = JSON.parse(data);
                console.log("archivo leído con éxito");
            }
        } catch (error) {
            console.error("error al leer el archivo", error);
            
        }
        console.log(this.products);
    };

    getProductById(pid){
        const productId = this.products.find (product => product.id === pid);
        if (productId) {
            console.log(productId);
        } else {
            console.log("Not Found");
        }
    };

    addProduct(title, description, price, thumbnail, code, stock){

        if (title === "" || description === "" || price === "" || thumbnail === "" || code === "" || stock === "") {
            console.log("Debe completar todos los campos.");
        }

        else if (this.products.some((prod) => prod.code === code)) {
            console.log("El producto ya existe");
        }
        else {

            const newProduct = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };

            this.products.push(newProduct);
            console.log("Producto agregado correctamente.");

            try {

                fs.writeFileSync(this.path, JSON.stringify(this.products));
                console.log("producto guardado exitosamente");
                
            } catch (error) {

                console.error("no se guardo el producto", error)
                
            }
        }
    };

    updateProduct(id, productUpdate) {
        this.getProducts();
        const productId = this.products.find (product => product.id === id);
        if (productId) {
            const Index = this.products.findIndex (product => product.id === id);
            this.products[Index] = {id, ...productUpdate};
            try {

                fs.writeFileSync(this.path, JSON.stringify(this.products));
                console.log("Archivo actualizado con éxito")
                
            } catch (error) {
                console.error("no se pudo actualizar el archivo", error)
            }
        } else {
            console.log("Not Found");
        }
        
    };

    deleteProduct(id) {
        this.getProducts();
        const productId = this.products.find (product => product.id === id);
        if (productId) {
            const Index = this.products.findIndex (product => product.id === id);
            this.products.splice(Index, 1);
            try {

                fs.writeFileSync(this.path, JSON.stringify(this.products));
                console.log("El producto se ha borrado con éxito")
                
            } catch (error) {
                console.error("no se pudo borrar el producto", error)
            }
        } else {
            console.log("Not Found");
        }
        
    };
};

const producto1 = {
    title: 'producto 1',
    description: 'Este es el producto 1',
    price: 100,
    thumbnail: 'producto1.jpg',
    code: '123',
    stock: 100,
};
const producto2 = {
    title: 'producto 2',
    description: 'Este es el producto 2',
    price: 200,
    thumbnail: 'producto2.jpg',
    code: '124',
    stock: 200,
};
const producto3 = {
    title: 'producto 3',
    description: '',
    price: 300,
    thumbnail: 'producto3.jpg',
    code: '125',
    stock: 300,
};
const producto4 = {
    title: 'producto 4',
    description: 'Este es el producto 4',
    price: 400,
    thumbnail: 'producto4.jpg',
    code: '124',
    stock: 400,
};

const producto5 = {
    title: 'producto 5',
    description: 'Este es el producto 5',
    price: 500,
    thumbnail: 'producto5.jpg',
    code: '126',
    stock: 500,
};

const producto6 = {
    title: 'producto 6',
    description: 'Este es el producto 6',
    price: 600,
    thumbnail: 'producto6.jpg',
    code: '127',
    stock: 600,
};

const producto7 = {
    title: 'nuevo producto 6',
    description: 'Este es el nuevo producto 6',
    price: 600,
    thumbnail: 'producto6.jpg',
    code: '127',
    stock: 600,
};

const productManager = new ProductManager();

productManager.addProduct(
    producto1.title,
    producto1.description,
    producto1.price,
    producto1.thumbnail,
    producto1.code,
    producto1.stock
);

productManager.addProduct(
    producto2.title,
    producto2.description,
    producto2.price,
    producto2.thumbnail,
    producto2.code,
    producto2.stock
);

productManager.addProduct(
    producto3.title,
    producto3.description,
    producto3.price,
    producto3.thumbnail,
    producto3.code,
    producto3.stock
);

productManager.addProduct(
    producto4.title,
    producto4.description,
    producto4.price,
    producto4.thumbnail,
    producto4.code,
    producto4.stock
);

productManager.addProduct(
    producto5.title,
    producto5.description,
    producto5.price,
    producto5.thumbnail,
    producto5.code,
    producto5.stock
);

productManager.addProduct(
    producto6.title,
    producto6.description,
    producto6.price,
    producto6.thumbnail,
    producto6.code,
    producto6.stock
);


productManager.getProducts();
productManager.getProductById(2);
productManager.updateProduct(4, producto7);
productManager.deleteProduct(1);
