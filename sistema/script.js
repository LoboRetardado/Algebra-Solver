const a11 = document.getElementById('a11');
const a12 = document.getElementById('a12');
const a13 = document.getElementById('a13');
const a21 = document.getElementById('a21');
const a22 = document.getElementById('a22');
const a23 = document.getElementById('a23');
const a31 = document.getElementById('a31');
const a32 = document.getElementById('a32');
const a33 = document.getElementById('a33');
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');
const resultado3 = document.getElementById('resultado3');
const passos = document.getElementById('passos');
const calcular = document.getElementById('calcular');
const showPassos = document.getElementById('showPassos');
let etapa = 0;

calcular.addEventListener('click', function() {
    etapa = 0;
    showPassos.value ="Mostrar passos";

    //delta
    let A11 = Number(a11.value) * 1;
    let A12 = Number(a12.value) * -1;
    let A13 = Number(a13.value) * 1;

    let a11Parenteses1 = Number(a22.value) * Number(a33.value);
    let a11Parenteses2 = Number(a32.value) * Number(a23.value);

    let a12Parentes1 = Number(a21.value) * Number(a33.value);
    let a12Parentes2 = Number(a31.value) * Number(a23.value);

    let a13Parenteses1 = Number(a21.value) * Number(a32.value);
    let a13Parenteses2 = Number(a31.value) * Number(a22.value);

    let a11Par = a11Parenteses1 - a11Parenteses2;
    let a12Par = a12Parentes1 - a12Parentes2;
    let a13Par = a13Parenteses1 - a13Parenteses2;

    let a11Final = A11 * a11Par;
    let a12Final = A12 * a12Par;
    let a13Final = A13 * a13Par;
    
    let delta = a11Final + a12Final + a13Final;

    //delta1
    let A11delta1 = Number(resultado1.value) * 1;
    let A12delta1 = Number(a12.value) * -1;
    let A13delta1 = Number(a13.value) * 1;

    let a11Parenteses1delta1 = Number(a22.value) * Number(a33.value);
    let a11Parenteses2delta1 = Number(a32.value) * Number(a23.value);

    let a12Parentes1delta1 = Number(resultado2.value) * Number(a33.value);
    let a12Parentes2delta1 = Number(resultado3.value) * Number(a23.value);

    let a13Parenteses1delta1 = Number(resultado2.value) * Number(a32.value);
    let a13Parenteses2delta1 = Number(resultado3.value) * Number(a22.value);

    let a11Pardelta1 = a11Parenteses1delta1 - a11Parenteses2delta1;
    let a12Pardelta1 = a12Parentes1delta1 - a12Parentes2delta1;
    let a13Pardelta1 = a13Parenteses1delta1 - a13Parenteses2delta1;

    let a11Finaldelta1 = A11delta1 * a11Pardelta1;
    let a12Finaldelta1 = A12delta1 * a12Pardelta1;
    let a13Finaldelta1 = A13delta1 * a13Pardelta1;
    
    let delta1 = a11Finaldelta1 + a12Finaldelta1 + a13Finaldelta1;

    //delta2
    let A11Delta = Number(a11.value) * 1;
    let A12Delta = Number(resultado1.value) * -1;
    let A13Delta = Number(a13.value) * 1;

    let a11Parenteses1Delta = Number(resultado2.value) * Number(a33.value);
    let a11Parenteses2Delta = Number(resultado3.value) * Number(a23.value);

    let a12Parentes1Delta = Number(a21.value) * Number(a33.value);
    let a12Parentes2Delta = Number(a31.value) * Number(a23.value);

    let a13Parenteses1Delta = Number(a21.value) * Number(resultado3.value);
    let a13Parenteses2Delta = Number(a31.value) * Number(resultado2.value);

    let a11ParDelta = a11Parenteses1Delta - a11Parenteses2Delta;
    let a12ParDelta = a12Parentes1Delta - a12Parentes2Delta;
    let a13ParDelta = a13Parenteses1Delta - a13Parenteses2Delta;

    let a11FinalDelta = A11Delta * a11ParDelta;
    let a12FinalDelta = A12Delta * a12ParDelta;
    let a13FinalDelta = A13Delta * a13ParDelta;
    
    let delta2 = a11FinalDelta + a12FinalDelta + a13FinalDelta;

    //delta3
    let A11Delta3 = Number(a11.value) * 1;
    let A12Delta3 = Number(a12.value) * -1;
    let A13Delta3 = Number(resultado1.value) * 1;

    let a11Parenteses1Delta3 = Number(a22.value) * Number(resultado3.value);
    let a11Parenteses2Delta3 = Number(a32.value) * Number(resultado2.value);

    let a12Parentes1Delta3 = Number(a21.value) * Number(resultado3.value);
    let a12Parentes2Delta3 = Number(a31.value) * Number(resultado2.value);

    let a13Parenteses1Delta3 = Number(a21.value) * Number(a32.value);
    let a13Parenteses2Delta3 = Number(a31.value) * Number(a22.value);

    let a11ParDelta3 = a11Parenteses1Delta3 - a11Parenteses2Delta3;
    let a12ParDelta3 = a12Parentes1Delta3 - a12Parentes2Delta3;
    let a13ParDelta3 = a13Parenteses1Delta3 - a13Parenteses2Delta3;

    let a11FinalDelta3 = A11Delta3 * a11ParDelta3;
    let a12FinalDelta3 = A12Delta3 * a12ParDelta3;
    let a13FinalDelta3 = A13Delta3 * a13ParDelta3;
    
    let delta3 = a11FinalDelta3 + a12FinalDelta3 + a13FinalDelta3;

    let X = delta1 / delta;
    let Y = delta2 / delta;
    let Z = delta3 / delta;

    passos.innerHTML = `<strong>Resultado:</strong><br>
    X = <strong>${X}</strong><br>
    Y = <strong>${Y}</strong><br>
    Z = <strong>${Z}<strong>`

    showPassos.style.display = "block";

    if (delta == 0 && delta1 != 0) {
        alert("O sistema é N.T.S. (Não tem solução)");
    }

    if (delta == 0 && delta1 == 0 && delta2 == 0 && delta3 == 0) {
        alert("É indeterminação!");
    }

    showPassos.addEventListener('click', function() {
        etapa ++;
        showPassos.value = "Proximo passo >"

        switch (etapa) {
            case 1: passos.innerHTML = `<strong>Calculando Δ...</strong><br>
                Usando a primeira linha...<br>
                ${Number(a11.value)} x 1 = <strong>${A11}</strong><br>
                ${Number(a12.value)} x -1 = <strong>${A12}</strong><br>
                ${Number(a13.value)} x 1 = <strong>${A13}</strong><br><br>

                ${Number(a22.value)} x ${Number(a33.value)} = <strong>${a11Parenteses1}</strong><br>
                ${Number(a32.value)} x ${Number(a23.value)} = <strong>${a11Parenteses2}</strong>`
                break;
            
            case 2: passos.innerHTML = `<strong>Calculando Δ...</strong><br>
                ${Number(a21.value)} x ${Number(a33.value)} = <strong>${a12Parentes1}</strong><br>
                ${Number(a31.value)} x ${Number(a23.value)} = <strong>${a12Parentes2}</strong><br><br>

                ${Number(a21.value)} x ${Number(a32.value)} = <strong>${a13Parenteses1}</strong><br>
                ${Number(a31.value)} x ${Number(a22.value)} = <strong>${a13Parenteses2}</strong>`
                break;
            
            case 3: passos.innerHTML = `<strong>Calculando Δ...</strong><br>
                ${a11Parenteses1} - ${a11Parenteses2} = <strong>${a11Par}</strong><br>
                ${a12Parentes1} - ${a11Parenteses2} = <strong>${a12Par}</strong><br>
                ${a13Parenteses1} - ${a13Parenteses2} = <strong>${a13Par}</strong><br><br>
                
                ${A11} x ${a11Par} = <strong>${a11Final}</strong><br>
                ${A12} x ${a12Par} = <strong>${a12Final}</strong><br>
                ${A13} x ${a13Par} = <strong>${a13Final}</strong>`
                break;

            case 4: passos.innerHTML = `<strong>Calculando Δ...</strong><br>
                ${a11Final} + ${a12Final} + ${a13Final} = <strong>${delta}</strong><br><br>
                Valor de Δ: <strong>${delta}</strong>`
                break;

            case 5: passos.innerHTML = `<strong>Calculando Δ1...</strong><br>
                ${Number(resultado1.value)} x 1 = <strong>${A11delta1}</strong><br>
                ${Number(a12.value)} x -1 = <strong>${A12delta1}</strong><br>
                ${Number(a13.value)} x 1 = <strong>${A13delta1}</strong><br><br>

                ${Number(a22.value)} x ${Number(a33.value)} = <strong>${a11Parenteses1delta1}</strong><br>
                ${Number(a32.value)} x ${Number(a23.value)} = <strong>${a11Parenteses2delta1}</strong>`
                break;

            case 6: passos.innerHTML = `<strong>Calculando Δ1...</strong><br>
                ${Number(resultado2.value)} x ${Number(a33.value)} = <strong>${a12Parentes1delta1}</strong><br>
                ${Number(resultado3.value)} x ${Number(a23.value)} = <strong>${a12Parentes2delta1}</strong><br><br>

                ${Number(resultado2.value)} x ${Number(a32.value)} = <strong>${a13Parenteses1delta1}</strong><br>
                ${Number(resultado3.value)} x ${Number(a22.value)} = <strong>${a13Parenteses2delta1}</strong>`
                break;

            case 7: passos.innerHTML = `<strong>Calculando Δ1...</strong><br>
                ${a11Parenteses1delta1} - ${a11Parenteses2delta1} = <strong>${a11Pardelta1}</strong><br>
                ${a12Parentes1delta1} - ${a11Parenteses2delta1} = <strong>${a12Pardelta1}</strong><br>
                ${a13Parenteses1delta1} - ${a13Parenteses2delta1} = <strong>${a13Pardelta1}</strong><br><br>
            
                ${A11delta1} x ${a11Pardelta1} = <strong>${a11Finaldelta1}</strong><br>
                ${A12delta1} x ${a12Pardelta1} = <strong>${a12Finaldelta1}</strong><br>
                ${A13delta1} x ${a13Pardelta1} = <strong>${a13Finaldelta1}</strong>`
                break;

            case 8: passos.innerHTML = `<strong>Calculando Δ1...</strong><br>
                ${a11Finaldelta1} + ${a12Finaldelta1} + ${a13Finaldelta1} = <strong>${delta1}</strong><br><br>
                Valor de Δ1: <strong>${delta1}</strong>`
                break;

                case 9: passos.innerHTML = `<strong>Calculando Δ2...</strong><br>
                ${Number(a11.value)} x 1 = <strong>${A11Delta}</strong><br>
                ${Number(resultado1.value)} x -1 = <strong>${A12Delta}</strong><br>
                ${Number(a13.value)} x 1 = <strong>${A13Delta}</strong><br><br>

                ${Number(resultado2.value)} x ${Number(a33.value)} = <strong>${a11Parenteses1Delta}</strong><br>
                ${Number(resultado3.value)} x ${Number(a23.value)} = <strong>${a11Parenteses2Delta}</strong>`
                break;

                case 10: passos.innerHTML = `<strong>Calculando Δ2...</strong><br>
                ${Number(a21.value)} x ${Number(a33.value)} = <strong>${a12Parentes1Delta}</strong><br>
                ${Number(a31.value)} x ${Number(a23.value)} = <strong>${a12Parentes2Delta}</strong><br><br>

                ${Number(a21.value)} x ${Number(resultado3.value)} = <strong>${a13Parenteses1Delta}</strong><br>
                ${Number(a31.value)} x ${Number(resultado2.value)} = <strong>${a13Parenteses2Delta}</strong>`
                break;

            case 11: passos.innerHTML = `<strong>Calculando Δ2...</strong><br>
                ${a11Parenteses1Delta} - ${a11Parenteses2Delta} = <strong>${a11ParDelta}</strong><br>
                ${a12Parentes1Delta} - ${a11Parenteses2Delta} = <strong>${a12ParDelta}</strong><br>
                ${a13Parenteses1Delta} - ${a13Parenteses2Delta} = <strong>${a13ParDelta}</strong><br><br>
            
                ${A11Delta} x ${a11ParDelta} = <strong>${a11FinalDelta}</strong><br>
                ${A12Delta} x ${a12ParDelta} = <strong>${a12FinalDelta}</strong><br>
                ${A13Delta} x ${a13ParDelta} = <strong>${a13FinalDelta}</strong>`
                break;

            case 12: passos.innerHTML = `<strong>Calculando Δ2...</strong><br>
                ${a11FinalDelta} + ${a12FinalDelta} + ${a13FinalDelta} = <strong>${delta2}</strong><br><br>
                Valor de Δ2: <strong>${delta2}</strong>`
                break;

            case 13: passos.innerHTML = `<strong>Calculando Δ3...</strong><br>
                ${Number(a11.value)} x 1 = <strong>${A11Delta3}</strong><br>
                ${Number(a12.value)} x -1 = <strong>${A12Delta3}</strong><br>
                ${Number(resultado1.value)} x 1 = <strong>${A13Delta3}</strong><br><br>

                ${Number(a22.value)} x ${Number(resultado3.value)} = <strong>${a11Parenteses1Delta3}</strong><br>
                ${Number(a32.value)} x ${Number(resultado2.value)} = <strong>${a11Parenteses2Delta3}</strong>`
                break;

            case 14: passos.innerHTML = `<strong>Calculando Δ3...</strong><br>
                ${Number(a21.value)} x ${Number(resultado3.value)} = <strong>${a12Parentes1Delta3}</strong><br>
                ${Number(a31.value)} x ${Number(resultado2.value)} = <strong>${a12Parentes2Delta3}</strong><br><br>

                ${Number(a21.value)} x ${Number(a32.value)} = <strong>${a13Parenteses1Delta3}</strong><br>
                ${Number(a31.value)} x ${Number(a22.value)} = <strong>${a13Parenteses2Delta3}</strong>`
                break;

            case 15: passos.innerHTML = `<strong>Calculando Δ3...</strong><br>
                ${a11Parenteses1Delta3} - ${a11Parenteses2Delta3} = <strong>${a11ParDelta3}</strong><br>
                ${a12Parentes1Delta3} - ${a11Parenteses2Delta3} = <strong>${a12ParDelta3}</strong><br>
                ${a13Parenteses1Delta3} - ${a13Parenteses2Delta3} = <strong>${a13ParDelta3}</strong><br><br>
            
                ${A11Delta3} x ${a11ParDelta3} = <strong>${a11FinalDelta3}</strong><br>
                ${A12Delta3} x ${a12ParDelta3} = <strong>${a12FinalDelta3}</strong><br>
                ${A13Delta3} x ${a13ParDelta3} = <strong>${a13FinalDelta3}</strong>`
                break;

            case 16: passos.innerHTML = `<strong>Calculando Δ3...</strong><br>
                ${a11FinalDelta3} + ${a12FinalDelta3} + ${a13FinalDelta3} = <strong>${delta3}</strong><br><br>
                Valor de Δ3: <strong>${delta3}</strong>`
                break;

            case 17: passos.innerHTML = `<strong>Calculando X, Y e Z...</strong><br>
                X = <strong>${delta1} ∶ ${delta}</strong> = ${X}<br>
                Y = <strong>${delta2} ∶ ${delta}</strong> = ${Y}<br>
                Z = <strong>${delta3} ∶ ${delta}</strong> = ${Z}<br><br>

                Valor de:<br>
                X = <strong>${X}</strong><br>
                Y = <strong>${Y}</strong><br>
                Z = <strong>${Z}<strong>`
                break;

            default:
                break;
        }
    })
})

function goGit() {
    window.open('https://github.com/LoboRetardado', '_blank')
}
function goWhat() {
    window.open('https://wa.me/+258872632392', '_blank')
}
function goYou() {
    window.open('https://youtube.com/@LoboRetardado', '_blank')
}
function goTik() {
    window.open('https://vm.tiktok.com/ZMkEBjgd4/', '_blank')
}
function goFace() {
    window.open('https://www.facebook.com/profile.php?id=61562460322508', '_blank')
}
function home() {
    window.open('../index.html', '_self');
}