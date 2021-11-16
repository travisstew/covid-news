const express = require('express');
const cors = require('cors');
const path = require('path');
const { send } = require('process');
// const cookieParser = require('cookie-parser');



const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/', require('./routes/main'));

if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    req.sendFile(path.resolve(__dirname), 'client','build','index.html')
  })
}

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });

