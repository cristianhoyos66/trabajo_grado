import { Table, Model, Column } from 'sequelize-typescript'

export interface SubjectMatterAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'subject_matters'
})
export default class SubjectMatter extends Model implements SubjectMatterAttr {
  declare id: bigint

  @Column
  declare name: string

  @Column
  declare description: string

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
