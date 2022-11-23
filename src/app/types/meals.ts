export type Meals= {
    id: number;
    name: string;
    kcal: string;
}

export class MealsClass{
    public _id!: number;
    public _name!: string;
    public _kcal!: string;  
    
    constructor(private id:number, private name:string, private kcal:string){
      this._id=id;
      this._name=name;
      this._kcal=kcal;
    }
  
  
    get Id():number{
      return this._id;
    }
  
    set Id(id:number){
      this._id=id;
    }
    
    get Name():string{
      return this._name
    }
  
    set Name(name:string){
      this._name=name;
    }
  
    get Kcal():string{
      return this._kcal;
    }
  
    set Kcal(kcal:string){
      this._kcal=kcal;
    }
}