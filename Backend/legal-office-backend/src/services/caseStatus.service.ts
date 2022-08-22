import CaseStatus, { CaseStatusAttr } from '../models/caseStatus.model'

export const getAll = async (): Promise<CaseStatusAttr[]> => {
  return await CaseStatus.findAll()
}

export const getById = async (caseStatusId: string): Promise<CaseStatusAttr | null> => {
  return await CaseStatus.findByPk(caseStatusId)
}

export const createCaseStatus = async (newCaseStatus: any): Promise<CaseStatusAttr> => {
  return await CaseStatus.create(newCaseStatus)
}

export const deleteCaseStatus = async (caseStatusId: string): Promise<number> => {
  return await CaseStatus.destroy({
    where: {
      id: BigInt(caseStatusId)
    }
  })
}

export const updateCaseStatus = async (idToUpdate: string, newCaseStatus: any): Promise<[affectedCount: number]> => {
  return await CaseStatus.update(newCaseStatus,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
