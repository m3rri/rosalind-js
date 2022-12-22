//https://rosalind.info/problems/hamm/
function countMutation(datasetS, datasetT){
    return datasetS
    .split("")
    .map((dataS, i)=>dataS!=datasetT[i]?1:0)
    .reduce((acc, curr)=>acc+curr);
}

export default (dataset)=>{
    const [s, t] = dataset.split('\n');
    return countMutation(s, t);
}
