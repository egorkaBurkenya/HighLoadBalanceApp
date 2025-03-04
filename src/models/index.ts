import { Sequelize } from 'sequelize'

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/high_load_balance_app'

export const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: false,
})
