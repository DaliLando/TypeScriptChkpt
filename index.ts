interface Vehicle {
    make:string,
    model:string,
    year:number,
    start : ()=> void
}


class Car implements Vehicle {

    make:string =""
    model:string =""
    year:number=2024
    start =() => console.log(`this ${this.make} is from ${this.model}`);
    
    constructor (make:string,model:string,year:number){
      this.make = make ;
      this.model = model ;
      this.year = year;
    }
    
        
    }


    let test = new Car("Ferrari","Italy",2023)

    test.start()
