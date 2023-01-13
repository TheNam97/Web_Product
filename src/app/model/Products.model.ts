
export class Products {
  public id:string;
  public name: string;
  public type: string;
  public manufacturer: string;
  public description: string;
  public year: number;
  public price:number

  constructor(id:string,name: string, type: string, manufacturer: string , desc: string, year:number, price:number) {
    this.id=id;
    this.name = name;
    this.type=type
    this.manufacturer=manufacturer
    this.description = desc;
    this.year= year
    this.price=price;
  }
}
