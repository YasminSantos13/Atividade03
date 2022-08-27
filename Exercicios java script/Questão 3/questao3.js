let nota = document.querySelector("#nota");
let nf = document.querySelector("#notafinal");
let res = document.querySelector("#resultado");
let btn = document.querySelector("#calcular");
let n1 = document.querySelector("#n1");
let notafinal = document.querySelector("#nf");
let aviso = document.querySelector("#aviso");

btn.onclick = () => {
    if(nota.value <0 || nota.value> 100 || nota.value ==""){
        nota.value="";
        nota.focus();
        nf.value= "";
        res.value= "";
        aviso.innerText= "Insira somente números entre 0 e 100";
    }
    else if(nota.value <38) {
        nf.value = nota.value
        res.value = "Reprovado";
        aviso.innerText= "";
    }else if (nota.value % 5 >= 3 && nota.value >= 38) {
        nf.value = nota.value - (nota.value % 5) + 5;
        res.value = "Aprovado";
        aviso.innerText= "";
    }else {
        nf.value = nota.value;
        res.value = "Aprovado";
        aviso.innerText= "";
    }
}