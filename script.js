// =========================
// CONFIG
// =========================
const WHATSAPP_NUMBER = "558183173613";
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=70";

// Imagens por SKU (sem dor de cabeça):
// Coloque as imagens em: assets/images/SKU.jpg
// Ex: assets/images/1001.jpg
function imgBySku(sku) {
  return `assets/images/${sku}.jpg`;
}

// =========================
// PRODUTOS (SEM PADARIA)
// =========================
const PRODUTOS = [
  // Mercearia
  { sku: "1001", nome: "Arroz Tipo 1kg", categoria: "Mercearia" },
  { sku: "1002", nome: "Feijão Carioca 1kg", categoria: "Mercearia" },
  { sku: "1003", nome: "Feijão Preto 1kg", categoria: "Mercearia" },
  { sku: "1004", nome: "Macarrão Espaguete 500g", categoria: "Mercearia" },
  { sku: "1005", nome: "Macarrão Parafuso 500g", categoria: "Mercearia" },
  { sku: "1006", nome: "Farinha de Trigo 1kg", categoria: "Mercearia" },
  { sku: "1007", nome: "Farinha de Mandioca 1kg", categoria: "Mercearia" },
  { sku: "1008", nome: "Açúcar Cristal 1kg", categoria: "Mercearia" },
  { sku: "1009", nome: "Açúcar Refinado 1kg", categoria: "Mercearia" },
  { sku: "1010", nome: "Café Torrado e Moído 250g", categoria: "Mercearia" },
  { sku: "1011", nome: "Sal Refinado 1kg", categoria: "Mercearia" },
  { sku: "1012", nome: "Óleo de Soja 900ml", categoria: "Mercearia" },
  { sku: "1013", nome: "Vinagre 750ml", categoria: "Mercearia" },
  { sku: "1014", nome: "Molho de Tomate 300g", categoria: "Mercearia" },
  { sku: "1015", nome: "Extrato de Tomate 140g", categoria: "Mercearia" },
  { sku: "1016", nome: "Milho Verde Lata 170g", categoria: "Mercearia" },
  { sku: "1017", nome: "Ervilha Lata 170g", categoria: "Mercearia" },
  { sku: "1018", nome: "Atum Lata 170g", categoria: "Mercearia" },
  { sku: "1019", nome: "Sardinha Lata 125g", categoria: "Mercearia" },
  { sku: "1020", nome: "Biscoito Cream Cracker 200g", categoria: "Mercearia" },
  { sku: "1021", nome: "Biscoito Água e Sal 200g", categoria: "Mercearia" },
  { sku: "1022", nome: "Biscoito Recheado Chocolate", categoria: "Mercearia" },
  { sku: "1023", nome: "Biscoito Recheado Morango", categoria: "Mercearia" },
  { sku: "1024", nome: "Achocolatado em Pó 400g", categoria: "Mercearia" },
  { sku: "1025", nome: "Fubá 500g", categoria: "Mercearia" },
  { sku: "1026", nome: "Aveia em Flocos 200g", categoria: "Mercearia" },
  { sku: "1027", nome: "Leite em Pó 400g", categoria: "Mercearia" },
  { sku: "1028", nome: "Cereal Matinal 200g", categoria: "Mercearia" },
  { sku: "1029", nome: "Tempero Completo 300g", categoria: "Mercearia" },
  { sku: "1030", nome: "Caldo de Carne 57g", categoria: "Mercearia" },
  { sku: "1031", nome: "Maionese 500g", categoria: "Mercearia" },
  { sku: "1032", nome: "Ketchup 400g", categoria: "Mercearia" },
  { sku: "1033", nome: "Mostarda 200g", categoria: "Mercearia" },
  { sku: "1034", nome: "Margarina 500g", categoria: "Mercearia" },

  // Hortifruti
  { sku: "2001", nome: "Banana Prata 1kg", categoria: "Hortifruti" },
  { sku: "2002", nome: "Banana Nanica 1kg", categoria: "Hortifruti" },
  { sku: "2003", nome: "Maçã 1kg", categoria: "Hortifruti" },
  { sku: "2004", nome: "Laranja 1kg", categoria: "Hortifruti" },
  { sku: "2005", nome: "Limão 500g", categoria: "Hortifruti" },
  { sku: "2006", nome: "Tomate 1kg", categoria: "Hortifruti" },
  { sku: "2007", nome: "Cebola 1kg", categoria: "Hortifruti" },
  { sku: "2008", nome: "Batata 1kg", categoria: "Hortifruti" },
  { sku: "2009", nome: "Cenoura 1kg", categoria: "Hortifruti" },
  { sku: "2010", nome: "Alface 1 unidade", categoria: "Hortifruti" },
  { sku: "2011", nome: "Coentro 1 maço", categoria: "Hortifruti" },
  { sku: "2012", nome: "Cebolinha 1 maço", categoria: "Hortifruti" },
  { sku: "2013", nome: "Pimentão 500g", categoria: "Hortifruti" },
  { sku: "2014", nome: "Alho 200g", categoria: "Hortifruti" },

  // Limpeza
  { sku: "3001", nome: "Detergente Neutro 500ml", categoria: "Limpeza" },
  { sku: "3002", nome: "Água Sanitária 1L", categoria: "Limpeza" },
  { sku: "3003", nome: "Desinfetante 1L", categoria: "Limpeza" },
  { sku: "3004", nome: "Sabão em Pó 1kg", categoria: "Limpeza" },
  { sku: "3005", nome: "Sabão em Barra", categoria: "Limpeza" },
  { sku: "3006", nome: "Amaciante 2L", categoria: "Limpeza" },
  { sku: "3007", nome: "Esponja Multiuso", categoria: "Limpeza" },
  { sku: "3008", nome: "Saco de Lixo 30L", categoria: "Limpeza" },
  { sku: "3009", nome: "Saco de Lixo 50L", categoria: "Limpeza" },
  { sku: "3010", nome: "Pano de Chão", categoria: "Limpeza" },
  { sku: "3011", nome: "Limpador Perfumado 500ml", categoria: "Limpeza" },
  { sku: "3012", nome: "Álcool 70 500ml", categoria: "Limpeza" },
  { sku: "3013", nome: "Lustra Móveis 200ml", categoria: "Limpeza" },

  // Higiene
  { sku: "4001", nome: "Papel Higiênico 4 rolos", categoria: "Higiene" },
  { sku: "4002", nome: "Creme Dental 90g", categoria: "Higiene" },
  { sku: "4003", nome: "Escova de Dentes", categoria: "Higiene" },
  { sku: "4004", nome: "Sabonete em Barra", categoria: "Higiene" },
  { sku: "4005", nome: "Shampoo 350ml", categoria: "Higiene" },
  { sku: "4006", nome: "Condicionador 350ml", categoria: "Higiene" },
  { sku: "4007", nome: "Desodorante Aerosol", categoria: "Higiene" },
  { sku: "4008", nome: "Absorvente", categoria: "Higiene" },
  { sku: "4009", nome: "Lenço Umedecido", categoria: "Higiene" },
  { sku: "4010", nome: "Algodão 50g", categoria: "Higiene" },
  { sku: "4011", nome: "Cotonete 75 unidades", categoria: "Higiene" },

  // Laticínios
  { sku: "5001", nome: "Leite UHT 1L", categoria: "Laticínios" },
  { sku: "5002", nome: "Iogurte Natural 170g", categoria: "Laticínios" },
  { sku: "5003", nome: "Queijo Mussarela 200g", categoria: "Laticínios" },
  { sku: "5004", nome: "Requeijão 200g", categoria: "Laticínios" },
  { sku: "5005", nome: "Creme de Leite 200g", categoria: "Laticínios" },
  { sku: "5006", nome: "Leite Condensado 395g", categoria: "Laticínios" },
  { sku: "5007", nome: "Manteiga 200g", categoria: "Laticínios" },

  // Carnes
  { sku: "6001", nome: "Frango Inteiro 1kg", categoria: "Carnes" },
  { sku: "6002", nome: "Peito de Frango 1kg", categoria: "Carnes" },
  { sku: "6003", nome: "Coxa e Sobrecoxa 1kg", categoria: "Carnes" },
  { sku: "6004", nome: "Carne Moída 1kg", categoria: "Carnes" },
  { sku: "6005", nome: "Linguiça 1kg", categoria: "Carnes" },
  { sku: "6006", nome: "Salsicha 500g", categoria: "Carnes" },

  // Congelados
  { sku: "7001", nome: "Hambúrguer Congelado", categoria: "Congelados" },
  { sku: "7002", nome: "Batata Frita Congelada 1kg", categoria: "Congelados" },
  { sku: "7003", nome: "Lasanha Congelada", categoria: "Congelados" },
  { sku: "7004", nome: "Pizza Congelada", categoria: "Congelados" },
  { sku: "7005", nome: "Nuggets 300g", categoria: "Congelados" },

  // Bebidas (só Itaipava e Brahma)
  { sku: "8001", nome: "Cerveja Itaipava Lata 350ml", categoria: "Bebidas" },
  { sku: "8002", nome: "Cerveja Brahma Lata 350ml", categoria: "Bebidas" },
];

// =========================
// DOM
// =========================
const $grid = document.getElementById("grid");
const $lista = document.getElementById("lista");
const $categoria = document.getElementById("categoria");
const $search = document.getElementById("search");
const $obs = document.getElementById("obs");
const $btnWhats = document.getElementById("btnWhats");
const $btnClear = document.getElementById("btnClear");
const $btnCopy = document.getElementById("btnCopy");
const $empty = document.getElementById("empty");
const $cats = document.getElementById("cats");

// Header/hero/footer/float
const $btnWhatsappTop = document.getElementById("btnWhatsappTop");
const $btnWhatsappHero = document.getElementById("btnWhatsappHero");
const $btnWhatsappFooter = document.getElementById("btnWhatsappFooter");
const $floatZap = document.getElementById("floatZap");

// =========================
// STATE
// =========================
const carrinho = new Map(); // sku -> { produto, qtd }

// =========================
// HELPERS
// =========================
function waLink(texto) {
  const msg = encodeURIComponent(texto);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function setAllZapLinks() {
  const link = waLink("Olá! Quero fazer um pedido no Mercadinho Esperança.");
  $btnWhatsappTop.href = link;
  $btnWhatsappHero.href = link;
  $btnWhatsappFooter.href = link;
  $floatZap.href = link;
}

function money(n) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getCategorias() {
  const cats = Array.from(new Set(PRODUTOS.map(p => p.categoria)));
  return ["Todas", ...cats];
}

function montarSelectCategorias() {
  $categoria.innerHTML = getCategorias()
    .map(c => `<option value="${c}">${c}</option>`)
    .join("");
}

function montarCardsCategorias() {
  const cats = getCategorias().filter(c => c !== "Todas");
  const icons = {
    "Mercearia": "🛒",
    "Hortifruti": "🥬",
    "Limpeza": "🧼",
    "Higiene": "🧴",
    "Laticínios": "🥛",
    "Carnes": "🥩",
    "Congelados": "🧊",
    "Bebidas": "🍺",
  };

  $cats.innerHTML = cats.map(c => `
    <button
      class="text-left rounded-3xl border border-black/5 bg-white shadow-soft p-5 hover:translate-y-[-1px] transition"
      data-cat="${c}"
    >
      <div class="text-2xl">${icons[c] || "🏷️"}</div>
      <div class="font-extrabold mt-2">${c}</div>
      <div class="text-sm text-slate-600 mt-1">Ver produtos</div>
    </button>
  `).join("");

  $cats.querySelectorAll("button[data-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-cat");
      $categoria.value = cat;
      render();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function filtrarProdutos() {
  const termo = ($search.value || "").trim().toLowerCase();
  const cat = $categoria.value;

  return PRODUTOS.filter(p => {
    const okCat = (cat === "Todas") || (p.categoria === cat);
    const okTermo = !termo || p.nome.toLowerCase().includes(termo) || p.sku.includes(termo);
    return okCat && okTermo;
  });
}

// =========================
// RENDER
// =========================
function renderGrid() {
  const prods = filtrarProdutos();

  if (!prods.length) {
    $grid.classList.add("hidden");
    $empty.classList.remove("hidden");
    return;
  }

  $grid.classList.remove("hidden");
  $empty.classList.add("hidden");

  $grid.innerHTML = prods.map(p => {
    const qtd = carrinho.get(p.sku)?.qtd || 0;

    return `
      <div class="rounded-3xl bg-white border border-black/5 shadow-soft overflow-hidden">
        <img
          src="${imgBySku(p.sku)}"
          alt="${p.nome}"
          class="h-40 w-full object-cover bg-slate-100"
          onerror="this.onerror=null; this.src='${FALLBACK_IMG}'"
        />
        <div class="p-5">
          <p class="text-xs text-slate-500">${p.categoria}</p>
          <h3 class="font-extrabold text-base leading-snug mt-1">${p.nome}</h3>
          <p class="text-xs text-slate-400">SKU: ${p.sku}</p>

          <div class="flex items-center justify-between mt-4">
            <button class="btnMinus w-10 h-10 rounded-full border border-black/10 hover:bg-slate-50 font-extrabold" data-sku="${p.sku}">−</button>

            <div class="text-center">
              <div class="text-xs text-slate-500">Quantidade</div>
              <div class="font-extrabold text-emerald-700">${qtd}</div>
            </div>

            <button class="btnPlus w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold" data-sku="${p.sku}">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // eventos +/-
  $grid.querySelectorAll(".btnPlus").forEach(btn => {
    btn.addEventListener("click", () => {
      const sku = btn.getAttribute("data-sku");
      const prod = PRODUTOS.find(x => x.sku === sku);
      const atual = carrinho.get(sku)?.qtd || 0;
      carrinho.set(sku, { produto: prod, qtd: atual + 1 });
      renderLista();
      renderGrid();
    });
  });

  $grid.querySelectorAll(".btnMinus").forEach(btn => {
    btn.addEventListener("click", () => {
      const sku = btn.getAttribute("data-sku");
      const atual = carrinho.get(sku)?.qtd || 0;
      if (atual <= 1) carrinho.delete(sku);
      else {
        const prod = carrinho.get(sku).produto;
        carrinho.set(sku, { produto: prod, qtd: atual - 1 });
      }
      renderLista();
      renderGrid();
    });
  });
}

function renderLista() {
  const itens = Array.from(carrinho.values());

  if (!itens.length) {
    $lista.innerHTML = `<div class="text-sm text-slate-500">Nenhum item ainda.</div>`;
    return;
  }

  $lista.innerHTML = itens.map(({ produto, qtd }) => `
    <div class="flex items-center justify-between gap-3 bg-white rounded-2xl border border-black/5 p-3">
      <div>
        <div class="font-semibold text-sm">${produto.nome}</div>
        <div class="text-xs text-slate-500">SKU ${produto.sku} • ${produto.categoria}</div>
      </div>
      <div class="font-extrabold text-emerald-700">x${qtd}</div>
    </div>
  `).join("");
}

function montarMensagemWhats() {
  const itens = Array.from(carrinho.values());
  if (!itens.length) return "Olá! Quero fazer um pedido no Mercadinho Esperança.";

  const linhas = itens.map(({ produto, qtd }) => `• ${produto.nome} (SKU ${produto.sku}) x${qtd}`);

  const obs = ($obs.value || "").trim();
  const extra = obs ? `\n\nObservações:\n${obs}` : "";

  return `Olá! Quero fazer um pedido no Mercadinho Esperança:\n\n${linhas.join("\n")}${extra}`;
}

function render() {
  renderGrid();
  renderLista();
}

// =========================
// ACTIONS
// =========================
$btnWhats.addEventListener("click", () => {
  const msg = montarMensagemWhats();
  window.open(waLink(msg), "_blank");
});

$btnClear.addEventListener("click", () => {
  carrinho.clear();
  $obs.value = "";
  render();
});

$btnCopy.addEventListener("click", async () => {
  const msg = montarMensagemWhats();
  try {
    await navigator.clipboard.writeText(msg);
    $btnCopy.textContent = "Copiado!";
    setTimeout(() => ($btnCopy.textContent = "Copiar lista"), 1200);
  } catch {
    alert("Não consegui copiar automaticamente. Vou mostrar a mensagem para você copiar.");
    prompt("Copie a mensagem do pedido:", msg);
  }
});

$search.addEventListener("input", render);
$categoria.addEventListener("change", render);

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  setAllZapLinks();
  montarSelectCategorias();
  montarCardsCategorias();
  render();
});
