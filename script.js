const equacoes = document.getElementById('equacoes');
const sistemasSimples = document.getElementById('sistemasSimples');
const matriz = document.getElementById('matriz');
const sistema = document.getElementById('sistema');

equacoes.addEventListener('click', function () {
    window.open('equacoes/equacoes.html', '_self');
})

sistemasSimples.addEventListener('click', function() {
    window.open('sistemasSimples/sistemas.html', '_self');
})

matriz.addEventListener('click', function() {
    window.open('determinante/determinante.html', '_self');
})

sistema.addEventListener('click', function() {
    window.open('sistema/sistema.html', '_self');
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