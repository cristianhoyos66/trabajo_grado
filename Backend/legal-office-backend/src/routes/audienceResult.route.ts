import express from 'express'
import * as audienceResultService from '../services/audienceResult.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await audienceResultService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:audienceResultId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await audienceResultService.getById(req.params.audienceResultId)
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
    const response = await audienceResultService.createAudienceResult(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:audienceResultId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await audienceResultService.updateAudienceResult(req.params.audienceResultId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:audienceResultId', asyncHandler(async (req, res, next) => {
  try {
    await audienceResultService.deleteAudienceResult(req.params.audienceResultId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
