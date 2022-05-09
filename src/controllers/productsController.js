const productos= require('../data/products.json')
module.exports= {
    index: (req,res)=>{
        res.render('productos',{
            productos
        })

    },
    detail:(req,res)=>{
        const {name,id,price, description,category, img1, img2}= (productos.find(producto=>producto.id === +req.params.id)); 

        res.render('productDetail', {
            name,id,price, description,category, img1, img2
        })
    },
    search:(req,res)=>{
        const {keyword}= req.query; 
        const resultados= productos.filter(producto=>producto.name.toLowerCase().includes(keyword.toLowerCase())); 
        res.render('results',{
            resultados,
            keyword
        })
    }
}