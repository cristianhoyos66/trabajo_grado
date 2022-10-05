
import * as jwt from 'async-jsonwebtoken'
import { PermissionRoleAttr } from '../models/permissionRole.model'
import { UserAttr } from '../models/user.model'
import * as userService from '../services/user.service'
import * as permissionRoleService from '../services/permissionRole.service'

async function validateToken (req: any, res: any, next: any): Promise<void> {
  if (req.headers.authorization !== undefined) {
    const token = (Boolean(req.headers.authorization)) && req.headers.authorization.split(' ')[1]
    const [decoded, err]: [decoded: any, err: any] = await jwt.verify(token, String(process.env.access_token_secret))
    if (err !== null) {
      res.status(401).send('Invalid Credentials')
    } else {
      res.locals.permissions = await getPermissions(decoded.userId)
      next()
    }
  } else {
    res.status(401).send('Invalid Credentials')
  }
}

async function getPermissions (userId: bigint): Promise<PermissionRoleAttr[]> {
  const userPromise: Promise<UserAttr | null> = userService.getById(String(userId))
  const user = await userPromise
  return await permissionRoleService.getByRoleId(user?.roleId)
}

export const authValidation = async (req: any, res: any, next: any): Promise<void> => {
  const whiteList = ['/api/login', '/api/refresh']
  if (!whiteList.includes(req.path)) {
    await validateToken(req, res, next)
  } else {
    next()
  }
}
