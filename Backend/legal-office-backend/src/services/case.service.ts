import Case, { CaseAttr } from '../models/case.model'
//
/* import Area from '../models/area.model'
import SubjectMatter from '../models/subjectMatters.model'
import Origin from '../models/origin.model'
import AttentionPlace from '../models/attentionPlace.model'
import AttentionResult from '../models/attentionResult.model'
import AudienceResult from '../models/audienceResult.model'
import Capacity from '../models/capacity.model'

import CaseStatus from '../models/caseStatus.model'
import GraphicSupportOption from '../models/graphicSupportOptions.model'
import LegalOfficerOption from '../models/legalOfficerOption.model' */

export const getAll = async (): Promise<CaseAttr[]> => {
  const areas: CaseAttr[] = await Case.findAll({
    include: {
      all: true
    }
  })
  return areas
}

export const getById = async (caseId: string): Promise<CaseAttr | null> => {
  return await Case.findByPk(caseId, {
    include: {
      all: true
    }
  })
}
