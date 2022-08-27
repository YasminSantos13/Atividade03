let ax2 = document.querySelector("#ax2");
let bx = document.querySelector("#bx");
let cx = document.querySelector("#cx");
let res1 = document.querySelector("#resultado1");
let res2 = document.querySelector("#resultado2");
let btn = document.querySelector("#calcular");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let aviso = document.querySelector("#aviso");

ax2.onblur= () =>{
    if(ax2.value == ""){
        a.style= "color:red";
        ax2.style= "border-color:red";
    }else{
        a.style= "color:black";
        ax2.style= "border-color:black"
    }
}
bx.onblur= () => {
    if(bx.value == ""){
        b.style= "color:red";
        bx.style= "border-color:red";
    }else{
        b.style= "color:black";
        bx.style= "border-color:black";
    }
}

cx.onblur= () => {
    if(cx.value == ""){
        c.style= "color:red";
        cx.style= "border-color:red";
    }else{
        c.style= "color:black";
        cx.style= "border-color:black";
    }
}
btn.onclick = () => {
    let delta = (Math.pow(bx.value, 2) - (4 *ax2.value * cx.value ));
    console.log("delta",delta);
    if( delta <0){
        aviso.innerText= "Delta é negativo";
        res1.value= "";
        res2.value= "";
    }else{
        res1.value= (-bx.value + Math.sqrt(delta)) / (2 * ax2.value);
        res2.value= (-bx.value- Math.sqrt(delta)) / (2 * ax2.value);
        aviso.innerText= "";
    }
}
