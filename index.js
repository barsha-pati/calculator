function pick(val){
    document.getElementById("a").value +=val;
}
function solve(){
    var x = document.getElementById("a").value;
    var y = eval(x);
    document.getElementById("a").value=y;
}
function clearInput(){
    document.getElementById("a").value="";
}