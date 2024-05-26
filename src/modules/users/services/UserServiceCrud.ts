import { container, inject, injectable } from 'tsyringe'
import { CreateUserDTO, LoginDto } from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IUser } from '../../../models/domain/entities'
import bcrypt from 'bcryptjs'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AppError } from '../../utils/error'
import { v4 } from 'uuid'
import ProfileServiceCrud from '../../profiles/services/ProfileServiceCrud'
@injectable()
export default class UserServiceCrud {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async create(data: CreateUserDTO): Promise<IUser> {
    data.uuid = v4()
    data.birth_date = new Date(data.birth_date)
    const userExisted = await this.userRepository.findByEmail(data.email)
    if (userExisted) {
      throw new AppError('Já existe um usuário com este e-mail cadastrado.')
    }
    const hashedPassword = await bcrypt.hash(data.password, 8)
    const color = data.color ? data.color : '#ffffff'
    delete data.color
    const userDataWithHashedPassword: CreateUserDTO = {
      ...data,
      password: hashedPassword,
    }
    const user = await this.userRepository.create(userDataWithHashedPassword)

    await container.resolve(ProfileServiceCrud).create({
      uuid: data.uuid ? data.uuid : v4(),
      name: data.name,
      color: color,
      user_id: user.id,
    })

    return user
  }

  public async login(data: LoginDto): Promise<{
    userId: number
    userName: string
    userUuid: string
    token: string
  }> {
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      throw new AppError(
        'Usuário ou senha incorreto. Verifique suas credenciais.',
      )
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password)

    if (!passwordMatch) {
      throw new AppError(
        'Usuário ou senha incorreto. Verifique suas credenciais.',
      )
    }

    if (!process.env.JWT_SECRET) {
      throw new AppError('A chave secreta JWT não está definida.')
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '12h',
    })

    return {
      userId: user.id,
      userName: user.name,
      userUuid: user.uuid,
      token: token,
    }
  }
}
