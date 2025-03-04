import { DataTypes, QueryInterface } from 'sequelize'

export const up = async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('users', {
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
    await queryInterface.bulkInsert('users', [{ balance: 10000 }])
}

export const down = async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('users')
}