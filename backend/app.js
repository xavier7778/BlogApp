import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

app.get('/', (req,res) =>{
    res.send("Welcome to blog app");
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>app.listen(process.env.PORT || 5000))
.then(()=> console.log("connected to DB and listening to 5000"))
.catch((err) => (console.log(error)));
