import express from 'express'
import * as attentionResultService from '../services/attentionResult.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await attentionResultService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:attentionResultId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await attentionResultService.getById(req.params.attentionResultId)
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
    const response = await attentionResultService.createAttentionResult(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:attentionResultId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await attentionResultService.updateAttentionResult(req.params.attentionResultId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:attentionResultId', asyncHandler(async (req, res, next) => {
  try {
    await attentionResultService.deleteAttentionResult(req.params.attentionResultId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
