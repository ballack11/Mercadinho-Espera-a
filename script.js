/* ===== HORÁRIO ABERTO/FECHADO ===== */
function verificarHorario(){
  const d=new Date(), dia=d.getDay(), h=d.getHours()+d.getMinutes()/60;
  let aberto=false;
  if(dia===1) aberto=h>=7 && h<12;                 // segunda
  else if(dia>=2 && dia<=6) aberto=h>=7 && h<19;   // terça-sábado
  else if(dia===0) aberto=h>=7 && h<12;            // domingo

  const el=document.getElementById("status");
  el.textContent = aberto ? "🟢 ABERTO AGORA" : "🔴 FECHADO AGORA";
  el.className = "status " + (aberto ? "open" : "closed");
}
verificarHorario();
setInterval(verificarHorario,60000);

/* ===== DEPARTAMENTOS + SUBMENU ===== */
const departamentos = [
  {key:"Todos", icon:"🛒", subs:["Tudo"]},
  {key:"Básicos", icon:"🧺", subs:["Arroz","Feijão","Óleo","Café","Açúcar","Sal","Farinha","Leite","Ovos"]},
  {key:"Mercearia", icon:"🍪", subs:["Biscoitos","Enlatados","Massas","Molhos","Temperos","Doces"]},
  {key:"Frios & Laticínios", icon:"🧀", subs:["Queijos","Presunto","Mortadela","Iogurte","Manteiga","Requeijão"]},
  {key:"Açougue", icon:"🥩", subs:["Bovina","Frango","Suína","Linguiças","Peixes"]},
  {key:"Hortifruti", icon:"🥬", subs:["Frutas","Verduras","Legumes","Temperos"]},
  {key:"Bebidas", icon:"🥤", subs:["Água","Refrigerantes","Sucos","Cervejas","Energéticos"]},
  {key:"Limpeza", icon:"🧼", subs:["Lavanderia","Cozinha","Casa","Sacos de lixo"]},
  {key:"Higiene & Cuidados", icon:"🪥", subs:["Banho","Cabelo","Dental","Papel","Feminino"]},
];

/* ===== PRODUTOS ===== */
const produtos = [
  // BÁSICOS
  {nome:"Arroz 5kg", preco:25.00, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Arroz 1kg", preco:5.80, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Arroz parboilizado 1kg", preco:6.40, cat:"Básicos", sub:"Arroz", un:"pacote"},
  {nome:"Feijão Carioca 1kg", preco:8.50, cat:"Básicos", sub:"Feijão", un:"pacote"},
  {nome:"Feijão Preto 1kg", preco:9.20, cat:"Básicos", sub:"Feijão", un:"pacote"},
  {nome:"Açúcar 1kg", preco:4.20, cat:"Básicos", sub:"Açúcar", un:"pacote"},
  {nome:"Sal 1kg", preco:2.00, cat:"Básicos", sub:"Sal", un:"pacote"},
  {nome:"Óleo de Soja 900ml", preco:6.90, cat:"Básicos", sub:"Óleo", un:"unid."},
  {nome:"Café 500g", preco:14.90, cat:"Básicos", sub:"Café", un:"pacote"},
  {nome:"Leite 1L", preco:4.70, cat:"Básicos", sub:"Leite", un:"unid."},
  {nome:"Ovos (dúzia)", preco:11.90, cat:"Básicos", sub:"Ovos", un:"dúzia"},
  {nome:"Farinha de Trigo 1kg", preco:4.80, cat:"Básicos", sub:"Farinha", un:"pacote"},
  {nome:"Farinha de Milho (flocão) 500g", preco:3.60, cat:"Básicos", sub:"Farinha", un:"pacote"},
  {nome:"Cuscuz (flocão) 500g", preco:3.60, cat:"Básicos", sub:"Farinha", un:"pacote"},

  // MERCEARIA
  {nome:"Biscoito Cream Cracker", preco:4.50, cat:"Mercearia", sub:"Biscoitos", un:"pacote"},
  {nome:"Biscoito Recheado", preco:3.90, cat:"Mercearia", sub:"Biscoitos", un:"pacote"},
  {nome:"Macarrão Espaguete 500g", preco:3.80, cat:"Mercearia", sub:"Massas", un:"pacote"},
  {nome:"Macarrão Parafuso 500g", preco:4.10, cat:"Mercearia", sub:"Massas", un:"pacote"},
  {nome:"Macarrão instantâneo", preco:2.50, cat:"Mercearia", sub:"Massas", un:"unid."},
  {nome:"Extrato de Tomate", preco:3.50, cat:"Mercearia", sub:"Molhos", un:"unid."},
  {nome:"Molho de Tomate", preco:2.90, cat:"Mercearia", sub:"Molhos", un:"unid."},
  {nome:"Milho Verde (lata)", preco:4.20, cat:"Mercearia", sub:"Enlatados", un:"lata"},
  {nome:"Ervilha (lata)", preco:4.10, cat:"Mercearia", sub:"Enlatados", un:"lata"},
  {nome:"Sardinha (lata)", preco:6.50, cat:"Mercearia", sub:"Enlatados", un:"lata"},
  {nome:"Atum (lata)", preco:7.90, cat:"Mercearia", sub:"Enlatados", un:"lata"},
  {nome:"Achocolatado", preco:6.80, cat:"Mercearia", sub:"Doces", un:"unid."},
  {nome:"Chocolate (barra)", preco:6.50, cat:"Mercearia", sub:"Doces", un:"unid."},
  {nome:"Gelatina", preco:2.20, cat:"Mercearia", sub:"Doces", un:"unid."},
  {nome:"Adoçante", preco:6.90, cat:"Mercearia", sub:"Doces", un:"unid."},
  {nome:"Margarina", preco:5.50, cat:"Mercearia", sub:"Temperos", un:"unid."},
  {nome:"Maionese", preco:6.20, cat:"Mercearia", sub:"Temperos", un:"unid."},
  {nome:"Ketchup", preco:6.00, cat:"Mercearia", sub:"Temperos", un:"unid."},
  {nome:"Mostarda", preco:5.80, cat:"Mercearia", sub:"Temperos", un:"unid."},
  {nome:"Tempero completo", preco:3.50, cat:"Mercearia", sub:"Temperos", un:"unid."},
  {nome:"Caldo de galinha", preco:2.50, cat:"Mercearia", sub:"Temperos", un:"cx"},
  {nome:"Pipoca (milho) 500g", preco:4.20, cat:"Mercearia", sub:"Doces", un:"pacote"},
  {nome:"Fermento químico", preco:4.90, cat:"Mercearia", sub:"Doces", un:"unid."},
  {nome:"Canjica", preco:5.50, cat:"Mercearia", sub:"Doces", un:"pacote"},
  {nome:"Arroz doce (mistura)", preco:4.90, cat:"Mercearia", sub:"Doces", un:"pacote"},
  {nome:"Pão de forma", preco:7.50, cat:"Mercearia", sub:"Biscoitos", un:"pacote"},
  {nome:"Bolo pronto", preco:6.90, cat:"Mercearia", sub:"Doces", un:"unid."},

  // FRIOS & LATICÍNIOS
  {nome:"Mortadela (kg)", preco:12.90, cat:"Frios & Laticínios", sub:"Mortadela", un:"kg", obs:"Preço por kg"},
  {nome:"Presunto (kg)", preco:28.90, cat:"Frios & Laticínios", sub:"Presunto", un:"kg", obs:"Preço por kg"},
  {nome:"Queijo Mussarela (kg)", preco:39.90, cat:"Frios & Laticínios", sub:"Queijos", un:"kg", obs:"Preço por kg"},
  {nome:"Queijo Prato (kg)", preco:42.90, cat:"Frios & Laticínios", sub:"Queijos", un:"kg", obs:"Preço por kg"},
  {nome:"Queijo Coalho (kg)", preco:44.90, cat:"Frios & Laticínios", sub:"Queijos", un:"kg", obs:"Preço por kg"},
  {nome:"Iogurte (unidade)", preco:3.50, cat:"Frios & Laticínios", sub:"Iogurte", un:"unid."},
  {nome:"Manteiga", preco:9.90, cat:"Frios & Laticínios", sub:"Manteiga", un:"unid."},
  {nome:"Requeijão", preco:8.90, cat:"Frios & Laticínios", sub:"Requeijão", un:"unid."},
  {nome:"Creme de leite", preco:4.80, cat:"Frios & Laticínios", sub:"Iogurte", un:"unid."},
  {nome:"Leite condensado", preco:6.90, cat:"Frios & Laticínios", sub:"Iogurte", un:"unid."},
  {nome:"Salsicha (pacote)", preco:9.90, cat:"Frios & Laticínios", sub:"Presunto", un:"pacote"},

  // AÇOUGUE
  {nome:"Carne Bovina 1ª (kg)", preco:39.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Carne Bovina 2ª (kg)", preco:32.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Acém (kg)", preco:29.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Patinho (kg)", preco:36.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Costela Bovina (kg)", preco:27.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Carne moída (kg)", preco:33.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Fígado bovino (kg)", preco:17.90, cat:"Açougue", sub:"Bovina", un:"kg", obs:"Preço por kg"},
  {nome:"Frango inteiro (kg)", preco:12.90, cat:"Açougue", sub:"Frango", un:"kg", obs:"Preço por kg"},
  {nome:"Peito de frango (kg)", preco:18.90, cat:"Açougue", sub:"Frango", un:"kg", obs:"Preço por kg"},
  {nome:"Coxa e sobrecoxa (kg)", preco:14.90, cat:"Açougue", sub:"Frango", un:"kg", obs:"Preço por kg"},
  {nome:"Asa de frango (kg)", preco:15.90, cat:"Açougue", sub:"Frango", un:"kg", obs:"Preço por kg"},
  {nome:"Linguiça Toscana (kg)", preco:19.90, cat:"Açougue", sub:"Linguiças", un:"kg", obs:"Preço por kg"},
  {nome:"Linguiça Calabresa (kg)", preco:23.90, cat:"Açougue", sub:"Linguiças", un:"kg", obs:"Preço por kg"},
  {nome:"Carne suína (kg)", preco:22.90, cat:"Açougue", sub:"Suína", un:"kg", obs:"Preço por kg"},
  {nome:"Costela suína (kg)", preco:24.90, cat:"Açougue", sub:"Suína", un:"kg", obs:"Preço por kg"},
  {nome:"Bisteca suína (kg)", preco:23.90, cat:"Açougue", sub:"Suína", un:"kg", obs:"Preço por kg"},
  {nome:"Bacon (kg)", preco:34.90, cat:"Açougue", sub:"Suína", un:"kg", obs:"Preço por kg"},
  {nome:"Peixe (kg)", preco:29.90, cat:"Açougue", sub:"Peixes", un:"kg", obs:"Preço por kg"},

  // HORTIFRUTI
  {nome:"Banana (kg)", preco:4.60, cat:"Hortifruti", sub:"Frutas", un:"kg"},
  {nome:"Maçã (kg)", preco:6.20, cat:"Hortifruti", sub:"Frutas", un:"kg"},
  {nome:"Laranja (kg)", preco:3.90, cat:"Hortifruti", sub:"Frutas", un:"kg"},
  {nome:"Mamão (unidade)", preco:6.00, cat:"Hortifruti", sub:"Frutas", un:"unid."},
  {nome:"Uva (bandeja)", preco:8.90, cat:"Hortifruti", sub:"Frutas", un:"bandeja"},
  {nome:"Limão (kg)", preco:4.50, cat:"Hortifruti", sub:"Frutas", un:"kg"},
  {nome:"Tomate (kg)", preco:5.90, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Batata (kg)", preco:4.30, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Cebola (kg)", preco:4.80, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Cenoura (kg)", preco:4.40, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Beterraba (kg)", preco:4.90, cat:"Hortifruti", sub:"Legumes", un:"kg"},
  {nome:"Repolho (unidade)", preco:5.50, cat:"Hortifruti", sub:"Verduras", un:"unid."},
  {nome:"Alface (unidade)", preco:3.50, cat:"Hortifruti", sub:"Verduras", un:"unid."},
  {nome:"Coentro (maço)", preco:2.00, cat:"Hortifruti", sub:"Temperos", un:"maço"},
  {nome:"Cebolinha (maço)", preco:2.00, cat:"Hortifruti", sub:"Temperos", un:"maço"},
  {nome:"Alho (100g)", preco:3.50, cat:"Hortifruti", sub:"Temperos", un:"100g"},

  // BEBIDAS
  {nome:"Água mineral 500ml", preco:2.50, cat:"Bebidas", sub:"Água", un:"unid."},
  {nome:"Água mineral 1,5L", preco:4.50, cat:"Bebidas", sub:"Água", un:"unid."},
  {nome:"Refrigerante 2L", preco:7.99, cat:"Bebidas", sub:"Refrigerantes", un:"unid."},
  {nome:"Refrigerante 1L", preco:5.99, cat:"Bebidas", sub:"Refrigerantes", un:"unid."},
  {nome:"Refrigerante (lata)", preco:4.50, cat:"Bebidas", sub:"Refrigerantes", un:"unid."},
  {nome:"Suco 1L", preco:5.20, cat:"Bebidas", sub:"Sucos", un:"unid."},
  {nome:"Suco (caixinha)", preco:3.90, cat:"Bebidas", sub:"Sucos", un:"unid."},
  {nome:"Cerveja (lata)", preco:3.50, cat:"Bebidas", sub:"Cervejas", un:"unid."},
  {nome:"Cerveja 600ml", preco:7.90, cat:"Bebidas", sub:"Cervejas", un:"unid."},
  {nome:"Energético", preco:9.90, cat:"Bebidas", sub:"Energéticos", un:"unid."},
  {nome:"Chá gelado", preco:4.80, cat:"Bebidas", sub:"Sucos", un:"unid."},
  {nome:"Água de coco", preco:6.50, cat:"Bebidas", sub:"Sucos", un:"unid."},

  // LIMPEZA
  {nome:"Detergente", preco:2.80, cat:"Limpeza", sub:"Cozinha", un:"unid."},
  {nome:"Sabão em pó", preco:12.90, cat:"Limpeza", sub:"Lavanderia", un:"unid."},
  {nome:"Água sanitária", preco:3.40, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Desinfetante", preco:4.90, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Esponja", preco:1.80, cat:"Limpeza", sub:"Cozinha", un:"unid."},
  {nome:"Limpa vidro", preco:7.20, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Pano de chão", preco:4.00, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Saco de lixo 30L", preco:8.90, cat:"Limpeza", sub:"Sacos de lixo", un:"pacote"},
  {nome:"Saco de lixo 50L", preco:12.90, cat:"Limpeza", sub:"Sacos de lixo", un:"pacote"},
  {nome:"Sabão em barra", preco:6.90, cat:"Limpeza", sub:"Lavanderia", un:"unid."},
  {nome:"Amaciante", preco:12.50, cat:"Limpeza", sub:"Lavanderia", un:"unid."},
  {nome:"Álcool 70%", preco:9.90, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Lustra móveis", preco:10.90, cat:"Limpeza", sub:"Casa", un:"unid."},
  {nome:"Papel toalha", preco:7.50, cat:"Limpeza", sub:"Cozinha", un:"pacote"},

  // HIGIENE
  {nome:"Sabonete", preco:2.20, cat:"Higiene & Cuidados", sub:"Banho", un:"unid."},
  {nome:"Shampoo", preco:14.50, cat:"Higiene & Cuidados", sub:"Cabelo", un:"unid."},
  {nome:"Condicionador", preco:14.50, cat:"Higiene & Cuidados", sub:"Cabelo", un:"unid."},
  {nome:"Creme dental", preco:4.90, cat:"Higiene & Cuidados", sub:"Dental", un:"unid."},
  {nome:"Escova de dente", preco:5.50, cat:"Higiene & Cuidados", sub:"Dental", un:"unid."},
  {nome:"Fio dental", preco:6.90, cat:"Higiene & Cuidados", sub:"Dental", un:"unid."},
  {nome:"Papel higiênico", preco:15.90, cat:"Higiene & Cuidados", sub:"Papel", un:"pacote"},
  {nome:"Papel lenço", preco:6.50, cat:"Higiene & Cuidados", sub:"Papel", un:"pacote"},
  {nome:"Desodorante", preco:11.90, cat:"Higiene & Cuidados", sub:"Banho", un:"unid."},
  {nome:"Absorvente", preco:9.90, cat:"Higiene & Cuidados", sub:"Feminino", un:"pacote"},
  {nome:"Sabonete líquido", preco:12.90, cat:"Higiene & Cuidados", sub:"Banho", un:"unid."},
];

/* ===== IMAGENS: caminho certo com suas pastas ===== */
const IMG_PADRAO = "logo.png"; // usa o logo como padrão (garante que sempre aparece)

function imgDoProduto(p){
  // HORTIFRUTI
  if(p.nome === "Banana (kg)") return "img/01-hortifruti/banana.jpg";
  if(p.nome === "Maçã (kg)") return "img/01-hortifruti/maca.jpg";
  if(p.nome === "Laranja (kg)") return "img/01-hortifruti/laranja.jpg";
  if(p.nome === "Mamão (unidade)") return "img/01-hortifruti/mamao.jpg";
  if(p.nome === "Uva (bandeja)") return "img/01-hortifruti/uva.jpg";
  if(p.nome === "Limão (kg)") return "img/01-hortifruti/limao.jpg";
  if(p.nome === "Tomate (kg)") return "img/01-hortifruti/tomate.jpg";
  if(p.nome === "Batata (kg)") return "img/01-hortifruti/batata.jpg";
  if(p.nome === "Cebola (kg)") return "img/01-hortifruti/cebola.jpg";
  if(p.nome === "Cenoura (kg)") return "img/01-hortifruti/cenoura.jpg";
  if(p.nome === "Alface (unidade)") return "img/01-hortifruti/alface.jpg";
  if(p.nome === "Repolho (unidade)") return "img/01-hortifruti/repolho.jpg";
  if(p.nome === "Alho (100g)") return "img/01-hortifruti/alho.jpg";

  // BÁSICOS
  if(p.nome.includes("Arroz")) return "img/02-basicos/arroz.jpg";
  if(p.nome.includes("Feijão")) return "img/02-basicos/feijao.jpg";
  if(p.nome.includes("Açúcar")) return "img/02-basicos/acucar.jpg";
  if(p.nome.includes("Sal")) return "img/02-basicos/sal.jpg";
  if(p.nome.includes("Óleo")) return "img/02-basicos/oleo.jpg";
  if(p.nome.includes("Café")) return "img/02-basicos/cafe.jpg";
  if(p.nome.includes("Leite 1L")) return "img/02-basicos/leite.jpg";
  if(p.nome.includes("Ovos")) return "img/02-basicos/ovos.jpg";
  if(p.nome.includes("Farinha") || p.nome.includes("Cuscuz")) return "img/02-basicos/farinha.jpg";

  // BEBIDAS
  if(p.nome.includes("Água mineral")) return "img/03-bebidas/agua.jpg";
  if(p.nome.includes("Refrigerante")) return "img/03-bebidas/refrigerante.jpg";
  if(p.nome.startsWith("Suco")) return "img/03-bebidas/suco.jpg";
  if(p.nome.startsWith("Cerveja")) return "img/03-bebidas/cerveja.jpg";
  if(p.nome === "Energético") return "img/03-bebidas/energetico.jpg";
  if(p.nome === "Chá gelado") return "img/03-bebidas/cha.jpg";
  if(p.nome === "Água de coco") return "img/03-bebidas/coco.jpg";

  // LIMPEZA
  if(p.nome === "Detergente") return "img/04-limpeza/detergente.jpg";
  if(p.nome === "Sabão em pó") return "img/04-limpeza/sabao-po.jpg";
  if(p.nome === "Água sanitária") return "img/04-limpeza/agua-sanitaria.jpg";
  if(p.nome === "Desinfetante") return "img/04-limpeza/desinfetante.jpg";
  if(p.nome === "Esponja") return "img/04-limpeza/esponja.jpg";
  if(p.nome === "Papel toalha") return "img/04-limpeza/papel-toalha.jpg";
  if(p.nome === "Pano de chão") return "img/04-limpeza/pano-chao.jpg";
  if(p.nome.includes("Saco de lixo")) return "img/04-limpeza/saco-lixo.jpg";
  if(p.nome === "Amaciante") return "img/04-limpeza/amaciante.jpg";
  if(p.nome === "Sabão em barra") return "img/04-limpeza/sabao-barra.jpg";

  // HIGIENE
  if(p.nome === "Sabonete") return "img/05-higiene/sabonete.jpg";
  if(p.nome === "Shampoo") return "img/05-higiene/shampoo.jpg";
  if(p.nome === "Condicionador") return "img/05-higiene/condicionador.jpg";
  if(p.nome === "Creme dental") return "img/05-higiene/creme-dental.jpg";
  if(p.nome === "Escova de dente") return "img/05-higiene/escova.jpg";
  if(p.nome === "Fio dental") return "img/05-higiene/fio-dental.jpg";
  if(p.nome === "Papel higiênico") return "img/05-higiene/papel-higienico.jpg";
  if(p.nome === "Papel lenço") return "img/05-higiene/papel-lenco.jpg";
  if(p.nome === "Desodorante") return "img/05-higiene/desodorante.jpg";
  if(p.nome === "Absorvente") return "img/05-higiene/absorvente.jpg";
  if(p.nome === "Sabonete líquido") return "img/05-higiene/sabonete-liquido.jpg";

  // MERCEARIA (genéricas)
  if(p.cat === "Mercearia"){
    if(p.sub === "Biscoitos") return "img/06-mercearia/biscoito.jpg";
    if(p.sub === "Massas") return "img/06-mercearia/macarrao.jpg";
    if(p.sub === "Molhos") return "img/06-mercearia/molho-tomate.jpg";
    if(p.sub === "Enlatados") return "img/06-mercearia/atum.jpg";
    if(p.sub === "Temperos") return "img/06-mercearia/mostarda.jpg";
    if(p.sub === "Doces") return "img/06-mercearia/chocolate.jpg";
  }

  // FRIOS & LATICÍNIOS (genéricas — se você tiver baixado depois, é só ajustar)
  if(p.cat === "Frios & Laticínios"){
    return "img/02-basicos/leite.jpg";
  }

  // AÇOUGUE (genéricas)
  if(p.cat === "Açougue"){
    if(p.sub === "Frango") return "img/07-acougue/frango.jpg";
    if(p.sub === "Peixes") return "img/07-acougue/peixe.jpg";
    if(p.sub === "Linguiças") return "img/07-acougue/linguica.jpg";
    if(p.sub === "Suína") return "img/07-acougue/carne-suina.jpg";
    return "img/07-acougue/carne-bovina.jpg";
  }

  return IMG_PADRAO;
}

/* ===== ELEMENTOS ===== */
const grid = document.getElementById("grid");
const deptRow = document.getElementById("deptRow");
const submenu = document.getElementById("submenu");
const subRow = document.getElementById("subRow");
const search = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");
const order = document.getElementById("order");

/* ===== FILTROS ===== */
let filtroDept = "Todos";
let filtroSub = "Tudo";

function renderDept(){
  deptRow.innerHTML="";
  departamentos.forEach(d=>{
    const el=document.createElement("div");
    el.className="dept"+(d.key===filtroDept?" active":"");
    el.innerHTML=`<div class="ic">${d.icon}</div><span>${d.key}</span>`;
    el.onclick=()=>{
      filtroDept=d.key;
      filtroSub="Tudo";
      renderDept();
      renderSubmenu();
      render();
      window.scrollTo({top:240,behavior:"smooth"});
    };
    deptRow.appendChild(el);
  });
}

function renderSubmenu(){
  const dept = departamentos.find(x=>x.key===filtroDept);
  if(!dept || dept.key==="Todos"){
    submenu.classList.remove("show");
    subRow.innerHTML="";
    return;
  }
  submenu.classList.add("show");
  subRow.innerHTML="";

  const all = ["Tudo", ...dept.subs];
  all.forEach(s=>{
    const el=document.createElement("div");
    el.className="sub"+(s===filtroSub?" active":"");
    el.textContent=s;
    el.onclick=()=>{
      filtroSub=s;
      renderSubmenu();
      render();
    };
    subRow.appendChild(el);
  });
}

function relScore(nome,q){
  if(!q) return 0;
  nome=nome.toLowerCase();
  if(nome===q) return 100;
  if(nome.startsWith(q)) return 60;
  if(nome.includes(q)) return 30;
  return 0;
}

function render(){
  const q=(search.value||"").trim().toLowerCase();

  let list = produtos.filter(p=>{
    const okDept = (filtroDept==="Todos") || (p.cat===filtroDept);
    const okSub  = (filtroDept==="Todos") || (filtroSub==="Tudo") || (p.sub===filtroSub);
    const okQ    = !q || p.nome.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || (p.sub||"").toLowerCase().includes(q);
    return okDept && okSub && okQ;
  });

  if(order.value==="menor") list.sort((a,b)=>a.preco-b.preco);
  if(order.value==="maior") list.sort((a,b)=>b.preco-a.preco);
  if(order.value==="az") list.sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR"));
  if(order.value==="relevancia" && q) list.sort((a,b)=>relScore(b.nome,q)-relScore(a.nome,q));

  grid.innerHTML="";
  list.forEach((p,idx)=>{
    const card=document.createElement("div");
    card.className="card";

    const imgSrc = imgDoProduto(p);

    card.innerHTML=`
      <div class="meta">
        <span class="chip">${p.cat}${p.sub ? " • "+p.sub : ""}</span>
        <span class="unit">${p.un || "unid."}</span>
      </div>

      <img class="pimg" src="${imgSrc}" alt="${p.nome}" loading="lazy"
           onerror="this.onerror=null;this.src='logo.png';" />

      <h3>${p.nome}</h3>
      <div class="price">R$ ${Number(p.preco).toFixed(2)}</div>
      ${p.obs?`<div class="note">${p.obs}</div>`:""}
      <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn green" data-add="${idx}" style="flex:1;min-width:140px">Adicionar</button>
        <button class="btn" data-viewcart="1" style="min-width:140px">Ver carrinho</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // bind botoes
  document.querySelectorAll("[data-add]").forEach(b=>{
    b.onclick=()=>{ addToCart(); };
  });
  document.querySelectorAll("[data-viewcart]").forEach(b=>{
    b.onclick=()=>openCart();
  });
}

/* ===== BUSCA / ORDENAR ===== */
btnSearch.onclick=render;
search.addEventListener("keydown",(e)=>{if(e.key==="Enter") render();});
order.onchange=render;

/* ===== SIDEBAR ===== */
document.getElementById("goAll").onclick=()=>{filtroDept="Todos";filtroSub="Tudo";renderDept();renderSubmenu();render();window.scrollTo({top:0,behavior:"smooth"});};
document.getElementById("goBasics").onclick=()=>{filtroDept="Básicos";filtroSub="Tudo";renderDept();renderSubmenu();render();};
document.getElementById("goMeat").onclick=()=>{filtroDept="Açougue";filtroSub="Tudo";renderDept();renderSubmenu();render();};
document.getElementById("goHorti").onclick=()=>{filtroDept="Hortifruti";filtroSub="Tudo";renderDept();renderSubmenu();render();};
document.getElementById("goPay").onclick=()=>{document.getElementById("payBox").scrollIntoView({behavior:"smooth"});};
document.getElementById("goInfo").onclick=()=>{document.getElementById("infoBox").scrollIntoView({behavior:"smooth"});};

/* ===== CARRINHO (VISUAL) ===== */
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const clearCart = document.getElementById("clearCart");
const goWhatsapp = document.getElementById("goWhatsapp");

function addToCart(){
  cartCount++;
  cartCountEl.textContent = cartCount;
  cartCountEl.style.transform = "scale(1.2)";
  setTimeout(()=>cartCountEl.style.transform="scale(1)",120);
}
function openCart(){
  cartModal.classList.add("show");
  cartModal.setAttribute("aria-hidden","false");
}
function closeCartFn(){
  cartModal.classList.remove("show");
  cartModal.setAttribute("aria-hidden","true");
}
cartBtn.onclick=openCart;
closeCart.onclick=closeCartFn;
cartModal.onclick=(e)=>{ if(e.target===cartModal) closeCartFn(); };
clearCart.onclick=()=>{ cartCount=0; cartCountEl.textContent="0"; };
goWhatsapp.onclick=()=>window.open("https://wa.me/558183173613","_blank");

/* ===== CARROSSEL ===== */
const slidesEl = document.getElementById("slides");
const dotsEl = document.getElementById("dots");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const totalSlides = slidesEl.children.length;
let current = 0;
let timer = null;

function renderDots(){
  dotsEl.innerHTML="";
  for(let i=0;i<totalSlides;i++){
    const d=document.createElement("div");
    d.className="dot"+(i===current?" active":"");
    d.onclick=()=>{goTo(i,true);};
    dotsEl.appendChild(d);
  }
}
function goTo(i, reset=false){
  current = (i + totalSlides) % totalSlides;
  slidesEl.style.transform = `translateX(-${current*100}%)`;
  renderDots();
  if(reset) restartAuto();
}
function restartAuto(){
  if(timer) clearInterval(timer);
  timer = setInterval(()=>goTo(current+1,false), 4500);
}
prev.onclick=()=>goTo(current-1,true);
next.onclick=()=>goTo(current+1,true);

renderDots();
restartAuto();

/* ===== INIT ===== */
renderDept();
renderSubmenu();
render();
