/* ================================
   MERCADINHO ESPERANÇA - SCRIPT
================================ */

/* ===== PRODUTOS ===== */
const produtos = [
  {nome:"Arroz 5kg", preco:25.00, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Arroz 1kg", preco:5.80, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Arroz parboilizado 1kg", preco:6.40, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Feijão Carioca 1kg", preco:8.50, cat:"Básicos", sub:"Feijão", un:"pacote"},
  {nome:"Feijão Preto 1kg", preco:9.20, cat:"Básicos", sub:"Feijão", un:"pacote"},
  {nome:"Óleo de Soja 900ml", preco:6.90, cat:"Básicos", sub:"Óleo", un:"unid."},
  {nome:"Leite 1L", preco:4.70, cat:"Básicos", sub:"Leite", un:"unid."},
  {nome:"Ovos (dúzia)", preco:11.90, cat:"Básicos", sub:"Ovos", un:"dúzia"},
  {nome:"Banana (kg)", preco:4.60, cat:"Hortifruti", sub:"Frutas", un:"kg"},
  {nome:"Tomate (kg)", preco:5.90, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Cebola (kg)", preco:4.80, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Detergente", preco:2.80, cat:"Limpeza", sub:"Cozinha", un:"unid."},
  {nome:"Refrigerante 2L", preco:7.99, cat:"Bebidas", sub:"Refrigerantes", un:"unid."}
];

/* ===== IMAGENS ===== */
const IMG_PADRAO = "img/sem-foto.jpg";

const IMAGENS = {
  "Arroz 5kg": "img/arroz.jpg",
  "Arroz 1kg": "img/arroz.jpg",
  "Arroz parboilizado 1kg": "img/arroz.jpg",
  "Feijão Carioca 1kg": "img/feijao.jpg",
  "Feijão Preto 1kg": "img/feijao.jpg",
  "Óleo de Soja 900ml": "img/oleo.jpg",
  "Leite 1L": "img/leite.jpg",
  "Ovos (dúzia)": "img/ovos.jpg",
  "Banana (kg)": "img/banana.jpg",
  "Tomate (kg)": "img/tomate.jpg",
  "Cebola (kg)": "img/cebola.jpg",
  "Detergente": "img/detergente.jpg",
  "Refrigerante 2L": "img/refrigerante.jpg"
};

function imgDoProduto(nome){
  return IMAGENS[nome] || IMG_PADRAO;
}

/* ===== RENDER ===== */
const grid = document.getElementById("grid");

function render(){
  grid.innerHTML = "";

  produtos.forEach((p)=>{
    const card = document.createElement("div");
    card.className = "card";

    const imgSrc = imgDoProduto(p.nome);

    card.innerHTML = `
      <img class="pimg" src="${imgSrc}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <div class="price">R$ ${p.preco.toFixed(2)}</div>
    `;

    grid.appendChild(card);
  });
}

render();
