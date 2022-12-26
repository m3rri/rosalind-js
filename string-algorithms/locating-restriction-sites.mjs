//https://rosalind.info/problems/revp/
import {fastaToSeqList} from '../alignment/transitions-and-transversions.mjs';
import reverseComplete from './complementing-a-strand-of-dna.mjs';

const MAX_LENGTH = 12;
const MIN_LENGTH = 4;
const isEqualToReverseStr = (substr)=>substr == reverseComplete(substr);
const getThisNumberSet = (index)=>{
    let numberSet = [];
    
    for(let i=0; i<=(MAX_LENGTH-MIN_LENGTH)/2; i++){
        numberSet.push([index-i, MIN_LENGTH+2*i]);
    }

    return numberSet;
}
class DataResult {
    constructor(){
        this.result = [];
    }

    push(index, length){
        this.result.push(`${index+1} ${length}`);
    }

    get(){
        return this.result.join('\n');
    }
}

export default dataset=>{
    let result = new DataResult();
    const sequence = fastaToSeqList(dataset)[0];
    const seqLength = sequence.length;

    let index = 0;
    while(index<=(seqLength-MIN_LENGTH)){
        const numberSet = getThisNumberSet(index);
        
        for(let i=0; i<numberSet.length; i++){
            const [_subIndex, _strLength] = numberSet[i];
            if(_subIndex<0){
                break;
            }

            const str = sequence.substring(_subIndex, _strLength+_subIndex);
            if(str.length<_strLength){
                break;
            }
            
            if(isEqualToReverseStr(str)){
                result.push(_subIndex, _strLength);
            }else{
                break;
            }
        }

        index++;
    }

    return result.get();
}
