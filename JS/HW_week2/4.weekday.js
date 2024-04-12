let x = {SUnday: '0', monday: '1', tuesday: '2', wednesday: '3', thursday: '4', friday: '5', saturday: '6'};

function f(b){
    let c = x[b];
    return c;
}

console.log("Deno.args = " + Deno.args);
console.log("num = " + f(Deno.args));