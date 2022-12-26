//https://rosalind.info/problems/sseq/
import {fastaToSeqList} from '../alignment/transitions-and-transversions.mjs';
function findSplicedMotif(seqList){
    let result = [];
    const [sequence, subSeq] = seqList;
    const subSeqList = subSeq.split('');
    let plusIfHasContinuousMotif = sequence.includes(subSeq) ? subSeq.length-1 : 0;

    for(let i=0; i<subSeqList.length; i++){
        const symbol = subSeqList[i];

        if(result.length==0){
            result.push(sequence.indexOf(symbol));
        }else if(plusIfHasContinuousMotif>0){
            result.push(sequence.indexOf(symbol, result[result.length-1]+plusIfHasContinuousMotif));
        }else{
            result.push(sequence.indexOf(symbol, result[result.length-1]+1));
        }
    }

    return result.map(item=>item+1).join(' ');
}

export default dataset=>{ 
    const seqList = fastaToSeqList(dataset);
    return findSplicedMotif(seqList);
};
