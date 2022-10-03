import { Table, Model, Column, ForeignKey, BelongsTo, AfterCreate } from 'sequelize-typescript'
import Person from './person.model'

export interface UserAttr {
  id: bigint
  username: string
  pwd?: string
  roleId: bigint
  personId: bigint
  person: Person
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'users'
})
export default class User extends Model implements UserAttr {
  declare id: bigint

  @Column
  declare username: string

  @Column
  declare pwd?: string

  @Column({ field: 'role_id' })
  declare roleId: bigint

  @ForeignKey(() => Person)
  @Column({ field: 'person_id' })
  declare personId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'personId'
    }
  })
  declare person: Person

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date

  @AfterCreate
  static removePwd (instance: User): void {
    instance.pwd = undefined
  }
}
