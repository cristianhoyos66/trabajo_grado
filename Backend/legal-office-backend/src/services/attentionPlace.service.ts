import AttentionPlace, { AttentionPlaceAttr } from '../models/attentionPlace.model'

export const getAll = async (): Promise<AttentionPlaceAttr[]> => {
  const attentionPlaces: AttentionPlaceAttr[] = await AttentionPlace.findAll()
  return attentionPlaces
}

export const getById = async (attentionPlaceId: string): Promise<AttentionPlaceAttr | null> => {
  return await AttentionPlace.findByPk(attentionPlaceId)
}

export const createAttentionPlace = async (newAttentionPlace: any): Promise<AttentionPlaceAttr> => {
  return await AttentionPlace.create(newAttentionPlace)
}

export const deleteAttentionPlace = async (attentionPlaceId: string): Promise<number> => {
  return await AttentionPlace.destroy({
    where: {
      id: BigInt(attentionPlaceId)
    }
  })
}

export const updateAttentionPlace = async (idToUpdate: string, newAttentionPlace: any): Promise<[affectedCount: number]> => {
  return await AttentionPlace.update(newAttentionPlace,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
