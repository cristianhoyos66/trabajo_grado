import Capacity, { CapacityAttr } from '../models/capacity.model'

export const getAll = async (): Promise<CapacityAttr[]> => {
  const capacities: CapacityAttr[] = await Capacity.findAll()
  return capacities
}

export const getById = async (capacityId: string): Promise<CapacityAttr | null> => {
  return await Capacity.findByPk(capacityId)
}

export const createCapacity = async (newCapacity: any): Promise<CapacityAttr> => {
  return await Capacity.create(newCapacity)
}

export const deleteCapacity = async (capacityId: string): Promise<number> => {
  return await Capacity.destroy({
    where: {
      id: BigInt(capacityId)
    }
  })
}

export const updateCapacity = async (idToUpdate: string, newCapacity: any): Promise<[affectedCount: number]> => {
  return await Capacity.update(newCapacity,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
