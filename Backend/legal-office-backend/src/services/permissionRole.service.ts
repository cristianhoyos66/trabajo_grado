import PermissionRole, { PermissionRoleAttr } from '../models/permissionRole.model'
import { UserAttr } from '../models/user.model'
import * as userService from '../services/user.service'

const actions: { [key: string]: string } = {
  post: 'create',
  put: 'update',
  delete: 'delete',
  get: 'getAll',
  getById: 'getById'
}

async function getByRoleId (roleId: bigint | undefined): Promise<PermissionRoleAttr[]> {
  const cases: PermissionRoleAttr[] = await PermissionRole.findAll({
    include: {
      all: true
    },
    attributes: {
      exclude: ['roleId', 'permissionId', 'createdAt', 'updatedAt']
    },
    where: {
      roleId: roleId
    }
  })
  return cases
}

async function getPermissions (userId: bigint): Promise<PermissionRoleAttr[]> {
  const userPromise: Promise<UserAttr | null> = userService.getById(String(userId))
  const user = await userPromise
  return await getByRoleId(user?.roleId)
}

function getAction (method: string, resource: string): string {
  if (method !== 'get') {
    return actions[method]
  } else if (resource.includes('/')) {
    return actions.getById
  } else {
    return actions.get
  }
}

function hasPermissions (permissions: PermissionRoleAttr[], action: string, resource: string): Boolean {
  return permissions
    .find((permissionRole: PermissionRoleAttr) =>
      permissionRole.permission.resource === resource &&
    permissionRole.permission.action === action) !== undefined
}

export const checkPermissions = async (userId: bigint, httpMethod: string, resource: string): Promise<Boolean> => {
  return hasPermissions(await getPermissions(userId), getAction(httpMethod.toLowerCase(), resource), resource.split('/')[0])
}
