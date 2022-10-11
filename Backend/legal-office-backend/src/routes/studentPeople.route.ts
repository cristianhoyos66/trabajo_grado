import express from 'express'
import * as studentPeople from '../services/studentPeople.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await studentPeople.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
