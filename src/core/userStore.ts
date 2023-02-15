import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  email: string;
  password: string;
};

@Injectable()
export class UserStore {
  users: User[] = [];

  save(user: User): User {
    this.users.push(user);
    return user;
  }

  get(): User[] {
    return this.users;
  }
  getById(id: string): User {
    return this.users.find((user) => user.id == id);
  }
  getByEmail(email: string): User {
    return this.users.find((user) => user.email == email);
  }
}
