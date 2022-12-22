//https://rosalind.info/problems/tran/
/**description of the mutation
 * transition: replace (A->G || G->A)[purine] || (C->T || T->C)[pyrimidine]
 * transversion: replace (A || G) -> (C || T) || (C || T) -> (A || G)
 --------------------------------------------------------------------------
 * find transition / transversion ratio
 */

const transitionMap = {
    A: 'G', G: 'A', C: 'T', T: 'C'
};

const transversionMap = {
    A: 'C', G: 'C', C: 'A', T: 'A'
};

const fastaToSeqList = (dataset)=>{
    const seqList = dataset
                        .replace(/\>(.*)\n/g, "*")
                        .replace(/\n/g, '')
                        .substring(1)
                        .split('*');

    return seqList;
}

const getTransitionAndTransversion = (s1, s2)=>{
    let transition = 0;
    let transversion = 0;
    const a1 = s1.split('');
    const a2 = s2.split('');

    a1.forEach((ele_a1, i) => {
        const ele_a2 = a2[i];
        const transversion_of_a1 = transversionMap[ele_a1];

        switch(ele_a2){
            case transitionMap[ele_a1]:
                transition++;
                break;
            case transversion_of_a1:
                transversion++;
                break;
            case transitionMap[transversion_of_a1]:
                transversion++;
                break;
            default:
                break;
        }
    });

    return {transition, transversion};
}

export default (dataset)=>{
    const [s1, s2] = fastaToSeqList(dataset);
    const {transition, transversion} = getTransitionAndTransversion(s1, s2);

    return transversion===0 ? 0 : transition/transversion;
};
