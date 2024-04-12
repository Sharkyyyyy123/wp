function filter(n){
    let a=[];
    for(var i=0 ; i<n.length ; i++){
        if(n[i]%2 != 0){
            a.push(n[i]);
        }
    }
    return a;
}

console.log("{ 3,7,2,5,8,9,2,5,6,234,567,78 }中的奇數 : [ " + filter([3,7,2,5,8,9,2,5,6,234,567,78]) + " ]");