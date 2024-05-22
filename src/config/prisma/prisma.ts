import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

// Carrega variáveis de ambiente do arquivo .env
dotenv.config()

// Instancia o Prisma Client
const prisma = new PrismaClient()

// Exporta a instância do Prisma Client para ser usada em outros módulos
export default prisma
