import express, {Application, Request, Response, NextFunction} from 'express';
import multer from 'multer';
const controller = require("../controller/controller");
const uploadFile = require("../middleware/upload");
import { fileStorage } from "../middleware/upload";

const router = express.Router()


router.post("/upload", controller.upload);

module.exports = router;