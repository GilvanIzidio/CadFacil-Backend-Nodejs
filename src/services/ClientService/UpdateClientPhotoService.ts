import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../../config/upload';
import Client from '../../entities/Client';

type UpdateClientPhotoRequest = {
  ClientId: string;
  fileName: string;
};

export default class UpdateClientPhotoService {
  async execute({ ClientId, fileName }: UpdateClientPhotoRequest): Promise<Client | Error> {
    const repo = getRepository(Client);

    const client = await repo.findOne(ClientId);

    if (!client) {
      return new Error('Cliente não existe na base de dados!');
    }

    if (client.photo) {
      const clientPhotoFilePath = path.join(uploadConfig.directory, client.photo);

      const clientPhotoFileExists = await fs.promises.stat(clientPhotoFilePath);

      if (clientPhotoFileExists) {
        await fs.promises.unlink(clientPhotoFilePath);
      }
    }
    console.log('arquivo', fileName);
    client.photo = fileName;

    await repo.save(client);

    return client;
  }
}
