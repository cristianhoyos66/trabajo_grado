import express from 'express'
import * as personService from '../services/person.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await personService.getAll()
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

router.get('/:personId', asyncHandler(async (req, res, next): Promise<any> => {
  try {
    const response = await personService.getById(req.params.personId)
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
    const response = await personService.createPerson(req.body, res.locals.personId)
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
}))

router.put('/:personId', asyncHandler(async (req, res, next) => {
  try {
    res.send(await personService.updatePerson(req.params.personId, req.body))
  } catch (error) {
    next(error)
  }
}))

router.delete('/:personId', asyncHandler(async (req, res, next) => {
  try {
    await personService.deletePerson(req.params.personId)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}))

export default router
