require ('dotenv').config()
const express = require('express');
const mongoode = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser =  require('cookie-parser');


const app = express();
app.use(express.json);
app.use(cors());
app.use(coookieParser());
app.use(fileUpload({
    useTempFiles: true
}))



//connect to mongo db

