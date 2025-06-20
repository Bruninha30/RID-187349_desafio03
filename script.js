const form = document.getElementById("form-tarefa");
const nomeInput = document.getElementById("nomeTarefa");
const etiquetaInput = document.getElementById("etiqueta");
const lista = document.getElementById("listaTarefas");
const rodape = document.getElementById("rodape");

let tarefas = [
  {
    nome: "Implementar tela de listagem de tarefas",
    etiqueta: "frontend",
    criadaEm: "21/08/2024",
    concluida: false,
  },
  {
    nome: "Criar endpoint para cadastro de tarefas",
    etiqueta: "backend",
    criadaEm: "21/08/2024",
    concluida: false,
  },
  {
    nome: "Implementar protótipo de listagem de tarefas",
    etiqueta: "UX",
    criadaEm: "21/08/2024",
    concluida: true,
  },
];

function renderizarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");
    item.classList.toggle("concluida", tarefa.concluida);

    item.innerHTML = `
      <div>
        <p class="titulo-tarefa">${tarefa.nome}</p>
        <p class="etiqueta-tarefa">
          <span class="etiqueta-com-borda">${tarefa.etiqueta}</span>  Criado em: ${tarefa.criadaEm}
        </p>
      </div>
      ${
        tarefa.concluida
          ? `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
               <path d="M10.6667 17.1666L14 20.5L21.3334 13.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
          : `<button class="botao-azul" onclick="concluirTarefa(${index})">Concluir</button>`
      }
    `;

    lista.appendChild(item);
  });

  const concluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  rodape.textContent = `${concluidas} tarefa${concluidas !== 1 ? "s" : ""} concluída${concluidas !== 1 ? "s" : ""}`;
}

function concluirTarefa(index) {
  tarefas[index].concluida = true;
  renderizarTarefas();
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = nomeInput.value.trim();
  const etiqueta = etiquetaInput.value.trim();

  if (nome) {
    tarefas.push({
      nome,
      etiqueta: etiqueta || "sem etiqueta",
      criadaEm: new Date().toLocaleDateString(),
      concluida: false,
    });

    nomeInput.value = "";
    etiquetaInput.value = "";
    renderizarTarefas();
  }
});

document.addEventListener("DOMContentLoaded", renderizarTarefas);
