//https://rosalind.info/problems/splc/
import {translate} from "../string-func/translating-rna-into-protein.mjs";
import transcribe from "./transcribing-dna-into-rna.mjs";

const removeIntron = (dataset, intron)=>{
    return dataset.replace(new RegExp(intron, 'g'), '');
}

const fastaToIntronRemovedSeq = (dataset)=>{
    let dnaStr = '';
    let introns = [];
    let tempSeq = '';

    dataset
    .split('\n')
    .forEach(item=>{
        if(item.startsWith('>')){
            if(tempSeq.length>0){
                if(dnaStr.length==0){
                    dnaStr = tempSeq;
                }else{
                    introns.push(tempSeq);
                }
            }

            tempSeq = '';
        }else{
            tempSeq += item;
        }
    });

    introns.push(tempSeq);
    introns.forEach(intron=>dnaStr = removeIntron(dnaStr, intron));

    return dnaStr;
}

function main(dataset){
    const converted = transcribe(dataset);
    const seq = fastaToIntronRemovedSeq(converted);

    return translate(seq);
}

export default main;
