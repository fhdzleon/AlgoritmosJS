'use strict'

document.addEventListener('DOMContentLoaded', function () {

//* ___________Funcion binario a decimal__________________________

    function binarioADecimal(num) {
                                                  
        let reverse = num.split('').reverse().join(''); 
        let total = 0;

        for (let i = 0; i < reverse.length; i++) {     
            total += reverse[i] * 2 ** i;                                                                
        }
         return total;
        
    }


//* ____________Funcion decimal a binario_____________________________

    function decimalABinario(num) {

        let total = [];

        while (num > 0) {

            let resto = num % 2;
            total.push(resto);
            num = Math.floor (num/2);
        }

        return total.reverse().join('');
    }
    
//* ______________ Acceso al Dom e integracion de funcion binario a decimal________________

    let aDecimal = document.getElementById('binarioForm');
    let input = document.getElementById('numerobinario');
    let respuesta1 = document.getElementById('respuesta1');

    aDecimal.addEventListener('submit', function (e) {
        e.preventDefault();

        let numeroBinario = input.value.trim();
        let esBinario = true;

        for (let i = 0; i < numeroBinario.length; i++) {
            let numxnum = numeroBinario.charAt(i);

            if (numxnum !== "0" && numxnum !== "1") {
                esBinario = false;
                break;
            }
        }


        if (esBinario) {
            let decimal = binarioADecimal(numeroBinario);
            respuesta1.textContent = `${decimal}`
        
        } else {
            respuesta1.textContent = `no es un numero binario, ingresa numeros binarios  `
        }

    })

//* ______________ Acceso al DOM e integracion de funcion decimal a binario________________    

    let aBinario = document.getElementById('decimalForm');
    let decimal = document.getElementById('numerodecimal');
    let respuesta2 = document.getElementById('respuesta2');

    aBinario.addEventListener('submit', function(e){
        e.preventDefault();

        let numeroDecimal = decimal.value.trim();

        let binario = decimalABinario(numeroDecimal);

        respuesta2.textContent = `${binario}`
     })



});

