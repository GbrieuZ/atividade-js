//Funções utilitárias
const  obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

// Funções puras
export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (gastosPorCategoria) => {
  const linhas = gastosPorCategoria.categorias.map(({ nome, valor }) => ({
    id: nome,
    texto: `${nome}: R$ ${formataMoeda(valor)}`,
  }));

  linhas.forEach(({ id, texto }) => {
    obterElemento(id).textContent = texto;
  });

  obterElemento("Total").textContent =
    `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`;
};