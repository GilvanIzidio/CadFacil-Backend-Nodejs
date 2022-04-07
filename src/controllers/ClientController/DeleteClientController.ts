import { Request, Response } from 'express';
import DeleteClientService from '../../services/ClientService/DeleteClientService';

export default class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteClientService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
