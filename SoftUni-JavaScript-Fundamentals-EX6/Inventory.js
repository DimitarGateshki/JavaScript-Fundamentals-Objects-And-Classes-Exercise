function solve(info) {
    class Hero{
        constructor(name,level,items){
            this.name=name;
            this.level=level;
            this.items=items;
        }
    }
    

    let line;
    let item;

    let heroes=[];


    for (let e of info) {
        line=e.split(' / ');
        item=line[2].split(', ');
        item.sort((a,b)=>a.localeCompare(b));

        let hero=new Hero(line[0],Number(line[1]),item);
        heroes.push(hero);
    }

    heroes.sort((firstH, secondH) => firstH.level - secondH.level);

    for (let h of heroes) {
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items.join(', ')}`);
        
    }
    
}
