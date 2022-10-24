import Permission from '../models/permission.model'
import PermissionRole, { PermissionRoleAttr } from '../models/permissionRole.model'
import * as userService from '../services/user.service'

export const getAll = async (userId: bigint, url: any): Promise<PermissionRoleAttr[]> => {
  const user: any = await userService.getById(userId.toString())
  const whereClause: {'$permission.action$': any, roleId: bigint, '$permission.url$'?: string } = {
    '$permission.action$': null,
    roleId: user?.roleId
  }
  if (url !== undefined) {
    if (url.includes('Ver_caso') === true || url.includes('Casos_en_progreso') === true || url.includes('Casos_asesoramiento') === true) {
      url = url.split('/')[0]
    }
    whereClause['$permission.url$'] = url
  }
  const permissionRoles: PermissionRoleAttr[] = await PermissionRole.findAll({
    include: [
      {
        model: Permission,
        required: true,
        as: 'permission'
      }
    ],
    where: whereClause
  })
  return permissionRoles
}
