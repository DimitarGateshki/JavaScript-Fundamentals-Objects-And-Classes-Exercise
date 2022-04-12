function solve(names) {

    let people=[];

    for (let e of names) {
        let human={
            name: e,
            id: e.length
        };

        people.push(human);
    }

    for (let e of people) {
        console.log(`Name: ${e.name} -- Personal Number: ${e.id}`)
    }
    
}