import { Table, Model, Column } from 'sequelize-typescript'

export interface AudienceResultAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'audience_results'
})
export default class AudienceResult extends Model implements AudienceResultAttr {
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
