import express from "express"
import {login} from "../controllers/auth.js"

const router = express.Router()

// http://localhost:8080/auth/login
router.post("/login",login)

export default router