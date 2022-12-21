//https://rosalind.info/problems/splc/
import {translate} from "../prot/translating-rna-into-protein.mjs";

const convertTtoU = (dataset)=>{
    return dataset.replace(/T/g, 'U');
}

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
    const converted = convertTtoU(dataset);
    const seq = fastaToIntronRemovedSeq(converted);

    return translate(seq);
}

export default main;
