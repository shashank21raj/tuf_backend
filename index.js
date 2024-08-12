import express from 'express';
import cors from 'cors';
import qnaRouter from './router/qna.js';
import mysql from 'mysql2'
const app =express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const url="mysql://root:KVknoeLOwfhzFHTnvItsWNRZlmCYoidb@monorail.proxy.rlwy.net:39007/railway"

export const db=mysql.createConnection(url);
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