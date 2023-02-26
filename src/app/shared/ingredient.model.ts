export class Ingredient{
  // another way to declare attributes and constructor is the following
  // constructor(public name: string , public amount: number){}
  // What that will do
  // is behind the scenes it will create the same
  // effect we had before.
  // So it will automatically give us properties with
  // the names we specify here as argument names.   and that is. we do not have to write like below
  public name: string;
  public amount: number ;


  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
