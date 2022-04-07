import { getRepository } from 'typeorm';
import Client from '../../entities/Client';

export default class DeleteClientService {
  // eslint-disable-next-line consistent-return
  async execute(id: string): Promise<void | Error> {
    const repo = getRepository(Client);

    if (!(await repo.findOne(id))) {
      return new Error('Cliente não existe na base de dados!');
    }

    await repo.delete(id);
  }
}
