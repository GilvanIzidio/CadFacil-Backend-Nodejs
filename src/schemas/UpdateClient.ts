import Joi from 'joi';

const bodySchema = Joi.object({
  client_code: Joi.string().optional(),
  name: Joi.string().optional(),
  birthday: Joi.string().optional(),
});

export default bodySchema;
