// Função para alternar entre as abas
function mostrarAba(abaId) {
    // Oculta todas as abas
    const abas = document.querySelectorAll('.aba');
    abas.forEach(aba => aba.classList.add('hidden'));

    // Mostra a aba selecionada
    const abaSelecionada = document.getElementById(abaId);
    abaSelecionada.classList.remove('hidden');
}

// Inicializa a aba "Sobre Mim" ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    mostrarAba('sobre-mim');
});
