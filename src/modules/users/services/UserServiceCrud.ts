import { inject, injectable } from 'tsyringe'
import { CreateUserDTO, LoginDto } from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IUser } from '../../../models/domain/entities'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

@injectable()
export default class UserServiceCrud {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async create(data: CreateUserDTO): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(data.password, 8)
    const userDataWithHashedPassword: CreateUserDTO = {
      ...data,
      password: hashedPassword,
    }
    return this.userRepository.create(userDataWithHashedPassword)
  }

  public async login(
    data: LoginDto,
  ): Promise<{ userId: number; token: string }> {
    try {
      // Busca o usuário no banco de dados pelo e-mail
      const user = await this.userRepository.findByEmail(data.email)

      if (!user) {
        // Se o usuário não for encontrado, lança um erro de autenticação
        throw new Error('Usuário não encontrado. Verifique suas credenciais.')
      }

      // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
      const passwordMatch = await bcrypt.compare(data.password, user.password)

      if (!passwordMatch) {
        // Se as senhas não coincidirem, lança um erro de autenticação
        throw new Error('Senha incorreta. Verifique suas credenciais.')
      }

      // Gera um novo token de autenticação com o ID do usuário
      if (!process.env.JWT_SECRET) {
        throw new Error('A chave secreta JWT não está definida.')
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '12h',
      })
      const expiresAt = new Date(Date.now() + 12 * 60 * 60 * 1000) // 12 horas a partir de agora
      await this.userRepository.storeToken(user.id, token, expiresAt)
      // Retorna o token gerado
      return { userId: user.id, token: token }
    } catch (error) {
      // Lança um erro para o controlador tratar
      throw new Error('Erro ao autenticar usuário.')
    }
  }
}
