import File, { FileAttr } from '../models/file.model'
import * as dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

async function deleteFileFromBucket (url: any): Promise<void> {
  const bucketFileUrl = `https://app.simplefileupload.com/api/v1/file?url=${url}`
  const basicAuth: {
    username: string | any
    password: string | any
  } = {
    username: process.env.simple_file_public,
    password: process.env.simple_file_secret
  }
  await axios.delete(bucketFileUrl, {
    withCredentials: true,
    auth: basicAuth
  })
}

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

export const deleteFile = async (fileId: string, url: any): Promise<number> => {
  // fs.unlinkSync(path.join(__dirname, '../public/files/', fileName))
  await deleteFileFromBucket(url)
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
