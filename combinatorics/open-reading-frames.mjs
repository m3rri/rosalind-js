//https://rosalind.info/problems/orf/
import { fastaToSeqList } from "../alignment/transitions-and-transversions.mjs";
import reverseComplement from "../string-algorithms/complementing-a-strand-of-dna.mjs";
import {translate} from "../string-func/translating-rna-into-protein.mjs";
import transcribe from "../string-algorithms/transcribing-dna-into-rna.mjs"

const getTranslatedSeq = sequence=>{
    const seqReverseComplement = reverseComplement(sequence);
    const seqTranscribe = transcribe(sequence);
    const seqTranscribeRC = transcribe(seqReverseComplement);

    return [translate(seqTranscribe), translate(seqTranscribeRC)];
}
const getIndexOfM = str=>str.indexOf('M');
const getOpenReadingFrames = sequence=>{
    let result = [];

    sequence
    .split('Stop')
    .filter((seq, i, ary)=>{
        if(seq.length==0 || getIndexOfM(seq)<0){
            return false;
        }else if(ary.length-1===i && !sequence.endsWith('Stop')){
            return false;
        }else{
            return true;
        }
    })
    .forEach(seq=>{
        let indexOfM = getIndexOfM(seq);
        
        while(indexOfM>=0){
            seq = seq.substring(indexOfM);
            result.push(seq);
    
            seq = seq.substring(1);
    
            indexOfM = getIndexOfM(seq);
        }
    });

    return result;
}

export default dataset=>{
    let result = [];
    const sequence = fastaToSeqList(dataset)[0];

    for(let i=0; i<3; i++){
        const seqLength = i==0 ? sequence.length : sequence.length-(3-i);
        const _sequence = sequence.substring(i, seqLength);
        const translates = getTranslatedSeq(_sequence);

        translates.forEach(_translate=>{
            const orf = getOpenReadingFrames(_translate);

            result = result.concat(orf);
        });
    }

    return result
    .filter((item, i, ary)=>ary.indexOf(item)===i)
    .join('\n');
}
