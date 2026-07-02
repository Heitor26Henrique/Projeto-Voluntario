// ==========================================
// Listagem das Necessidades
// ==========================================

const necessidades =
    JSON.parse(localStorage.getItem("necessidades")) || [];

const lista = document.getElementById("listaNecessidades");

if (necessidades.length === 0) {

    lista.innerHTML = `
        <p class="sem-registros">
            Nenhuma necessidade cadastrada.
        </p>
    `;

} else {

    necessidades.forEach(necessidade => {

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