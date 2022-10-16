import Case, { CaseAttr } from '../models/case.model'

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
  return await Case.update(newCase,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
