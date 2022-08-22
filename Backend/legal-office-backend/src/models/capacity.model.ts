import { Table, Model, Column } from 'sequelize-typescript'

export interface CapacityAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'capacities'
})
export default class Capacity extends Model implements CapacityAttr {
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
