import express from 'express';
import dotenv from 'dotenv';
import cors from'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();


const app = express();

app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
}));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/' , Router);


const PORT = 8005;

app.listen(PORT , () => console.log(`Server Running successfully on Port ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;  

Connection(USERNAME,PASSWORD);