import express, {Application, Request, Response, NextFunction} from 'express';
const getRoute = require('./routes/routes')
const uploadFile = require('./middleware/upload')
import multer from 'multer';
import { fileStorage } from './middleware/upload';
var cors = require('cors')



const app: Application = express();

app.use(cors())


app.use('/', getRoute);


app.listen(5000, ()=> console.log('listnening on port 5000...'))



