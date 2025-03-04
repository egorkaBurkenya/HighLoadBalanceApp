import { DataTypes, QueryInterface } from 'sequelize'

export const up = async ({ context }: { context: QueryInterface }): Promise<void> => {
    await context.createTable('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
    await context.bulkInsert('users', [{ balance: 10000 }])
}

export const down = async ({ context }: { context: QueryInterface }): Promise<void> => {
    await context.dropTable('users')
}
