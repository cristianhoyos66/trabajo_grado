import express from 'express'
import * as idTypeService from '../services/idType.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await idTypeService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:idTypeId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await idTypeService.getById(req.params.idTypeId)
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
    const response = await idTypeService.createIdType(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:idTypeId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await idTypeService.updateIdType(req.params.idTypeId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:idTypeId', asyncHandler(async (req, res, next) => {
  try {
    await idTypeService.deleteIdType(req.params.idTypeId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
