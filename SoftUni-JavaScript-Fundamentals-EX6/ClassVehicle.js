class Vehicle{
    constructor(type,model,{engine,power},fuel){
        this.type=type;
        this.model=model;
        this.parts={
            engine,
            power,
            quality:engine*power
        };
        this.fuel=Number(fuel);

    }

    drive(loss){
        return this.fuel-=loss;
    }


}