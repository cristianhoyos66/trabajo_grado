import express from 'express'
import * as userService from '../services/user.service'
import asyncHandler from 'express-async-handler'
import ExistingUser from '../exceptions/existingUser.exception'
import BadRequest from '../exceptions/badRequest.exception'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await userService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:userId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await userService.getById(req.params.userId)
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
    const response = await userService.createUser(req.body)
    res.status(201).send(response)
  } catch (error) {
    if (error instanceof ExistingUser) {
      res.status(409).json({
        error: error.message
      })
    } else {
      next(error)
    }
  }
}))

router.put('/:userId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await userService.updateUser(req.params.userId, req.body))
  } catch (error) {
    if (error instanceof BadRequest) {
      res.status(400).json({
        error: error.message
      })
    } else {
      next(error)
    }
  }
}))

router.delete('/:userId', asyncHandler(async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.userId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
