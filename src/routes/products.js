const express= require('express'); 
const router= express.Router(); 

const {index, detail,search}= require('../controllers/productsController'); 
router
.get('/', index)
.get('/detail/:id', detail)
.get('/results', search)
module.exports= router; 