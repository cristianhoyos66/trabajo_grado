import Case, { CaseAttr } from '../models/case.model'
import * as personService from '../services/person.service'

async function changeStudentToShow (plaintiffId: bigint): Promise<void> {
  await personService.updatePerson(plaintiffId.toString(), {
    studentIdToShow: null
  })
}

export const getAll = async (): Promise<CaseAttr[]> => {
  const cases: CaseAttr[] = await Case.findAll({
    include: {
      all: true
    }
  })
  return cases
}

export const getById = async (caseId: string): Promise<CaseAttr | null> => {
  return await Case.findByPk(caseId, {
    include: {
      all: true
    }
  })
}

export const createCase = async (newCase: any, personId: bigint): Promise<CaseAttr> => {
  newCase.studentRecepcionistId = personId
  await changeStudentToShow(newCase.plaintiffId)
  return await Case.create(newCase)
}

export const deleteCase = async (caseId: string): Promise<number> => {
  return await Case.destroy({
    where: {
      id: BigInt(caseId)
    }
  })
}

export const updateCase = async (idToUpdate: string, newCase: any): Promise<[affectedCount: number]> => {
  await changeStudentToShow(newCase.plaintiffId)
  return await Case.update(newCase,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
