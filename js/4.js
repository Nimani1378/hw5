let text = "aliokf";
function subSet(str){
    arr = [];
    len = str.length;
    for(let i = 0;i<len;i++){
        for(let j=i+1 ; j<=len ; j++){
            arr.push(str.substring(i,j));
        }
    }
    return arr;
}
console.log(subSet(text));