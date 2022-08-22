import express from 'express'
import * as capacityService from '../services/capacity.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await capacityService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:capacityId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await capacityService.getById(req.params.capacityId)
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
    const response = await capacityService.createCapacity(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:capacityId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await capacityService.updateCapacity(req.params.capacityId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:capacityId', asyncHandler(async (req, res, next) => {
  try {
    await capacityService.deleteCapacity(req.params.capacityId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
