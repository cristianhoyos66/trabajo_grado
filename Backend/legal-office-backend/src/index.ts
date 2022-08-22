import express from 'express'
import attentionPlacesRouter from './routes/attentionPlaces.route'
import areaRouter from './routes/area.routes'
import subjectMatterRoute from './routes/subjectMatter.route'
import { initModels, sequelize } from './database'

const app = express()
app.use(express.json())

const PORT = 8000

app.use('/api/attention-places', attentionPlacesRouter)
app.use('/api/areas', areaRouter)
app.use('/api/subject-matters', subjectMatterRoute)

app.get('/ping', (_req, res) => {
  console.log(`someone pinged here!! ${new Date().toLocaleDateString}`)
  res.send('pong')
})
initModels()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  sequelize.authenticate().then(async () => {
    console.log('database connected')
    /* try {
      await sequelize.sync({ force: true })
    } catch (error: any) {
      console.log(error.message)
    } */
  }).catch((e: any) => {
    console.log(e.message)
  })
})
