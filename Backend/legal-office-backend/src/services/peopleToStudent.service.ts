import IdType from '../models/idType.model'
import Person, { PersonAttr } from '../models/person.model'
import User from '../models/user.model'

export const getAll = async (personId: bigint): Promise<PersonAttr[]> => {
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
      },
      {
        model: Person
      }
    ],
    where: {
      studentIdToShow: personId
    }
  })
}
