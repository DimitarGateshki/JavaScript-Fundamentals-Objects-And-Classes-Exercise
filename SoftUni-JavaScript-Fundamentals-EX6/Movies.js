function solve(arr) {
    
    let movies=[];

    for (let e of arr) {
        if (e.includes('addMovie')) {

            let name=e.split('addMovie ')[1];
            movies.push({name});
            
        }else if (e.includes('directedBy')) {

            let [name,director]=e.split(' directedBy ');
            let movie=movies.find(m => m.name===name);

            if (movie) {
                movie.director=director;
            }
            
        }else if (e.includes('onDate')) {
            let [name,date]=e.split(' onDate ');
            let movie=movies.find(mo => mo.name===name);

            if (movie) {
                movie.date=date;
            }
            
        }
        
    }

    movies.forEach(e=>{
        if (e.name && e.date && e.director) {
            console.log(JSON.stringify(e));
        }
    })
}