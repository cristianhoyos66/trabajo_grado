import SubjectMatter, { SubjectMatterAttr } from '../models/subjectMatters.model'

export const getAll = async (): Promise<SubjectMatterAttr[]> => {
  const subjectMatters: SubjectMatterAttr[] = await SubjectMatter.findAll()
  return subjectMatters
}

export const getById = async (subjectMatterId: string): Promise<SubjectMatterAttr | null> => {
  return await SubjectMatter.findByPk(subjectMatterId)
}

export const createSubjectMatter = async (newSubjectMatter: any): Promise<SubjectMatterAttr> => {
  return await SubjectMatter.create(newSubjectMatter)
}

export const deleteSubjectMatter = async (subjectMatterId: string): Promise<number> => {
  return await SubjectMatter.destroy({
    where: {
      id: BigInt(subjectMatterId)
    }
  })
}

export const updateSubjectMatter = async (idToUpdate: string, newSubjectMatter: any): Promise<[affectedCount: number]> => {
  return await SubjectMatter.update(newSubjectMatter,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
