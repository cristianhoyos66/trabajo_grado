import IdType, { IdTypeAttr } from '../models/idType.model'

export const getAll = async (): Promise<IdTypeAttr[]> => {
  return await IdType.findAll()
}

export const getById = async (idTypeId: string): Promise<IdTypeAttr | null> => {
  return await IdType.findByPk(idTypeId)
}

export const createIdType = async (newIdType: any): Promise<IdTypeAttr> => {
  return await IdType.create(newIdType)
}

export const deleteIdType = async (idTypeId: string): Promise<number> => {
  return await IdType.destroy({
    where: {
      id: BigInt(idTypeId)
    }
  })
}

export const updateIdType = async (idToUpdate: string, newIdType: any): Promise<[affectedCount: number]> => {
  return await IdType.update(newIdType,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
