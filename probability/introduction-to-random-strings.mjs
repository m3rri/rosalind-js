//https://rosalind.info/problems/prob/
/**GC-content=x then x/2 probability of selection 'G' or 'C'
 *               (1-x)/2 probability of selection 'A' or 'T'
 * dataset의 첫번째 줄과 동일한 서열이 나타날 확률을
 * dataset의 두번째 줄에 있는 gc-content 별로 연산하여 list로 리턴
 */
const randomString = (nucleotide, gc)=>{
    return {
        A: (1-gc)/2, T: (1-gc)/2,
        C: gc/2, G: gc/2
    }[nucleotide];
};
export default dataset=>{
    const [sequence, gcContents] = dataset.split('\n');

    return gcContents
    .split(' ')
    .map(gcContent=>{
        return sequence
        .split('')
        .map(nucleotide=>Math.log10(randomString(nucleotide, gcContent)))
        .reduce((acc, curr)=>acc+curr);
    })
    .join(' ');
}
export {randomString};