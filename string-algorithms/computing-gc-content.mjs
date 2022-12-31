//https://rosalind.info/problems/gc/
const makeObject = (name, list)=>{return {seqName: name, sequence: list.join('')}};
const fastaToSeqListHasSeqName = (dataset)=>{
    let result = [];
    let sequenceName = '';
    let sequenceList = [];
    
    dataset
    .split('\n')
    .forEach(data=>{
        if(data.startsWith('>')){
            sequenceList.length>0 && result.push(makeObject(sequenceName, sequenceList));

            sequenceList = [];
            sequenceName = data;
        }else{
            sequenceList.push(data);
        }
    });

    result.push(makeObject(sequenceName, sequenceList));

    return result;
}
const computingGCContent = (sequence)=>sequence.replace(/[^GC]/g, '').length/sequence.length*100;

function computingMaxGCContent(dataset){
    const sequenceList = fastaToSeqListHasSeqName(dataset);
    const GCList = sequenceList
        .map(({seqName, sequence})=>{
            return {
                seqName: seqName.substring(1),
                content: computingGCContent(sequence)
            };
        })
        .sort((a, b)=> a.content-b.content);
    const maxGCItem = GCList.pop();
    
    return `${maxGCItem.seqName}\n${maxGCItem.content}`;
}

export default dataset=>computingMaxGCContent(dataset);
export {fastaToSeqListHasSeqName};