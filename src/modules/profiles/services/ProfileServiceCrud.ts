import { container, inject, injectable } from 'tsyringe'
import { CreateProfileDTO } from '../../../models/domain/dtos'
import { IProfileRepository } from '../../../models/repositories/IProfileRepository'
import { v4 } from 'uuid'
import { IProfile } from '../../../models/domain/entities'

@injectable()
export default class ProfileServiceCrud {
  constructor(
    @inject('ProfileRepository')
    private profileRepository: IProfileRepository,
  ) {}

  public async create(data: CreateProfileDTO): Promise<IProfile> {
    const profileExist = await this.profileRepository.findByName(
      data.name,
      data.user_id,
    )
    if (profileExist) {
      throw new Error('Sua conta já possui um perfil com esse nome')
    }
    const profiles = await this.profileRepository.findByUserId(data.user_id)
    if (profiles && profiles.length >= 4) {
      throw new Error('Sua conta atingiu o limite de perfis')
    }
    data.uuid = v4()
    const user = await this.profileRepository.create(data)

    const profile = container.resolve(ProfileServiceCrud).create({
      uuid: data.uuid ? data.uuid : v4(),
      name: data.name,
      color: data.color,
      user_id: user.id,
    })

    return profile
  }
  public async findByUserId(user_id: number): Promise<any> {
    return this.profileRepository.findByUserId(user_id)
  }
}
