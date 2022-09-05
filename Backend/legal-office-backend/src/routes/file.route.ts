import express from 'express'
import asyncHandler from 'express-async-handler'
import path from 'path'

const router = express.Router()

router.post('/', asyncHandler(async (req, res, next) => {
  try {
    const newpath = path.join(__dirname, '../public/files/')
    if (req.files !== undefined || req.files !== null) {
      const file = req.files?.file
      if (Array.isArray(file)) {
        res.status(400).send('Just one file is allowed')
      } else {
        const filename: string = file !== undefined ? file.name : ''
        file?.mv(`${newpath}${filename}`, (err: string) => {
          if (err !== undefined) {
            res.status(500).send(`File upload failed ${err}`)
          }
          res.status(200).send('File Uploaded')
        })
      }
    } else {
      res.status(400).send('File needs to be sent as part of the request')
    }
  } catch (error) {
    next(error)
  }
}))

export default router
