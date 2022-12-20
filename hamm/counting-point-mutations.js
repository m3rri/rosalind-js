function countMutation(datasetS, datasetT){
    return datasetS
    .split("")
    .map((dataS, i)=>dataS!=datasetT[i]?1:0)
    .reduce((acc, curr)=>acc+curr);
}
