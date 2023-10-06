import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // SERVER
  SERVER_PORT: Joi.number().required(),

  // DATABASE
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
});
