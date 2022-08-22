import express from 'express'
import * as fileTypeService from '../services/fileType.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await fileTypeService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:fileTypeId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await fileTypeService.getById(req.params.fileTypeId)
    if (response != null) {
      res.send(response)
    } else {
      res.status(204).send()
    }
  } catch (error) {
    next(error)
  }
}))

router.post('/', asyncHandler(async (req, res, next) => {
  try {
    const response = await fileTypeService.createFileType(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:fileTypeId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await fileTypeService.updateFileType(req.params.fileTypeId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:fileTypeId', asyncHandler(async (req, res, next) => {
  try {
    await fileTypeService.deleteFileType(req.params.fileTypeId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
