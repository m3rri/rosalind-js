//https://rosalind.info/problems/subs/
let findMotif = (datasetS, datasetT)=>{
    const lengthS = datasetS.length;
    const lengthT = datasetT.length;
    let collectionOfJ = [];

    for(let i=0; i<lengthS-lengthT; i++){
        const substringOfS = datasetS.substring(i, i+lengthT);
        if(substringOfS==datasetT){
            collectionOfJ.push(i+1);
        }
    }

    return collectionOfJ.join(' ');
}
