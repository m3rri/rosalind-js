//https://rosalind.info/problems/iev/
function calculatingOffspringProbability(dataset){
    const [dominant_1, dominant_2, dominant_3, probability_1, probability_2, probability_3] = dataset.split(' ');

    return (parseInt(dominant_1)+parseInt(dominant_2)+parseInt(dominant_3))*2
          +parseInt(probability_1)*2*3/4+parseInt(probability_2)*2/2+parseInt(probability_3)*2*0;
}

export default dataset=>calculatingOffspringProbability(dataset);
