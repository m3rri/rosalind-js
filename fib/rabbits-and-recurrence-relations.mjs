//https://rosalind.info/problems/fib/
//recurrence relation : n = (n-1) + (n-2)*3
const recurrence = (n, k)=>{
    const n_1 = n>3 ? recurrence(n-1, k) : 1;
    const n_2 = n>4 ? recurrence(n-2, k) : 1;

    return n_1 + n_2*k;
}

function main(dataset){
    const [n, k] = dataset.split(' ');
    return recurrence(n, k);
}

export default main;
