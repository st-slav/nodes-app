import mongoose from 'mongoose'
import config from '../../etc/config.json'

const { name, port, host } = config.db

export const dbConnection = () => mongoose.connect(`mongodb://${host}:${port}/${name}`, { useNewUrlParser: true })