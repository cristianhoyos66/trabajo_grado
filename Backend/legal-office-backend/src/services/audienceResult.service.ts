import AudienceResult, { AudienceResultAttr } from '../models/audienceResult.model'

export const getAll = async (): Promise<AudienceResultAttr[]> => {
  const audienceResults: AudienceResultAttr[] = await AudienceResult.findAll()
  return audienceResults
}

export const getById = async (audienceResultId: string): Promise<AudienceResultAttr | null> => {
  return await AudienceResult.findByPk(audienceResultId)
}

export const createAudienceResult = async (newAudienceResult: any): Promise<AudienceResultAttr> => {
  return await AudienceResult.create(newAudienceResult)
}

export const deleteAudienceResult = async (audienceResultId: string): Promise<number> => {
  return await AudienceResult.destroy({
    where: {
      id: BigInt(audienceResultId)
    }
  })
}

export const updateAudienceResult = async (idToUpdate: string, newAudienceResult: any): Promise<[affectedCount: number]> => {
  return await AudienceResult.update(newAudienceResult,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
