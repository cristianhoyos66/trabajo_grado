import { Table, Model, Column } from 'sequelize-typescript'

export interface AttentionResultAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'attention_results'
})
export default class AttentionResult extends Model implements AttentionResultAttr {
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
