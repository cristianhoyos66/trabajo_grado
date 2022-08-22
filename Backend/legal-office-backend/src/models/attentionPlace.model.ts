import { Table, Model, Column } from 'sequelize-typescript'

export interface AttentionPlaceAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'attention_places'
})
export default class AttentionPlace extends Model implements AttentionPlaceAttr {
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
