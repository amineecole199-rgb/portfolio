/* ==========================================================================
   PORTFOLIO AMINE ELHAMRI - MULTILINGUAL & INTERACTION ENGINE (FR / EN)
   ========================================================================== */

// Translation Dictionary (French & English)
const TRANSLATIONS = {
  fr: {
    meta_title: " Future Amine ELHAMRI — Ingénieur d'État & Développeur Full-Stack",
    meta_desc: "Portfolio d'Amine ELHAMRI - Future Ingénieur en Génie Informatique & Industriel (ENSA). Conception de plateformes SaaS, architectures temps réel, applications web et automatisation de processus métier.",
    brand_title: "Ingénieur & Full-Stack",
    nav_projects: "Projets Phares",
    nav_skills: "Expertise & Stack",
    nav_why: "Pourquoi Collaborer",
    nav_contact: "Contact & CV",
    status_avail: "Disponible",
    nav_cv_btn: "CV A4 (PDF)",
    
    // Hero
    hero_tag: "Ingénieur d'État ENSA • Développeur Full-Stack & Systèmes",
    hero_title: 'Conception de Plateformes SaaS, <span class="highlight">Systèmes Temps Réel</span> & Automatisation Métier',
    hero_desc: "J'accompagne les entreprises et entrepreneurs dans la concrétisation de solutions logicielles fiables et évolutives. En associant la <strong>rigueur d'ingénierie ENSA</strong> et la <strong>vélocité start-up</strong>, je transforme des workflows complexes en produits web robustes et orientés résultats.",
    hero_btn_projects: "Explorer les Réalisations",
    hero_btn_cv: "Consulter le CV A4",
    cred_ensa: "Cursus Ingénieur d'État (ENSA Kénitra)",
    cred_snee: "Statut Étudiant-Entrepreneur (SNEE)",
    cred_sql: "Architectures & Concurrence SQL Sécurisée",
    stat_ws_lbl: "WebSockets Temps Réel",
    stat_demat_lbl: "Dématérialisation Métier",
    
    // Metrics
    metric_1_title: "Automatisation Processus",
    metric_1_desc: "Dématérialisation complète des calculs financiers et suppression des erreurs manuelles.",
    metric_2_title: "Temps Réel & WebSockets",
    metric_2_desc: "Diffusion instantanée d'enchères automobiles interactives via Laravel Reverb & Vue 3.",
    metric_3_title: "Modèles Automobile Indexés",
    metric_3_desc: "Base relationnelle optimisée avec moteur de comparaison multicritères intelligent.",
    metric_4_title: "Audit Automatisé RH/Finance",
    metric_4_desc: "Détection algorithmique de doublons, incohérences de taux et plafonds budgétaires.",
    
    // Projects Section
    sec_proj_num: "01 / Réalisations & Systèmes",
    sec_proj_title: "Des Solutions Concrètes Conçues pour l'Impact Métier",
    sec_proj_sub: "Chaque projet répond à un défi précis : éliminer les tâches chronophages, fiabiliser les transactions financières ou accélérer la croissance commerciale.",
    filter_all: "Tous les Projets",
    filter_saas: "SaaS & Plateformes",
    filter_stage: "Projet de Stage & Audit",
    filter_auto: "Automatisation & Data",
    filter_ecom: "E-Commerce & PWA",
    
    // Project 1: MzadAuto
    p1_chip: "SaaS & Marketplace",
    p1_label: "Plateforme Automobile & Enchères Temps Réel",
    p1_desc: "Plateforme web d'enchères automobiles et d'aide à la décision pour le marché marocain. Intègre des salles de vente interactives en temps réel et un moteur de comparaison technique multicritères sur plus de 500 véhicules.",
    p1_f1: "<strong>Enchères interactives WebSockets :</strong> latence ultra-faible (<50ms) via Laravel Reverb et Vue 3 / Inertia.",
    p1_f2: "<strong>Moteur de comparaison technique :</strong> analyse dynamique de fiches, motorisations, cotes et consommations.",
    p1_f3: "<strong>Gestion des cautionnements & PDF :</strong> sécurité des transactions et édition automatique de bordereaux.",
    p1_status: "● En production active",
    btn_live_site: "Visiter mzadauto.app",
    btn_launch_vid: "Vidéo",
    btn_view_video: "Voir Démo Vidéo",
    
    // Project 2: DRA-RSK (Stage)
    p2_chip: "Projet de Stage • Finance & RH",
    p2_label: "Direction Régionale de l'Agriculture (DRA-RSK)",
    p2_title: "Générateur d'Indemnités & Audit Budgétaire",
    p2_desc: "Application web de dématérialisation et d'optimisation financière des états de déplacements des agents publics. Supprime les erreurs manuelles de saisie et sécurise l'ordonnancement comptable.",
    stage_note_title: "Note : exemples générés avec l'IA",
    stage_note_body: "Afin de garantir la stricte confidentialité des données publiques administratives et financières, les données, matricules et états présentés dans cette démonstration sont des exemples de simulation générés avec l'IA.",
    p2_f1: "<strong>Algorithme calendrier intelligent :</strong> exclusion automatique des week-ends, fériés et congés des agents.",
    p2_f2: "<strong>Audit automatisé sur 8 anomalies :</strong> détection des doublons, incohérences de taux et dépassements.",
    p2_f3: "<strong>Verrouillage pessimiste SQL :</strong> isolation stricte pour éliminer tout risque de double ordonnancement.",
    p2_status: "● Validation officielle & Tests Pest",
    btn_consult_vid: "Consulter la Vidéo",
    
    // Project 3: Majest Drive
    p3_chip: "Growth & Automatisation B2B",
    p3_label: "Location Automobile & Acquisition Client",
    p3_title: "Majest Drive & Pipeline de Prospection",
    p3_desc: "Écosystème commercial associant une landing page vitrine à fort taux de conversion et un moteur de prospection automatisé pour qualifier et contacter des centaines d'agences de location de voitures au Maroc.",
    p3_f1: "<strong>Landing page ultra-rapide (Vite JS) :</strong> design conversion-first adapté aux écrans mobiles.",
    p3_f2: "<strong>Pipeline de Scraping B2B :</strong> extraction et qualification automatique de contacts d'agences.",
    p3_f3: "<strong>Générateur de campagnes WhatsApp :</strong> scripts ciblés et synchronisation Google Sheets.",
    p3_status: "● Déployé & Opérationnel",
    btn_view_pipeline: "Voir Pipeline B2B",
    btn_pipeline_details: "Détails du Pipeline",
    
    // Project 4: PrestaShop
    p4_chip: "E-Commerce & WhatsApp Bridge",
    p4_label: "Commerce Électronique & Services de Proximité",
    p4_title: "Boutique PrestaShop & Passerelle WhatsApp",
    p4_desc: "Développement et personnalisation de boutiques e-commerce PrestaShop (panier, catalogue, expédition) et conception d'une passerelle WhatsApp interactive (Baileys) pour la coordination instantanée avec les clients et livreurs.",
    p4_f1: "<strong>Boutique sur-mesure PrestaShop :</strong> parcours d'achat fluide, gestion des stocks et paiement.",
    p4_f2: "<strong>Passerelle WhatsApp interactive (Baileys) :</strong> notifications automatiques de commande en temps réel.",
    p4_f3: "<strong>Application PWA Mobile-First :</strong> rapidité de chargement optimisée pour le réseau local.",
    p4_status: "● Vidéo & Code Disponibles",
    
    // Skills Section
    sec_skill_num: "02 / Stack & Savoir-Faire",
    sec_skill_title: "Une Double Compétence : Ingénierie & Développement",
    sec_skill_sub: "Maîtrise des technologies web modernes, des architectures bas-niveau et des processus d'optimisation industrielle.",
    skill_1_title: "Full-Stack & Web Apps",
    skill_1_desc: "Conception d'applications SaaS complètes, d'architectures MVC maintenables et d'interfaces réactives temps réel.",
    skill_2_title: "Systèmes & Concurrence",
    skill_2_desc: "Développement de moteurs performants, gestion fine des accès concurrents et optimisation de bases de données relationnelles.",
    skill_3_title: "Automatisation & IA",
    skill_3_desc: "Robots de collecte, intégration d'IA locales sécurisées, bots conversationnels WhatsApp et pipelines de traitement de données.",
    
    // Why Section
    sec_val_num: "03 / Valeur & Rigueur",
    sec_val_title: "Pourquoi Me Confier Votre Projet ?",
    sec_val_sub: "3 piliers fondamentaux garantissant la réussite et la rentabilité de votre investissement technique.",
    val_1_num: "01 / INGÉNIERIE",
    val_1_title: "Rigueur d'Ingénieur ENSA",
    val_1_desc: "Architecture pensée dès le premier jour pour la scalabilité, la sécurité des données financières et l'absence de dette technique cachée.",
    val_2_num: "02 / VÉLOCITÉ",
    val_2_title: "Agilité & Orientation Métier",
    val_2_desc: "Livraisons rapides de versions fonctionnelles pour valider immédiatement vos processus métier et vos hypothèses avec de vrais utilisateurs.",
    val_3_num: "03 / TRANSPARENCE",
    val_3_title: "Communication Directe",
    val_3_desc: "Un interlocuteur unique réactif par WhatsApp et visio, des points d'étape réguliers et une transparence totale sur le code et l'avancement.",
    
    // Footer
    footer_bio: "Disponible pour missions en ingénierie logicielle, développement de plateformes SaaS, automatisations de flux de données et conseil technique.",
    footer_wa_btn: "Échanger sur WhatsApp (06 60 65 96 45)",
    footer_contact_title: "Coordonnées Directes",
    footer_phone_lbl: "Téléphone :",
    footer_email_lbl: "Email :",
    footer_loc_lbl: "Localisation :",
    footer_loc_val: "Kénitra / Mehdia, Maroc",
    footer_mob_lbl: "Mobilité :",
    footer_mob_val: "Freelance / Remote / Sur site",
    footer_links_title: "Documents & Accès Rapide",
    footer_cv_link: "Consulter le CV A4 en ligne",
    footer_pdf_link: "Imprimer / Enregistrer le CV PDF",
    footer_proj_link: "Explorer les Projets Phares",
    footer_stack_link: "Matrice des Compétences & Stack",
    footer_rights: "© 2026 Amine ELHAMRI. Tous droits réservés.",
    footer_tagline: "Conçu avec rigueur et passion pour l'excellence logicielle."
  },
  
  en: {
    meta_title: "Amine ELHAMRI — State Engineer & Full-Stack Developer",
    meta_desc: "Portfolio of Amine ELHAMRI - Computer & Industrial Engineer (ENSA). Designing SaaS platforms, real-time systems, web applications, and business process automation.",
    brand_title: "Engineer & Full-Stack",
    nav_projects: "Key Projects",
    nav_skills: "Expertise & Stack",
    nav_why: "Why Work With Me",
    nav_contact: "Contact & Resume",
    status_avail: "Available for Hire",
    nav_cv_btn: "Resume A4 (PDF)",
    
    // Hero
    hero_tag: "State Engineer ENSA • Full-Stack & Systems Developer",
    hero_title: 'Architecting SaaS Platforms, <span class="highlight">Real-Time Systems</span> & Business Automation',
    hero_desc: "I help companies and entrepreneurs build high-performance, scalable software solutions. Combining <strong>ENSA engineering rigor</strong> with <strong>startup velocity</strong>, I turn complex workflows into robust, outcome-driven web products.",
    hero_btn_projects: "Explore Key Projects",
    hero_btn_cv: "View Resume A4 (PDF)",
    cred_ensa: "State Engineering Degree (ENSA Kénitra)",
    cred_snee: "National Student-Entrepreneur Status (SNEE)",
    cred_sql: "Secure Architecture & SQL Concurrency",
    stat_ws_lbl: "Real-Time WebSockets",
    stat_demat_lbl: "Business Automation",
    
    // Metrics
    metric_1_title: "Process Automation",
    metric_1_desc: "Complete digitization of financial workflows & zero manual calculation errors.",
    metric_2_title: "Real-Time & WebSockets",
    metric_2_desc: "Instant live vehicle auction broadcasting via Laravel Reverb & Vue 3.",
    metric_3_title: "Car Models Indexed",
    metric_3_desc: "Optimized relational database with an intelligent multi-criteria vehicle comparison engine.",
    metric_4_title: "Automated HR/Finance Audit",
    metric_4_desc: "Algorithmic detection of duplicates, rate discrepancies, and statutory budget caps.",
    
    // Projects Section
    sec_proj_num: "01 / Systems & Portfolio",
    sec_proj_title: "Concrete Software Solutions Engineered for Business Impact",
    sec_proj_sub: "Each project is engineered to tackle a specific challenge: eliminating repetitive tasks, securing financial transactions, or accelerating commercial customer acquisition.",
    filter_all: "All Projects",
    filter_saas: "SaaS & Platforms",
    filter_stage: "Internship & Audit Project",
    filter_auto: "Automation & Data",
    filter_ecom: "E-Commerce & PWA",
    
    // Project 1: MzadAuto
    p1_chip: "SaaS & Marketplace",
    p1_label: "Automotive Marketplace & Real-Time Auctions",
    p1_desc: "Automotive bidding and decision-support web platform for the Moroccan market. Features real-time interactive auction rooms and a multi-criteria technical comparison engine on 500+ vehicles.",
    p1_f1: "<strong>Interactive WebSockets Auctions :</strong> ultra-low latency (<50ms) via Laravel Reverb and Vue 3 / Inertia.",
    p1_f2: "<strong>Technical Comparison Engine :</strong> dynamic analysis of vehicle specs, engines, market valuations, and fuel economy.",
    p1_f3: "<strong>Secured Deposits & PDF Reports :</strong> transaction safety, deposit escrow tracking, and automatic PDF receipts.",
    p1_status: "● Live in production",
    btn_live_site: "Visit mzadauto.app",
    btn_launch_vid: "Video Demo",
    btn_view_video: "Watch Video Demo",
    
    // Project 2: DRA-RSK (Stage)
    p2_chip: "Internship Project • Finance & HR",
    p2_label: "Regional Directorate of Agriculture (DRA-RSK)",
    p2_title: "Per Diem Generator & Budget Audit System",
    p2_desc: "Web application for paperless accounting and automated calculation of public servant official travel statements. Completely eliminates manual errors and secures disbursement workflows.",
    stage_note_title: "Note: Examples generated with AI",
    stage_note_body: "To strictly safeguard the confidentiality of public administrative and financial data, all records, employee IDs, and financial statements shown in this demonstration are simulated examples generated with AI.",
    p2_f1: "<strong>Smart Calendar Algorithm :</strong> automated exclusion of weekends, statutory holidays, and official leaves.",
    p2_f2: "<strong>8-Anomaly Automated Audit Engine :</strong> pre-emptive detection of duplicates, rate anomalies, and budget ceilings.",
    p2_f3: "<strong>SQL Pessimistic Locking :</strong> strict transactional isolation eliminating any risk of duplicate disbursement.",
    p2_status: "● Official ministerial validation & Pest Tests",
    btn_consult_vid: "View Video Demo",
    
    // Project 3: Majest Drive
    p3_chip: "Growth & B2B Automation",
    p3_label: "Car Rental & Client Acquisition",
    p3_title: "Majest Drive & B2B Prospecting Pipeline",
    p3_desc: "Full commercial growth engine pairing a high-conversion showcase landing page with an automated prospecting engine to qualify and reach hundreds of car rental agencies in Morocco.",
    p3_f1: "<strong>Ultra-fast Landing Page (Vite JS) :</strong> mobile-first conversion-driven design for direct lead capture.",
    p3_f2: "<strong>B2B Web Scraping Pipeline :</strong> automated extraction and enrichment of agency contact information.",
    p3_f3: "<strong>WhatsApp Outreach Generator :</strong> targeted personalized scripts and synchronized Google Sheets tracking.",
    p3_status: "● Deployed & Operational",
    btn_view_pipeline: "View B2B Pipeline",
    btn_pipeline_details: "Pipeline Details",
    
    // Project 4: PrestaShop
    p4_chip: "E-Commerce & WhatsApp Bridge",
    p4_label: "Electronic Commerce & On-Demand Services",
    p4_title: "PrestaShop Store & WhatsApp Gateway",
    p4_desc: "Custom e-commerce store implementation (shopping cart, catalog, checkout) and interactive WhatsApp gateway (Baileys) for live order dispatch and automated communication with customers and couriers.",
    p4_f1: "<strong>Custom PrestaShop Storefront :</strong> seamless user journey, stock synchronization, and payment gateway.",
    p4_f2: "<strong>Interactive WhatsApp Gateway (Baileys) :</strong> real-time order alerts and automated delivery tracking.",
    p4_f3: "<strong>Mobile-First PWA Application :</strong> optimized performance for high-speed local loading.",
    p4_status: "● Video & Source Available",
    
    // Skills Section
    sec_skill_num: "02 / Tech Stack & Expertise",
    sec_skill_title: "Dual Core Competence : Engineering & Development",
    sec_skill_sub: "Mastery of modern web technologies, low-level system performance, and industrial process optimization.",
    skill_1_title: "Full-Stack & Web Apps",
    skill_1_desc: "Architecting end-to-end SaaS platforms, clean MVC architectures, and real-time reactive user interfaces.",
    skill_2_title: "Systems & Concurrency",
    skill_2_desc: "High-throughput engines, fine-grained concurrency control, and relational database indexing & transactions.",
    skill_3_title: "Automation & AI",
    skill_3_desc: "Data collection crawlers, secure on-premise local LLM integrations, conversational WhatsApp bots, and data pipelines.",
    
    // Why Section
    sec_val_num: "03 / Engineering Guarantees",
    sec_val_title: "Why Entrust Me With Your Project ?",
    sec_val_sub: "3 core pillars ensuring the technical scalability, security, and high return on investment of your software.",
    val_1_num: "01 / ENGINEERING",
    val_1_title: "ENSA Engineering Rigor",
    val_1_desc: "Architectures designed from Day 1 for horizontal scale, financial data integrity, and zero hidden technical debt.",
    val_2_num: "02 / VELOCITY",
    val_2_title: "Startup Agility & Business Focus",
    val_2_desc: "Rapid delivery of working functional increments to validate real-world business logic directly with actual users.",
    val_3_num: "03 / TRANSPARENCY",
    val_3_title: "Direct & Clear Communication",
    val_3_desc: "A single dedicated technical point of contact via WhatsApp and video calls, with regular checkpoints and complete code transparency.",
    
    // Footer
    footer_bio: "Available for freelance software engineering, custom SaaS platforms, complex data automations, and technical architecture consulting.",
    footer_wa_btn: "Chat on WhatsApp (+212 6 60 65 96 45)",
    footer_contact_title: "Direct Contact",
    footer_phone_lbl: "Phone :",
    footer_email_lbl: "Email :",
    footer_loc_lbl: "Location :",
    footer_loc_val: "Kénitra / Mehdia, Morocco",
    footer_mob_lbl: "Mobility :",
    footer_mob_val: "Freelance / Remote / On-site",
    footer_links_title: "Quick Access & Documents",
    footer_cv_link: "View A4 Resume Online",
    footer_pdf_link: "Print / Save Resume as PDF",
    footer_proj_link: "Explore Key Projects",
    footer_stack_link: "Tech Stack & Skills Matrix",
    footer_rights: "© 2026 Amine ELHAMRI. All rights reserved.",
    footer_tagline: "Engineered with rigor and passion for software excellence."
  }
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initProjectFilters();
  initMediaModal();
  initStickyNavbar();
  initSmoothScroll();
});

/* ==========================================================================
   LANGUAGE SWITCHER SYSTEM (FR / EN)
   ========================================================================== */
function initLanguage() {
  const btnFR = document.getElementById('langFR');
  const btnEN = document.getElementById('langEN');
  
  // Check URL param ?lang=en or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = localStorage.getItem('portfolio_lang');

  if (langParam === 'en' || (!langParam && savedLang === 'en')) {
    setLanguage('en');
  } else {
    setLanguage('fr');
  }

  if (btnFR && btnEN) {
    btnFR.addEventListener('click', () => setLanguage('fr'));
    btnEN.addEventListener('click', () => setLanguage('en'));
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  const htmlRoot = document.getElementById('htmlRoot');
  if (htmlRoot) htmlRoot.setAttribute('lang', lang);

  const btnFR = document.getElementById('langFR');
  const btnEN = document.getElementById('langEN');
  if (btnFR && btnEN) {
    if (lang === 'en') {
      btnEN.classList.add('active');
      btnFR.classList.remove('active');
    } else {
      btnFR.classList.add('active');
      btnEN.classList.remove('active');
    }
  }

  // Update CV Links (cv.html for FR, cv_en.html for EN)
  const navCvLink = document.getElementById('navCvLink');
  const heroCvBtn = document.getElementById('heroCvBtn');
  const footerCvLink = document.getElementById('footerCvLink');
  const footerPrintLink = document.getElementById('footerPrintLink');
  
  const cvTarget = lang === 'en' ? 'cv_en.html' : 'cv.html';
  if (navCvLink) navCvLink.setAttribute('href', cvTarget);
  if (heroCvBtn) heroCvBtn.setAttribute('href', cvTarget);
  if (footerCvLink) footerCvLink.setAttribute('href', cvTarget);
  if (footerPrintLink) footerPrintLink.setAttribute('href', cvTarget);

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update Document Meta Title & Description
  if (dict.meta_title) document.title = dict.meta_title;
  const metaDescEl = document.getElementById('metaDesc');
  if (metaDescEl && dict.meta_desc) {
    metaDescEl.setAttribute('content', dict.meta_desc);
  }
}

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-90');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   STICKY NAVBAR & ACTIVE LINK HIGHLIGHT
   ========================================================================== */
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   MEDIA MODAL (VIDEO & ARCHITECTURE VIEWER)
   ========================================================================== */
function initMediaModal() {
  const modal = document.getElementById('mediaModal');
  const modalBody = document.getElementById('modalContent');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.getElementById('modalClose');
  const triggers = document.querySelectorAll('[data-demo]');

  if (!modal || !closeBtn || !modalBody) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const demoType = trigger.getAttribute('data-demo');
      const title = trigger.getAttribute('data-title') || (currentLang === 'en' ? 'Technical Demonstration' : 'Démonstration Technique');

      if (modalTitle) {
        modalTitle.textContent = title;
      }

      let contentHTML = '';
      const cacheBust = Date.now();

      if (demoType === 'mzadauto') {
        const isEn = currentLang === 'en';
        contentHTML = `
          <div style="text-align: center;">
            <video controls autoplay muted playsinline style="max-height: 520px; width: 100%; max-width: 100%; border: 1px solid var(--c-dark); background: #000; box-shadow: 4px 4px 0px var(--c-dark);">
              <source src="assets/video/mzadauto.mp4?t=${cacheBust}" type="video/mp4">
              ${isEn ? 'Your browser does not support the video tag.' : 'Votre navigateur ne supporte pas la lecture vidéo.'}
            </video>
          </div>
          <div style="margin-top: 18px; padding: 14px; background: var(--bg-page); border: 1px solid var(--border-medium); border-left: 3px solid var(--c-blue); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <strong style="color: var(--c-dark); font-family: 'Space Grotesk', sans-serif; font-size: 14px;">
                ${isEn ? 'Key Architectural Highlights :' : 'Points Clés de l\'Architecture :'}
              </strong>
              <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px; line-height: 1.5;">
                ${isEn 
                  ? 'Demonstration of real-time auctions via Laravel Reverb & Vue 3 / Inertia.js. Sub-50ms latency with instant multi-user synchronization.' 
                  : 'Démonstration de la fluidité des enchères temps réel via Laravel Reverb et Vue 3 / Inertia.js. Latence réseau &lt;50ms avec synchronisation multi-utilisateurs instantanée.'}
              </p>
            </div>
            <a href="https://mzadauto.app" target="_blank" rel="noopener" class="btn btn-sm btn-blue">
              ${isEn ? 'Visit Live Website (mzadauto.app)' : 'Accéder au Site en Ligne (mzadauto.app)'}
            </a>
          </div>
        `;
      } 
      else if (demoType === 'dra-video') {
        const isEn = currentLang === 'en';
        contentHTML = `
          <div style="text-align: center;">
            <video controls autoplay muted playsinline style="max-height: 520px; width: 100%; max-width: 100%; border: 1px solid var(--c-dark); background: #000; box-shadow: 4px 4px 0px var(--c-dark);">
              <source src="assets/video/etats_officiel.mp4?t=${cacheBust}" type="video/mp4">
              ${isEn ? 'Your browser does not support the video tag.' : 'Votre navigateur ne supporte pas la lecture vidéo.'}
            </video>
          </div>
          
          <div style="margin-top: 18px; padding: 14px; background: #fff; border: 1px solid var(--c-dark); border-left: 4px solid var(--c-blue);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: var(--c-blue);">
                ${isEn ? 'NOTE : EXAMPLES GENERATED WITH AI' : 'NOTE : EXEMPLES GÉNÉRÉS AVEC L\'IA'}
              </span>
            </div>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.45;">
              ${isEn 
                ? 'To safeguard the strict confidentiality of public administrative and financial data, all employee IDs, names, and financial statements shown in this demonstration are simulated examples generated with AI.'
                : 'Pour préserver la stricte confidentialité des données administratives et financières publiques, les informations, montants et matricules visibles dans cette démonstration sont des données de simulation générées avec l\'IA.'}
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px;">
            <div style="padding: 12px; background: var(--bg-page); border: 1px solid var(--border-light);">
              <strong style="color: var(--c-dark); font-size: 13px;">${isEn ? '🧠 Smart Calendar Brain' : '🧠 Cerveau Calendaire'}</strong>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                ${isEn ? 'Automated exclusion of weekends, holidays, and official agent leaves.' : 'Exclusion automatisée des week-ends, fériés et congés des agents.'}
              </p>
            </div>
            <div style="padding: 12px; background: var(--bg-page); border: 1px solid var(--border-light);">
              <strong style="color: var(--c-dark); font-size: 13px;">${isEn ? '🔒 SQL Locking & Audit' : '🔒 Sécurité SQL & Audit'}</strong>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                ${isEn ? 'Pessimistic locking and automated detection of 8 Excel/HR anomalies.' : 'Verrouillage pessimiste anti-doublon et audit sur 8 anomalies Excel.'}
              </p>
            </div>
          </div>
        `;
      }
      else if (demoType === 'prestashop-video') {
        const isEn = currentLang === 'en';
        contentHTML = `
          <div style="text-align: center;">
            <video controls autoplay muted playsinline style="max-height: 500px; width: 100%; max-width: 100%; border: 1px solid var(--c-dark); background: #000; box-shadow: 4px 4px 0px var(--c-dark);">
              <source src="assets/video/prestashop.mp4?t=${cacheBust}" type="video/mp4">
              ${isEn ? 'Your browser does not support the video tag.' : 'Votre navigateur ne supporte pas la lecture vidéo.'}
            </video>
          </div>
          <div style="margin-top: 18px; padding: 14px; background: var(--bg-page); border: 1px solid var(--border-medium); border-left: 3px solid var(--c-blue);">
            <strong style="color: var(--c-dark); font-family: 'Space Grotesk', sans-serif; font-size: 14px;">
              ${isEn ? 'E-Commerce Experience & WhatsApp Gateway :' : 'Expérience E-Commerce & Passerelle WhatsApp :'}
            </strong>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px; line-height: 1.5;">
              ${isEn 
                ? 'Overview of the tailored PrestaShop buying experience and real-time order relay to WhatsApp via Node.js (Baileys).' 
                : 'Aperçu du parcours d\'achat PrestaShop personnalisé avec tunnel de commande optimisé et relais instantané des commandes sur WhatsApp via Node.js (Baileys).'}
            </p>
          </div>
        `;
      }
      else if (demoType === 'majest-details') {
        const isEn = currentLang === 'en';
        contentHTML = `
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="text-align: center;">
              <video controls autoplay muted playsinline style="max-height: 500px; width: 100%; max-width: 100%; border: 1px solid var(--c-dark); background: #000; box-shadow: 4px 4px 0px var(--c-dark);">
                <source src="assets/video/location.mp4?t=${cacheBust}" type="video/mp4">
                ${isEn ? 'Your browser does not support the video tag.' : 'Votre navigateur ne supporte pas la lecture vidéo.'}
              </video>
            </div>

            <div style="padding: 16px; background: var(--bg-page); border: 1px solid var(--c-dark); border-left: 4px solid var(--c-dark);">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--c-blue); margin-bottom: 2px;">
                ${isEn ? 'STEP 1 / SCRAPING & DATA ENRICHMENT' : 'ÉTAPE 1 / SCRAPING & ENRICHISSEMENT'}
              </div>
              <h4 style="font-size: 16px; color: var(--c-dark); margin-bottom: 4px;">
                ${isEn ? 'Car Rental Agency Web Scraper' : 'Scraper d\'Agences de Location'}
              </h4>
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">
                ${isEn 
                  ? 'Automated harvesting script collecting car rental agency contacts in Morocco, cleaning telephone numbers and qualifying car fleet inventory.' 
                  : 'Script de collecte automatisée extrayant les contacts d\'agences au Maroc, nettoyant les numéros de téléphone et qualifiant le parc automobile.'}
              </p>
            </div>

            <div style="padding: 16px; background: var(--bg-page); border: 1px solid var(--c-dark); border-left: 4px solid var(--c-blue);">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--c-blue); margin-bottom: 2px;">
                ${isEn ? 'STEP 2 / OUTREACH AUTOMATION' : 'ÉTAPE 2 / AUTOMATISATION OUTREACH'}
              </div>
              <h4 style="font-size: 16px; color: var(--c-dark); margin-bottom: 4px;">
                ${isEn ? 'WhatsApp Pipeline & Google Sheets API' : 'Pipeline WhatsApp & Google Sheets API'}
              </h4>
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">
                ${isEn 
                  ? 'Automatic generation of pre-filled personalized WhatsApp conversation links and live synchronization with commercial tracking spreadsheets.' 
                  : 'Génération automatique de liens WhatsApp pré-remplis personnalisés selon l\'agence et synchronisation en direct des statuts de prospection.'}
              </p>
            </div>

            <div style="padding: 16px; background: var(--bg-page); border: 1px solid var(--c-dark); border-left: 4px solid var(--c-dark);">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--c-blue); margin-bottom: 2px;">
                ${isEn ? 'STEP 3 / HIGH PERFORMANCE LANDING PAGE' : 'ÉTAPE 3 / LANDING PAGE HAUTE PERFORMANCE'}
              </div>
              <h4 style="font-size: 16px; color: var(--c-dark); margin-bottom: 4px;">
                ${isEn ? 'Showcase Vitrine Page (Vite JS)' : 'Interface Vitrine Vite JS'}
              </h4>
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">
                ${isEn 
                  ? 'Ultra-lightweight responsive landing page designed to maximize conversion rates for client car booking acquisition.' 
                  : 'Page d\'atterrissage responsive ultra-légère conçue pour maximiser le taux de conversion lors des campagnes d\'acquisition.'}
              </p>
            </div>
          </div>
        `;
      }

      modalBody.innerHTML = contentHTML;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalBody.innerHTML = '';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   SMOOTH SCROLLING
   ========================================================================== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
