const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/',require('./router'));


app.listen(8000, ()=>{
    console.log('Server running...');
} )

app.get('/', (req,res)=>{
    res.redirect('/index');
    console.log('loading index');
})






