let raggio,circ, diam;
const p_greco=3.14;
let numero_1=0,var_1, string="",condiz=false;

raggio=window.prompt("inserisci il raggio");


document.getElementById("R").innerHTML=raggio;
diam=raggio*2;
circ=diam*p_greco;
document.getElementById("D").innerHTML=diam;
document.getElementById("C").innerHTML=circ;

var cerchio=document.getElementById("cerchio");
cerchio.style.backgroundColor="#DE320D";
cerchio.style.width=diam+"px";
cerchio.style.height=diam+"px";
cerchio.style.border="1px solid Black";
cerchio.style.borderRadius="50%";

var_1=window.prompt("inserisci qualcosa...");
numero_1+=var_1;
string+=var_1
string+=condiz;
console.log(var_1);
console.log(typeof(var_1));
if(typeof(var_1)=="Number"){
    document.getElementById("op").innerHTML="hai immesso un numero!";

}
else{
    string=typeof(var_1);
    document.getElementById("op").innerHTML="hai immesso un:" +string;

}


