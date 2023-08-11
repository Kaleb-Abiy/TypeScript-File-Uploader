const uploadFile = require("../middleware/upload");
import {Express , Request, Response } from "express";





// const baseUrl = "http://localhost:8080/files/";

const upload = async (req: Request, res: Response) => {
  try {
    
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: `Could not upload the file: . ${err}`,
    });
  }
};

module.exports = {
  upload,
};
