const A1 = {
    a : 1,
    b : 2
};
function obj2arr(obj){
    let a1 = [];
    let a2 = [];
    for(let i in obj){
        a1 = [];
        a1.push(i);
        a1.push(obj[i]);
        a2.push(a1);
    }
    return a2;
}
console.log(obj2arr(A1));



