//import express database
const express = require('express');
//import sequelize database
const sequelize = require('./DATABASE/sequelize');
const storeRouter = require('./routes/storeRouter');
const productRouter = require('./routes/productRouter');

const PORT = 1240;
const app = express();
app.use(express.json());

//use the express body-parser middleware
app.use(storeRouter);

app.use(productRouter);



const server = async ()=>{
    try {
        
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error){
        console.error('unable to connect to the database:', error);
    }
}
server();

app.listen(PORT, ()=>{
    console.log(`This app is listening to PORT: ${PORT}`);
    
})