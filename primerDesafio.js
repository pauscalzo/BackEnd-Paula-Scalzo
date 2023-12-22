class ProductManager {
    constructor () {
    this.products = [];
    };

    getProducts(){
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

productManager.getProducts();
productManager.getProductById(2);