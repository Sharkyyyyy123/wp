function arrayMin(n){
    let x = n[0];
    for(var i=1 ; i<n.length ; i++){
        if(x > n[i]){
            x = n[i];
        }
    }
    return x;
}

let array = [2,4,67,83,21,9,23,3,10,5];
console.log("{ 2,4,67,83,21,9,23,3,10,5 } 的最小值 : " +　arrayMin(array));