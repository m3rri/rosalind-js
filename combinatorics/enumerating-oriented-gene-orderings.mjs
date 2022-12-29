//https://rosalind.info/problems/sign/
//count = n! x 2^n
import {permutation} from './enumerating-gene-orders.mjs';
const MULTIPLY = [1, -1];
const signedPermutation = (list, n)=>{
    let result = [];

    if(n==0){
        MULTIPLY.forEach(m=>{
            const temp = list.map((number, i)=>i==0?number*m:number);
            result.push(temp);
        });
    }else{
        signedPermutation(list, n-1).forEach(item=>{
            MULTIPLY.forEach(m=>{
                const temp = item.map((number, i)=>i==n?number*m:number);
                result.push(temp);
            });
        });
    }

    return result;
}

export default dataset=>{
    let result = [];
    const length = parseInt(dataset);
    const permutationList = permutation(length);

    permutationList.forEach(itemList=>{
        result.push(...signedPermutation(itemList, length-1));
    });

    return `${result.length}\n`
    +result.map(item=>item.join(' ')).join('\n');
}