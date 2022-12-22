//https://rosalind.info/problems/fibo/
function fibonacci(n){
    if(n>2){
        const n_1 = n>3 ? fibonacci(n-1) : 1;
        const n_2 = n>4 ? fibonacci(n-2) : 1;
    
        return n_1+n_2;
    }else{
        return 1;
    }
}

export default dataset=>fibonacci(dataset);
