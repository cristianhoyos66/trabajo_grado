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
import advisorAssignedCasesRoute from './routes/advisorAssignedCases.route'
import advisorStudentPeopleRoute from './routes/advisorStudentPeople.route'
import receivedCasesRoute from './routes/receivedCases.route'
import studentAssignedCasesRoute from './routes/studentAssignedCases.route'
import studentPeopleRoute from './routes/studentPeople.route'
import usersRoute from './routes/users.route'
import loginRoute from './routes/login.route'
import menuOptionsRoute from './routes/menuOptions.route'
import peopleToStudentRoute from './routes/peopleToStudent.route'
import * as dotenv from 'dotenv'

import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import path from 'path'
import * as authMiddleware from './middlewares/auth.middleware'

import { initModels, sequelize, createFirstUser } from './database'
import advisorPeopleRoute from './routes/advisorPeople.route'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors<Request>({
  credentials: true,
  // origin: 'http://localhost:3000'
  origin: 'https://seashell-app-coja7.ondigitalocean.app'
}))
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(authMiddleware.authValidation)

const PORT = process.env.PORT || 8000

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
app.use('/api/received-cases', receivedCasesRoute)
app.use('/api/advisor-assigned-cases', advisorAssignedCasesRoute)
app.use('/api/student-assigned-cases', studentAssignedCasesRoute)
app.use('/api/student-people', studentPeopleRoute)
app.use('/api/advisor-people', advisorPeopleRoute)
app.use('/api/advisor-student-people', advisorStudentPeopleRoute)
app.use('/api/people-to-students', peopleToStudentRoute)
app.use('/api/users', usersRoute)
app.use('/api', loginRoute)
app.use('/api/menu-options', menuOptionsRoute)

app.get('/ping', (_req, res) => {
  console.log(`someone pinged here!! ${new Date().toLocaleDateString}`)
  res.send('pong')
})
initModels()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  sequelize.authenticate().then(async () => {
    console.log('database connected')
    await createFirstUser()
    /* try {
      await sequelize.sync({ force: true })
    } catch (error: any) {
      console.log(error.message)
    } */
  }).catch((e: any) => {
    console.log(e.message)
  })
})
