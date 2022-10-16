import express from 'express'
import * as caseService from '../services/case.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await caseService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:caseId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await caseService.getById(req.params.caseId)
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
    const response = await caseService.createCase(req.body, res.locals.personId)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:caseId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await caseService.updateCase(req.params.caseId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:caseId', asyncHandler(async (req, res, next) => {
  try {
    await caseService.deleteCase(req.params.caseId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
