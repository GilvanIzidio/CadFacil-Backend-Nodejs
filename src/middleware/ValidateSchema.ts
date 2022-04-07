import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

type Params = 'body' | 'query' | 'params';

const Validate =
  (schema: Joi.ObjectPropertiesSchema, params: Params) =>
  (request: Request, response: Response, next: NextFunction) => {
    const { error, value } = schema.validate(request[params], {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    });
    if (error) {
      response.status(422).json({
        message: 'Validation Error',
        errors: error.details,
      });
    } else {
      request[params] = value;
      next();
    }
  };

export default Validate;
