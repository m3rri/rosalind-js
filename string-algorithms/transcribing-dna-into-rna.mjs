//https://rosalind.info/problems/rna/
function transcribe(dataset){
    return dataset.replace(/T/g,'U');
}

export default dataset=>transcribe(dataset);
