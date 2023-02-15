import { Injectable } from '@nestjs/common';

type User = {
  id: string;
  email: string;
  password: string;
};

@Injectable()
export class UserStore {
  users: User[];

  save(user: User) {
    this.users.push(user);
  }
  get(): User[] {
    return this.users;
  }
  getById(id: string): User {
    return this.users.find((user) => user.id == id);
  }
}
