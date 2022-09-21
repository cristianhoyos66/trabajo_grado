import express from 'express'
import asyncHandler from 'express-async-handler'
import * as fileService from '../services/file.service'
import path from 'path'
import { FileAttr } from '../models/file.model'

const router = express.Router()

async function saveFile (file: any, newpath: string, req: any): Promise<FileAttr> {
  let filename: string = file !== undefined ? file.name : ''
  filename = `${new Date().getTime()}_${Math.random()}_${filename}`
  file?.mv(`${newpath}${filename}`)
  return await fileService.createFile({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    url: `${req.protocol}://${req.get('host')}/files/${filename}`,
    caseId: req.body.caseId,
    fileTypeId: req.body.fileTypeId
  })
}

router.post('/', asyncHandler(async (req, res, next) => {
  try {
    const newpath = path.join(__dirname, '../public/files/')
    const files = req.files
    if (files !== undefined || files !== null) {
      for (const property in files) {
        const file = files[property]
        await saveFile(file, newpath, req)
      }
      res.status(200).send('File Uploaded')
    } else {
      res.status(400).send('File needs to be sent as part of the request')
    }
  } catch (error) {
    next(error)
  }
}))

router.post('/db', asyncHandler(async (req, res, next) => {
  try {
    const response = await fileService.createFile(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await fileService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:fileId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await fileService.getById(req.params.fileId)
    if (response != null) {
      res.send(response)
    } else {
      res.status(204).send()
    }
  } catch (error) {
    next(error)
  }
}))

router.put('/:fileId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await fileService.updateFile(req.params.fileId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:fileId', asyncHandler(async (req, res, next) => {
  try {
    await fileService.deleteFile(req.params.fileId, req.query.fileName)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
