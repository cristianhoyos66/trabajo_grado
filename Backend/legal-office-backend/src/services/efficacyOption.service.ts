import EfficacyOption, { EfficacyOptionAttr } from '../models/efficacyOption.model'

export const getAll = async (): Promise<EfficacyOptionAttr[]> => {
  const capacities: EfficacyOptionAttr[] = await EfficacyOption.findAll()
  return capacities
}

export const getById = async (efficacyOptionId: string): Promise<EfficacyOptionAttr | null> => {
  return await EfficacyOption.findByPk(efficacyOptionId)
}

export const createEfficacyOption = async (newEfficacyOption: any): Promise<EfficacyOptionAttr> => {
  return await EfficacyOption.create(newEfficacyOption)
}

export const deleteEfficacyOption = async (efficacyOptionId: string): Promise<number> => {
  return await EfficacyOption.destroy({
    where: {
      id: BigInt(efficacyOptionId)
    }
  })
}

export const updateEfficacyOption = async (idToUpdate: string, newEfficacyOption: any): Promise<[affectedCount: number]> => {
  return await EfficacyOption.update(newEfficacyOption,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
