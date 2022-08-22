import { Table, Model, Column } from 'sequelize-typescript'

export interface CaseStatusAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'case_statuses'
})
export default class CaseStatus extends Model implements CaseStatusAttr {
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
