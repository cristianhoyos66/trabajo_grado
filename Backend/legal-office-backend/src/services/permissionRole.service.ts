import PermissionRole, { PermissionRoleAttr } from '../models/permissionRole.model'

export const getByRoleId = async (roleId: bigint | undefined): Promise<PermissionRoleAttr[]> => {
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
