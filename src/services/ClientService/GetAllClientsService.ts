import { getRepository } from 'typeorm';
import Client from '../../entities/Client';

export default class GetAllClientsService {
  async execute(name: string): Promise<Client[]> {
    const repo = getRepository(Client);

    if (name) {
      const clients = await repo
        .createQueryBuilder('client')
        .where('client.name ilike :name', { name: `%${name}%` })
        .getMany();
      return clients;
    }

    const clients = await repo.find();

    return clients;
  }
}
