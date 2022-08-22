import { Table, Model, Column } from 'sequelize-typescript'

export interface LegalOfficerOptionAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'legal_officer_options'
})
export default class LegalOfficerOption extends Model implements LegalOfficerOptionAttr {
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
