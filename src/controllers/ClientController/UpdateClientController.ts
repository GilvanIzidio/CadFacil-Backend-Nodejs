import { Request, Response } from 'express';
import UpdateClientService from '../../services/ClientService/UpdateClientService';

export default class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, client_code, birthday } = request.body;

    const service = new UpdateClientService();

    const result = await service.execute({ id, name, client_code, birthday });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result).status(200);
  }
}
