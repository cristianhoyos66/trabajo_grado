import { Table, Model, Column } from 'sequelize-typescript'

export interface PermissionAttr {
  id: bigint
  url: string
  resource: string
  action: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'permissions'
})
export default class Permission extends Model implements PermissionAttr {
  declare id: bigint

  @Column
  declare url: string

  @Column
  declare resource: string

  @Column
  declare action: string

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
