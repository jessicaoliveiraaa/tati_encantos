// --- DADOS DOS PRODUTOS ---
// Para adicionar um novo produto, copie um bloco { ... } e cole abaixo, trocando as informações.
// As categorias que funcionam com os seus botões são: "animais", "fontes" e "personagens".

const produtos = [
    // --- CATEGORIA: PERSONAGENS ---
    {
        id: 1,
        titulo: "ET Festeiro",
        categoria: "personagens", 
        imagens: ["et-festeiro2.webp", "et-festeiro1.webp", "et-festeiro3.webp"],
        medidas: "1.27m alt x 74cm larg",
        desc: "Uma peça criativa e cheia de humor para o seu jardim.",
        preco: 850.00
    },
    {
        id: 10,
        titulo: "Tom y Jerry",
        categoria: "personagens",
        imagens: ["tom4.webp", "tom5.webp", "tom1.webp", "tom2.webp", "tom3.webp"],
        medidas: "46cm alt x 1.40m larg",
        desc: "Nostalgia e diversão em peças cheias de vida.",
        preco: 1200.00
    },
    {
        id: 12,
        titulo: "Guria com cusco",
        categoria: "personagens",
        imagens: ["guria-custo.webp", "guris-cusco.webp"],
        medidas: "70cm alt x 65cm larg",
        desc: "Uma cena adorável para trazer afeto e alegria ao seu lar.",
        preco: 550.00
    },
    {
        id: 13,
        titulo: "Guri com cusco",
        categoria: "personagens",
        imagens: ["guri-cusco.webp", "guris-cusco.webp"],
        medidas: "70cm alt x 65cm larg",
        desc: "O par perfeito para levar o encanto do campo ao seu jardim.",
        preco: 550.00
    },
    {
        id: 17,
        titulo: "ET (Verde Clássico)",
        categoria: "personagens", 
        imagens: ["et-verde.webp"],
        medidas: "1.27m alt x 88cm larg",
        desc: "O toque inusitado que faltava na sua área externa.",
        preco: 850.00
    },
    {
        id: 21,
        titulo: "Garfield",
        categoria: "personagens",
        imagens: ["garfield.webp"],
        medidas: "20cm alt x 40cm larg",
        desc: "Humor e nostalgia com o felino mais amado da TV.",
        preco: 150.00
    },
    {
        id: 36,
        titulo: "ET Minha Casa",
        categoria: "personagens", 
        imagens: ["et-minha-casa.webp"],
        medidas: "88cm alt x 62cm larg",
        desc: "O clássico do cinema direto para o seu jardim.",
        preco: 700.00
    },

    // --- CATEGORIA: ANIMAIS ---
    {
        id: 2,
        titulo: "Garça caçando peixes",
        categoria: "animais",
        imagens: ["garca-peixe1.webp", "garca-peixe2.webp"],
        medidas: "1.49m alt x 62cm larg",
        desc: "Beleza e realismo da natureza para o seu jardim.",
        preco: 600.00
    },
    {
        id: 3,
        titulo: "Macacos",
        categoria: "animais",
        imagens: ["macaco2.webp", "macaco1.webp", "macaco4.webp", "macaco3.webp", "macaco5.webp"],
        medidas: "84cm alt x 58cm larg",
        desc: "Diversão nas alturas para dar vida ao seu quintal.",
        preco: 150.00
    },
    {
        id: 7,
        titulo: "Cisne Grande",
        categoria: "animais",
        imagens: ["cisne-grande.webp"],
        medidas: "90cm alt x 1m larg",
        desc: "Elegância e imponência para dar destaque ao seu jardim.",
        preco: 400.00
    },
    {
        id: 8,
        titulo: "Cisne de Pedra",
        categoria: "animais",
        imagens: ["cisne-pedra1.webp", "cisne-pedra2.webp", "cisne-pedra3.webp"],
        medidas: "80cm alt x 1.03m larg",
        desc: "O charme rústico perfeito para embelezar sua área externa.",
        preco: 450.00
    },
    {
        id: 9,
        titulo: "Cisne Normal",
        categoria: "animais",
        imagens: ["cisne-normal1.webp", "cisne-nomal2.webp"],
        medidas: "75cm alt x 55cm larg",
        desc: "Um toque clássico e delicado para acomodar suas plantas.",
        preco: 350.00
    },
    {
        id: 11,
        titulo: "Camelos",
        categoria: "animais",
        imagens: ["camelos1.webp", "camelos2.webp"],
        medidas: "66cm alt x 70cm larg",
        desc: "Um toque exótico e fascinante para destacar sua área externa.",
        preco: 350.00
    },
    {
        id: 14,
        titulo: "Burrinhos",
        categoria: "animais",
        imagens: ["burro1.webp", "burro2.webp"],
        medidas: "51cm alt x 48cm larg",
        desc: "O charme rústico do campo para alegrar seu quintal.",
        preco: 300.00
    },
    {
        id: 15,
        titulo: "Ganso dos Ovos de Ouro",
        categoria: "animais", 
        imagens: ["ganso-ouro.webp"],
        medidas: "80cm alt x 84cm larg",
        desc: "A magia das fábulas clássicas no seu próprio jardim.",
        preco: 350.00
    },
    {
        id: 16,
        titulo: "Flamingos Grandes",
        categoria: "animais",
        imagens: ["flamingos-grande.webp"],
        medidas: "71cm alt x 89cm larg",
        desc: "Elegância tropical em tamanho real para o seu jardim.",
        preco: 350.00
    },
    {
        id: 18,
        titulo: "Flamingo Florido",
        categoria: "animais",
        imagens: ["flamingo-florido.webp"],
        medidas: "77cm alt x 84cm larg",
        desc: "Cores vivas e detalhes florais para acomodar suas plantas.",
        preco: 450.00
    },
    {
        id: 19,
        titulo: "Tartaruga",
        categoria: "animais",
        imagens: ["tartaruga.webp"],
        medidas: "52cm alt x 66cm larg",
        desc: "O charme da natureza replicado perfeitamente no seu quintal.",
        preco: 250.00
    },
    {
        id: 22,
        titulo: "Girafa Grande (Promo)",
        categoria: "animais",
        imagens: ["girafa-promo.webp"],
        medidas: "2m alt x 84cm larg",
        desc: "O grande destaque do seu paisagismo com preço especial.",
        preco: 800.00
    },
    {
        id: 24,
        titulo: "Coala Pendurado",
        categoria: "animais",
        imagens: ["coala-pendurado.webp"],
        medidas: "50cm alt x 54cm larg",
        desc: "Diversão e fofura ideais para pendurar nas suas árvores.",
        preco: 200.00
    },
    {
        id: 25,
        titulo: "Coalas",
        categoria: "animais",
        imagens: ["coalas2.webp", "coalas1.webp"],
        medidas: "33cm alt x 25cm larg",
        desc: "Delicadeza e encanto em uma peça de chão apaixonante.",
        preco: 220.00
    },
    {
        id: 26,
        titulo: "Capivara Sentada",
        categoria: "animais",
        imagens: ["capivara-sentada.webp"],
        medidas: "41cm alt x 64cm larg",
        desc: "A simpatia do nosso animal símbolo na sua casa.",
        preco: 420.00
    },
    {
        id: 27,
        titulo: "Sapos",
        categoria: "animais",
        imagens: ["sapo5.webp", "sapo6.webp", "sapo1.webp", "sapo2.webp", "sapo3.webp", "sapo4.webp", "sapo8.webp", "sapo10.webp"],
        medidas: "28cm alt x 1m larg",
        desc: "Cores vibrantes para trazer alegria e vida ao jardim.",
        preco: 250.00 
    },
    {
        id: 28,
        titulo: "Capivara Tamanho Real",
        categoria: "animais",
        imagens: ["capivara-grande.webp"],
        medidas: "54cm alt x 82cm larg",
        desc: "Modelo em tamanho maior.",
        preco: 800.00
    },
    {
        id: 29,
        titulo: "Javali",
        categoria: "animais",
        imagens: ["javali.webp"],
        medidas: "54cm alt x 91cm larg",
        desc: "Uma peça rústica e robusta com presença muito marcante.",
        preco: 800.00
    },
    {
        id: 30,
        titulo: "Canguru com filhote",
        categoria: "animais",
        imagens: ["canguru1.webp", "canguru2.webp"],
        medidas: "58cm alt x 54cm larg",
        desc: "Afeto e funcionalidade para acomodar suas plantas favoritas.",
        preco: 250.00
    },
    {
        id: 31,
        titulo: "Girafas",
        categoria: "animais",
        imagens: ["girafa-grande2.webp", "girafa-grande1.webp"],
        medidas: "1.84m alt x 1.06m larg",
        desc: "Um conjunto impressionante para transformar o seu paisagismo.",
        preco: 1200.00
    },
    {
        id: 32,
        titulo: "Tartaruga Marinha",
        categoria: "animais",
        imagens: ["parede1.webp", "parede2.webp"],
        medidas: "11cm alt x 38cm larg",
        desc: "Alegria e cor em um vaso de parede encantador.",
        preco: 100.00
    },
    {
        id: 33,
        titulo: "Girafa Filhote",
        categoria: "animais",
        imagens: ["girafa-menor.webp"],
        medidas: "95cm alt x 64cm larg",
        desc: "Toda a elegância da girafa em uma versão compacta.",
        preco: 300.00
    },
    {
        id: 34,
        titulo: "Gato Base",
        categoria: "animais",
        imagens: ["gato-base2.webp", "gato.base1.webp"], 
        medidas: "28cm alt x 56cm larg",
        desc: "A base perfeita e divertida para apoiar seus vasos.",
        preco: 80.00
    },
    {
        id: 37,
        titulo: "Flamingos (3 mods)",
        categoria: "animais",
        imagens: ["flamingos1.webp", "flamingos2.webp", "flamingos3.webp", "flamingos4.webp"],
        medidas: "83cm alt x 34cm larg",
        desc: "Versatilidade e cor com nosso trio de flamingos charmosos.",
        preco: 70.00
    },
    {
        id: 38,
        titulo: "Gatinhos Orientais",
        categoria: "animais",
        imagens: ["gato-felicidade.webp"],
        medidas: "28cm alt x 41cm larg",
        desc: "Boas energias e muita fofura para alegrar seu lar.",
        preco: 150.00
    },
    {
        id: 39,
        titulo: "Pato",
        categoria: "animais",
        imagens: ["pato1.webp"],
        medidas: "Consulte medidas",
        desc: "Produto indisponível no momento.",
        preco: 0.00
    },

    // --- CATEGORIA: FONTES E ÁGUA ---
    {
        id: 4,
        titulo: "Fontes de Tartaruga",
        categoria: "fontes",
        imagens: ["tartaruga1.webp", "tartaruga2.webp", "tartaruga3.webp", "tartaruga4.webp"],
        medidas: "51cm alt x 88cm larg",
        desc: "Água corrente e relaxamento com um lindo acabamento premium.",
        preco: 450.00
    },
    {
        id: 6,
        titulo: "Pato que esguicha água",
        categoria: "fontes",
        imagens: ["pato.webp"],
        medidas: "51cm alt x 40cm larg",
        desc: "Água em movimento para dar mais vida à sua área externa.",
        preco: 350.00
    },
    {
        id: 23,
        titulo: "Fonte Xícara e Bule",
        categoria: "fontes",
        imagens: ["fonte-xicara.webp"],
        medidas: "64cm alt x 68cm larg",
        desc: "Magia e criatividade com o encanto do estilo Alice.",
        preco: 550.00
    },

    // --- OUTROS (Aparecerão em "Todos" e "Menor Preço") ---
    {
        id: 5,
        titulo: "Tronco com ninho",
        categoria: "decoracao",
        imagens: ["ninho1.webp", "ninho2.webp"],
        medidas: "57cm alt x 30cm larg",
        desc: "Decoração rústica e natural ideal para suas plantinhas.",
        preco: 250.00
    },
    {
        id: 20,
        titulo: "Elefante Vaso Duplo",
        categoria: "decoracao",
        imagens: ["elefante1.webp", "elefante2.webp"],
        medidas: "25cm alt x 60cm larg",
        desc: "Praticidade e fofura para destacar duas plantas de vez.",
        preco: 150.00
    },
    {
        id: 35,
        titulo: "Xícaras com Jarra",
        categoria: "decoracao",
        imagens: ["xicara1.webp", "xicara2.webp"],
        medidas: "32cm alt x 40cm larg",
        desc: "Criatividade e cor em um conjunto de parede divertido.",
        preco: 150.00
    },
    {
        id: 40,
        titulo: "Coruja",
        categoria: "animais",
        imagens: ["coruja1.webp", "coruja2.webp"],
        medidas: "65cm alt x 20cm larg",
        desc: "Sabedoria e charme rústico vigiando o seu jardim.",
        preco: 250.00
    },
    {
        id: 41,
        titulo: "Capivara Filhote",
        categoria: "animais",
        imagens: ["vara1.webp", "vara2.webp"],
        medidas: "39cm alt x 54cm larg",
        desc: "Doçura e charme em um filhote de capivara encantador.",
        preco: 250.00,
    },
    {
        id: 42,
        titulo: "Guarda-Chuva",
        categoria: "decoracao",
        imagens: ["chuva1.webp", "chuva2.webp", "chuva3.webp"],
        medidas: "70cm alt x 30cm larg",
        desc: "Cor e alegria para pendurar suas plantas na parede.",
        preco: 150.00,
    },
    {
        id: 43,
        titulo: "Pantera Cor de Rosa",
        categoria: "personagens",
        imagens: ["pantera1.webp", "pantera2.webp", "pantera3.webp"],
        medidas: "1m alt x 50cm larg",
        desc: "O humor clássico da TV direto para sua casa.",
        preco: 450.00,
    },
    {
        id: 44,
        titulo: "ET Pequeno",
        categoria: "personagens",
        imagens: ["pequeno1.webp", "pequeno2.webp", "pequeno3.webp"],
        medidas: "Consulte medidas",
        desc: "Produto indisponível no momemento.",
        preco: 0.00,
    },
    {
        id: 45,
        titulo: "Arara",
        categoria: "animais",
        imagens: ["arara4.webp", "arara1.webp", "arara2.webp", "arara3.webp"],
        medidas: "40cm alt x 15cm larg",
        desc: "A beleza vibrante das nossas aves na sua decoração.",
        preco: 40.00,
    }


];

// --- LÓGICA DO SISTEMA ---

const grid = document.getElementById('products-grid');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('img-in-modal');
const closeModal = document.getElementsByClassName('close-modal')[0];

function renderProducts(produtosFiltrados = produtos) {
    grid.innerHTML = produtosFiltrados.map(produto => {
        const precoFormatado = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        // LÓGICA NOVA: Se for até 150, adiciona a classe 'preco-oferta'
        let classeDestaque = "";
        if (produto.preco > 0 && produto.preco <= 150) {
            classeDestaque = "preco-oferta";
        }

        const message = `Olá, gostaria de saber mais sobre o produto: ${produto.titulo}`;
        const whatsLink = `https://wa.me/5553981253599?text=${encodeURIComponent(message)}`;

        let buttonHTML;
        if (produto.id === 39 || produto.id === 44) { 
             buttonHTML = `<span class="btn-card sold-out">Esgotado</span>`;
        } else {
             buttonHTML = `
                <a href="${whatsLink}" target="_blank" class="btn-card">
                    <img src="assets/img/whats.webp" alt="Logo Whats" style="width:20px; height:20px; border-radius:50%;">
                    Chamar no Whatsapp
                </a>
            `;
        }

        const imagensHTML = produto.imagens.map(imgName => {
            return `
                <div class="gallery-item" onclick="openZoom('assets/img/${imgName}')">
                    <img src="assets/img/${imgName}" alt="${produto.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Foto'">
                </div>
            `;
        }).join('');

        const hintText = produto.imagens.length > 1 ? 'Arraste para ver mais' : 'Clique para ampliar';

        return `
            <article class="product-card" data-category="${produto.categoria}">
                <div class="card-gallery">
                    ${imagensHTML}
                    <div class="drag-hint">${hintText}</div>
                </div>
                
                <div class="card-info">
                    <h3 class="card-title">${produto.titulo}</h3>
                    <p class="card-dims">${produto.desc}</p>
                    <p class="card-dims" style="font-weight:bold; color:#666;">Medidas: ${produto.medidas}</p>
                    
                    <p class="card-price ${classeDestaque}">${produto.preco > 0 ? precoFormatado : 'Consulte Valor'}</p>
                    <div class="installment-badge">💳 Parcelamos em até 18 vezes</div>

                    ${buttonHTML}
                </div>
            </article>
        `;
    }).join('');
}

// Filtros dos botões
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        
if (e.target.classList.contains('btn-encomendas')) {
            // Texto com negritos e espaçamento, sem emojis para não dar erro
            const msg = "Oi, Tati! Vi no site que vocês aceitam encomendas e gostaria de fazer uma.";
            
            const linkWhats = `https://wa.me/5553981253599?text=${encodeURIComponent(msg)}`;
            window.open(linkWhats, '_blank');
            return; 
        }

        const categoria = e.target.getAttribute('data-filter');

        // Remove a classe 'active' do botão anterior e adiciona no clicado
        const btnAtivo = document.querySelector('.filter-btn.active');
        if (btnAtivo) btnAtivo.classList.remove('active');
        e.target.classList.add('active');

        // Regras de filtragem
        if (categoria === 'todos') {
            renderProducts(produtos);
        } else if (categoria === 'menor-preco' || categoria === 'menor-preco') {
            // Filtra produtos com preço válido (maior que 0) E que custem até 150
            const ofertasAte150 = produtos.filter(p => p.preco > 0 && p.preco <= 150);
            
            // Organiza do mais barato para o mais caro
            const ordenados = ofertasAte150.sort((a, b) => a.preco - b.preco);
            
            renderProducts(ordenados);
        } else {
            const filtrados = produtos.filter(p => p.categoria === categoria);
            renderProducts(filtrados);
        }
    });
});

// Renderiza tudo na tela inicial
renderProducts();

// Modal de Zoom
window.openZoom = function(src) {
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = src;
    }
}

if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Injetando os links corretos da dev no Footer
const linksDev = document.querySelectorAll('.dev-buttons .btn-dev');
if (linksDev.length >= 2) {
    linksDev[0].href = "https://instagram.com/jessi_oliveira512?igsh=YzlheGgxMHBhZm41"; // Coloque seu arroba aqui
    linksDev[1].href = "https://www.linkedin.com/in/jessica-oliveira-dev"; 
}