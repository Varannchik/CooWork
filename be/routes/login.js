var express = require('express');
const key = require('../config/key');
var router = express.Router();
const {CreateOne} = require('../controller/userController.js');
const Ajv = require('ajv');
const jwt=require('jsonwebtoken');
const ajv = new Ajv();
const userSchema = require('../schemas/shemas.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');  
});

router.post("/login", async (req, res) => {
  
  try { 
    console.log(req.body);   
    const {login, pwd} = req.body; 
    const validate = ajv.compile(userSchema);
    const valid = validate({
        login, pwd
    });    
    if (!valid) {
        const {errors} = validate;
        const result = { status: 'invalid data' };        
        res.json(result);
    }
    else {
      const a = await CreateOne(login, pwd);           
      const tocken = jwt.sign({id:a._id},"tokenSecret");      
      console.log(tocken);
      res.cookie = (tocken);
    }
    
  }
  catch(err) {
      console.log(err);
  } 
});

module.exports = router;