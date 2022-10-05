import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Permission from './permission.model'
import Role from './role.model'

export interface PermissionRoleAttr {
  roleId: bigint
  role: Role
  permissionId: bigint
  permission: Permission
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'permission_roles'
})
export default class PermissionRole extends Model implements PermissionRoleAttr {
  @ForeignKey(() => Role)
  @Column({ field: 'role_id', primaryKey: true })
  declare roleId: bigint

  @BelongsTo(() => Role)
  declare role: Role

  @ForeignKey(() => Permission)
  @Column({ field: 'permission_id', primaryKey: true })
  declare permissionId: bigint

  @BelongsTo(() => Permission)
  declare permission: Permission

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
