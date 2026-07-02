// ==========================================
// Integração com ViaCEP
// ==========================================

const campoCep = document.getElementById("cep");

campoCep.addEventListener("blur", buscarCEP);

function buscarCEP() {

    const cep = campoCep.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {

            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;

        })
        .catch(() => {

            alert("Erro ao consultar o CEP.");

        });

}
