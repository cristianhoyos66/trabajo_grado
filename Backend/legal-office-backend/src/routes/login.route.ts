import express from 'express'
import * as loginService from '../services/login.service'
import asyncHandler from 'express-async-handler'
import InvalidCredentials from '../exceptions/invalidCredentials.exception'
import { LoginResponse } from '../types'

const router = express.Router()

router.post('/login', asyncHandler(async (req, res, next) => {
  try {
    const response: LoginResponse = await loginService.login(req.body.username, req.body.pwd)
    res.cookie('jwt', response.refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      // sameSite: 'lax', local
      maxAge: 1800000,
      path: '/api/refresh',
      domain: 'consultorio-juridico.herokuapp.com', // no va si es local
      secure: true // no va si es local
    })
    res.send({ accessToken: response.accessToken })
  } catch (error) {
    if (error instanceof InvalidCredentials) {
      res.status(409).json({
        error: error.message
      })
    } else {
      next(error)
    }
  }
}))

router.post('/refresh', asyncHandler(async (req, res, next) => {
  try {
    const response: LoginResponse = await loginService.refresh(req.cookies.jwt)
    res.cookie('jwt', response.refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      maxAge: 1800000,
      path: '/api/refresh',
      domain: 'consultorio-juridico.herokuapp.com',
      secure: true
    })
    res.send({ accessToken: response.accessToken })
  } catch (error) {
    if (error instanceof InvalidCredentials) {
      res.status(406).json({
        error: error.message
      })
    } else {
      next(error)
    }
  }
}))

export default router
