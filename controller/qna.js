import { db } from '../index.js';

export const getAllQna=(req,res)=>{
    try {
        const sql='select * from qna'
        db.query(sql,(err,data)=>{
            if(err) throw err
            res.status(200).json({data})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
}

export const getQnaById=(req,res)=>{
    try {
        const id=req.params.id
        const sql='select * from qna where id=?'
        db.query(sql,[id],(err,data)=>{
            if(err) throw err
            if(data.length===0) return res.status(404).json({message: 'Not Found'})
            res.status(200).json({data:data[0]})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
}

export const createQna=(req,res)=>{
    try {
        const {question, answer} = req.body;
        const sql='insert into qna set?'
        db.query(sql,{question, answer},(err,result)=>{
            if(err) throw err
            res.status(201).json({message: 'Q&A Created', result})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
}

export const updateQna=(req,res)=>{
    try {
        const id=req.params.id
        const {question, answer} = req.body;
        const sql='update qna set question=?, answer=? where id=?'
        db.query(sql,[question, answer, id],(err,result)=>{
            if(err) throw err
            if(result.affectedRows===0) return res.status(404).json({message: 'Not Found'})
            res.status(200).json({message: 'Q&A Updated'})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
}

export const deleteQna=(req,res)=>{
    try {
        const id=req.params.id
        const sql='delete from qna where id=?'
        db.query(sql,[id],(err,result)=>{
            if(err) throw err
            if(result.affectedRows===0) return res.status(404).json({message: 'Not Found'})
            res.status(200).json({message: 'Q&A Deleted'})
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
}