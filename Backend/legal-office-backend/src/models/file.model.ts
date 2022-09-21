import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Case from './case.model'
import FileType from './fileType.model'

export interface FileAttr {
  id: bigint
  url: string
  fileTypeId: bigint
  fileType: FileType
  caseId: bigint
  case: Case
  createdAt: Date
  updatedAt: Date
}

@Table({
  tableName: 'files'
})
export default class File extends Model implements FileAttr {
  declare id: bigint

  @Column
  declare url: string

  @ForeignKey(() => FileType)
  @Column({ field: 'file_type_id' })
  declare fileTypeId: bigint

  @BelongsTo(() => FileType, {
    foreignKey: {
      name: 'fileTypeId'
    }
  })
  declare fileType: FileType

  @ForeignKey(() => Case)
  @Column({ field: 'case_id' })
  declare caseId: bigint

  @BelongsTo(() => Case, {
    foreignKey: {
      name: 'caseId'
    }
  })
  declare case: Case

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
