import { runMigrations } from '@migrate'
import { sequelize } from '@models'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

async function start(): Promise<void> {
    try {
        await sequelize.authenticate()
        console.log('Database connected.')

        await runMigrations()

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.error('Error starting application:', err)
    }
}

start()
