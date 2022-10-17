import IdType from '../models/idType.model'
import Person, { PersonAttr } from '../models/person.model'
import User from '../models/user.model'

export const getAll = async (): Promise<PersonAttr[]> => {
  return await Person.findAll({
    include: [
      {
        model: IdType
      },
      {
        model: User,
        attributes: {
          exclude: ['pwd']
        }
      }
    ]
  })
}

export const getById = async (personId: string): Promise<PersonAttr | null> => {
  return await Person.findByPk(personId, {
    include: [
      {
        model: IdType
      },
      {
        model: Person
      },
      {
        model: User,
        attributes: {
          exclude: ['pwd']
        }
      }
    ]
  })
}

export const createPerson = async (newPerson: any, personId: bigint): Promise<PersonAttr> => {
  newPerson.studentIdToShow = personId
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
