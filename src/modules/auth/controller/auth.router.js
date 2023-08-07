import * as authcontroler from "./auth.js";

import {Router} from "express";

const router = Router()

router.post("/signup",authcontroler.signup)
router.post("/login",authcontroler.login)

export default router
