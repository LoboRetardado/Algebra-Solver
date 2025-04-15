const a11 = document.getElementById('a11');
const a12 = document.getElementById('a12');
const a13 = document.getElementById('a13');
const a21 = document.getElementById('a21');
const a22 = document.getElementById('a22');
const a23 = document.getElementById('a23');
const a31 = document.getElementById('a31');
const a32 = document.getElementById('a32');
const a33 = document.getElementById('a33');
const passos = document.getElementById('passos');
const calcular = document.getElementById('calcular');
const showPassos = document.getElementById('showPassos');
let etapa = 0;

calcular.addEventListener('click', function() {
    etapa = 0;
    let a11Num = Number(a11.value);
    let a12Num = Number(a12.value);
    let a13Num = Number(a13.value);

    let a21Num = Number(a21.value);
    let a22Num = Number(a22.value);
    let a23Num = Number(a23.value);

    let a31Num = Number(a31.value);
    let a32Num = Number(a32.value);
    let a33Num = Number(a33.value);

    let a11Parenteses1 = a22Num * a33Num;
    let a11Parenteses2 = a32Num * a23Num;

    let a12Parenteses1 = a21Num * a33Num;
    let a12Parenteses2 = a31Num * a23Num;

    let a13Parenteses1 = a21Num * a32Num;
    let a13Parenteses2 = a31Num * a22Num;

    let a11Par = a11Parenteses1 - a11Parenteses2;
    let a12Par = a12Parenteses1 - a12Parenteses2;
    let a13Par = a13Parenteses1 - a13Parenteses2;

    let a11Final = a11Num * a11Par;
    let a12Final = a12Num * a12Par;
    let a13Final = a13Num * a13Par;

    let determinante = a11Final + a12Final + a13Final;
    passos.innerHTML = `<strong>Resultado</strong><br>
    O valor da determinante é <strong>${determinante}</strong>`

    showPassos.style.display = `block`;
    showPassos.addEventListener('click', function() {
        showPassos.value = `Proximo passo >`;
        etapa ++;

        switch (etapa) {
            case 1: passos.innerHTML = `<strong>Primeiro passo...</strong><br>
                ${a22Num} x ${a33Num} = <strong>${a11Parenteses1}</strong><br>
                ${a32Num} x ${a23Num} = <strong>${a11Parenteses2}</strong><br><br>
    
                ${a21Num} x ${a33Num} = <strong>${a12Parenteses1}</strong><br>
                ${a31Num} x ${a23Num} = <strong>${a12Parenteses2}</strong><br><br>
            
                ${a21Num} x ${a32Num} = <strong>${a13Parenteses1}</strong><br>
                ${a31Num} x ${a22Num} = <strong>${a13Parenteses2}</strong>`
            break;

            case 2: passos.innerHTML = `<strong>Segundo passo...</strong><br>
                ${a11Parenteses1} - ${a11Parenteses2} = <strong>${a11Par}</strong><br>
                ${a12Parenteses1} - ${a12Parenteses2} = <strong>${a12Par}</strong><br>
                ${a13Parenteses1} - ${a13Parenteses2} = <strong>${a13Par}</strong><br>`
            break;

            case 3: passos.innerHTML = `<strong>Terceiro passo...</strong><br>
                ${a11Num} x ${a11Par} = <strong>${a11Final}<br></strong>
                ${a12Num} x ${a12Par} = <strong>${a12Final}<br></strong>
                ${a13Num} x ${a13Par} = <strong>${a13Final}<br></strong>`
            break;

            case 4: passos.innerHTML = `<strong>Ultimo passo...</strong><br>
                ${a11Final} + ${a12Final} + ${a13Final} = <strong>${determinante}</strong><br>
                O valor da determinante é <strong>${determinante}</strong>`
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