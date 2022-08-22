import { Table, Model, Column, HasMany } from 'sequelize-typescript'
import Person from './person.model'

export interface IdTypeAttr {
  id: bigint
  name: string
  people: Person[]
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'id_types'
})
export default class IdType extends Model implements IdTypeAttr {
  declare id: bigint

  @Column
  declare name: string

  @HasMany(() => Person)
  declare people: Person[]

  @Column
  declare description: string

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
