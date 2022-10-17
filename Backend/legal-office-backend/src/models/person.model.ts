import { Table, Model, Column, Unique, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript'
import IdType from './idType.model'
import User from './user.model'

export interface PersonAttr {
  id: bigint
  idNumber: string
  idTypeId: bigint
  idType: IdType
  name: string
  lastName1: string
  lastName2: string
  tel: string
  email: string
  birthdate: Date
  user: User
  studentIdToShow: BigInt
  studentToShow: Person
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'people'
})
export default class Person extends Model implements PersonAttr {
  declare id: bigint

  @Column({ field: 'number_id' })
  declare idNumber: string

  @ForeignKey(() => IdType)
  @Column({ field: 'type_id' })
  declare idTypeId: bigint

  @BelongsTo(() => IdType)
  declare idType: IdType

  @Column
  declare name: string

  @Column({ field: 'lastname1' })
  declare lastName1: string

  @Column({ field: 'lastname2' })
  declare lastName2: string

  @Column
  declare tel: string

  @Unique
  @Column
  declare email: string

  @HasOne(() => User)
  declare user: User

  @Column
  declare birthdate: Date

  @ForeignKey(() => Person)
  @Column({ field: 'student_id_to_show' })
  declare studentIdToShow: bigint

  @BelongsTo(() => Person)
  declare studentToShow: Person

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
