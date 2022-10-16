import Permission from '../models/permission.model'
import PermissionRole, { PermissionRoleAttr } from '../models/permissionRole.model'
import * as userService from '../services/user.service'

export const getAll = async (userId: bigint): Promise<PermissionRoleAttr[]> => {
  const user: any = await userService.getById(userId.toString())
  const areas: PermissionRoleAttr[] = await PermissionRole.findAll({
    include: [
      {
        model: Permission,
        required: true,
        as: 'permission'
      }
    ],
    where: {
      '$permission.action$': null,
      roleId: user?.roleId
    }
  })
  return areas
}
