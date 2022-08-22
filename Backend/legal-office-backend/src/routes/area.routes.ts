import express from 'express'
import * as areaService from '../services/area.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await areaService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:areaId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await areaService.getById(req.params.areaId)
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
    const response = await areaService.createArea(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:areaId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await areaService.updateArea(req.params.areaId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:areaId', asyncHandler(async (req, res, next) => {
  try {
    await areaService.deleteArea(req.params.areaId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
