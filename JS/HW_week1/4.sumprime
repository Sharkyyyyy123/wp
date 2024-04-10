function sumprime(n){
    let sum = 2;
    for(var i=3 ; i<n ; i++){
        let op = 0;
        for(var j=2 ; j<i ; j++){
            if(i%j === 0){
                op = 1;
            }
        }
        if(op == 0){
            sum += i;
        }

    }
    return sum;
}

let get = prompt("請輸入一個整數 : ");
get = parseInt(get);
console.log(get + "以下的質數總合為 : " + sumprime(get));
