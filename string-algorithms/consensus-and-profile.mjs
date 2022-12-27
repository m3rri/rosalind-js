//https://rosalind.info/problems/cons/
import { fastaToSeqList } from "../alignment/transitions-and-transversions.mjs";
class CommonAncestor{
    profile = {
        A: [], C: [], G: [], T:[]
    }
    candidateAncestor = [];

    constructor(dataset){
        this.seqList = fastaToSeqList(dataset);
        this.seqLength = this.seqList[0].length;
        this.setProfile(this.seqLength);
    }

    setProfile(length){
        Object.keys(this.profile).forEach(nucleotide=>{
            this.profile[nucleotide].length = 0;
            for(let i=0; i<length; i++){
                this.profile[nucleotide][i] = 0;
            }
        });
    }

    execCount(){
        this.seqList.forEach(sequence=>sequence.split('').forEach((seq, i)=>this.profile[seq][i]++));
        return this;
    }

    calculatePossibleAncestors(){
        for(let i=0; i<this.seqLength; i++){
            const max = Math.max(this.profile.A[i], this.profile.C[i], this.profile.G[i], this.profile.T[i]);
            this.candidateAncestor[i] = [];

            Object.keys(this.profile).forEach(nucleotide=>this.profile[nucleotide][i]==max && this.candidateAncestor[i].push(nucleotide));
        }

        return this;
    }

    getAncestor(){
        return this.candidateAncestor.map(candi=>candi[0]).join('');
    }

    print(){
        return [
            this.getAncestor(),
            `A: ${this.profile.A.join(' ')}`,
            `C: ${this.profile.C.join(' ')}`,
            `G: ${this.profile.G.join(' ')}`,
            `T: ${this.profile.T.join(' ')}`
        ].join('\n');
    }
}

export default dataset=>{
    return new CommonAncestor(dataset)
    .execCount()
    .calculatePossibleAncestors()
    .print();
}
