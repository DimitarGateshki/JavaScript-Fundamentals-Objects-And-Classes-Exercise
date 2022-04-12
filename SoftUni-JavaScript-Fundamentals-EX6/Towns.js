function solve(table) {
    class Town{
        constructor(name,x,y){
            this.name=name;
            this.latitude=Number(x).toFixed(2);
            this.longitude=Number(y).toFixed(2);
        }
    
    }

    let towns=[];
    
    for (let line of table) {
        let info=line.split(' | ');

        let town=new Town(info[0],info[1],info[2]);
        towns.push(town);
    }

    towns.forEach(e => {
        console.log(`{ town: '${e.name}', latitude: '${e.latitude}', longitude: '${e.longitude}' }`);
        
    });
    
}
