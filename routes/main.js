const express = require('express');
const router = express.Router();
const Axios = require('axios');


// router.get('/api/customers', function(req,res){
//     const customers = [
//       {
//         id:1,
//         firstName:'travis'
//       }
//     ];
//     res.json(customers);
// });
router.get('/api/news', (req,res) =>{
  Axios({
    method: 'get', 
    url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/US/`,
    headers: {
      'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
      'x-rapidapi-key': '00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2'
    }
  }).then(result=> { 
     res.send(result.data)
     
  });
});

module.exports = router;