export class Tag {
  static readonly ANDGULAR = new Tag('Angular', 'red');
  static readonly REACT = new Tag('React', 'blue');
  static readonly PYTHON = new Tag('Python', 'green');
  static readonly JAVA = new Tag('Java', 'yellow');
  static readonly C = new Tag('C', 'purple');
  static readonly CSHARP = new Tag('C#', 'darkblue');
  static readonly CPLUSPLUS = new Tag('C++', 'pink');
  static readonly RUBY = new Tag('Ruby', 'brown');  
  static readonly JAVASCRIPT = new Tag('Javascript','orange');  
  private constructor(
    private readonly key: string,
    private readonly color: string
  ) {}
  toString(){
    return this.key;

  }
  getColor(){
    return this.color;
  }
}
