//https://rosalind.info/problems/lia/
//mendel's second law -> probability of hetero when hetero X hetero = 1/4
const factorial = n=>{
    let result = 1;
    while(n>1){
        result*=n;
        n--;
    }
    return result;
};

const getCombination = (n, r)=>{
    //console.log('getCombination', n, r);
    if(r==0 || n==r){
        return 1;
    }else if(r==1 || (n-r)==1){
        return n;
    }else{
        return factorial(n)/(factorial(r)*factorial(n-r));
    }
}

function probabilityHetero(k, N){
    const countChildren = Math.pow(2, k);
    const probHeteroThisLevel = 1/Math.pow(4, countChildren);
    const getCountTotalHeteroAtLeastN = (children, N)=>{
        let result = 0;
        let calculator = N;

        while(children>=calculator){
            result += Math.pow(3, children-calculator) * getCombination(children, calculator);
            calculator++;
        }

        return result;
    }

    return probHeteroThisLevel*getCountTotalHeteroAtLeastN(countChildren, N);
}

export default (dataset)=>{
    const [k, N] = dataset.split(' ');
    return probabilityHetero(parseInt(k), parseInt(N));
}
