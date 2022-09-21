import express, { Request } from 'express'
import attentionPlacesRouter from './routes/attentionPlaces.route'
import areaRouter from './routes/area.routes'
import subjectMatterRoute from './routes/subjectMatter.route'
import originRoute from './routes/origin.route'
import capacityRoute from './routes/capacity.route'
import legalOfficerOptionRoute from './routes/legalOfficerOption.route'
import attentionResultRoute from './routes/attentionResult.route'
import efficacyOptionRoute from './routes/efficacyOption.route'
import audienceResultRoute from './routes/audienceResult.route'
import caseStatusRoute from './routes/caseStatus.route'
import graphicSupportOptionRoute from './routes/graphicSupportOption.route'
import idTypeRoute from './routes/idType.route'
import FileTypeRoute from './routes/fileType.route'
import PersonRoute from './routes/person.route'
import FileRoute from './routes/file.route'
import CaseRoute from './routes/case.route'
import cors from 'cors'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import path from 'path'

import { initModels, sequelize } from './database'

const app = express()
app.use(express.json())
app.use(cors<Request>())
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8000

app.use('/api/attention-places', attentionPlacesRouter)
app.use('/api/areas', areaRouter)
app.use('/api/subject-matters', subjectMatterRoute)
app.use('/api/origins', originRoute)
app.use('/api/capacities', capacityRoute)
app.use('/api/legal-officer-options', legalOfficerOptionRoute)
app.use('/api/attention-results', attentionResultRoute)
app.use('/api/efficacy-options', efficacyOptionRoute)
app.use('/api/case-statuses', caseStatusRoute)
app.use('/api/audience-results', audienceResultRoute)
app.use('/api/graphic-support-options', graphicSupportOptionRoute)
app.use('/api/id-types', idTypeRoute)
app.use('/api/file-types', FileTypeRoute)
app.use('/api/people', PersonRoute)
app.use('/api/files', FileRoute)
app.use('/api/cases', CaseRoute)

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
