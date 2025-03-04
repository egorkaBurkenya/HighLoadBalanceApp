import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

interface UserAttributes {
    id: number
    balance: number
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number
    public balance!: number
}

export default function (sequelize: Sequelize): typeof UserModel {
    UserModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            balance: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            tableName: 'users',
            sequelize,
            timestamps: false,
        },
    )
    return UserModel
}
