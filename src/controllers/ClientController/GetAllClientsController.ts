import { Request, Response } from 'express';
import GetAllClientsService from '../../services/ClientService/GetAllClientsService';

export default class GetAllClientsController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const service = new GetAllClientsService();

    const clients = await service.execute(name?.toString());

    return response.json(clients);
  }
}
