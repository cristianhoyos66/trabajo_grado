import Case, { CaseAttr } from '../models/case.model'

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

export const createCase = async (newCase: any): Promise<CaseAttr> => {
  return await Case.create(newCase)
}

export const deleteCase = async (areaId: string): Promise<number> => {
  return await Case.destroy({
    where: {
      id: BigInt(areaId)
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
