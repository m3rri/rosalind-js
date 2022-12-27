//https://rosalind.info/problems/perm/
const insertInteger = n=>{
    if(n==1){
        return [[1]];
    }else{
        let result = [];

        for(let i=0; i<n; i++){
            insertInteger(n-1).forEach(integers=>{
                integers.splice(i, 0, n);

                result.push(integers);
            });
        }
    
        return result;
    }
}

const permutation = dataset=>{
    const arrays = insertInteger(dataset);
    let result = arrays.length;

    arrays.forEach(array=>result+=`\n${array.join(' ')}`);

    return result;
}

export default dataset=>permutation(parseInt(dataset));
