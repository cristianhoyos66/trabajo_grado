import Case, { CaseAttr } from '../models/case.model'
import Person from '../models/person.model'

export const getAll = async (userId: bigint): Promise<CaseAttr[]> => {
  const cases: CaseAttr[] = await Case.findAll({
    include: {
      model: Person,
      as: 'studentAssignee'
    },
    where: {
      advisorId: userId
    }
  })
  return cases
}
