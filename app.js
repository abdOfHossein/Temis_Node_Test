const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const loginRouter = require('./routes/authentication');
const config=require('dotenv').config();
if(config.error){
  
  console.log(`err of .env :${error}`);
}
const app = express();
const port=process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);

app.listen(port,()=>{

  console.log(`server is running on port:${port}`);
})

