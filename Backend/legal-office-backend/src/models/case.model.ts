import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript'
import Person from './person.model'
import Area from './area.model'
import SubjectMatter from './subjectMatters.model'
import Origin from './origin.model'
import Capacity from './capacity.model'
import AttentionPlace from './attentionPlace.model'
import AttentionResult from './attentionResult.model'
import AudienceResult from './audienceResult.model'
import CaseStatus from './caseStatus.model'
import GraphicSupportOption from './graphicSupportOptions.model'
import LegalOfficerOption from './legalOfficerOption.model'
import File from './file.model'

export interface CaseAttr {
  id: bigint
  socioeconomicLevel: string
  year: string
  internalNumber: string
  attentionConsultantDate: Date
  receptionDate: Date
  plaintiffId: bigint
  plaintiff: Person
  defendantId: bigint
  defendant: Person
  areaId: bigint
  area: Area
  matterId: bigint
  matter: SubjectMatter
  originId: bigint
  origin: Origin
  receivedCase: boolean
  studentRecepcionistId: bigint
  studentRecepcionist: Person
  studentRecepcionistCapacityId: bigint
  studentRecepcionistCapacity: Capacity
  attentionPlaceId: bigint
  attentionPlace: AttentionPlace
  studentAssigneeId: bigint
  studentAssignee: Person
  studentAssigneeCapacityId: bigint
  studentAssigneeCapacity: Capacity
  appointmentDateByUser: boolean
  individualParticipationId: bigint
  individualParticipation: LegalOfficerOption
  advisorId: bigint
  advisor: Person
  thirdPartyRepresentationId: bigint
  thirdPartyRepresentation: AttentionResult
  audienceDateTime: Date
  audienceResultId: bigint
  audienceResult: AudienceResult
  caseStatusId: bigint
  caseStatus: CaseStatus
  receiverStudentId: bigint
  receiverStudent: Person
  studentPeacefulCertificate: boolean
  graphicSupportId: bigint
  graphicSupport: GraphicSupportOption
  files: File[]
}

@Table({
  tableName: 'cases'
})
export default class Case extends Model implements CaseAttr {
  declare id: bigint

  @Column({ field: 'socioeconomic_level' })
  declare socioeconomicLevel: string

  @Column
  declare year: string

  @Column({ field: 'internal_number' })
  declare internalNumber: string

  @Column({ field: 'attention_consultant_date' })
  declare attentionConsultantDate: Date

  @Column({ field: 'reception_date' })
  declare receptionDate: Date

  @ForeignKey(() => Person)
  @Column({ field: 'plaintiff_id' })
  declare plaintiffId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'plaintiffId'
    }
  })
  declare plaintiff: Person

  @ForeignKey(() => Person)
  @Column({ field: 'defendant_id' })
  declare defendantId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'defendantId'
    }
  })
  declare defendant: Person

  @ForeignKey(() => Area)
  @Column({ field: 'area_id' })
  declare areaId: bigint

  @BelongsTo(() => Area)
  declare area: Area

  @ForeignKey(() => SubjectMatter)
  @Column({ field: 'matter_id' })
  declare matterId: bigint

  @BelongsTo(() => SubjectMatter)
  declare matter: SubjectMatter

  @ForeignKey(() => Origin)
  @Column({ field: 'origin_id' })
  declare originId: bigint

  @BelongsTo(() => Origin)
  declare origin: Origin

  @Column({ field: 'received_case' })
  declare receivedCase: boolean

  @ForeignKey(() => Person)
  @Column({ field: 'student_recepcionist_id' })
  declare studentRecepcionistId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'studentRecepcionistId'
    }
  })
  declare studentRecepcionist: Person

  @ForeignKey(() => Capacity)
  @Column({ field: 'student_recepcionist_capacity_id' })
  declare studentRecepcionistCapacityId: bigint

  @BelongsTo(() => Capacity, {
    foreignKey: {
      name: 'studentRecepcionistCapacityId'
    }
  })
  declare studentRecepcionistCapacity: Capacity

  @ForeignKey(() => AttentionPlace)
  @Column({ field: 'attention_place_id' })
  declare attentionPlaceId: bigint

  @BelongsTo(() => AttentionPlace)
  declare attentionPlace: AttentionPlace

  @ForeignKey(() => Person)
  @Column({ field: 'student_assignee_id' })
  declare studentAssigneeId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'studentAssigneeId'
    }
  })
  declare studentAssignee: Person

  @ForeignKey(() => Capacity)
  @Column({ field: 'student_assignee_capacity_id' })
  declare studentAssigneeCapacityId: bigint

  @BelongsTo(() => Capacity, {
    foreignKey: {
      name: 'studentAssigneeCapacityId'
    }
  })
  declare studentAssigneeCapacity: Capacity

  @Column({ field: 'appointment_date_by_user' })
  declare appointmentDateByUser: boolean

  @ForeignKey(() => LegalOfficerOption)
  @Column({ field: 'individual_participation_id' })
  declare individualParticipationId: bigint

  @BelongsTo(() => LegalOfficerOption)
  declare individualParticipation: LegalOfficerOption

  @ForeignKey(() => Person)
  @Column({ field: 'advisor_id' })
  declare advisorId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'advisorId'
    }
  })
  declare advisor: Person

  @ForeignKey(() => AttentionResult)
  @Column({ field: 'third_party_representation_id' })
  declare thirdPartyRepresentationId: bigint

  @BelongsTo(() => AttentionResult)
  declare thirdPartyRepresentation: AttentionResult

  @Column({ field: 'audience_date_time' })
  declare audienceDateTime: Date

  @ForeignKey(() => AudienceResult)
  @Column({ field: 'audience_result_id' })
  declare audienceResultId: bigint

  @BelongsTo(() => AudienceResult)
  declare audienceResult: AudienceResult

  @ForeignKey(() => CaseStatus)
  @Column({ field: 'case_status_id' })
  declare caseStatusId: bigint

  @BelongsTo(() => CaseStatus)
  declare caseStatus: CaseStatus

  @ForeignKey(() => Person)
  @Column({ field: 'receiver_student_id' })
  declare receiverStudentId: bigint

  @BelongsTo(() => Person, {
    foreignKey: {
      name: 'receiverStudentId'
    }
  })
  declare receiverStudent: Person

  @Column({ field: 'student_peaceful_certificate' })
  declare studentPeacefulCertificate: boolean

  @ForeignKey(() => GraphicSupportOption)
  @Column({ field: 'graphic_support_id' })
  declare graphicSupportId: bigint

  @BelongsTo(() => GraphicSupportOption)
  declare graphicSupport: GraphicSupportOption

  @HasMany(() => File)
  declare files: File[]

  @Column({ field: 'created_at' })
  declare createdAt: Date

  @Column({ field: 'updated_at' })
  declare updatedAt: Date
}
