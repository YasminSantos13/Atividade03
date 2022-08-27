let numero = document.querySelector("#numero");
let n1 = document.querySelector("#n1");
let res = document.querySelector("#resultado");
let btn = document.querySelector("#calcular");

btn.onclick = () => {
    let arr= [];
    for(let i=1; i<= numero.value; i++ ){
        if(i % 5 ==0 && i % 9 == 0){
            arr.push("LuidyMoura");
        }else if(i % 9 ==0){
            arr.push("Moura");
        }else if(i % 5 ==0){
            arr.push("Luidy");
        }else{
            arr.push(i);
        }
    }
    res.value= arr;
    console.log(arr);
}