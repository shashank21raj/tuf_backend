import express from "express";
const router = express.Router();
import { createQna, deleteQna, getAllQna, getQnaById, updateQna } from "../controller/qna.js";
router.get("/",getAllQna);
router.get("/:id",getQnaById);
router.post("/",createQna);
router.put("/:id",updateQna);
router.delete("/:id",deleteQna);
export default router;
