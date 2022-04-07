import { getRepository } from 'typeorm';
import Client from '../../entities/Client';

type ClientRequest = {
  client_code: string;
  name: string;
  birthday: string;
};

export default class CreateClientService {
  async execute({ name, birthday, client_code }: ClientRequest): Promise<Client | Error> {
    const repo = getRepository(Client);

    if (await repo.findOne({ client_code })) {
      return new Error('Código do cliente já está sendo utilizado!');
    }

    const client = repo.create({
      name,
      birthday,
      client_code,
    });

    await repo.save(client);

    return client;
  }
}
