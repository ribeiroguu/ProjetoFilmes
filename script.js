document.getElementById('filme-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário

    let titulo = document.getElementById('titulo').value.trim();
    let diretor = document.getElementById('diretor').value.trim();
    let ano = document.getElementById('ano').value.trim();

    let mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = '';  // Limpa a mensagem de erro

    if (!titulo) {
        mensagem.innerHTML = 'Preencha informações no campo Título';
        return;
    }
    if (!diretor) {
        mensagem.innerHTML = 'Preencha informações no campo Diretor';
        return;
    }
    if (!ano) {
        mensagem.innerHTML = 'Preencha informações no campo Ano de Lançamento';
        return;
    }

    let lista = document.getElementById('lista');
    let item = document.createElement('li');
    item.textContent = `${titulo} - ${diretor} (${ano})`;
    lista.appendChild(item);

    // Limpa os campos do formulário após adicionar o filme à lista
    document.getElementById('titulo').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('ano').value = '';
});
