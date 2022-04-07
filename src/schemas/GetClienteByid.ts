import Joi from 'joi';

const paramsSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export default paramsSchema;
