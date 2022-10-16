import express from 'express'
import * as menuOptionsService from '../services/menuOptions.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await menuOptionsService.getAll(res.locals.userId)
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
