import Case, { CaseAttr } from '../models/case.model'

export const getAll = async (personId: bigint): Promise<CaseAttr[]> => {
  const cases: CaseAttr[] = await Case.findAll({
    include: {
      all: true
    },
    where: {
      studentAssigneeId: personId
    }
  })
  return cases
}
