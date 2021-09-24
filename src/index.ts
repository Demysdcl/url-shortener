import dotenv from "dotenv";
import express from 'express';
import URLController from "./controller/URLController";
import MongoConnection from "./database/MongoConnection";
dotenv.config()

const app = express()
app.use(express.json())

new MongoConnection().connect()

const urlController = new URLController()

app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(5000, () => console.log('Express listening in port 5000'))

