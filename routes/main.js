const express = require('express');
const router = express.Router();
const Axios = require('axios');


//api for covidNews component
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
//api for stats on covid data 
router.get('/api/stats', (req,res)=>{
    Axios.get('https://disease.sh/v3/covid-19/states?sort=United%20States&yesterday=United%20States&allowNull=United%20States').then(function (response) {
      // handle success
      // console.log(response.data);
      res.send(response.data);
    })
});

module.exports = router;