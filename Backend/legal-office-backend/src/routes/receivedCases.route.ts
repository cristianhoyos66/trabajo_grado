import express from 'express'
import asyncHandler from 'express-async-handler'
import * as receivedCasesService from '../services/receivedCases.service'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await receivedCasesService.getAll(res.locals.personId)
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
