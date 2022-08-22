import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import AttentionPlace from './models/attentionPlace.model'
import Area from './models/area.model'

dotenv.config()
export const sequelize = new Sequelize({
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.database,
  dialect: 'mariadb'
})

export const initModels = (): void => {
  sequelize.addModels([AttentionPlace, Area])
}
