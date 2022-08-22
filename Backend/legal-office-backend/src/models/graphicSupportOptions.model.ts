import { Table, Model, Column } from 'sequelize-typescript'

export interface GraphicSupportOptionAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'graphic_support_options'
})
export default class GraphicSupportOption extends Model implements GraphicSupportOptionAttr {
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
