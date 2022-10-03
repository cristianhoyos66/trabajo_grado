import Case, { CaseAttr } from '../models/case.model'

export const getAll = async (): Promise<CaseAttr[]> => {
  const cases: CaseAttr[] = await Case.findAll({
    include: {
      all: true
    },
    where: {
      studentRecepcionistId: 1
    }
  })
  return cases
}
