import express from 'express'
import * as originService from '../services/origin.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await originService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:originId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await originService.getById(req.params.originId)
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
    const response = await originService.createOrigin(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:originId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await originService.updateOrigin(req.params.originId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:originId', asyncHandler(async (req, res, next) => {
  try {
    await originService.deleteOrigin(req.params.originId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
