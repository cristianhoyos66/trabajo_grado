import express from 'express'
import * as graphicSupportOptionService from '../services/graphicSupportOption.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await graphicSupportOptionService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:graphicSupportOptionId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await graphicSupportOptionService.getById(req.params.graphicSupportOptionId)
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
    const response = await graphicSupportOptionService.createGraphicSupportOption(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:graphicSupportOptionId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await graphicSupportOptionService.updateGraphicSupportOption(req.params.graphicSupportOptionId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:graphicSupportOptionId', asyncHandler(async (req, res, next) => {
  try {
    await graphicSupportOptionService.deleteGraphicSupportOption(req.params.graphicSupportOptionId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
