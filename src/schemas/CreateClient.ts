import Joi from 'joi';

const bodySchema = Joi.object({
  client_code: Joi.string().required(),
  name: Joi.string().required(),
  birthday: Joi.string().required(),
});

export default bodySchema;
