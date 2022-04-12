function solve(arr1,arr2) {

    let shop={};
    
    for (let i = 0; i < arr1.length; i+=2) {
        let product=arr1[i];
        shop[product]=Number(arr1[i+1]);
    }

    for (let i = 0; i < arr2.length; i+=2) {

        if (shop.hasOwnProperty(arr2[i])) {
            shop[arr2[i]]+=Number(arr2[i+1]);
        }else{
            let product=arr2[i];
           shop[product]=Number(arr2[i+1]);
        }
        
        
    }


    for (let key in shop) {
        console.log(`${key} -> ${shop[key]}`)
    }
}
