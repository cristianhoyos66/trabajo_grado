import express from 'express'
import asyncHandler from 'express-async-handler'
import * as studentAssignedCasesService from '../services/studentAssignedCases.service'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await studentAssignedCasesService.getAll(res.locals.personId)
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
