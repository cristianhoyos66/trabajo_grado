import Origin, { OriginAttr } from '../models/origin.model'

export const getAll = async (): Promise<OriginAttr[]> => {
  const origins: OriginAttr[] = await Origin.findAll()
  return origins
}

export const getById = async (originId: string): Promise<OriginAttr | null> => {
  return await Origin.findByPk(originId)
}

export const createOrigin = async (newOrigin: any): Promise<OriginAttr> => {
  return await Origin.create(newOrigin)
}

export const deleteOrigin = async (originId: string): Promise<number> => {
  return await Origin.destroy({
    where: {
      id: BigInt(originId)
    }
  })
}

export const updateOrigin = async (idToUpdate: string, newOrigin: any): Promise<[affectedCount: number]> => {
  return await Origin.update(newOrigin,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
