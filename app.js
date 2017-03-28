'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine','pug');

app.get('/',(req,res,next)=>{
  res.render('index',{url:req.url});
});
app.get('/about',(req,res,next)=>{
  res.render('about',{url:req.url});
});
app.get('/inventory',(req,res,next)=>{
  res.render('inventory',{url:req.url});
});
const port = process.env.PORT || 8080;

app.listen(port,()=>{
  console.log(`listening to ${port}`);
});
