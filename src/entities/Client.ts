import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('clients')
export default class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  client_code: string;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  photo: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
