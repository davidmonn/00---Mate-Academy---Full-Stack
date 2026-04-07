function getSuccessRate(statistic) {
  
    if(statistic == '') return 0;
    let entendeu = 0;
    let naoEntendeu = 0;
    let result = 0;
    
    for(let i = 0; i < statistic.length; i++) {
        if(statistic[i] == '0') {
            naoEntendeu++;
        }
        if(statistic[i] == '1') {
            entendeu++;
        }
    }
    
    result = (entendeu / statistic.length) * 100;
    return result;

}

console.log(getSuccessRate('11100'));