//https://rosalind.info/problems/rstr/
import { randomString } from "./introduction-to-random-strings.mjs";

const getProbability = (s, x)=>{
    return s
    .split('')
    .reduce(
        (acc, nucleotide)=>acc * randomString(nucleotide, x)
        , 1
    );
}
export default dataset=>{
    const data = dataset.split('\n');
    const N = data[0].split(' ')[0];
    const x = data[0].split(' ')[1];
    const s = data[1];
    const probability = getProbability(s, x);
    const pC = 1-probability;

    return 1-Math.pow(pC, N);
}