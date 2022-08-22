import { Table, Model, Column } from 'sequelize-typescript'

export interface FileTypeAttr {
  id: bigint
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'file_types'
})
export default class FileType extends Model implements FileTypeAttr {
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
