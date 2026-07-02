// ==========================================
// Listagem das Necessidades
// ==========================================

const necessidades =
    JSON.parse(localStorage.getItem("necessidades")) || [];

const lista = document.getElementById("listaNecessidades");
const pesquisa = document.getElementById("pesquisa");

// Carrega todas as necessidades
mostrarNecessidades(necessidades);

// Pesquisa em tempo real
pesquisa.addEventListener("input", pesquisar);

// ================================

function pesquisar() {

    const texto = pesquisa.value.toLowerCase();

    const resultado = necessidades.filter(necessidade =>

        necessidade.titulo.toLowerCase().includes(texto) ||

        necessidade.descricao.toLowerCase().includes(texto)

    );

    mostrarNecessidades(resultado);

}

// ================================

function mostrarNecessidades(listaNecessidades) {

    lista.innerHTML = "";

    if (listaNecessidades.length === 0) {

        lista.innerHTML = `

            <p class="sem-registros">

                Nenhuma necessidade encontrada.

            </p>

        `;

        return;

    }

    listaNecessidades.forEach(necessidade => {

        lista.innerHTML += `

        <div class="card">

            <h2>${necessidade.titulo}</h2>

            <p><strong>Instituição:</strong> ${necessidade.instituicao}</p>

            <p><strong>Tipo:</strong> ${necessidade.tipoAjuda}</p>

            <p>${necessidade.descricao}</p>

            <p>

                <strong>Local:</strong>

                ${necessidade.cidade} - ${necessidade.estado}

            </p>

            <p>

                <strong>Contato:</strong>

                ${necessidade.contato}

            </p>

        </div>

        `;

    });

}