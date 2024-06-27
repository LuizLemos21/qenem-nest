export class Question {
    constructor(
      public id: number,
      public title: string,
      public content: string,
      public image: string | null,
      public correctAnswer: string,
      public subjectId: number,
      public enemId: number,
      public difficulty: string,
      public alternativaA: string | null,
      public alternativaB: string | null,
      public alternativaC: string | null,
      public alternativaD: string | null,
      public alternativaE: string | null,
      public explanation: string | null,
    ) {}
  }
  