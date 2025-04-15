const xMais = document.getElementById('xMenos');
const yMais = document.getElementById('yMenos');
const resultadoMais = document.getElementById('resultadoMenos');
const calcular = document.getElementById('calcular');
const textRes = document.getElementById('textRes');
const passos = document.getElementById('passos');
const sinal = document.getElementById('sinal');
var maisOuMenos = true;

sinal.addEventListener('click', function() {
    if (maisOuMenos) {
        maisOuMenos = false;
        sinal.value = "Sinal -"
    } else {
        maisOuMenos = true;
        sinal.value = "Sinal +"
    }
})

calcular.addEventListener('click', function() {
    if (maisOuMenos) {
        let valorXMais = Number(xMais.value);
        let valorYMais = Number(yMais.value);
        let valorResultadoMais = Number(resultadoMais.value);
        
        let dividirXMais = valorResultadoMais - valorYMais;
        let finalMais = dividirXMais / valorXMais;
        textRes.innerHTML = `O valor de X é <strong>${finalMais}</strong>`;
    
        passos.innerHTML = `<strong>Resolução:</strong><br>
        ${valorXMais}X + ${valorYMais} = ${valorResultadoMais}<br>
        ${valorXMais}X = <strong>${valorResultadoMais} - ${valorYMais}</strong><br>
        X = <strong>${dividirXMais} ∶ ${valorXMais}</strong><br>
        X = <strong>${finalMais}</strong>`    
    } else {
        let valorXMais = Number(xMais.value);
        let valorYMais = Number(yMais.value);
        let valorResultadoMais = Number(resultadoMais.value);
        
        let dividirXMais = valorResultadoMais + valorYMais;
        let finalMais = dividirXMais / valorXMais;
        textRes.innerHTML = `O valor de X é <strong>${finalMais}</strong>`;
    
        passos.innerHTML = `<strong>Resolução:</strong><br>
        ${valorXMais}X + ${valorYMais} = ${valorResultadoMais}<br>
        ${valorXMais}X = <strong>${valorResultadoMais} + ${valorYMais}</strong><br>
        X = <strong>${dividirXMais} ∶ ${valorXMais}</strong><br>
        X = <strong>${finalMais}</strong>`;
    }
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