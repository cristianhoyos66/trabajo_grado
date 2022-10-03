import User, { UserAttr } from '../models/user.model'
import bcrypt from 'bcrypt'
import ExistingUser from '../exceptions/existingUser.exception'
import BadRequest from '../exceptions/badRequest.exception'

export const getAll = async (): Promise<UserAttr[]> => {
  const users: UserAttr[] = await User.findAll({
    include: {
      all: true
    },
    attributes: {
      exclude: ['pwd']
    }
  })
  return users
}

export const getById = async (userId: string): Promise<UserAttr | null> => {
  return await User.findByPk(userId, {
    include: {
      all: true
    },
    attributes: {
      exclude: ['pwd']
    }
  })
}

export const createUser = async (newUser: any): Promise<UserAttr> => {
  if (await User.findOne({
    where: {
      username: newUser.username
    }
  }) !== null) {
    throw new ExistingUser('Username Already Exists')
  }
  if (await User.findOne({
    where: {
      personId: newUser.personId
    }
  }) !== null) {
    throw new ExistingUser('The person is already assigned to a specific user')
  }
  const hash = await bcrypt.hash(newUser.pwd, 10)
  newUser.pwd = hash
  return await User.create(newUser)
}

export const deleteUser = async (userId: string): Promise<number> => {
  return await User.destroy({
    where: {
      id: BigInt(userId)
    }
  })
}

export const updateUser = async (idToUpdate: string, newUser: any): Promise<[affectedCount: number]> => {
  if (newUser.personId !== undefined && newUser.personId !== null) {
    throw new BadRequest('personId cannot be updated')
  }
  if (newUser.pwd !== undefined && newUser.personId !== null) {
    const hash = await bcrypt.hash(newUser.pwd, 10)
    newUser.pwd = hash
  }
  return await User.update(newUser,
    {
      where: {
        id: BigInt(idToUpdate)
      }
    }
  )
}
