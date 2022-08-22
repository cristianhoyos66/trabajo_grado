import GraphicSupportOption, { GraphicSupportOptionAttr } from '../models/graphicSupportOptions.model'

export const getAll = async (): Promise<GraphicSupportOptionAttr[]> => {
  return await GraphicSupportOption.findAll()
}

export const getById = async (graphicSupportOptionId: string): Promise<GraphicSupportOptionAttr | null> => {
  return await GraphicSupportOption.findByPk(graphicSupportOptionId)
}

export const createGraphicSupportOption = async (newGraphicSupportOption: any): Promise<GraphicSupportOptionAttr> => {
  return await GraphicSupportOption.create(newGraphicSupportOption)
}

export const deleteGraphicSupportOption = async (graphicSupportOptionId: string): Promise<number> => {
  return await GraphicSupportOption.destroy({
    where: {
      id: BigInt(graphicSupportOptionId)
    }
  })
}

export const updateGraphicSupportOption = async (idToUpdate: string, newGraphicSupportOption: any): Promise<[affectedCount: number]> => {
  return await GraphicSupportOption.update(newGraphicSupportOption,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
