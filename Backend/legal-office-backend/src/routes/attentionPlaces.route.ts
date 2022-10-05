import express from 'express'
import * as attentionPlaceService from '../services/attentionPlace.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  console.log('blah blah', JSON.stringify(res.locals.permissions))
  try {
    const response = await attentionPlaceService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:attentionPlaceId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await attentionPlaceService.getById(req.params.attentionPlaceId)
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
    const response = await attentionPlaceService.createAttentionPlace(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:attentionPlaceId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await attentionPlaceService.updateAttentionPlace(req.params.attentionPlaceId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:attentionPlaceId', asyncHandler(async (req, res, next) => {
  try {
    await attentionPlaceService.deleteAttentionPlace(req.params.attentionPlaceId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
