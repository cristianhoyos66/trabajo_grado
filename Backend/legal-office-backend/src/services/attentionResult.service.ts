import AttentionResult, { AttentionResultAttr } from '../models/attentionResult.model'

export const getAll = async (): Promise<AttentionResultAttr[]> => {
  const attentionResults: AttentionResultAttr[] = await AttentionResult.findAll()
  return attentionResults
}

export const getById = async (attentionResultId: string): Promise<AttentionResultAttr | null> => {
  return await AttentionResult.findByPk(attentionResultId)
}

export const createAttentionResult = async (newAttentionResult: any): Promise<AttentionResultAttr> => {
  return await AttentionResult.create(newAttentionResult)
}

export const deleteAttentionResult = async (attentionResultId: string): Promise<number> => {
  return await AttentionResult.destroy({
    where: {
      id: BigInt(attentionResultId)
    }
  })
}

export const updateAttentionResult = async (idToUpdate: string, newAttentionResult: any): Promise<[affectedCount: number]> => {
  return await AttentionResult.update(newAttentionResult,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
