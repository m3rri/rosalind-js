//https://rosalind.info/problems/revc/
const complementMap = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
};

function complement(datalist){
    return datalist.map(data=>complementMap[data]);
}

function reverse(dataset){
    const datalist = dataset.split('');
    let reverselist = [];

    while(datalist.length>0){
        reverselist.push(datalist.pop());
    }

    return reverselist;
}

export default dataset=>complement(reverse(dataset)).join('');
