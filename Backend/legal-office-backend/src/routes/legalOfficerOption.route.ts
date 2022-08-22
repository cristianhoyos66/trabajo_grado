import express from 'express'
import * as legalOfficerOptionService from '../services/legalOfficerOption.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await legalOfficerOptionService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:legalOfficerOptionId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await legalOfficerOptionService.getById(req.params.legalOfficerOptionId)
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
    const response = await legalOfficerOptionService.createLegalOfficerOption(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:legalOfficerOptionId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await legalOfficerOptionService.updateLegalOfficerOption(req.params.legalOfficerOptionId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:legalOfficerOptionId', asyncHandler(async (req, res, next) => {
  try {
    await legalOfficerOptionService.deleteLegalOfficerOption(req.params.legalOfficerOptionId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
