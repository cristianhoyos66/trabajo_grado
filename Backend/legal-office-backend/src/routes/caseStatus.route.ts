import express from 'express'
import * as caseStatusService from '../services/caseStatus.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await caseStatusService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:caseStatusId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await caseStatusService.getById(req.params.caseStatusId)
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
    const response = await caseStatusService.createCaseStatus(req.body)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:caseStatusId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await caseStatusService.updateCaseStatus(req.params.caseStatusId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:caseStatusId', asyncHandler(async (req, res, next) => {
  try {
    await caseStatusService.deleteCaseStatus(req.params.caseStatusId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
