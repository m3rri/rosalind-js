//https://rosalind.info/problems/grph/
import { fastaToSeqListHasSeqName } from "../string-algorithms/computing-gc-content.mjs";
const removeNamePrefix = str=>str.substring(1);
const k = 3;
export default dataset=>{
    let result = [];
    const fastaList = fastaToSeqListHasSeqName(dataset);
    fastaList.forEach(({seqName, sequence}, i, ths)=>{
        let skipIndex = [i];
        const suffix = sequence.substring(sequence.length-k);

        for(let j=0; j<ths.length; j++){
            if(skipIndex.indexOf(j)<0){
                const prefix = ths[j].sequence.substring(0, k);

                if(prefix==suffix){
                    result.push(`${removeNamePrefix(seqName)} ${removeNamePrefix(ths[j].seqName)}`);
                    skipIndex.push(j);
                }
            }
        }
    });

    return result.join('\n');
};