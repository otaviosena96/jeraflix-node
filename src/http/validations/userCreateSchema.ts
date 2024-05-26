import Joi from 'joi'

export const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Nome deve ser um texto',
    'string.empty': 'Nome não pode estar vazio',
    'string.min': 'Nome deve ter pelo menos 3 caracteres',
    'string.max': 'Nome deve ter no máximo 30 caracteres',
    'any.required': 'Nome é um campo obrigatório',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email deve ser um texto',
    'string.empty': 'Email não pode estar vazio',
    'string.email': 'Email deve ser um email válido',
    'any.required': 'Email é um campo obrigatório',
  }),
  password: Joi.string().min(6).max(50).required().messages({
    'string.base': 'Senha deve ser um texto',
    'string.empty': 'Senha não pode estar vazia',
    'string.min': 'Senha deve ter pelo menos 6 caracteres',
    'string.max': 'Senha deve ter no máximo 50 caracteres',
    'any.required': 'Senha é um campo obrigatório',
  }),

  birth_date: Joi.date().iso().required().messages({
    'date.base': 'A data de nascimento deve ser uma data válida',
    'date.iso': 'A data de nascimento deve estar no formato ISO 8601',
    'any.required': 'A data de nascimento é um campo obrigatório',
  }),

  color: Joi.string()
    .pattern(/^#[0-9A-F]{6}$/i)
    .required()
    .messages({
      'string.base': 'A cor deve ser um texto',
      'string.empty': 'A cor não pode estar vazia',
      'string.pattern.base': 'A cor deve estar no formato hexadecimal',
      'any.required': 'A cor é um campo obrigatório',
    }),
})
