import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import AttentionPlace from './models/attentionPlace.model'
import Area from './models/area.model'
import Origin from './models/origin.model'
import SubjectMatter from './models/subjectMatters.model'
import Capacity from './models/capacity.model'
import LegalOfficerOption from './models/legalOfficerOption.model'
import AttentionResult from './models/attentionResult.model'
import EfficacyOption from './models/efficacyOption.model'
import AudienceResult from './models/audienceResult.model'
import CaseStatus from './models/caseStatus.model'
import GraphicSupportOption from './models/graphicSupportOptions.model'
import IdType from './models/idType.model'
import FileType from './models/fileType.model'
import Person from './models/person.model'
import Case from './models/case.model'

dotenv.config()
export const sequelize = new Sequelize({
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.database,
  dialect: 'mariadb'
})

export const initModels = (): void => {
  sequelize.addModels([
    AttentionPlace,
    Area,
    Origin,
    SubjectMatter,
    Capacity,
    LegalOfficerOption,
    AttentionResult,
    EfficacyOption,
    AudienceResult,
    CaseStatus,
    GraphicSupportOption,
    IdType,
    FileType,
    Person,
    Case
  ])
}
