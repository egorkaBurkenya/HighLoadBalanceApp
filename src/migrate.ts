import { SequelizeStorage, Umzug } from 'umzug'
import { sequelize } from './models'

export const runMigrations = async (): Promise<void> => {
    const umzug = new Umzug({
        migrations: { glob: 'src/migrations/*.ts' },
        context: sequelize.getQueryInterface(),
        storage: new SequelizeStorage({ sequelize }),
        logger: console,
    })

    await umzug.up()
    console.log('Migrations executed successfully.')
}
