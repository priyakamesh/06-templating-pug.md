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

const pastry = ["Blueberry Muffin: 1.59 each", "Puff Pastry: 2.99 each", "Macroons: 4.99/lb", "Yoplait Yogurt: 1.99 each", "Carrot cake: 9.99 each"]
app.get('/inventory',(req,res,next)=>{
  res.render('inventory',{url:req.url, pastry});
});
const port = process.env.PORT || 8080;

app.listen(port,()=>{
  console.log(`listening to ${port}`);
});
