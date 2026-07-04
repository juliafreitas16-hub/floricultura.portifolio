// ============================================================
// DADOS - CADA PRODUTO COM SUA PRÓPRIA IMAGEM LOCAL
// ============================================================

// ===== CATEGORIAS DA HOME =====
const categoriasData = [
  { nome: 'Buquês Temáticos', img: 'imagens/categorias/capadascategorias/Buquês temáticos.png' },
  { nome: 'Girassóis', img: 'imagens/categorias/capadascategorias/Girassóis.png' },
  { nome: 'Rosas', img: 'imagens/categorias/capadascategorias/Rosas.png' },
  { nome: 'Orquídeas', img: 'imagens/categorias/capadascategorias/Oquídeas.png' },
  { nome: 'Adicionais', img: 'imagens/categorias/capadascategorias/Adicionais.png' },
  { nome: 'Ocasiões Especiais', img: 'imagens/categorias/capadascategorias/Ocasiões especiais.png' }
];

// ===== FLORES DO BUILDER =====
const floresDisponiveis = [
  { nome: 'Rosa Vermelha', valor: 12.50, img: 'imagens/categorias/monte seu buque/Rosa vermelhaa.jpg' },
  { nome: 'Rosa Branca', valor: 12.50, img: 'imagens/categorias/monte seu buque/rosa branca.jpg' },
  { nome: 'Girassol', valor: 15.00, img: 'imagens/categorias/monte seu buque/Girassol.jpg' },
  { nome: 'Orquídea', valor: 25.00, img: 'imagens/categorias/monte seu buque/Orquidia.jpg' },
  { nome: 'Lírio', valor: 18.00, img: 'imagens/categorias/monte seu buque/lirio.jpg' },
  { nome: 'Gipsofila', valor: 8.00, img: 'imagens/categorias/monte seu buque/Gipsofila.jpg' }
];

// ===== EMBALAGENS =====
const embalagensData = [
  { nome: ' Branca', valor: 7.00, img: 'imagens/categorias/monte seu buque/luxo branca.jpg' },
  { nome: 'Luxo Dourada', valor: 15.00, img: 'imagens/categorias/monte seu buque/Luxo dourada.jpg' },
  { nome: 'Rústica', valor: 0.00, img: 'imagens/categorias/monte seu buque/rustica.jpg' },
  { nome: 'Preto', valor: 7.00, img: 'imagens/categorias/monte seu buque/premium preta.jpg' }
];

// ===== LAÇOS =====
const lacosData = [
  { nome: 'Vermelho', valor: 0, cor: '#cc0000', img: 'imagens/categorias/monte seu buque/vermelho.jpg' },
  { nome: 'Dourado', valor: 5.00, cor: '#d4af37', img: 'imagens/categorias/monte seu buque/Dourada.jpg' },
  { nome: 'Prata', valor: 5.00, cor: '#c0c0c0', img: 'imagens/categorias/monte seu buque/prata.jpg' },
  { nome: 'Rosa Chá', valor: 5.00, cor: '#f4a4b8', img: 'imagens/categorias/monte seu buque/rosa.jpg' }
];

// ===== CORES =====
const coresCartao = ['Branco', 'Vermelho', 'Rosa', 'Dourado', 'Azul'];
const coresUrsinho = ['Marrom', 'Branco', 'Cinza', 'Caramelo', 'Preto'];

// ============================================================
// PRODUTOS - CADA UM COM IMAGEM INDIVIDUAL (.jpg)
// ============================================================
const produtosPorCategoria = {
  'Buquês Temáticos': [
    { id: 101, nome: 'Buquê Temático Bela e a Fera', categoria: 'Buquês Temáticos', preco: 189.90, precoPromo: 159.90,
      img: 'imagens/categorias/buquetematicos/Temático bela e a fera.jpg',
      desc: 'Buquê romântico com rosas vermelhas e folhagem.', avaliacao: 4.9, vendidos: 180 },
    { id: 102, nome: 'Buquê temático NBA', categoria: 'Buquês Temáticos', preco: 299.00, precoPromo: null,
      img: 'imagens/categorias/buquetematicos/Tematico NBA.jpg',
      desc: 'Buquê premium com flores selecionadas.', avaliacao: 4.9, vendidos: 95 },
    { id: 103, nome: 'Buquê temático Formatura', categoria: 'Buquês Temáticos', preco: 169.90, precoPromo: 139.90,
      img: 'imagens/categorias/buquetematicos/Temático formatura.jpg',
      desc: 'Flores coloridas da estação mais feliz.', avaliacao: 4.7, vendidos: 140 },
    { id: 104, nome: 'Buquê temático Van Gogh', categoria: 'Buquês Temáticos', preco: 219.00, precoPromo: null,
      img: 'imagens/categorias/buquetematicos/Temático van gohg.jpg',
      desc: 'Buquê sofisticado com orquídeas e rosas brancas.', avaliacao: 4.8, vendidos: 78 },
    { id: 105, nome: 'Buquê temático Homem Aranha', categoria: 'Buquês Temáticos', preco: 259.00, precoPromo: 229.00,
      img: 'imagens/categorias/buquetematicos/Temático homem aranha.jpg',
      desc: 'Buquê eterno com rosas preservadas.', avaliacao: 4.9, vendidos: 200 }
  ],
  'Girassóis': [
    { id: 201, nome: 'Buquê de Girassóis', categoria: 'Girassóis', preco: 129.90, precoPromo: 109.90,
      img: 'imagens/categorias/girasois/buque de girasois.jpg',
      desc: 'Buquê de girassóis com folhagem natural.', avaliacao: 4.7, vendidos: 210 },
    { id: 202, nome: 'Girassol Premium', categoria: 'Girassóis', preco: 159.90, precoPromo: null,
      img: 'imagens/categorias/girasois/girasois premium.jpg',
      desc: 'Girassol gigante em vaso decorativo.', avaliacao: 4.8, vendidos: 120 },
    { id: 203, nome: 'Girassóis com Rosas', categoria: 'Girassóis', preco: 189.90, precoPromo: 159.90,
      img: 'imagens/categorias/girasois/girassois  com rosas.jpg',
      desc: 'Arranjo de girassóis com rosas vermelhas.', avaliacao: 4.6, vendidos: 85 },
    { id: 204, nome: 'Caixa de Girassóis', categoria: 'Girassóis', preco: 139.90, precoPromo: null,
      img: 'imagens/categorias/girasois/caixa girassois.jpg',
      desc: 'Caixa premium com 6 girassóis.', avaliacao: 4.5, vendidos: 95 },
    { id: 205, nome: 'Arranjo de Girassóis', categoria: 'Girassóis', preco: 219.00, precoPromo: 189.00,
      img: 'imagens/categorias/girasois/arranjo de girassóis.jpg',
      desc: 'Arranjo de girassóis com vaso de cerâmica.', avaliacao: 4.8, vendidos: 70 }
  ],
  'Rosas': [
    { id: 301, nome: 'Rosas Vermelhas', categoria: 'Rosas', preco: 159.90, precoPromo: 139.90,
      img: 'imagens/categorias/rosas/rosas vermelhas.jpg',
      desc: 'Buquê de 12 rosas vermelhas.', avaliacao: 4.8, vendidos: 185 },
    { id: 302, nome: 'Rosas Brancas', categoria: 'Rosas', preco: 169.90, precoPromo: null,
      img: 'imagens/categorias/rosas/rosas branca.jpg',
      desc: 'Buquê de 12 rosas brancas.', avaliacao: 4.9, vendidos: 150 },
    { id: 303, nome: 'Buquê primavera', categoria: 'Rosas', preco: 169.90, precoPromo: 149.90,
      img: 'imagens/categorias/rosas/rosas primavera.jpg',
      desc: 'Buquê de 12 rosas cor-de-rosa.', avaliacao: 4.7, vendidos: 130 },
    { id: 304, nome: 'Rosas Azuis', categoria: 'Rosas', preco: 189.90, precoPromo: null,
      img: 'imagens/categorias/rosas/buque azul.jpg',
      desc: 'Buquê de 12 rosas azuis.', avaliacao: 4.6, vendidos: 65 },
    { id: 305, nome: 'Rosas Amarelas', categoria: 'Rosas', preco: 159.90, precoPromo: 139.90,
      img: 'imagens/categorias/rosas/rosas amarelas.jpg',
      desc: 'Buquê de 12 rosas amarelas.', avaliacao: 4.7, vendidos: 110 },
    { id: 306, nome: 'Caixa de Rosas', categoria: 'Rosas', preco: 199.90, precoPromo: null,
      img: 'imagens/categorias/rosas/caixa rosas.jpg',
      desc: 'Caixa premium com 24 rosas vermelhas.', avaliacao: 4.9, vendidos: 200 },
    { id: 307, nome: 'Buquê 12 Rosas', categoria: 'Rosas', preco: 159.90, precoPromo: null,
      img: 'imagens/categorias/rosas/12 rosas.jpg',
      desc: 'Clássico buquê de 12 rosas.', avaliacao: 4.8, vendidos: 175 },
    { id: 308, nome: 'Buquê 24 Rosas', categoria: 'Rosas', preco: 249.90, precoPromo: 219.90,
      img: 'imagens/categorias/rosas/buque gg.jpg',
      desc: 'Buquê luxuoso de 24 rosas vermelhas.', avaliacao: 4.9, vendidos: 140 },
    { id: 309, nome: 'Buquê 1 Rosa', categoria: 'Rosas', preco: 399.00, precoPromo: 359.00,
      img: 'imagens/categorias/rosas/buque uma rosa.jpg',
      desc: 'Buquê majestoso de 50 rosas vermelhas.', avaliacao: 5.0, vendidos: 90 }
  ],
  'Orquídeas': [
    { id: 401, nome: 'Orquídea Branca', categoria: 'Orquídeas', preco: 249.00, precoPromo: null,
      img: 'imagens/categorias/orquidias/orquedas branco.jpg',
      desc: 'Orquídea Phalaenopsis branca em vaso.', avaliacao: 4.9, vendidos: 98 },
    { id: 402, nome: 'Orquídea Roxa', categoria: 'Orquídeas', preco: 259.00, precoPromo: 229.00,
      img: 'imagens/categorias/orquidias/orquedeas roxa.jpg',
      desc: 'Orquídea Phalaenopsis roxa em vaso.', avaliacao: 4.8, vendidos: 85 },
    { id: 403, nome: 'Orquídea Rosa', categoria: 'Orquídeas', preco: 259.00, precoPromo: null,
      img: 'imagens/categorias/orquidias/orquedias rosa.jpg',
      desc: 'Orquídea Phalaenopsis rosa em vaso.', avaliacao: 4.7, vendidos: 75 },
    { id: 404, nome: 'Arranjo de Orquídeas', categoria: 'Orquídeas', preco: 329.00, precoPromo: 289.00,
      img: 'imagens/categorias/orquidias/arranjo.jpg',
      desc: 'Arranjo com 3 orquídeas em vaso de cerâmica.', avaliacao: 4.9, vendidos: 60 }
  ],
  'Adicionais': [
    { id: 501, nome: 'Ferrero Rocher', categoria: 'Adicionais', tipo: 'Chocolate', preco: 35.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/ferrero roche.jpg',
      desc: 'Caixa de 16 Ferrero Rocher.', avaliacao: 4.8, vendidos: 120 },
    { id: 502, nome: 'Lacta', categoria: 'Adicionais', tipo: 'Chocolate', preco: 14.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/lacta.jpg',
      desc: 'Caixa de bombons Lacta.', avaliacao: 4.6, vendidos: 95 },
    { id: 503, nome: 'Cacau Show', categoria: 'Adicionais', tipo: 'Chocolate', preco: 28.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/cacau show.jpg',
      desc: 'Caixa de bombons Cacau Show.', avaliacao: 4.7, vendidos: 110 },
    { id: 504, nome: 'Nutella', categoria: 'Adicionais', tipo: 'Chocolate', preco: 20.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/nutella.jpg',
      desc: 'Pote de Nutella 200g.', avaliacao: 4.8, vendidos: 80 },
    { id: 505, nome: 'Pelúcia', categoria: 'Adicionais', tipo: 'Pelúcia', preco: 52.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/pelucia.jpg',
      desc: 'Ursinho de pelúcia 30cm.', avaliacao: 4.5, vendidos: 70 },
    { id: 506, nome: 'Balão', categoria: 'Adicionais', tipo: 'Balões', preco: 35.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/balão.jpg',
      desc: 'Balão de hélio personalizado.', avaliacao: 4.3, vendidos: 55 },
    { id: 507, nome: 'Vinho Tinto', categoria: 'Adicionais', tipo: 'Vinhos', preco: 150.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/vinho tinto.jpg',
      desc: 'Vinho tinto chileno reserva.', avaliacao: 4.9, vendidos: 90 },
    { id: 508, nome: 'Espumante', categoria: 'Adicionais', tipo: 'Espumantes', preco: 97.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/espumante.jpg',
      desc: 'Espumante brut importado.', avaliacao: 4.8, vendidos: 65 },
    { id: 509, nome: 'Caneca', categoria: 'Adicionais', tipo: 'Canecas', preco: 25.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/caneca.jpg',
      desc: 'Caneca personalizada ROSE.', avaliacao: 4.4, vendidos: 40 },
    { id: 510, nome: 'Cartão', categoria: 'Adicionais', tipo: 'Cartões', preco: 12.00, precoPromo: null,
      img: 'imagens/categorias/adicionais/cartão.jpg',
      desc: 'Cartão com mensagem personalizada.', avaliacao: 4.7, vendidos: 150 },
    { id: 511, nome: 'Aliança', categoria: 'Adicionais', tipo: 'Aliança', preco: 300.00, precoPromo: null,
      img: 'imagens/fallback.jpg',
      desc: 'Aliança Ouro', avaliacao: 4.9, vendidos: 45 }
  ]
};

// ============================================================
// PRODUTOS PARA OCASIÕES ESPECIAIS
// ============================================================
const produtosOcasioes = [
  { id: 601, nome: 'Buquê de Casamento Luxo', categoria: 'Buquês Temáticos', preco: 329.90, precoPromo: 299.90,
    img: 'imagens/categorias/ocasioesespeciais/Buquê de Casamento Luxo.jpg',
    desc: 'Buquê luxuoso para casamento com rosas brancas e orquídeas.', avaliacao: 4.9, ocasiao: 'casamento', vendidos: 150 },
  { id: 602, nome: 'Buquê - Dia dos Namorados', categoria: 'Rosas', preco: 189.90, precoPromo: 159.90,
    img: 'imagens/categorias/ocasioesespeciais/Rosas Vermelhas - Dia dos Namorados.jpg',
    desc: 'Buquê de 24 rosas vermelhas para o Dia dos Namorados.', avaliacao: 4.9, ocasiao: 'namorados', vendidos: 200 },
  { id: 603, nome: 'Orquídea Branca - Casamento', categoria: 'Orquídeas', preco: 249.00, precoPromo: null,
    img: 'imagens/categorias/ocasioesespeciais/Orquídea Branca - Casamento.jpg',
    desc: 'Orquídea Phalaenopsis branca para casamento.', avaliacao: 4.9, ocasiao: 'casamento', vendidos: 98 },
  { id: 604, nome: 'Buquê Dia das Mães', categoria: 'Buquês Temáticos', preco: 199.90, precoPromo: 169.90,
    img: 'imagens/categorias/ocasioesespeciais/Buquê Dia das Mães.jpg',
    desc: 'Buquê especial para o Dia das Mães com rosas e lírios.', avaliacao: 4.8, ocasiao: 'maes', vendidos: 180 },
  { id: 605, nome: 'Flores - Dia dos Pais', categoria: 'Flores', preco: 159.90, precoPromo: 139.90,
    img: 'imagens/categorias/ocasioesespeciais/Girassóis - Dia dos Pais.jpg',
    desc: 'Buquê de girassóis para o Dia dos Pais.', avaliacao: 4.7, ocasiao: 'pais', vendidos: 120 },
  { id: 606, nome: 'Arranjo Nascimento', categoria: 'Buquês Temáticos', preco: 189.90, precoPromo: null,
    img: 'imagens/categorias/ocasioesespeciais/Arranjo Nascimento.jpg',
    desc: 'Arranjo para celebrar o nascimento de um bebê.', avaliacao: 4.8, ocasiao: 'nascimento', vendidos: 75 },
  { id: 607, nome: 'Coroas Condolências', categoria: 'Condolências', preco: 259.00, precoPromo: 229.00,
    img: 'imagens/categorias/ocasioesespeciais/Coroas Condolências.jpg',
    desc: 'Coroa de flores para condolências e homenagens.', avaliacao: 4.9, ocasiao: 'condolencias', vendidos: 60 },
  { id: 608, nome: 'Cesta de Nascimento Azul', categoria: 'Cesta Temática', preco: 179.90, precoPromo: 130.90,
    img: 'imagens/categorias/ocasioesespeciais/Cesta de Nascimento Azul.jpg',
    desc: 'Cesta delicada para celebrar o nascimento de um menino.', avaliacao: 4.7, ocasiao: 'nascimento', vendidos: 88 },
  { id: 609, nome: 'Cesta rosa - Nascimento', categoria: 'Cesta Temática', preco: 169.90, precoPromo: 149.90,
    img: 'imagens/categorias/ocasioesespeciais/Cesta rosa nascimento.jpg',
    desc: 'Cesta temática rosa ideal para presentear um recém nascido', avaliacao: 4.8, ocasiao: 'nascimento', vendidos: 95 },
  { id: 610, nome: 'Arranjo Condolências Tradicional', categoria: 'condolências', preco: 249.90, precoPromo: 229.90,
    img: 'imagens/categorias/ocasioesespeciais/Arranjo Condolências Tradicional.jpg',
    desc: 'Arranjo elegante para prestar homenagem em momentos de despedida.', avaliacao: 4.8, ocasiao: 'condolencias', vendidos: 55 },
  { id: 611, nome: 'Buquê para Namorados', categoria: 'Buquês Temáticos', preco: 209.90, precoPromo: 189.90,
    img: 'imagens/categorias/ocasioesespeciais/Buquê para Namorados.jpg',
    desc: 'Buquê romântico para celebrar o amor.', avaliacao: 4.9, ocasiao: 'namorados', vendidos: 130 },
  { id: 612, nome: 'Cesta Dia das Mães', categoria: 'Cesta temática', preco: 229.90, precoPromo: 209.90,
    img: 'imagens/categorias/ocasioesespeciais/Presente Dia das Mães.jpg',
    desc: 'Arranjo especial para presentear no Dia das Mães.', avaliacao: 4.8, ocasiao: 'maes', vendidos: 105 },
  { id: 613, nome: 'Buquê Casamento Clássico', categoria: 'Buquês Temáticos', preco: 349.90, precoPromo: 329.90,
    img: 'imagens/categorias/ocasioesespeciais/Buquê Casamento Clássico.jpg',
    desc: 'Buquê clássico para celebrações de casamento.', avaliacao: 4.9, ocasiao: 'casamento', vendidos: 110 }
];

// ============================================================
// COMBINAR PRODUTOS
// ============================================================
const todosProdutos = [];
Object.values(produtosPorCategoria).forEach(lista => {
  todosProdutos.push(...lista);
});
const todosProdutosComOcasioes = [...todosProdutos, ...produtosOcasioes];
const maisVendidos = [...todosProdutosComOcasioes].sort((a, b) => b.vendidos - a.vendidos);

// ============================================================
// ESTADO
// ============================================================
let carrinho = [];
let produtoAtual = null;
let tipoEntrega = 'retirar';
let freteSelecionado = null;
let dadosEntrega = {};
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let dadosPedido = {};
let ocasiaoSelecionada = 'todas';
let filtroTipoAdicional = 'todos';
let slideAtual = 0;
let totalSlides = 2;
let intervaloCarousel;
let builderState = {
  stepAtual: 1,
  flores: {},
  embalagem: null,
  laco: null,
  cartao: { ativo: false, mensagem: '', cor: 'Branco' },
  ursinho: { ativo: false, cor: 'Marrom' }
};

// ============================================================
// TOAST
// ============================================================
function showToast(title, sub, icon = 'fa-check-circle') {
  const toast = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastSub').textContent = sub;
  toast.querySelector('i').className = `fas ${icon}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ============================================================
// CARROSSEL
// ============================================================
function iniciarCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  
  function mudarSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    slideAtual = index;
  }

  function proximoSlide() {
    let next = (slideAtual + 1) % totalSlides;
    mudarSlide(next);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      mudarSlide(index);
      resetarIntervalo();
    });
  });

  const hero = document.getElementById('heroCarousel');
  hero.addEventListener('mouseenter', () => {
    clearInterval(intervaloCarousel);
  });
  hero.addEventListener('mouseleave', () => {
    iniciarIntervalo();
  });

  function iniciarIntervalo() {
    clearInterval(intervaloCarousel);
    intervaloCarousel = setInterval(proximoSlide, 4000);
  }

  function resetarIntervalo() {
    clearInterval(intervaloCarousel);
    iniciarIntervalo();
  }

  iniciarIntervalo();
}

// ============================================================
// NAVEGAÇÃO
// ============================================================
function navegar(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  document.querySelectorAll('.nav-left a').forEach(a => a.classList.remove('active'));
  const link = document.querySelector(`.nav-left a[data-page="${page}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (page === 'categorias') renderProdutos();
  if (page === 'favoritos') renderFavoritos();
  if (page === 'ocasioes') renderOcasioes();
}

document.querySelectorAll('.nav-left a, .logo').forEach(el => {
  el.addEventListener('click', (e) => {
    const page = el.dataset.page;
    if (page) navegar(page);
  });
});

// ============================================================
// RENDER CATEGORIAS
// ============================================================
function renderCategoriasHome() {
  const grid = document.getElementById('categoriasGrid');
  grid.innerHTML = categoriasData.map(c => `
    <div class="cat-item" onclick="navegarParaCategoria('${c.nome}')">
      <img src="${c.img}" alt="${c.nome}" class="cat-circle" loading="lazy" onerror="this.src='imagens/fallback.jpg'">
      <span class="cat-label">${c.nome}</span>
    </div>
  `).join('');
}
renderCategoriasHome();

function navegarParaCategoria(categoria) {
  if (categoria === 'Ocasiões Especiais') {
    navegar('ocasioes');
    return;
  }
  navegar('categorias');
  document.getElementById('categoriaFilter').value = categoria;
  renderProdutos();
}

// ============================================================
// RENDER MAIS VENDIDOS
// ============================================================
function renderMaisVendidos() {
  const grid = document.getElementById('maisVendidosGrid');
  const top6 = maisVendidos.slice(0, 6);
  
  grid.innerHTML = top6.map(p => {
    const precoAtual = p.precoPromo || p.preco;
    const temPromocao = p.precoPromo !== null;
    const estrelas = '★'.repeat(Math.floor(p.avaliacao)) + (p.avaliacao % 1 >= 0.5 ? '½' : '');
    const isFavorito = favoritos.includes(p.id);
    
    return `
      <div class="produto-destaque">
        <div class="img-wrapper">
          <div class="circle-bg"></div>
          <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='imagens/fallback.jpg'">
        </div>
        <div class="categoria-tag">${p.categoria}</div>
        <div class="nome">${p.nome}</div>
        <div class="precos">
          ${temPromocao ? `<span class="preco-antigo">R$ ${p.preco.toFixed(2)}</span>` : ''}
          <span class="${temPromocao ? 'preco-promo' : 'preco-atual'}">R$ ${precoAtual.toFixed(2)}</span>
        </div>
        <div class="avaliacao">
          ${estrelas} <span class="avaliacao-texto">(${p.avaliacao})</span>
        </div>
        <div class="acoes">
          <button onclick="abrirProduto(${p.id})"><i class="fas fa-eye"></i> Ver Detalhes</button>
          <button onclick="adicionarCarrinho(${p.id})"><i class="fas fa-cart-plus"></i> Carrinho</button>
          <button class="btn-comprar" onclick="comprarAgora(${p.id})"><i class="fas fa-shopping-bag"></i> Comprar</button>
          <button class="btn-icon ${isFavorito ? 'active' : ''}" onclick="toggleFavorito(${p.id})">
            <i class="fas fa-heart" style="${isFavorito ? 'color:#ff4757;' : ''}"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}
renderMaisVendidos();

// ============================================================
// RENDER PRODUTOS
// ============================================================
function renderFiltrosEspecificos(categoria) {
  const container = document.getElementById('filtrosEspecificos');
  
  if (categoria === 'Adicionais') {
    const tipos = ['Chocolate', 'Pelúcia', 'Balões', 'Vinhos', 'Espumantes', 'Canecas', 'Cartões', 'Perfumes'];
    let html = `
      <div class="filter-group">
        <label>Tipo de Adicional</label>
        <div class="filtro-opcoes" id="filtroTipoAdicional">
          <span class="opcao active" onclick="filtrarPorTipo('todos', this)">Todos</span>
    `;
    tipos.forEach(t => {
      html += `<span class="opcao" onclick="filtrarPorTipo('${t}', this)">${t}</span>`;
    });
    html += `
        </div>
      </div>
    `;
    container.innerHTML = html;
  } else if (categoria === 'todas') {
    container.innerHTML = '';
  } else {
    const produtos = produtosPorCategoria[categoria] || [];
    const total = produtos.length;
    container.innerHTML = `
      <div style="padding:10px 0;color:#5e4e4e;font-size:0.85rem;border-top:1px solid #eee5e5;">
        <i class="fas fa-info-circle" style="color:var(--vinho);"></i> 
        ${total} ${total === 1 ? 'produto disponível' : 'produtos disponíveis'} nesta categoria
      </div>
    `;
  }
}

function filtrarPorTipo(tipo, elemento) {
  filtroTipoAdicional = tipo;
  const parent = elemento.parentElement;
  parent.querySelectorAll('.opcao').forEach(el => el.classList.remove('active'));
  elemento.classList.add('active');
  renderProdutos();
}

function renderProdutos() {
  const grid = document.getElementById('produtosGrid');
  const categoriaSelecionada = document.getElementById('categoriaFilter').value;
  const maxPrice = parseFloat(document.getElementById('priceFilter').value);

  renderFiltrosEspecificos(categoriaSelecionada);

  let lista = [];
  if (categoriaSelecionada === 'todas') {
    lista = [...todosProdutos];
  } else {
    lista = produtosPorCategoria[categoriaSelecionada] || [];
  }

  lista = lista.filter(p => p.preco <= maxPrice);

  if (categoriaSelecionada === 'Adicionais' && filtroTipoAdicional !== 'todos') {
    lista = lista.filter(p => p.tipo === filtroTipoAdicional);
  }

  lista.sort((a, b) => b.vendidos - a.vendidos);

  if (lista.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#b5a5a5;">
        <i class="fas fa-search" style="font-size:2rem;display:block;margin-bottom:12px;color:var(--rosa-medio);"></i>
        <p style="font-size:1.1rem;">Nenhum produto encontrado</p>
        <p style="font-size:0.9rem;margin-top:4px;">Tente ajustar os filtros ou escolher outra categoria</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = lista.map(p => {
    const precoAtual = p.precoPromo || p.preco;
    const temPromocao = p.precoPromo !== null;
    const estrelas = '★'.repeat(Math.floor(p.avaliacao)) + (p.avaliacao % 1 >= 0.5 ? '½' : '');
    const isFavorito = favoritos.includes(p.id);
    
    return `
      <div class="produto-card">
        <button class="favorito-btn ${isFavorito ? 'active' : ''}" onclick="toggleFavorito(${p.id})">
          <i class="fas fa-heart"></i>
        </button>
        <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='imagens/fallback.jpg'">
        <div class="nome">${p.nome}</div>
        <div class="categoria">${p.categoria}</div>
        ${p.tipo ? `<div class="categoria" style="color:var(--vinho);">${p.tipo}</div>` : ''}
        <div class="preco">
          R$ ${precoAtual.toFixed(2)}
          ${temPromocao ? `<span class="preco-antigo">R$ ${p.preco.toFixed(2)}</span>` : ''}
        </div>
        <div class="avaliacao">${estrelas} ${p.avaliacao}</div>
        <div class="acoes">
          <button class="btn-comprar" onclick="abrirProduto(${p.id})"><i class="fas fa-eye"></i> Ver</button>
          <button onclick="adicionarCarrinho(${p.id})"><i class="fas fa-cart-plus"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// RENDER OCASIÕES
// ============================================================
function renderOcasioes() {
  const grid = document.getElementById('ocasioesGrid');
  
  let lista = [...produtosOcasioes];
  
  if (ocasiaoSelecionada !== 'todas') {
    lista = lista.filter(p => p.ocasiao === ocasiaoSelecionada);
  }

  if (lista.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#b5a5a5;">
        <i class="fas fa-calendar-times" style="font-size:2rem;display:block;margin-bottom:12px;color:var(--rosa-medio);"></i>
        <p style="font-size:1.1rem;">Nenhum produto encontrado para esta ocasião</p>
        <p style="font-size:0.9rem;margin-top:4px;">Tente selecionar outra ocasião</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = lista.map(p => {
    const precoAtual = p.precoPromo || p.preco;
    const temPromocao = p.precoPromo !== null;
    const estrelas = '★'.repeat(Math.floor(p.avaliacao)) + (p.avaliacao % 1 >= 0.5 ? '½' : '');
    const isFavorito = favoritos.includes(p.id);
    const nomeOcasiao = {
      'casamento': '💒 Casamento',
      'namorados': '❤️ Dia dos Namorados',
      'maes': '🌸 Dia das Mães',
      'pais': '👔 Dia dos Pais',
      'nascimento': '👶 Nascimento',
      'condolencias': '🕊️ Condolências'
    }[p.ocasiao] || p.ocasiao;
    
    return `
      <div class="produto-card">
        <button class="favorito-btn ${isFavorito ? 'active' : ''}" onclick="toggleFavorito(${p.id})">
          <i class="fas fa-heart"></i>
        </button>
        <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='imagens/fallback.jpg'">
        <div class="nome">${p.nome}</div>
        <div class="categoria" style="color:var(--vinho);font-weight:500;">${nomeOcasiao}</div>
        <div class="categoria">${p.categoria}</div>
        <div class="preco">
          R$ ${precoAtual.toFixed(2)}
          ${temPromocao ? `<span class="preco-antigo">R$ ${p.preco.toFixed(2)}</span>` : ''}
        </div>
        <div class="avaliacao">${estrelas} ${p.avaliacao}</div>
        <div class="acoes">
          <button class="btn-comprar" onclick="abrirProduto(${p.id})"><i class="fas fa-eye"></i> Ver</button>
          <button onclick="adicionarCarrinho(${p.id})"><i class="fas fa-cart-plus"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// FILTROS OCASIÕES
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      ocasiaoSelecionada = this.dataset.ocasiao;
      renderOcasioes();
    });
  });
});

// ============================================================
// FAVORITOS
// ============================================================
function toggleFavorito(id) {
  const index = favoritos.indexOf(id);
  if (index > -1) {
    favoritos.splice(index, 1);
    showToast('Removido dos favoritos', 'Produto removido com sucesso', 'fa-heart-broken');
  } else {
    favoritos.push(id);
    showToast('Adicionado aos favoritos', 'Produto salvo com sucesso ❤️', 'fa-heart');
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  renderMaisVendidos();
  renderProdutos();
  renderFavoritos();
  renderOcasioes();
}

function renderFavoritos() {
  const grid = document.getElementById('favoritosGrid');
  if (favoritos.length === 0) {
    grid.innerHTML = `
      <div class="favoritos-vazio">
        <i class="fas fa-heart-broken"></i>
        <p style="font-size:1.1rem;">Você ainda não tem favoritos</p>
        <p style="font-size:0.9rem;margin-top:4px;">Explore nossos produtos e adicione aos favoritos ❤️</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="navegar('categorias')">
          <i class="fas fa-search"></i> Ver produtos
        </button>
      </div>
    `;
    return;
  }

  const produtosFav = todosProdutosComOcasioes.filter(p => favoritos.includes(p.id));
  grid.innerHTML = produtosFav.map(p => {
    const precoAtual = p.precoPromo || p.preco;
    const temPromocao = p.precoPromo !== null;
    const estrelas = '★'.repeat(Math.floor(p.avaliacao)) + (p.avaliacao % 1 >= 0.5 ? '½' : '');
    
    return `
      <div class="produto-card">
        <button class="favorito-btn active" onclick="toggleFavorito(${p.id})">
          <i class="fas fa-heart" style="color:#ff4757;"></i>
        </button>
        <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='imagens/fallback.jpg'">
        <div class="nome">${p.nome}</div>
        <div class="categoria">${p.categoria}</div>
        <div class="preco">
          R$ ${precoAtual.toFixed(2)}
          ${temPromocao ? `<span class="preco-antigo">R$ ${p.preco.toFixed(2)}</span>` : ''}
        </div>
        <div class="avaliacao">${estrelas} ${p.avaliacao}</div>
        <div class="acoes">
          <button class="btn-comprar" onclick="abrirProduto(${p.id})"><i class="fas fa-eye"></i> Ver</button>
          <button onclick="adicionarCarrinho(${p.id})"><i class="fas fa-cart-plus"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// PRODUTO MODAL
// ============================================================
function abrirProduto(id) {
  const p = todosProdutosComOcasioes.find(x => x.id === id);
  if (!p) return;
  produtoAtual = p;
  document.getElementById('modalMainImg').src = p.img;
  document.getElementById('modalNome').textContent = p.nome;
  document.getElementById('modalDesc').textContent = p.desc || 'Produto exclusivo ROSE';
  document.getElementById('modalPreco').textContent = `R$ ${p.precoPromo ? p.precoPromo.toFixed(2) : p.preco.toFixed(2)}`;
  document.getElementById('modalGallery').innerHTML = [p.img, p.img, p.img].map(img => 
    `<img src="${img}" onclick="document.getElementById('modalMainImg').src='${img}'" onerror="this.src='imagens/fallback.jpg'">`
  ).join('');
  document.getElementById('modalProduto').classList.add('open');
}

function fecharModal() {
  document.getElementById('modalProduto').classList.remove('open');
}

function adicionarCarrinhoModal() {
  if (produtoAtual) adicionarCarrinho(produtoAtual.id);
  fecharModal();
}
function personalizarProduto() {
  fecharModal();
  navegar('monte-buque');
}

function comprarAgora(id) {
  adicionarCarrinho(id);
  abrirCarrinho();
}

// ============================================================
// CARRINHO
// ============================================================
function adicionarCarrinho(id) {
  const p = todosProdutosComOcasioes.find(x => x.id === id);
  if (!p) return;
  const existente = carrinho.find(c => c.id === id);
  if (existente) existente.qtd++;
  else carrinho.push({ ...p, qtd: 1 });
  atualizarCarrinho();
  showToast('Adicionado ao carrinho!', `${p.nome} foi adicionado com sucesso`, 'fa-shopping-bag');
}

function removerCarrinho(id) {
  carrinho = carrinho.filter(c => c.id !== id);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const badge = document.getElementById('cartBadge');
  const total = carrinho.reduce((sum, c) => sum + c.qtd, 0);
  badge.textContent = total;
  
  const container = document.getElementById('cartItems');
  if (carrinho.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#aaa;padding:30px 0;">Seu carrinho está vazio</p>';
    document.getElementById('cartTotal').textContent = 'R$ 0,00';
    return;
  }
  container.innerHTML = carrinho.map(c => `
    <div class="cart-item">
      <img src="${c.img}" alt="${c.nome}" onerror="this.src='imagens/fallback.jpg'">
      <div class="info">
        <div class="nome">${c.nome}</div>
        <div class="preco">R$ ${(c.precoPromo || c.preco).toFixed(2)}</div>
      </div>
      <div class="qtd">
        <button onclick="alterarQtd(${c.id}, -1)">−</button>
        <span>${c.qtd}</span>
        <button onclick="alterarQtd(${c.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
  
  const totalValor = carrinho.reduce((sum, c) => sum + (c.precoPromo || c.preco) * c.qtd, 0);
  document.getElementById('cartTotal').textContent = `R$ ${totalValor.toFixed(2)}`;
}

function alterarQtd(id, delta) {
  const item = carrinho.find(c => c.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) removerCarrinho(id);
  else atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById('cartOverlay').classList.add('open');
}

function fecharCarrinho() {
  document.getElementById('cartOverlay').classList.remove('open');
}

document.getElementById('cartIcon').addEventListener('click', abrirCarrinho);

// ============================================================
// MODAL ENTREGA
// ============================================================
function abrirModalEntrega() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  document.getElementById('modalEntrega').classList.add('open');
}

function fecharModalEntrega() {
  document.getElementById('modalEntrega').classList.remove('open');
}

function selecionarEntrega(tipo) {
  tipoEntrega = tipo;
  document.querySelectorAll('.entrega-opcao').forEach(el => el.classList.remove('active'));
  document.getElementById(`opcao${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).classList.add('active');
  
  if (tipo === 'retirar') {
    document.getElementById('entregaRetirar').style.display = 'block';
    document.getElementById('entregaEntregar').style.display = 'none';
    document.getElementById('detalhesEntrega').classList.remove('show');
  } else {
    document.getElementById('entregaRetirar').style.display = 'none';
    document.getElementById('entregaEntregar').style.display = 'block';
    document.getElementById('detalhesEntrega').classList.add('show');
  }
}

function buscarEnderecoPorCEP() {
  const cepInput = document.getElementById('cepInput');
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length !== 8) return;

  const resultado = document.getElementById('freteResultado');
  resultado.innerHTML = `<div class="cep-loading"></div> Buscando endereço...`;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        resultado.innerHTML = `
          <div style="background:#fff5f5;padding:12px;border-radius:8px;color:#c0392b;font-size:0.9rem;">
            <i class="fas fa-exclamation-circle"></i> CEP não encontrado.
          </div>
        `;
        return;
      }
      document.getElementById('cidadeInput').value = data.localidade || '';
      document.getElementById('ruaInput').value = data.logradouro || '';
      resultado.innerHTML = `
        <div style="background:#e8f5e9;padding:10px 14px;border-radius:8px;color:#2e7d32;font-size:0.85rem;">
          <i class="fas fa-check-circle"></i> Endereço encontrado!
        </div>
      `;
      setTimeout(() => calcularFrete(), 300);
    })
    .catch(() => {
      resultado.innerHTML = `
        <div style="background:#fff5f5;padding:12px;border-radius:8px;color:#c0392b;font-size:0.9rem;">
          <i class="fas fa-exclamation-circle"></i> Erro ao buscar CEP.
        </div>
      `;
    });
}

function calcularFrete() {
  const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
  const resultado = document.getElementById('freteResultado');
  
  if (cep.length < 8) {
    resultado.innerHTML = `
      <div style="background:#fff5f5;padding:12px;border-radius:8px;color:#c0392b;font-size:0.9rem;">
        <i class="fas fa-exclamation-circle"></i> Digite um CEP válido.
      </div>
    `;
    return;
  }

  const frete = (18.90 + Math.random() * 10).toFixed(2);
  resultado.innerHTML = `
    <div style="background:#f8f0ee;padding:12px 16px;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:0.9rem;">
        <span>🚚 Entrega</span>
        <span style="font-weight:600;color:var(--vinho);">R$ ${frete}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:2px 0;font-size:0.8rem;color:#7a6a6a;">
        <span>⏱ Entregamos até as 20h</span>
        <span>📦 Motoboy</span>
      </div>
    </div>
  `;
  document.getElementById('freteValorExibido').textContent = `R$ ${frete}`;
  freteSelecionado = parseFloat(frete);
}

function confirmarEntrega() {
  if (tipoEntrega === 'entregar') {
    const cep = document.getElementById('cepInput').value.trim();
    const cidade = document.getElementById('cidadeInput').value.trim();
    const rua = document.getElementById('ruaInput').value.trim();
    const numero = document.getElementById('numeroInput').value.trim();
    
    if (!cep || !cidade || !rua || !numero) {
      alert('Por favor, preencha todos os campos de endereço.');
      return;
    }
    
    const dataEntrega = document.getElementById('dataEntrega').value;
    const horarioEntrega = document.getElementById('horarioEntrega').value;
    
    dadosEntrega = {
      tipo: 'entregar',
      cep,
      cidade,
      rua,
      numero,
      complemento: document.getElementById('complementoInput').value.trim() || 'N/A',
      frete: freteSelecionado || 18.90,
      data: dataEntrega || 'A definir',
      horario: horarioEntrega || 'Indiferente'
    };
  } else {
    dadosEntrega = { tipo: 'retirar' };
  }

  fecharModalEntrega();
  abrirModalConfirmacao();
}

// ============================================================
// MODAL CONFIRMAÇÃO
// ============================================================
function abrirModalConfirmacao() {
  const subtotal = carrinho.reduce((sum, c) => sum + (c.precoPromo || c.preco) * c.qtd, 0);
  let frete = 0;
  if (dadosEntrega.tipo === 'entregar') {
    frete = dadosEntrega.frete || 18.90;
  }
  const total = subtotal + frete;

  dadosPedido = {
    produtos: carrinho.map(c => ({ ...c })),
    subtotal: subtotal,
    entrega: dadosEntrega,
    frete: frete,
    total: total,
    builder: builderState
  };

  const resumo = document.getElementById('resumoPedido');
  let entregaTexto = dadosEntrega.tipo === 'retirar' ? 'Retirar na Loja' : 'Receber em Casa';
  
  resumo.innerHTML = `
    <div class="linha"><span class="label">Subtotal</span><span class="valor">R$ ${subtotal.toFixed(2)}</span></div>
    ${dadosEntrega.tipo === 'entregar' ? `<div class="linha"><span class="label">Frete</span><span class="valor">R$ ${frete.toFixed(2)}</span></div>` : `<div class="linha"><span class="label">Frete</span><span class="valor">Grátis (Retirada)</span></div>`}
    <div class="linha total"><span class="label">TOTAL</span><span class="valor">R$ ${total.toFixed(2)}</span></div>
    <div style="margin-top:8px;padding:8px 12px;background:#fcf8f6;border-radius:6px;font-size:0.8rem;color:#5e4e4e;">
      <strong>📦 Entrega:</strong> ${entregaTexto}
      ${dadosEntrega.tipo === 'entregar' ? `<br>📍 ${dadosEntrega.rua}, ${dadosEntrega.numero} - ${dadosEntrega.cidade}` : ''}
    </div>
  `;

  document.getElementById('modalConfirmacao').classList.add('open');
}

function fecharModalConfirmacao() {
  document.getElementById('modalConfirmacao').classList.remove('open');
}

// ============================================================
// ENVIAR PEDIDO WHATSAPP
// ============================================================
function enviarPedidoWhatsApp() {
  const p = dadosPedido;
  
  let produtosLista = '';
  p.produtos.forEach((c, index) => {
    const precoUnit = c.precoPromo || c.preco;
    produtosLista += `${index + 1}. ${c.nome} - ${c.qtd}x (R$ ${(precoUnit * c.qtd).toFixed(2)})\n`;
  });

  let msg = 'Olá vim pelo seu site e gostaria de realizar o seguinte pedido:\n\n';
  
  msg += `💐 Produtos:\n${produtosLista}\n`;
  
  if (Object.keys(p.builder.flores).length > 0) {
    let floresLista = '';
    Object.keys(p.builder.flores).forEach(nome => {
      const qtd = p.builder.flores[nome];
      if (qtd > 0) {
        floresLista += `${nome} × ${qtd}\n`;
      }
    });
    if (floresLista) {
      msg += `🌸 Flores do Buquê:\n${floresLista}\n`;
    }
  }
  
  if (p.builder.embalagem) {
    msg += `📦 Embalagem: ${p.builder.embalagem.nome}\n`;
  }
  
  if (p.builder.laco) {
    msg += `🎀 Laço: ${p.builder.laco.nome}\n`;
  }
  
  let adicionaisTexto = [];
  if (p.builder.cartao.ativo) {
    adicionaisTexto.push(`Cartão Personalizado (Cor: ${p.builder.cartao.cor})`);
    if (p.builder.cartao.mensagem) {
      adicionaisTexto.push(`Mensagem: "${p.builder.cartao.mensagem}"`);
    }
  }
  if (p.builder.ursinho.ativo) {
    adicionaisTexto.push(`Ursinho de Pelúcia (Cor: ${p.builder.ursinho.cor})`);
  }
  if (adicionaisTexto.length > 0) {
    msg += `🎁 Adicionais:\n${adicionaisTexto.join('\n')}\n\n`;
  } else {
    msg += `🎁 Adicionais: Nenhum\n\n`;
  }
  
  msg += `💳 Forma de pagamento: Na entrega (PIX/Cartão/Dinheiro)\n\n`;
  
  if (p.entrega.tipo === 'retirar') {
    msg += `📦 Entrega: Retirar na Loja\n\n`;
    msg += `📍 Endereço da Loja: Rua das Flores, 1010 - São Paulo - SP\n`;
    msg += `🕐 Horário: Segunda a Sábado, 9h às 20h\n\n`;
    msg += `💰 Frete: R$ 0,00\n\n`;
  } else {
    msg += `📦 Entrega: Receber em Casa\n\n`;
    msg += `📍 Endereço:\n`;
    msg += `CEP: ${p.entrega.cep}\n`;
    msg += `Rua: ${p.entrega.rua}\n`;
    msg += `Número: ${p.entrega.numero}\n`;
    msg += `Complemento: ${p.entrega.complemento || 'N/A'}\n`;
    msg += `Cidade: ${p.entrega.cidade}\n`;
    msg += `📅 Data desejada: ${p.entrega.data || 'A definir'}\n`;
    msg += `🕐 Horário preferencial: ${p.entrega.horario || 'Indiferente'}\n\n`;
    msg += `💰 Frete: R$ ${p.frete.toFixed(2)}\n\n`;
  }
  
  msg += `💵 Total do Pedido: R$ ${p.total.toFixed(2)}\n\n`;
  msg += `Obrigado! 🌹`;

  const msgEncoded = encodeURIComponent(msg);
  window.open(`https://wa.me/5511968300019?text=${msgEncoded}`, '_blank');
  
  carrinho = [];
  atualizarCarrinho();
  fecharModalConfirmacao();
}

// ============================================================
// BUILDER - MONTE SEU BUQUÊ
// ============================================================
function renderBuilderFlores() {
  const grid = document.getElementById('floresGrid');
  grid.innerHTML = floresDisponiveis.map(f => {
    const qtd = builderState.flores[f.nome] || 0;
    return `
      <div class="builder-opcao ${qtd > 0 ? 'selected' : ''}" onclick="selecionarFlor('${f.nome}')">
        <img src="${f.img}" alt="${f.nome}" onerror="this.src='imagens/fallback.jpg'">
        <div class="opcao-nome">${f.nome}</div>
        <div class="opcao-preco">R$ ${f.valor.toFixed(2)}</div>
        <div class="opcao-qtd">
          <button onclick="event.stopPropagation(); alterarFlorBuilder('${f.nome}', -1)">−</button>
          <span>${qtd}</span>
          <button onclick="event.stopPropagation(); alterarFlorBuilder('${f.nome}', 1)">+</button>
        </div>
        <div class="opcao-check"><i class="fas fa-check-circle"></i></div>
      </div>
    `;
  }).join('');
  atualizarPreviewBuilder();
}

function selecionarFlor(nome) {
  if (!builderState.flores[nome] || builderState.flores[nome] === 0) {
    builderState.flores[nome] = 1;
    renderBuilderFlores();
  }
}

function alterarFlorBuilder(nome, delta) {
  if (!builderState.flores[nome]) builderState.flores[nome] = 0;
  builderState.flores[nome] += delta;
  if (builderState.flores[nome] <= 0) delete builderState.flores[nome];
  renderBuilderFlores();
}

function renderBuilderEmbalagens() {
  const grid = document.getElementById('embalagensGrid');
  grid.innerHTML = embalagensData.map(e => {
    const selected = builderState.embalagem && builderState.embalagem.nome === e.nome;
    return `
      <div class="builder-opcao ${selected ? 'selected' : ''}" onclick="selecionarEmbalagem('${e.nome}')">
        <img src="${e.img}" alt="${e.nome}" onerror="this.src='imagens/fallback.jpg'">
        <div class="opcao-nome">${e.nome}</div>
        <div class="opcao-preco">R$ ${e.valor.toFixed(2)}</div>
        <div class="opcao-check"><i class="fas fa-check-circle"></i></div>
      </div>
    `;
  }).join('');
}

function selecionarEmbalagem(nome) {
  const emb = embalagensData.find(e => e.nome === nome);
  if (emb) {
    builderState.embalagem = emb;
    renderBuilderEmbalagens();
  }
}

function renderBuilderLacos() {
  const grid = document.getElementById('lacosGrid');
  grid.innerHTML = lacosData.map(l => {
    const selected = builderState.laco && builderState.laco.nome === l.nome;
    return `
      <div class="builder-opcao ${selected ? 'selected' : ''}" onclick="selecionarLaco('${l.nome}')">
        <img src="${l.img}" alt="${l.nome}" onerror="this.src='imagens/fallback.jpg'">
        <div class="opcao-nome">${l.nome}</div>
        <div class="opcao-preco">R$ ${l.valor.toFixed(2)}</div>
        <div class="opcao-check"><i class="fas fa-check-circle"></i></div>
      </div>
    `;
  }).join('');
}

function selecionarLaco(nome) {
  const laco = lacosData.find(l => l.nome === nome);
  if (laco) {
    builderState.laco = laco;
    renderBuilderLacos();
  }
}

function renderBuilderCoresCartao() {
  const container = document.getElementById('coresCartaoBuilder');
  container.innerHTML = coresCartao.map(c => `
    <span class="cor-btn ${builderState.cartao.cor === c ? 'active' : ''}" onclick="selecionarCorCartao('${c}')">${c}</span>
  `).join('');
}

function selecionarCorCartao(cor) {
  builderState.cartao.cor = cor;
  renderBuilderCoresCartao();
}

function renderBuilderCoresUrsinho() {
  const container = document.getElementById('coresUrsinhoBuilder');
  container.innerHTML = coresUrsinho.map(c => `
    <span class="cor-btn ${builderState.ursinho.cor === c ? 'active' : ''}" onclick="selecionarCorUrsinho('${c}')">${c}</span>
  `).join('');
}

function selecionarCorUrsinho(cor) {
  builderState.ursinho.cor = cor;
  renderBuilderCoresUrsinho();
}

function toggleAdicional(tipo) {
  if (tipo === 'cartao') {
    builderState.cartao.ativo = !builderState.cartao.ativo;
    document.getElementById('switchCartaoBuilder').classList.toggle('active');
    document.getElementById('opcoesCartao').classList.toggle('show');
    if (!builderState.cartao.ativo) {
      document.getElementById('mensagemCartaoBuilder').value = '';
      builderState.cartao.mensagem = '';
    }
  } else if (tipo === 'ursinho') {
    builderState.ursinho.ativo = !builderState.ursinho.ativo;
    document.getElementById('switchUrsinhoBuilder').classList.toggle('active');
    document.getElementById('opcoesUrsinho').classList.toggle('show');
  }
}

// ============================================================
// PREVIEW DO BUQUÊ
// ============================================================
function atualizarPreviewBuilder() {
  const container = document.getElementById('builderPreviewBuque');
  const resumo = document.getElementById('builderResumoFlores');
  const flores = Object.keys(builderState.flores);
  
  if (flores.length === 0) {
    container.innerHTML = `
      <div class="vazio">
        <i class="fas fa-leaf"></i>
        Adicione flores ao seu buquê
      </div>
    `;
  } else {
    container.innerHTML = flores.map(nome => {
      const f = floresDisponiveis.find(x => x.nome === nome);
      const qtd = builderState.flores[nome];
      return `<img src="${f.img}" class="flor-preview" title="${nome} × ${qtd}" onerror="this.src='imagens/fallback.jpg'">`;
    }).join('');
  }
  
  let total = 0;
  let html = '';
  flores.forEach(nome => {
    const qtd = builderState.flores[nome];
    const f = floresDisponiveis.find(x => x.nome === nome);
    if (f && qtd > 0) {
      const subtotal = f.valor * qtd;
      total += subtotal;
      html += `<div class="linha"><span>${nome} × ${qtd}</span><span>R$ ${subtotal.toFixed(2)}</span></div>`;
    }
  });
  
  if (builderState.embalagem) {
    html += `<div class="linha"><span>📦 ${builderState.embalagem.nome}</span><span>R$ ${builderState.embalagem.valor.toFixed(2)}</span></div>`;
    total += builderState.embalagem.valor;
  }
  if (builderState.laco) {
    html += `<div class="linha"><span>🎀 ${builderState.laco.nome}</span><span>R$ ${builderState.laco.valor.toFixed(2)}</span></div>`;
    total += builderState.laco.valor;
  }
  
  html += `<div class="linha"><span>Total</span><span>R$ ${total.toFixed(2)}</span></div>`;
  resumo.innerHTML = html;
}

// ============================================================
// NAVEGAÇÃO DO BUILDER
// ============================================================
function atualizarProgresso(step) {
  const dots = document.querySelectorAll('.step-dot');
  const lines = document.querySelectorAll('.step-line');
  const labels = document.querySelectorAll('.step-label');
  
  dots.forEach((dot, index) => {
    const num = index + 1;
    dot.classList.remove('active', 'completed');
    if (num === step) dot.classList.add('active');
    else if (num < step) dot.classList.add('completed');
  });
  
  lines.forEach((line, index) => {
    const num = index + 1;
    line.classList.toggle('completed', num < step);
  });
  
  labels.forEach((label, index) => {
    const num = index + 1;
    label.classList.toggle('active', num === step);
  });
}

function mostrarStep(step) {
  document.querySelectorAll('.builder-step').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.step) === step);
  });
  builderState.stepAtual = step;
  atualizarProgresso(step);
  window.scrollTo({ top: document.querySelector('.builder-container').offsetTop - 100, behavior: 'smooth' });
  atualizarPreviewBuilder();
}

function proximoStep() {
  const current = builderState.stepAtual;
  
  if (current === 1) {
    const totalFlores = Object.values(builderState.flores).reduce((a, b) => a + b, 0);
    if (totalFlores === 0) {
      alert('Adicione pelo menos uma flor ao seu buquê!');
      return;
    }
  }
  
  if (current === 2 && !builderState.embalagem) {
    alert('Selecione uma embalagem!');
    return;
  }
  
  if (current === 3 && !builderState.laco) {
    alert('Selecione um laço!');
    return;
  }
  
  if (current === 4) {
    builderState.cartao.mensagem = document.getElementById('mensagemCartaoBuilder').value;
    if (current < 5) {
      mostrarStep(current + 1);
      gerarResumoBuilder();
      return;
    }
  }
  
  if (current < 5) {
    mostrarStep(current + 1);
    if (current + 1 === 5) gerarResumoBuilder();
  }
}

function stepAnterior() {
  if (builderState.stepAtual > 1) {
    mostrarStep(builderState.stepAtual - 1);
  }
}

function gerarResumoBuilder() {
  const container = document.getElementById('builderResumo');
  
  let floresTexto = '';
  Object.keys(builderState.flores).forEach(nome => {
    const qtd = builderState.flores[nome];
    if (qtd > 0) {
      const f = floresDisponiveis.find(x => x.nome === nome);
      floresTexto += `${nome} × ${qtd} (R$ ${(f.valor * qtd).toFixed(2)})\n`;
    }
  });
  
  let adicionaisTexto = [];
  if (builderState.cartao.ativo) {
    adicionaisTexto.push(`Cartão Personalizado (Cor: ${builderState.cartao.cor})`);
    if (builderState.cartao.mensagem) {
      adicionaisTexto.push(`Mensagem: "${builderState.cartao.mensagem}"`);
    }
  }
  if (builderState.ursinho.ativo) {
    adicionaisTexto.push(`Ursinho de Pelúcia (Cor: ${builderState.ursinho.cor})`);
  }
  
  const totalFlores = Object.keys(builderState.flores).reduce((sum, nome) => {
    const f = floresDisponiveis.find(x => x.nome === nome);
    return sum + (f ? f.valor * builderState.flores[nome] : 0);
  }, 0);
  
  const totalEmbalagem = builderState.embalagem ? builderState.embalagem.valor : 0;
  const totalLaco = builderState.laco ? builderState.laco.valor : 0;
  const totalCartao = builderState.cartao.ativo ? 12 : 0;
  const totalUrsinho = builderState.ursinho.ativo ? 45 : 0;
  const total = totalFlores + totalEmbalagem + totalLaco + totalCartao + totalUrsinho;
  
  container.innerHTML = `
    <div class="resumo-linha"><span>🌸 Flores</span><span>R$ ${totalFlores.toFixed(2)}</span></div>
    <div class="resumo-linha"><span>📦 Embalagem (${builderState.embalagem ? builderState.embalagem.nome : 'Nenhuma'})</span><span>R$ ${totalEmbalagem.toFixed(2)}</span></div>
    <div class="resumo-linha"><span>🎀 Laço (${builderState.laco ? builderState.laco.nome : 'Nenhum'})</span><span>R$ ${totalLaco.toFixed(2)}</span></div>
    ${builderState.cartao.ativo ? `<div class="resumo-linha"><span>💌 Cartão Personalizado</span><span>R$ ${totalCartao.toFixed(2)}</span></div>` : ''}
    ${builderState.ursinho.ativo ? `<div class="resumo-linha"><span>🧸 Ursinho de Pelúcia</span><span>R$ ${totalUrsinho.toFixed(2)}</span></div>` : ''}
    <div class="resumo-linha" style="font-weight:600;font-size:1.1rem;color:var(--vinho);border-top:2px solid var(--vinho);padding-top:8px;margin-top:4px;">
      <span>TOTAL</span>
      <span>R$ ${total.toFixed(2)}</span>
    </div>
    ${builderState.cartao.ativo && builderState.cartao.mensagem ? `
      <div style="margin-top:8px;padding:8px 12px;background:#fcf8f6;border-radius:6px;font-size:0.8rem;color:#5e4e4e;">
        💌 Mensagem: "${builderState.cartao.mensagem}"
      </div>
    ` : ''}
  `;
}

function finalizarBuqueCompleto() {
  const totalFlores = Object.values(builderState.flores).reduce((a, b) => a + b, 0);
  if (totalFlores === 0) {
    alert('Adicione pelo menos uma flor ao seu buquê!');
    return;
  }
  
  if (carrinho.length === 0 && totalFlores === 0) {
    alert('Adicione produtos ao carrinho ou monte um buquê para finalizar!');
    return;
  }
  
  builderState.cartao.mensagem = document.getElementById('mensagemCartaoBuilder').value;
  
  if (carrinho.length === 0) {
    let floresTexto = '';
    let total = 0;
    Object.keys(builderState.flores).forEach(nome => {
      const qtd = builderState.flores[nome];
      if (qtd > 0) {
        const f = floresDisponiveis.find(x => x.nome === nome);
        if (f) {
          floresTexto += `${nome} × ${qtd} `;
          total += f.valor * qtd;
        }
      }
    });
    
    if (builderState.embalagem) total += builderState.embalagem.valor;
    if (builderState.laco) total += builderState.laco.valor;
    if (builderState.cartao.ativo) total += 12;
    if (builderState.ursinho.ativo) total += 45;
    
    const itemId = 999999;
    carrinho.push({
      id: itemId,
      nome: `Buquê Personalizado`,
      categoria: 'Buquê Personalizado',
      preco: total,
      precoPromo: null,
      img: 'imagens/produtos/999999.jpg',
      desc: floresTexto,
      qtd: 1,
      isBuilder: true,
      builderData: { ...builderState }
    });
    atualizarCarrinho();
  }
  
  abrirModalEntrega();
}

// ============================================================
// PÉTALAS
// ============================================================
(function() {
  const canvas = document.getElementById('petals-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let petals = [];
  const PETAL_COUNT = 18;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Petal {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height - height * 0.2;
      this.size = 6 + Math.random() * 12;
      this.speedY = 0.5 + Math.random() * 0.7;
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.rotation = Math.random() * 6.28;
      this.rotSpeed = (Math.random() - 0.5) * 0.015;
      this.opacity = 0.25 + Math.random() * 0.3;
      this.color = `hsla(340, 60%, 75%, ${this.opacity})`;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.005) * 0.15;
      this.rotation += this.rotSpeed;
      if (this.y > height + 20) { this.y = -20; this.x = Math.random() * width; }
      if (this.x < -20) this.x = width + 20;
      if (this.x > width + 20) this.x = -20;
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.5, this.size * 0.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  function initPetals() {
    petals = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      const p = new Petal();
      p.y = Math.random() * height;
      petals.push(p);
    }
  }
  initPetals();

  function animatePetals() {
    ctx.clearRect(0, 0, width, height);
    for (let p of petals) { p.update(); p.draw(); }
    requestAnimationFrame(animatePetals);
  }
  animatePetals();
})();

// ============================================================
// HEADER SCROLL
// ============================================================
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================================
// FILTROS E INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('priceFilter').addEventListener('input', (e) => {
    document.getElementById('priceValue').textContent = `R$ ${e.target.value}`;
    renderProdutos();
  });
  
  renderProdutos();
  renderFavoritos();
  renderOcasioes();
  
  renderBuilderFlores();
  renderBuilderEmbalagens();
  renderBuilderLacos();
  renderBuilderCoresCartao();
  renderBuilderCoresUrsinho();
  
  document.querySelectorAll('.builder-adicional-card .switch').forEach(el => {
    el.classList.remove('active');
  });
  document.querySelectorAll('.builder-adicional-card .adicional-opcoes').forEach(el => {
    el.classList.remove('show');
  });
  
  iniciarCarousel();
  atualizarPreviewBuilder();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    fecharModal();
    fecharModalEntrega();
    fecharModalConfirmacao();
    fecharCarrinho();
  }
});

document.querySelectorAll('.modal-produto, .modal-entrega, .modal-confirmacao').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
});