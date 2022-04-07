import { Request, Response } from 'express';
import GetClientByIdService from '../../services/ClientService/GetClientByIdService';

export default class GetClientByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetClientByIdService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result).status(200);
  }
}
