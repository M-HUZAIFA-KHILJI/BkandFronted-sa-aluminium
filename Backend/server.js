const express = require('express')
const dbConnect = require('./Database/index');
const {PORT}=require('./config/index');
const router=require('./routes/index');
const errorHandler=require('./middlewares/errorHandler');
const cookieParser=require('cookie-parser');

const app=express();

app.use(cookieParser());


app.use(express.json());

app.use(router);

exports.app = app;


dbConnect();


app.use(errorHandler);

app.listen(PORT,console.log (`backend is running on port:${PORT}`));            

