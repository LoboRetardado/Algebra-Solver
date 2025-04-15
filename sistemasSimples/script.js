const primeiroX = document.getElementById('primeiroX');
const primeiroY = document.getElementById('primeiroY');
const primeiroResultado = document.getElementById('primeiroResultado');
const segundoResultado = document.getElementById('segundoResultado');
const calcular = document.getElementById('calcular');
const passos = document.getElementById('passos');
const segundoX = document.getElementById('segundoX');
const segundoY = document.getElementById('segundoY');
const show = document.getElementById('show');
let etapa = 0;

calcular.addEventListener('click', function() {
    etapa = 0;
    let primeiroXVal = Number(primeiroX.value);
    let primeiroYVal = Number(primeiroY.value);
    let segundoXVal = Number(segundoX.value);
    let segundoYVal = Number(segundoY.value);
    let primeiroResultadoVal = Number(primeiroResultado.value);
    let segundoResultadoVal = Number(segundoResultado.value);

    let primeiroDelta = primeiroXVal * segundoYVal;
    let segundoDelta = segundoXVal * primeiroYVal;
    let delta = primeiroDelta - segundoDelta;

    let primeiroDelta1 = primeiroResultadoVal * segundoYVal;
    let segundoDelta1 = segundoResultadoVal * primeiroYVal;
    let delta1 = primeiroDelta1 - segundoDelta1;

    let primeiroDelta2 = primeiroXVal * segundoResultadoVal;
    let segundoDelta2 = segundoXVal * primeiroResultadoVal;
    let delta2 = primeiroDelta2 - segundoDelta2;

    let X = delta1 / delta;
    let Y = delta2 / delta;
    passos.innerHTML = `<strong>Para:</strong><br>${primeiroXVal}X + ${primeiroYVal}Y = ${primeiroResultadoVal}<br>
    ${segundoXVal}X + ${segundoYVal}Y = ${segundoResultadoVal}<br><br>
    O valor de <strong>X = ${X} | Y = ${Y}</strong>`;
    show.style.display = 'block'

    show.addEventListener('click', function start() {
        etapa ++;

        switch (etapa) {
            case 1:
                show.value = "Segundo passo >"
                passos.innerHTML = `<strong>Resolução:</strong><br>
                <strong>Δ</strong> = ${primeiroXVal} x ${segundoYVal} - ${segundoXVal} x ${primeiroYVal}<br>
                <strong>Δ</strong> = ${primeiroDelta} - ${segundoDelta}<br>
                <strong>Δ</strong> = ${delta}`;
                break;

            case 2:
                show.value = "Terceiro passo >"
                passos.innerHTML = `<strong>Resolução:</strong><br>
                <strong>Δ1</strong> = ${primeiroResultadoVal} x ${segundoYVal} - ${segundoResultadoVal} x ${primeiroYVal}<br>
                <strong>Δ1</strong> = ${primeiroDelta1} - ${segundoDelta1}<br>
                <strong>Δ1</strong> = ${delta1}`;
                break;

            case 3:
                show.value = "Quarto passo >"
                passos.innerHTML = `<strong>Resolução:</strong><br>
                <strong>Δ2</strong> = ${primeiroXVal} x ${segundoResultadoVal} - ${segundoXVal} x ${primeiroResultadoVal}<br>
                <strong>Δ2</strong> = ${primeiroDelta2} - ${segundoDelta2}<br>
                <strong>Δ2</strong> = ${delta2}`;
                break;

            case 4:
                show.value = "Recomeçar >"
                passos.innerHTML = `<strong>Resolução:<br>
                X</strong> = Δ1 / Δ<br>
                <strong>Y</strong> = Δ2 / Δ<br><br>
                <strong>X</strong> = ${delta1} / ${delta}<br>
                <strong>Y</strong> = ${delta2} / ${delta}<br><br>
                <strong>X</strong> = ${X}<br>
                <strong>Y</strong> = ${Y}`;
                break;

            case 5:
                start();
                break;

            default:
                show.value = "Mostrar resolução"
                etapa = 0;
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