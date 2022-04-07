import { getRepository } from 'typeorm';
import Client from '../../entities/Client';

type ClientUpdateRequest = {
  id: string;
  name: string;
  client_code: string;
  birthday: string;
};

export default class UpdateClientService {
  async execute({ id, name, birthday, client_code }: ClientUpdateRequest) {
    const repo = getRepository(Client);

    const client = await repo.findOne(id);

    if (!client) {
      return new Error('Cliente não existe na base de dados!');
    }

    client.name = name || client.name;
    client.client_code = client_code || client.client_code;
    client.birthday = birthday || client.birthday;

    await repo.save(client);

    return client;
  }
}
