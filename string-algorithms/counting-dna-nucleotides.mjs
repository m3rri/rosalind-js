//https://rosalind.info/problems/dna/
const nucleotides = ["A", "C", "G", "T"];
function count(dataset){
    return nucleotides.map(nucleotide=>dataset.replace(new RegExp(`[^${nucleotide}]`, 'g'), '').length).join(" ");
}

export default dataset=>count(dataset);
