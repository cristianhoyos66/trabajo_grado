import User from '../models/user.model'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import InvalidCredentials from '../exceptions/invalidCredentials.exception'
import * as jwt from 'async-jsonwebtoken'
import { LoginResponse } from '../types'

dotenv.config()

async function createTokens (infoForToken: Object): Promise<LoginResponse> {
  const [accesToken] = await jwt.sign(infoForToken, String(process.env.access_token_secret), {
    expiresIn: '10m'
  })
  const [refreshToken] = await jwt.sign(infoForToken, String(process.env.refresh_token_secret), {
    expiresIn: '30m'
  })
  return {
    accessToken: accesToken,
    refreshToken: refreshToken
  }
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const user = await User.findOne({
    where: {
      username: username
    }
  })
  if (user?.pwd !== undefined) {
    if (!await bcrypt.compare(password, user.pwd)) {
      throw new InvalidCredentials('Invalid Credentials')
    } else {
      return await createTokens({ userId: user.id, personId: user.personId })
    }
  } else {
    throw new InvalidCredentials('Invalid Credentials')
  }
}

export const refresh = async (refreshToken: string): Promise<LoginResponse> => {
  if (refreshToken === undefined) {
    throw new InvalidCredentials('Token Cannot Be Null')
  } else {
    const [decoded, err]: [decoded: any, err: any] = await jwt.verify(refreshToken, String(process.env.refresh_token_secret))
    if (err !== null) {
      throw new InvalidCredentials(err)
    } else {
      return await createTokens({ userId: decoded.userId, personId: decoded.personId })
    }
  }
}
