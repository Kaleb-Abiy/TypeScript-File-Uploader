import util from "util";
import { Request } from 'express'
import multer from 'multer'
const mkdirp = require('mkdirp')


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const maxSize = 10 * 1024 * 1024;


export const fileStorage = multer.diskStorage({
    destination: function (req: Request, _file: any, cb: any) {
        const dir = './uploads/';
        // mkdirp(dir, (err: NodeJS.ErrnoException) => {
            cb(null, dir)
        // });
    },
    filename: function (_req: Request, file: any, cb: any) {
        cb(null, file.originalname)
    }
});

let uploadFile = multer({
  storage: fileStorage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;


