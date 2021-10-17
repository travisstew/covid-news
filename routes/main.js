const express = require('express');
const router = express.Router();


router.get('/api/customers', function(req,res){
    const customers = [
      {
        id:1,
        firstName:'travis'
      }
    ];
    res.json(customers);
});

module.exports = router;