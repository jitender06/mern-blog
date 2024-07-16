import { Router } from "express";
import {test} from '../controllers/User.controller.js'

const router = Router()

router.get("/test", test)


export default router