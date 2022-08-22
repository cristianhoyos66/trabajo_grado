import Area, { AreaAttr } from '../models/area.model'

export const getAll = async (): Promise<AreaAttr[]> => {
  const areas: AreaAttr[] = await Area.findAll()
  return areas
}

export const getById = async (areaId: string): Promise<AreaAttr | null> => {
  return await Area.findByPk(areaId)
}

export const createArea = async (newArea: any): Promise<AreaAttr> => {
  return await Area.create(newArea)
}

export const deleteArea = async (areaId: string): Promise<number> => {
  return await Area.destroy({
    where: {
      id: BigInt(areaId)
    }
  })
}

export const updateArea = async (idToUpdate: string, newArea: any): Promise<[affectedCount: number]> => {
  return await Area.update(newArea,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
