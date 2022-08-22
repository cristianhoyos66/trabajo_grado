import LegalOfficerOption, { LegalOfficerOptionAttr } from '../models/legalOfficerOption.model'

export const getAll = async (): Promise<LegalOfficerOptionAttr[]> => {
  const legalOfficerOpts: LegalOfficerOptionAttr[] = await LegalOfficerOption.findAll()
  return legalOfficerOpts
}

export const getById = async (legalOfficerOptionId: string): Promise<LegalOfficerOptionAttr | null> => {
  return await LegalOfficerOption.findByPk(legalOfficerOptionId)
}

export const createLegalOfficerOption = async (newLegalOfficerOption: any): Promise<LegalOfficerOptionAttr> => {
  return await LegalOfficerOption.create(newLegalOfficerOption)
}

export const deleteLegalOfficerOption = async (legalOfficerOptionId: string): Promise<number> => {
  return await LegalOfficerOption.destroy({
    where: {
      id: BigInt(legalOfficerOptionId)
    }
  })
}

export const updateLegalOfficerOption = async (idToUpdate: string, newLegalOfficerOption: any): Promise<[affectedCount: number]> => {
  return await LegalOfficerOption.update(newLegalOfficerOption,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
