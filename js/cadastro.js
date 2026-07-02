// ==========================================
// Validação do Formulário
// ==========================================

const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {

    event.preventDefault();

    const instituicao = document.getElementById("instituicao").value.trim();
    const tipoAjuda = document.getElementById("tipoAjuda").value;
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const contato = document.getElementById("contato").value.trim();

    if (
        instituicao === "" ||
        tipoAjuda === "" ||
        titulo === "" ||
        descricao === "" ||
        cep === "" ||
        contato === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    alert("Validação realizada com sucesso!");

}