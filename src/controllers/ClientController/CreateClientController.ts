import { Request, Response } from 'express';
import CreateClientService from '../../services/ClientService/CreateClientService';

export default class CreateClientController {
  async handle(request: Request, response: Response) {
    const { client_code, name, birthday } = request.body;

    const service = new CreateClientService();

    const result = await service.execute({ client_code, name, birthday });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
