const express= require('express'); 
const router= express.Router(); 

const {index, detail,search, add, store}= require('../controllers/productsController'); 
router
.get('/', index)
.get('/detail/:id', detail)
.get('/results', search)
.get('/add', add)
.post('/add', store)
module.exports= router; 