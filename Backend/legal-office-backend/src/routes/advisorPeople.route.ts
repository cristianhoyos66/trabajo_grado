import express from 'express'
import * as advisorPeople from '../services/advisorPeople.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await advisorPeople.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
