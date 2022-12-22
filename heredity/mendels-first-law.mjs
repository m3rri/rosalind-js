//https://rosalind.info/problems/iprb/
/**
 * homozygous dominant(BB)
 * homozygous recessive(bb)
 * heterozygous(Bb)
 */
export default (dataset)=>{
    let [k, m, n] = dataset.split(' ');
    k = parseInt(k);
    m = parseInt(m);
    n = parseInt(n);

    const organisms = k+m+n;
    const hasHomozygousDominant = k*(k-1+2*m+2*n);
    const homoHeterozygous      = m*(m-1)*3/4;
    const hasHeterozygous       = m*n;
    const totalMate = organisms*(organisms-1);

    return (hasHomozygousDominant+homoHeterozygous+hasHeterozygous)/totalMate;
}
