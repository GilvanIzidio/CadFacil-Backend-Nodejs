import { Request, Response } from 'express';
import UpdateClientPhotoService from '../../services/ClientService/UpdateClientPhotoService';

export default class UpdatePhotoClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!request.file || !id) {
      return response.json('Dados incompletos');
    }

    const service = new UpdateClientPhotoService();
    const client = await service.execute({ ClientId: id, fileName: request.file.filename });

    if (client instanceof Error) {
      return response.status(400).json(client.message);
    }

    return response.json(client);
  }
}
