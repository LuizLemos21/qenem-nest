export class Simulation {
    constructor(
      public id: number,
      public userId: number,
      public subjectId: number,
      public difficulty: string,
      public score: number,
      public createdAt: Date,
    ) {}
  }
  