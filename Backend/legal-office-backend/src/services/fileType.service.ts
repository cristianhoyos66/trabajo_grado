import FileType, { FileTypeAttr } from '../models/fileType.model'

export const getAll = async (): Promise<FileTypeAttr[]> => {
  return await FileType.findAll()
}

export const getById = async (fileTypeId: string): Promise<FileTypeAttr | null> => {
  return await FileType.findByPk(fileTypeId)
}

export const createFileType = async (newFileType: any): Promise<FileTypeAttr> => {
  return await FileType.create(newFileType)
}

export const deleteFileType = async (fileTypeId: string): Promise<number> => {
  return await FileType.destroy({
    where: {
      id: BigInt(fileTypeId)
    }
  })
}

export const updateFileType = async (idToUpdate: string, newFileType: any): Promise<[affectedCount: number]> => {
  return await FileType.update(newFileType,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
