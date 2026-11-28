const whatsappNumber = "5511982397093";
const marketUrl = "https://lista.mercadolivre.com.br/_CustId_775621416";
const products = [
  {
    name: "Tensor Elástico Universal com Suporte",
    image: "img/1-Aparelho Tensor Elastico Maq. Overlock Galoneira Universal.png",
    alt: "Tensor elástico universal com suporte para rolo, regulagem e haste de fixação",
    category: "Fitas e elásticos",
    description:
      "Guia o elástico aberto vindo por baixo da máquina até a costura. Acompanha suporte para o rolo; o rolo de elástico não está incluído.",
    compatibility:
      "Regulagem até 45 mm. Descrito como universal, exceto para máquina reta; adaptável a galoneiras Bracob e overloques chinesinha GN1-6.",
    badges: ["Regulagem até 45 mm"],
    details: [
      "Fixação na mesa e regulagem de altura do tensor.",
      "O elástico passa pelo tensor, que deve ser ajustado à largura do material.",
      "Pode ser usado para aplicar o elástico antes de rebatê-lo na galoneira.",
      "Marca Jilly; modelo Tensor com Suporte.",
      "Dimensões informadas: 10 cm de largura, 55 cm de comprimento e 20 cm de altura.",
      "Material: aço galvanizado. Venda por unidade.",
    ],
  },
  {
    name: "Tensor de Elástico para Galoneira, Plana e Overlock Industrial",
    image: "img/2-Aparelho Tensor Elastico Galoneira Plana Overlock Industrial.png",
    alt: "Tensor de elástico industrial com guia para máquinas galoneira, plana e overlock",
    category: "Bainha",
    description:
      "Componente para regular a tensão e guiar o elástico durante a costura industrial.",
    compatibility:
      "Compatível com máquinas industriais Galoneira, Plana e Overlock, conforme descrição do produto.",
    badges: ["Com guia"],
    details: [
      "Estrutura em ferro com guia integrado para direcionar o material.",
      "Permite ajustar a resistência aplicada ao elástico durante a costura.",
      "Não acompanha régua de medição nem cortador.",
      "Marca Evovlere; modelo Pregar Elástico Universal. Venda por unidade.",
    ],
  },
  {
    name: "Guia Tensor para Elástico de Overloque",
    image: "img/3-Guia Tensor para Elastico Overloque.png",
    alt: "Guia tensor reforçado para elástico em overloque industrial",
    category: "Fitas e elásticos",
    description:
      "Conjunto reforçado de suporte para rolo, tensor e guia para conduzir o elástico até a costura.",
    compatibility:
      "Para overloque e interloque industriais Siruba ou similares com o mesmo encaixe. Não se adapta a overloques semi-industriais.",
    badges: ["Regulagem de 5 a 40 mm"],
    details: [
      "Regulagem para elásticos de 5 mm a 40 mm.",
      "Estrutura de ferro com banho de proteção contra ferrugem e tensor em aço inoxidável polido.",
      "Molas cônicas e porcas travantes no sistema de tensão.",
      "A descrição cita compatibilidade com modelos recentes de Singer, Kansai, Sum Special, Zoje, Sun Star, Lanmax e Bracob BC 73, conforme o encaixe.",
      "Inclui chave para regulagem da tensão e da largura.",
      "Para elásticos de 30 mm a 40 mm, recomenda-se calcador mais largo (6,4), não incluso. Venda por unidade; peso informado: 900 g.",
    ],
  },
  {
    name: "Suporte para Viés e Elástico AP9",
    image: "img/4-Suporte Para Vies E Elastico Galoneira Industrial - Ap9.png",
    alt: "Suporte AP9 para rolos de viés, fita ou elástico em máquina industrial",
    category: "Guias e suportes",
    description:
      "Apoia rolos de viés, fitas ou elásticos e ajuda a conduzir o material até o aparelho de aplicação.",
    compatibility:
      "Reta industrial, overlock industrial, galoneira industrial, pespontadeira e outros equipamentos com alimentação aérea compatível.",
    badges: ["Modelo AP9"],
    details: [
      "Suporte ajustável para alimentação aérea de viés, fitas ou elásticos.",
      "Conteúdo informado: uma unidade do suporte AP9 para máquina de costura industrial.",
      "Fabricante e marca informados: Lanmax.",
    ],
  },
  {
    name: "Suporte Superior para Elástico e Viés",
    image: "img/5-Suporte Superior Elastico Vies P Reta Galoneira Overlock.png",
    alt: "Suporte superior para rolos de elástico e viés em máquinas industriais",
    category: "Guias e suportes",
    description:
      "Suporte ajustável para alimentar rolos de viés, fitas ou elásticos durante a costura.",
    compatibility:
      "Reta industrial, overlock industrial, galoneira industrial, pespontadeira e outros equipamentos com alimentação aérea compatível.",
    badges: ["Suporte ajustável"],
    details: [
      "Ajuda a conduzir o material até o aparelho de aplicação.",
      "Conteúdo informado: um suporte superior para máquina de costura industrial.",
      "Fabricante e marca informados: Lanmax.",
    ],
  },
  {
    name: "Aparelho Mexicano Nacional com Tensor para Galoneira Fechada",
    image: "img/6-Aarelho Mexicano Nacional Com Tensor Para Galoneira Fechada.png",
    alt: "Aparelho mexicano nacional com tensor para galoneira fechada",
    category: "Fitas e elásticos",
    description: "Aparelho mexicano nacional com tensor para galoneira fechada.",
    compatibility: "Confirme a compatibilidade com o modelo da máquina antes da compra.",
    badges: [],
    details: [
      "Marca informada: Mexicano Nacional. Consulte a equipe para medidas e demais características.",
    ],
  },
  {
    name: "Aparelho Triplo de Aplicação de Viés para Elastiqueira — 25 mm",
    image: "img/7-Aparelho Triplo De Aplicacao adidas P Elastiqueira - 25mm.png",
    alt: "Aparelho triplo para aplicar três fitas de viés lado a lado em elastiqueira industrial",
    category: "Viés",
    description: "Realiza a costura simultânea de três carreiras de viés lado a lado.",
    compatibility:
      "Projetado para instalação ao lado de elastiqueira industrial; peça informada para fita de 25 mm.",
    badges: ["25 mm"],
    details: [
      "Ajuda a manter as três fitas alinhadas durante a aplicação; o resultado depende do ajuste da máquina.",
      "Conteúdo informado: um aparelho triplo para três fitas em elastiqueira industrial.",
      "Fabricante informado: Lanmax. Garantia do vendedor informada no anúncio: 7 dias.",
    ],
  },
  {
    name: "Kit com 3 Aparelhos Triplos para Aplicação de Elástico — 25 mm",
    image: "img/8-Aparelho Triplo De Aplicação adidas PElastiqueira - 25mm.png",
    alt: "Kit com três aparelhos triplos para aplicar elástico de 25 mm",
    category: "Bainha",
    description: "Kit com três aparelhos triplos para aplicação de elástico de 25 mm.",
    compatibility:
      "Tamanho informado: 25 mm. Confirme a compatibilidade com a máquina antes da compra.",
    badges: ["Kit com 3 peças", "25 mm"],
    details: [
      "Indicado para aplicação de elástico com foco em uniformidade no acabamento.",
      "Formato de venda: kit. Tipo informado: bainha; pé calcador de 25 mm.",
      "Marca Adidas; modelo Aparelho Triplo de Aplicação.",
      "Material: metal. Informado com guia, régua e cortador.",
    ],
  },
];
const faqs = [
  {
    question: "Como sei se o aparelho serve na minha máquina?",
    answer:
      "Envie à equipe a marca e o modelo da máquina, além do tipo de acabamento desejado. A compatibilidade deve ser confirmada antes da compra.",
  },
  {
    question: "Quais tipos de acessórios encontro?",
    answer:
      "A KINGS trabalha com aparelhos de bainha e viés, aplicadores de fitas e elásticos, guias e suportes. Consulte o catálogo atualizado pelo WhatsApp.",
  },
  {
    question: "Como consulto preço e disponibilidade?",
    answer:
      "Peça uma consulta pelo WhatsApp ou veja os anúncios disponíveis na loja da KINGS no Mercado Livre.",
  },
  {
    question: "Há opções para galoneira?",
    answer:
      "Há aparelhos de bainha para galoneira. Informe o modelo da máquina para confirmar a compatibilidade da peça.",
  },
  {
    question: "A KINGS atende presencialmente nesse endereço?",
    answer:
      "Não. A KINGS é uma loja online e não realiza atendimento nem retirada presencial. A operação fica na R. Badabuã, 121 - Cs - Jardim de Lorenzo, São Paulo - SP, 03715-070. Fale com a equipe para consultar as opções de envio.",
  },
];

const productList = document.querySelector("#lista-produtos");
const searchInput = document.querySelector("#busca-produtos");
const resultLabel = document.querySelector("#resultado-busca");
const emptyState = document.querySelector("#sem-resultados");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeCategory = "Todos";

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function productCard(product) {
  const safeName = escapeHtml(product.name);
  const message = encodeURIComponent(
    `Olá! Tenho interesse em ${product.name}. Pode me ajudar com preço e compatibilidade?`,
  );
  const badges = product.badges
    .map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`)
    .join("");
  const details = product.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("");
  return `
        <article class="product-card reveal">
          <div class="product-visual">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" width="640" height="480" loading="lazy" decoding="async">
          </div>
          <div class="product-copy">
            <div class="product-info">
              <div class="badge-list">${badges}<span class="badge">${escapeHtml(product.category)}</span></div>
              <h3>${safeName}</h3>
              <p>${escapeHtml(product.description)}</p>
              <p class="compatibility">${escapeHtml(product.compatibility)}</p>
              <details class="product-details"><summary>Ver detalhes do produto</summary><ul>${details}</ul></details>
              <p class="price-note">Consulte o preço</p>
            </div>
            <div class="product-actions">
              <a class="button button--whatsapp button--small" href="https://wa.me/${whatsappNumber}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Pedir ${safeName} pelo WhatsApp">Pedir no WhatsApp</a>
              <a class="button button--market button--small" href="${marketUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ver anúncios da loja no Mercado Livre">Ver no Mercado Livre</a>
            </div>
          </div>
        </article>`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchableText =
      `${product.name} ${product.description} ${product.category} ${product.compatibility}`.toLocaleLowerCase(
        "pt-BR",
      );
    return matchesCategory && searchableText.includes(query);
  });
  productList.innerHTML = visibleProducts.map(productCard).join("");
  emptyState.hidden = visibleProducts.length > 0;
  resultLabel.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}.`;
  observeReveals();
}

function addStructuredData(id, data) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.append(script);
}

function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal:not([data-observed])");
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => {
    item.dataset.observed = "true";
    observer.observe(item);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#menu-principal");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !isExpanded);
});
siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
    menuToggle.focus();
  }
});
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((filterButton) =>
      filterButton.setAttribute("aria-pressed", String(filterButton === button)),
    );
    renderProducts();
  });
});
searchInput.addEventListener("input", renderProducts);
document.querySelector("#ano-atual").textContent = String(new Date().getFullYear());

renderProducts();
addStructuredData("product-list-schema", {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catálogo de aparelhos e acessórios para costura — KINGS Patchwork e Costura",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      category: product.category,
      image: new URL(product.image, document.baseURI).href,
    },
  })),
});
addStructuredData("faq-schema", {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});
