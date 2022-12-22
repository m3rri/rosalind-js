//https://rosalind.info/problems/lcsm/
import { fastaToSeqList } from "../alignment/transitions-and-transversions.mjs";

const getListSortedByStrLength = (seqList)=>{
    return seqList.sort((a, b)=>b.length-a.length);
}

const isMotifIncludedAllSeqList = (motif, seqList)=>{
    for(let i=0; i<seqList.length; i++){
        const isIncluds = seqList[i].includes(motif);
        
        if(!isIncluds){
            return isIncluds;
        }
    }

    return true;
}

function findSharedMotif(seqList){
    let motif = '';
    const shortestSeq = seqList.pop();
    let motifLength = shortestSeq.length;

    while(motifLength>0){
        const countSubstrI = shortestSeq.length-motifLength;

        for(let i=0; i<=countSubstrI; i++){
            const candiMotif = shortestSeq.substring(i, i+motifLength);

            if(isMotifIncludedAllSeqList(candiMotif, seqList)){
                motif = candiMotif;
                break;
            }
        }

        if(motif != ''){
            break;
        }

        motifLength--;
    }

    return motif;
}

export default (dataset)=>{
    let seqList = fastaToSeqList(dataset);
    seqList = getListSortedByStrLength(seqList);

    return findSharedMotif(seqList);
}
