import File, { FileAttr } from '../models/file.model'
import fs from 'fs'
import path from 'path'

export const getAll = async (): Promise<FileAttr[]> => {
  const files: FileAttr[] = await File.findAll({
    include: {
      all: true
    }
  })
  return files
}

export const getById = async (fileId: string): Promise<FileAttr | null> => {
  return await File.findByPk(fileId, {
    include: {
      all: true
    }
  })
}

export const createFile = async (newFile: any): Promise<FileAttr> => {
  return await File.create(newFile)
}

export const deleteFile = async (fileId: string, fileName: any): Promise<number> => {
  fs.unlinkSync(path.join(__dirname, '../public/files/', fileName))
  return await File.destroy({
    where: {
      id: BigInt(fileId)
    }
  })
}

export const updateFile = async (idToUpdate: string, newFile: any): Promise<[affectedCount: number]> => {
  return await File.update(newFile,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
