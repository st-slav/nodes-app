import express from 'express'
import bodyParser from 'body-parser'
import { NotesController } from './controllers'
import { dbConnection, config } from './utils'

dbConnection()

const app = express()
app.use(bodyParser.json())

NotesController.create(app)

const server = app.listen(config.serverPort, () => {
    console.log('server working');
})