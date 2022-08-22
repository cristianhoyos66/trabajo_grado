import IdType from '../models/idType.model'
import Person, { PersonAttr } from '../models/person.model'

export const getAll = async (): Promise<PersonAttr[]> => {
  return await Person.findAll({
    include: [{ model: IdType }]
  })
}

export const getById = async (personId: string): Promise<PersonAttr | null> => {
  return await Person.findByPk(personId, {
    include: [{ model: IdType }]
  })
}

export const createPerson = async (newPerson: any): Promise<PersonAttr> => {
  return await Person.create(newPerson)
}

export const deletePerson = async (personId: string): Promise<number> => {
  return await Person.destroy({
    where: {
      id: BigInt(personId)
    }
  })
}

export const updatePerson = async (idToUpdate: string, newPerson: any): Promise<[affectedCount: number]> => {
  return await Person.update(newPerson,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
