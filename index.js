import express from 'express';
import cors from 'cors';
import qnaRouter from './router/qna.js';
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();
const app =express();
app.use(cors({
    origin: ['http://localhost:3000',"https://tuf-frontend-eta.vercel.app"]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

export const db=mysql.createConnection(process.env.DB_URL);
app.get('/',(req,res)=>{
    res.json("Server is running")
})

app.use('/qna',qnaRouter)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err.stack);
            return;
        }
        console.log('Connected to MySQL');
    });
});

export default app