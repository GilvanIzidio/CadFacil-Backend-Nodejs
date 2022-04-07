import { getRepository } from 'typeorm';
import Client from '../../entities/Client';

export default class GetClientByIdService {
  async execute(id: string): Promise<Client | Error> {
    const repo = getRepository(Client);

    const client = await repo.findOne(id);

    if (!client) {
      return new Error('Cliente não existe na base de dados!');
    }

    return client;
  }
}
