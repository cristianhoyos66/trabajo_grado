import Person, { PersonAttr } from '../models/person.model'
import User from '../models/user.model'

export const getAll = async (): Promise<PersonAttr[]> => {
  return await Person.findAll({
    include: [
      {
        all: true
      },
      {
        model: User,
        attributes: {
          exclude: ['pwd']
        },
        required: true,
        as: 'user'
      }
    ],
    where: {
      '$user.role_id$': 2
    }
  })
}
