
import * as jwt from 'async-jsonwebtoken'
import { checkPermissions } from '../services/permissionRole.service'

async function validateToken (req: any, res: any, next: any): Promise<void> {
  if (req.headers.authorization !== undefined) {
    const token = (Boolean(req.headers.authorization)) && req.headers.authorization.split(' ')[1]
    const [decoded, err]: [decoded: any, err: any] = await jwt.verify(token, String(process.env.access_token_secret))
    if (err !== null) {
      res.status(401).send('Invalid Credentials')
    } else {
      if (await checkPermissions(decoded.userId, req.method, req.path.replace('/api/', '')) === true) {
        res.locals.personId = decoded.personId
        res.locals.userId = decoded.userId
        next()
      } else {
        res.status(403).send('User unauthorized to perform the action')
      }
    }
  } else {
    res.status(401).send('Invalid Credentials')
  }
}

export const authValidation = async (req: any, res: any, next: any): Promise<void> => {
  const whiteList = ['/api/login', '/api/refresh']
  if (!whiteList.includes(req.path)) {
    await validateToken(req, res, next)
  } else {
    next()
  }
}
