import { Table, Model, Column } from 'sequelize-typescript'

export interface EfficacyOptionAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'efficacy_options'
})
export default class EfficacyOption extends Model implements EfficacyOptionAttr {
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
