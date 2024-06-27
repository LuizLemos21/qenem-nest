export class User {
    constructor(
      public id: number,
      public username: string,
      public password: string, // In a real application, you would store hashed passwords
      public email: string,
      public createdAt: Date,
      public updatedAt: Date,
    ) {}
  }
  