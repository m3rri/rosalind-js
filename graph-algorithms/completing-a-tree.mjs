//https://rosalind.info/problems/tree/
/** https://yoongrammer.tistory.com/68
 * node : 트리를 구성하는 기본 요소. 1, 2, 3... 10
 * edge : node와 node간의 연결선
 * root node : 최상위 node
 * leaf node : 자식 node가 없는 node (=external, outer, terminal)
 * branch node : 자식 node를 하나 이상 가진 node (=internal, inner, non-terminal)
 * depth : root node ~ 어떤 node까지의 edge 수
 * height : 어떤 node에서 leaf node까지 가장 긴 경로의 dege
 * degree : 어떤 node의 자식 수
 * path : 한 node에서 다른 node까지 이르는 edge 사이에 놓여있는 node들의 순서
 * size : 자신을 포함한 자손의 node수(자식+자식의 자식+..)
 * level : root node에서 어떤 node까지의 edge 수
 * width : 같은 level에 있는 node 수
 * breadth : leaf node이 수
 * distance : 두 node사이의 최단 경로에 있는 edge 수
 * order : 부모 node가 가질 수 있는 최대 자식의 수 (제약사항으로)
 */
/**
 * number of nodes : "n"
 * "n-1" edges are required to make tree
 */
const getRequiredEdges = numberNode => numberNode-1;
export default dataset=>{
    const data = dataset.split('\n');
    const n = data[0];
    const edges = data.splice(1);

    return getRequiredEdges(n)-edges.length;
}
export {getRequiredEdges};