function CarregarComponente(caminhoComponente, tagId) {
    if (caminhoComponente && tagId) {
        const id = document.getElementById(tagId);
        
        //criar a div para inserir o elemento dentro
        const divComponente = document.createElement('div');
        
        // Usa um objeto XMLHttpRequest para carregar o componentizão
        const xhr = new XMLHttpRequest();
        xhr.open('GET', caminhoComponente, true);
        
        xhr.onload = () => {
            if (xhr.status === 200) {
                divComponente.innerHTML = xhr.responseText; // Insere o conteúdo carregaduuuuu
                id.innerHTML = ''; // Limpa o conteúdo atual
                id.appendChild(divComponente); // Adiciona o novo componente
            } else {
                console.error('Erro ao carregar o componente❗ ' + xhr.status);
            }
        };
        
        xhr.onerror = () => {
            console.error('Erro de rede 🌐');
        };
        
        xhr.send(); // Envia a requisição
    } else {
        console.error('Caminho do componente ou ID da tag não pode ser nulo 😹😸😺.');
    }
}
