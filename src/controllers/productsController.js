const fs = require('fs'); 
const path= require('path'); 
const productos = require('../data/products.json');
module.exports = {
    index: (req, res) => {
        res.render('productos', {
            productos
        })

    },
    detail: (req, res) => {
        const {
            name,
            id,
            price,
            description,
            category,
            img1,
            img2
        } = (productos.find(producto => producto.id === +req.params.id));

        res.render('productDetail', {
            name,
            id,
            price,
            description,
            category,
            img1,
            img2
        })
    },
    search: (req, res) => {
        const {
            keyword
        } = req.query;
        const resultados = productos.filter(producto => producto.name.toLowerCase().includes(keyword.toLowerCase()));
        res.render('results', {
            resultados,
            keyword
        })
    },
    add: (req, res) => {
        res.render('addProduct')
    },
    store: (req, res) => {
        const {name, category, description, price}= req.body;
        const id= productos.length+1;

        const producto = {
            id,
            name, 
            price, 
            description, 
            category, 
            img1: "noimage.jpg",
            img2: "noimage.jpg"
        }
        
        productos.push(producto)

        fs.writeFileSync(path.resolve(__dirname,'..','data','products.json'),JSON.stringify(productos,null,3),'utf-8')
        return res.redirect('/')
    }

}