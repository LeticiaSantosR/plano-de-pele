/* =========================================================
   Loja - Template “cara de e-commerce”
   - Menu categorias com dropdown + mobile drawer
   - Slider com imagens desktop/mobile
   - Carrosséis (mais vendidos / raridades)
   - Carrinho
   - Finalização obrigatória via WhatsApp (sem backend)
   ========================================================= */

   const $ = (s) => document.querySelector(s);

   /* ✅ TROQUE AQUI pelo SEU WhatsApp:
      Formato: 55 + DDD + número (sem espaços, sem traços)
      Ex: (11) 98888-7777 => "5511988887777"
   */
   const WHATSAPP_NUMBER = "5532987122023";
   
   /* ===== CATEGORIAS ===== */
   const CATEGORIES = [
     {
       name: "Perfumes 25ml",
       href: "#ver-tudo",
       children: [
         { name: "Ver tudo", href: "#ver-tudo" },
         { name: "Feminino", href: "#ver-tudo" },
         { name: "Masculino", href: "#ver-tudo" },
         { name: "Lançamentos", href: "#ver-tudo" },
       ],
     },
     {
       name: "Kits",
       href: "#ver-tudo",
       children: [
         { name: "Ver tudo", href: "#ver-tudo" },
         { name: "Feminino", href: "#ver-tudo" },
         { name: "Masculino", href: "#ver-tudo" },
       ],
     },
     {
       name: "80/100ml",
       href: "#ver-tudo",
       children: [
         { name: "Ver tudo", href: "#ver-tudo" },
         { name: "Feminino", href: "#ver-tudo" },
         { name: "Masculino", href: "#ver-tudo" },
       ],
     },
     {
       name: "Árabes",
       href: "#ver-tudo",
       children: [
         { name: "Ver tudo", href: "#ver-tudo" },
         { name: "Decant", href: "#ver-tudo" },
         { name: "Lacrados", href: "#ver-tudo" },
       ],
     },
   ];
   
   /* ===== SLIDES =====
      Troque as imagens na pasta img/slides/
   */
   const SLIDES = [
     {
       title: "Promoções e novidades",
       text: "Troque este texto no JS e substitua as imagens na pasta.",
       desktop: "img/slides/slide1-desktop.jpg",
       mobile: "img/slides/slide1-mobile.jpg",
     },
     {
       title: "Frete e condições",
       text: "Anuncie campanhas: frete grátis, combos, lançamentos, etc.",
       desktop: "img/slides/slide2-desktop.jpg",
       mobile: "img/slides/slide2-mobile.jpg",
     },
   ];
   
   /* ===== PRODUTOS =====
      Você só precisa ajustar nome/preço/tag e colocar imagens em img/produtos/
   */
   const PRODUCTS = [
     { 
  id:"p1",
  name:"136 - JP Scandal F 25ml",
  price: 79.00,
  pixOff: 0.07,
  tag:"Mais vendido",
  category:"Perfumes 25ml",
  image:"img/produtos/p1.jpg",
  desc: `A Brand Collection N° 136 é inspirada no Scandal (Jean Paul Gaultier), um Chipre Floral Gourmand intenso, doce e sensual, com destaque para mel e notas florais. Ideal para noites e clima frio.

Notas Olfativas (inspiradas no original):
• Topo: Mel, Bagas Vermelhas, Amora, Ameixa
• Coração: Jasmim, Noz-moscada, Rosa, Lírio-do-Vale
• Fundo: Patchouli, Chocolate, Caramelo, Baunilha, Fava Tonka, Âmbar, Almíscar, Sândalo

Ocasião: uso noturno, festas, outono/inverno.`
},
    {
    id: "p2",
    name: "087 - Olympea F 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Mais vendido",
    category: "Perfumes 25ml",
    image: "img/produtos/p2.jpg",
    desc: `Inspiração : Olympéa

Extremamente feminino. Fiel a seus valores inovadores, onde a provocação revela o espírito do tempo. Com uma sensualidade única e irreverente, a qual nada nem ninguém pode resistir.

Familia Olfativa: Floral, Oriental

🔸Notas de Topo: Tangerina Verde, Flor de Gengibre, Jasmim Aquático

🔸Notas de Coração: Baunilha Salgada

🔸Notas de Fundo: Ambergris, Caxemira, Sândalo

Brand Collection- N°087🥰

25ml`,
  },
  {
    id: "p3",
    name: "324 - Jean Paul Gualtier La Belle F 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Mais vendido",
    category: "Perfumes 25ml",
    image: "img/produtos/p3.jpg",
    desc: `Um dos lançamentos mais esperado de 2023 !!!! 

Um perfume feminino oriental gourmand !!!

Demonstra a sensualidade intensa e viciante da mulher irresistível, representando um jardim vistoso e repleto de mistérios, onde todos os pecados são permitidos.

A fragrância reúne a originalidade e a beleza feminina celebrando um brinde ao fruto vermelho proibido.

Nota de topo é Pera.

Notas de coração são: Fava Tonka e Jasmim.

Nota de fundo é Baunilha.

Brandcollection Nº 324

Contém 25 ml`,
     
  },
  {
    id: "p4",
    name: "012 - La Vie Est Belle F 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Mais vendido",
    category: "Perfumes 25ml",
    image: "img/produtos/p4.jpg",
    desc: `Inspiração : La Vie est belle 😍

😍 La Vie est belle, um perfume extremamente sensual e Sedutor 💃 deixando você ainda mais poderosa deixando sua assinatura por onde passar 🥰

🔸Familia Olfativa: Floral, Frutal, Gustativo

🔸Notas de Topo: Cassis ou groselha preta e Pêra

🔸Notas de Coração: Íris, Jasmin e Flor de Laranjeira

🔸Notas de Fundo: Patchouli, Fava Tonka, Baunilha e Pralinê

Contém  25ml

Brand Collection- N°012🥰`,
  },
  {
    id: "p5",
    name: "233 - Armani Because It’s You F - 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p5.jpg",
    desc: `Inspiração perfume Because IT's You 😍

Ela joga com seus poderes de sedução conforme a baunilha se mistura com almíscares, revelando uma sensualidade complexa e incrivelmente profunda

🔸Familia Olfativa: Floral Frutal

🔸Notas de Topo: Framboesa, Néroli e Limão Siciliano

🔸Notas de Coração: Rosa

🔸Notas de Fundo: Baunilha, Almíscar e Madeira de Âmbar

Brand Collection - N°233🤩

25ml`,
  },
  {
    id: "p6",
    name: "159 - YSL Libre F 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p6.jpg",
    desc: `Inspiração perfume Libre😍

Fragrância pura e sensual, vibrante e conquistadora 💃

Familia Olfativa: 🥰

🔸Notas de topo são; de tangerina, lavanda, cassis ou groselha preta e petitgrain.

🔸Notas de coração são; de jasmin, lavanda e flor de laranjeira.

🔸Notas de fundo são de baunilha do Madagascar, cedro, ambargris e almíscar.,

Brand Collection- N°159⚡

25ml`,
  },
  {
    id: "p7",
    name: "420 - Dior Etoile Bonne - 25ml (Infantil)",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p7.jpg",
    desc: `Perfume Infantil Compartilhável Brand Collection 420 Eau de Parfum - D´or Etoile
Brand Collection 420 traduz o conforto de um abraço e a suavidade dos primeiros cuidados. Inspirado em Bonne Étoile Baby Dior, ele se abre com a delicadeza fresca da Pera Verde,
trazendo sensação de limpeza e leveza imediata. No coração, a Rosa Silvestre floresce de forma suave e acolhedora, remetendo a carinho, proteção e afeto. Ao fundo, o Almíscar Branco envolve a pele com um toque macio, limpo e reconfortante, criando um rastro delicado e seguro.`,
  },
  {
    id: "p8",
    name: "116 - Invictus Paco Rabanne M 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p8.jpg",
    desc: `Inspiração perfume INVICTUS 🏆

Ser vitorioso com o perfume Invictus! Um campeão invejado, um símbolo sexual. Ícone para homens, fantasia total para as mulheres!

🔸Familia Olfativa: Amadeirado Aquático

🔸Notas de Topo: Toranja, Notas oceânicas e Tangerina

🔸Notas de Coração: Folha de Louro e Jasmin

🔸Notas de Fundo: Madeira Guaiac, Musgo de Carvalho, Patchouli ou Oriza e Ambargris

Brandcollection- N°116 😎

25ml`,
  },
  {
    id: "p9",
    name: "238- Idole Lancôme F 25ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p9.jpg",
    desc: `Inspiração : IDÔLE 😍

“Ao longo dos anos, as mulheres se transformaram, se reinventaram. Lancôme segue essa evolução, continuando seu caminho o mais próximo possível das aspirações de cada mulher.

🔸Familia Olfativa: Chipre, Floral

🔸Notas de Topo: Bergamota, Pêra Suculenta e Pimenta Rosa

🔸Notas de Coração: Rosa e Jasmim

🔸Notas de Fundo: Musk Branco, Baunilha, Patchouli, Cedro

Brandcollection- N°238🥰

25ml`,
  },
  {
    id: "p10",
    name: "093 - Dolce & Gabanna Light Blue F 25 ml",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p10.jpg",
    desc: `Um Perfume feminino deliciosamente marcante. Ideal para mulheres modernas que gostam do estilo de vida elegante e casual.

Notas de Topo:Maçã, Cedro, Câmpanula e Limão Siciliano

Notas de Coração:Bambu, Rosa Branca e Jasmim

Notas de Fundo:Âmbar, Cedro, e Almiscar.

Brandcollection  N° 093

Contém 25ml`,
  },
  {
    id: "p11",
    name: "Produto 6",
    price: 79.0,
    pixOff: 0.07,
    tag: "Raridade",
    category: "Perfumes 25ml",
    image: "img/produtos/p6.jpg",
    desc: ``,
  },
];
   
   function formatBRL(v){
     return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
   }
   function pricePix(price, off){
     return price * (1 - (off || 0));
   }
   
   /* ===== Helpers (Drawer / Modal) ===== */
   function openDrawer(id){
     const el = document.getElementById(id);
     el.classList.add("open");
     el.setAttribute("aria-hidden","false");
   }
   function closeDrawer(id){
     const el = document.getElementById(id);
     el.classList.remove("open");
     el.setAttribute("aria-hidden","true");
   }
   function openModal(id){
     const el = document.getElementById(id);
     el.classList.add("open");
     el.setAttribute("aria-hidden","false");
   }
   function closeModal(id){
     const el = document.getElementById(id);
     el.classList.remove("open");
     el.setAttribute("aria-hidden","true");
   }
   
   /* ===== Render Menu ===== */
   function renderNav(){
     const nav = $("#navRow");
     const mobile = $("#mobileMenu");
   
     nav.innerHTML = CATEGORIES.map(cat => {
       const children = (cat.children || []).map(c =>
         `<a href="${c.href}">${c.name} <span>›</span></a>`
       ).join("");
   
       return `
         <div class="nav-item">
           <a href="${cat.href}">${cat.name}</a>
           <div class="dropdown">${children}</div>
         </div>
       `;
     }).join("");
   
     // Mobile: lista simples
     mobile.innerHTML = CATEGORIES.map(cat => {
       const children = (cat.children || []).map(c => `<a class="m-link" href="${c.href}">${c.name}</a>`).join("");
       return `
         <div class="m-group">
           <strong class="m-title">${cat.name}</strong>
           <div class="m-children">${children}</div>
         </div>
       `;
     }).join("");
   
     // CSS leve pro menu mobile (pra não criar outro arquivo)
     const style = document.createElement("style");
     style.textContent = `
       .m-group{ border:1px solid #e8e8f1; border-radius:16px; padding:12px; background:#fff; }
       .m-title{ display:block; margin-bottom:8px; font-weight:900; }
       .m-children{ display:flex; flex-direction:column; gap:6px; }
       .m-link{ padding:10px 10px; border-radius:12px; font-weight:900; opacity:.9; background:#f7f7fb; }
     `;
     document.head.appendChild(style);
   }
   
   /* ===== Slider ===== */
   let slideIndex = 0;
   let slideTimer = null;
   
   function renderSlider(){
     const slider = $("#slider");
     const dots = $("#sliderDots");
   
     slider.innerHTML = SLIDES.map((s, i) => {
       return `
         <div class="slide ${i === 0 ? "active" : ""}" data-slide="${i}">
           <picture>
             <source media="(max-width: 760px)" srcset="${s.mobile}">
             <img src="${s.desktop}" alt="${s.title}">
           </picture>
           <div class="slide-overlay">
             <div>
               <h1>${s.title}</h1>
               <p>${s.text}</p>
             </div>
           </div>
         </div>
       `;
     }).join("");
   
     dots.innerHTML = SLIDES.map((_, i) =>
       `<button class="dot ${i===0?"active":""}" data-dot="${i}" aria-label="Ir para slide ${i+1}"></button>`
     ).join("");
   
     dots.addEventListener("click", (e) => {
       const b = e.target.closest("button[data-dot]");
       if(!b) return;
       setSlide(Number(b.dataset.dot));
       restartAuto();
     });
   
     restartAuto();
   }
   
   function setSlide(i){
     slideIndex = i;
     document.querySelectorAll(".slide").forEach(el => el.classList.remove("active"));
     document.querySelectorAll(".dot").forEach(el => el.classList.remove("active"));
     document.querySelector(`.slide[data-slide="${i}"]`)?.classList.add("active");
     document.querySelector(`.dot[data-dot="${i}"]`)?.classList.add("active");
   }
   function nextSlide(){
     const n = (slideIndex + 1) % SLIDES.length;
     setSlide(n);
   }
   function restartAuto(){
     if(slideTimer) clearInterval(slideTimer);
     slideTimer = setInterval(nextSlide, 4500);
   }
   
   /* ===== Cards ===== */
   function cardHTML(p){
     const pix = pricePix(p.price, p.pixOff);
     return `
       <article class="card" data-pid="${p.id}"> 
         <div class="card-img"><img src="${p.image}" alt="${p.name}"></div>
         <div class="card-body">
           <div class="card-title">${p.name}</div>        
            <div class="card-sub">${p.tag || ""}</div>
   
           <div class="price-row">
             <div class="price">${formatBRL(p.price)}</div>
             
           </div>
   
           <div class="actions">
             <button class="ghost full" type="button" data-action="add" data-id="${p.id}">Comprar</button>
           </div>
         </div>
       </article>
     `;
   }
   
   function renderAllProducts(list){
     $("#productsGrid").innerHTML = list.map(cardHTML).join("");
   }
   
   function renderCarousels(){
     const best = PRODUCTS.filter(p => (p.tag || "").toLowerCase().includes("mais"));
     const rare = PRODUCTS.filter(p => (p.tag || "").toLowerCase().includes("rar"));
     $("#carBest").innerHTML = best.map(cardHTML).join("");
     $("#carRare").innerHTML = rare.map(cardHTML).join("");
   }
   
   /* ===== Carrinho (localStorage) ===== */
   const CART_KEY = "loja_cart_v3";
   
   function loadCart(){
     try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
     catch{ return {}; }
   }
   function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
   function cartCount(cart){ return Object.values(cart).reduce((s,q)=>s+q,0); }
   function cartTotal(cart){
     let total = 0;
     for(const [id, qty] of Object.entries(cart)){
       const p = PRODUCTS.find(x => x.id === id);
       if(p) total += p.price * qty;
     }
     return total;
   }
   
   function renderCart(cart){
     $("#cartCount").textContent = String(cartCount(cart));
     $("#cartTotal").textContent = formatBRL(cartTotal(cart));
   
     const entries = Object.entries(cart);
     if(entries.length === 0){
       $("#cartItems").innerHTML = `<p class="muted">Seu carrinho está vazio.</p>`;
       return;
     }
   
     $("#cartItems").innerHTML = entries.map(([id, qty]) => {
       const p = PRODUCTS.find(x => x.id === id);
       if(!p) return "";
       return `
         <div class="cart-item">
           <img src="${p.image}" alt="${p.name}">
           <div>
             <h4>${p.name}</h4>
             <small>${formatBRL(p.price)} • Subtotal: ${formatBRL(p.price * qty)}</small>
             <div class="row">
               <div class="qty">
                 <button type="button" data-action="dec" data-id="${id}">-</button>
                 <strong>${qty}</strong>
                 <button type="button" data-action="inc" data-id="${id}">+</button>
               </div>
               <button class="icon-btn" type="button" data-action="remove" data-id="${id}">Remover</button>
             </div>
           </div>
         </div>
       `;
     }).join("");
   }
   
   /* ===== WhatsApp pedido ===== */
   function buildWhatsAppMessage(cart, customer){
     const lines = [];
     lines.push("🛒 *NOVO PEDIDO*");
     lines.push("");
   
     let total = 0;
   
     for (const [pid, qty] of Object.entries(cart)) {
       const p = PRODUCTS.find(x => x.id === pid);
       if (!p) continue;
   
       const subtotal = p.price * qty;
       total += subtotal;
   
       lines.push(`• ${p.name}`);
       lines.push(`  Qtd: ${qty}`);
       lines.push(`  Unit: ${formatBRL(p.price)}`);
       lines.push(`  Subtotal: ${formatBRL(subtotal)}`);
       lines.push("");
     }
   
     lines.push(`✅ *TOTAL: ${formatBRL(total)}*`);
     lines.push("");
     lines.push("👤 *DADOS DO CLIENTE*");
     lines.push(`Nome: ${customer.name}`);
     lines.push(`Telefone: ${customer.phone}`);
     lines.push(`Endereço: ${customer.address}`);
     if (customer.obs) lines.push(`Obs: ${customer.obs}`);
     lines.push("");
     lines.push("💳 *PAGAMENTO:* Pix / Link de pagamento");
     lines.push("📌 Me envie a forma de pagamento desejada.");
   
     return lines.join("\n");
   }
   
   /* ===== Eventos ===== */
   function wireCarouselButtons(){
     document.body.addEventListener("click", (e) => {
       const b = e.target.closest("button.car-btn");
       if(!b) return;
       const car = b.dataset.car;
       const dir = Number(b.dataset.dir);
       const track = car === "best" ? $("#carBest") : $("#carRare");
       track.scrollLeft += dir * 320;
     });
   }
   
   function wireEvents(){
     // Menu
     $("#btnOpenMenu").addEventListener("click", () => openDrawer("menuDrawer"));
     $("#btnCloseMenu").addEventListener("click", () => closeDrawer("menuDrawer"));
   
     // Fecha drawer clicando fora
     ["menuDrawer","cartDrawer"].forEach(id => {
       const el = document.getElementById(id);
       el.addEventListener("click", (e) => { if(e.target === el) closeDrawer(id); });
     });
   
     // Carrinho
     $("#btnOpenCart").addEventListener("click", () => openDrawer("cartDrawer"));
     $("#btnCloseCart").addEventListener("click", () => closeDrawer("cartDrawer"));
   
     // Busca
     $("#btnSearch").addEventListener("click", () => {
       const q = ($("#searchInput").value || "").trim().toLowerCase();
       const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
       renderAllProducts(filtered);
       location.hash = "#ver-tudo";
     });
   
     $("#searchInput").addEventListener("input", (e) => {
       const q = String(e.target.value || "").trim().toLowerCase();
       const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
       renderAllProducts(filtered);
     });
   
     // Delegação: comprar + carrinho inc/dec/remove
     document.body.addEventListener("click", (e) => {
       const btn = e.target.closest("button[data-action]");
       if(!btn) return;
   
       const action = btn.dataset.action;
       const id = btn.dataset.id;
   
       const cart = loadCart();
   
       if(action === "add"){
         cart[id] = (cart[id] || 0) + 1;
         saveCart(cart);
         renderCart(cart);
         openDrawer("cartDrawer");
         return;
       }
   
       if(action === "inc"){
         cart[id] = (cart[id] || 0) + 1;
         saveCart(cart);
         renderCart(cart);
         return;
       }
   
       if(action === "dec"){
         const next = (cart[id] || 0) - 1;
         if(next <= 0) delete cart[id];
         else cart[id] = next;
         saveCart(cart);
         renderCart(cart);
         return;
       }
   
       if(action === "remove"){
         delete cart[id];
         saveCart(cart);
         renderCart(cart);
         return;
       }
     });
   
     // ✅ FINALIZAR: abre modal do WhatsApp com total
     $("#btnCheckout").addEventListener("click", () => {
       const cart = loadCart();
       const total = cartTotal(cart);
       if(total <= 0){
         alert("Seu carrinho está vazio.");
         return;
       }
       $("#wppTotal").textContent = formatBRL(total);
       openModal("wppModal");
     });
   
     // Fechar modal wpp
     $("#btnCloseWpp").addEventListener("click", () => closeModal("wppModal"));
   
     // ✅ Enviar pedido para WhatsApp (campos obrigatórios)
     $("#btnSendWpp").addEventListener("click", () => {
       const cart = loadCart();
       const total = cartTotal(cart);
       if(total <= 0){
         alert("Carrinho vazio.");
         return;
       }
   
       const name = $("#wppName").value.trim();
       const phone = $("#wppPhone").value.trim();
       const address = $("#wppAddress").value.trim();
       const obs = $("#wppObs").value.trim();
   
       if(!name || !phone || !address){
         alert("Preencha Nome, Telefone e Endereço.");
         return;
       }
   
       const customer = { name, phone, address, obs };
       const message = buildWhatsAppMessage(cart, customer);
       const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
   
       window.open(url, "_blank");
   
       // opcional: limpar carrinho
       saveCart({});
       renderCart({});
   
       closeModal("wppModal");
       closeDrawer("cartDrawer");
     });
   
     // Botão flutuante do WhatsApp (abre conversa “normal”)
     const float = document.getElementById("wppFloat");
     if (float) {
       float.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero tirar uma dúvida 🙂")}`;
     }
   }
   
   /* ===== Init ===== */
   function init(){
     $("#year").textContent = String(new Date().getFullYear());
   
     renderNav();
     renderSlider();
   
     renderCarousels();
     renderAllProducts(PRODUCTS);
   
     const cart = loadCart();
     renderCart(cart);
   
     wireCarouselButtons();
     wireEvents();
   }
   
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "";


   document.addEventListener("DOMContentLoaded", init);

function priceBRL(v){
  return (Number(v) || 0).toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
}

function installmentText(total, n){
  const each = (Number(total) || 0) / (Number(n) || 1);
  return `${n}x de ${priceBRL(each)} sem juros`;
}

function openProductModal(p){
  const modal = document.getElementById("productModal");
  const content = document.getElementById("productModalContent");
  if (!modal || !content) return;

  const pricePix = Number(p.price) || 0;
  const priceCard = Number(p.priceCard ?? 86.74) || 0; // padrão se você quiser
  const inst = Number(p.installments || 4);

  const desc = (p.desc || "Descrição em breve.");

  content.innerHTML = `
    <div class="pdetail">
      <div class="pdetail-media">
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div class="pdetail-info">
        <h2 class="pdetail-title">${p.name}</h2>

        <div class="pdetail-prices">
          <div class="pdetail-price">
            <strong>${priceBRL(pricePix)}</strong>
            <span>no Pix</span>
          </div>

          <div class="pdetail-price">
            <strong>${priceBRL(priceCard)}</strong>
            <span>no cartão • ${installmentText(priceCard, inst)}</span>
          </div>
        </div>

        <button class="btn-buy" type="button" data-add="${p.id}">Adicionar ao carrinho</button>
      </div>

      <div class="pdetail-desc">
        <h3>Descrição do produto</h3>
        <div class="pdetail-desc-text">${desc}</div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeProductModal(){
  const modal = document.getElementById("productModal");
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (e) => {
  if (e.target?.getAttribute?.("data-close")){
    closeProductModal();
  }
});
document.addEventListener("click", (e) => {
  const card = e.target.closest?.(".card[data-pid]");
  if (!card) return;

  const id = card.getAttribute("data-pid");
  const p = (PRODUCTS || []).find(x => x.id === id);
  if (p) openProductModal(p);
});
document.addEventListener("click", function(e){
  const card = e.target.closest(".card[data-pid]");
  if (!card) return;

  const id = card.dataset.pid;
  const p = PRODUCTS.find(prod => prod.id === id);
  if (p) openProductModal(p);
});
















