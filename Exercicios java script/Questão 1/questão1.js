let lado2= document.querySelector("#lado2");
let lado3= document.querySelector("#lado3");
let res= document.querySelector("#resultado");
let btn= document.querySelector("#classificar");
let l2= document.querySelector("#l2");
let l1= document.querySelector("#l1");
let l3= document.querySelector("#l3");

lado1.onblur= () => {
    if(lado1.value == ""){
        l1.style= "color:red";
        lado1.style= "border-color:red";
    }else{
        l1.style="color:black";
        lado1.style="border-color:black"
    }
}

lado2.onblur= () => {
    if(lado2.value == ""){
        l2.style= "color:red";
        lado2.style= "border-color:red";
    }else{
        l2.style="color:black";
        lado2.style= "border-color:black";
    }
}

lado3.onblur= () => {
    if(lado3.value == ""){
        l3.style= "color:red";
        lado3.style= "border-color:red";
    }else{
        l3.style="color:black";
        lado3.style="border-color:black";
    }
}

btn.onclick= () => {
    if(lado1.value == lado2.value && lado2.value == lado3.value) {
        res.value= "Triângulo equilátero";
    } else if((lado1.value == lado2.value && lado2.value != lado3.value)  
    || lado2.value == lado3.value && lado3.value != lado1.value 
    || lado1.value == lado3.value && lado3.value != lado2.value) {
        res.value= "Triângulo isóceles";
    }else{
        res.value = "Triângulo escaleno";
    }
}