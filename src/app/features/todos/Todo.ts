export class Todo {
    id: number;
    content: string;
    check: boolean;
    constructor(content = ''){
      this.id = new Date().getTime();
      this.content = content;
      this.check = false;
    }
  }