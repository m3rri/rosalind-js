//https://rosalind.info/problems/lexf/
class EnumeratingKmers{
    constructor(nucleotides, n){
        this.nucleotideList = typeof nucleotides ==='string' ? nucleotides.split(' ') : nucleotides;
        this.number = n;
    }

    getKmerList(){
        return this.addNucleotide(this.number);
    }

    addNucleotide(n){
        if(n==1){
            return this.nucleotideList;
        }else{
            let result = [];
            this.nucleotideList.forEach(nucleotide=>{
                this.addNucleotide(n-1).forEach(nucleotide2=>{
                    result.push(`${nucleotide}${nucleotide2}`);
                });
            });
            return result;
        }
    }

    assume(length){
        console.log(Math.pow(this.nucleotideList.length, this.number));
        console.log('length', length);
    }
}

export default dataset=>{
    const[nucleotides, n] = dataset.split('\n');
    const enumerating = new EnumeratingKmers(nucleotides, parseInt(n));

    const list = enumerating.getKmerList();
    //enumerating.assume(list.length);

    return list.join('\n');
}
