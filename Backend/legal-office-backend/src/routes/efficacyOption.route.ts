import express from 'express'
import * as efficacyOptionService from '../services/efficacyOption.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await efficacyOptionService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:efficacyOptionId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await efficacyOptionService.getById(req.params.efficacyOptionId)
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
    const response = await efficacyOptionService.createEfficacyOption(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:efficacyOptionId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await efficacyOptionService.updateEfficacyOption(req.params.efficacyOptionId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:efficacyOptionId', asyncHandler(async (req, res, next) => {
  try {
    await efficacyOptionService.deleteEfficacyOption(req.params.efficacyOptionId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
