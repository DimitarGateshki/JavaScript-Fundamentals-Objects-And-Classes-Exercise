function solve(info) {

    let dic={};

    for (let e of info) {
        let el=JSON.parse(e);
        dic=Object.assign(dic,el);
    }

    let sorted=Object.keys(dic);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let elm of sorted) {
        console.log(`Term: ${elm} => Definition: ${dic[elm]}`);
    }
    
}