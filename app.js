/* ==========================================================================
   PORTFOLIO AMINE ELHAMRI - MULTILINGUAL & INTERACTION ENGINE (FR / EN)
   ========================================================================== */

// Translation Dictionary (French & English)
const TRANSLATIONS = {
  fr: {
    meta_title: "Amine ELHAMRI — Développeur Full-Stack | Élève ingénieur ENSA",
    meta_desc: "Portfolio d'Amine ELHAMRI, développeur Full-Stack et élève ingénieur ENSA. Applications web, SaaS, MVP et automatisations métier avec Laravel et Vue.",
    brand_title: "Full-Stack • Élève ingénieur",
    nav_projects: "Projets Phares",
    nav_skills: "Services & Stack",
    nav_why: "Pourquoi Collaborer",
    nav_contact: "Contact & CV",
    status_avail: "Disponible",
    nav_cv_btn: "CV A4 (PDF)",
    
    // Hero
    hero_tag: "Full-Stack Developer — Laravel / Vue",
    hero_title: 'Je transforme vos idées et processus métier en <span class="highlight">applications web fiables et fonctionnelles.</span>',
    hero_desc: "SaaS · Applications métier · MVP · Automatisation",
    hero_btn_contact: "Discuter de votre projet",
    hero_btn_projects: "Voir mes réalisations",
    hero_btn_cv: "Consulter mon CV",
    cred_ensa: "Cursus d'ingénieur d'État en cours (ENSA Kénitra)",
    cred_snee: "Statut Étudiant-Entrepreneur (SNEE)",
    cred_sql: "Applications maintenables & testées",
    stat_ws_val: "En direct",
    stat_ws_lbl: "Enchères synchronisées",
    stat_demat_val: "8 contrôles",
    stat_demat_lbl: "Audit automatique",
    
    // Metrics
    metric_1_figure: "Stage DRA-RSK",
    metric_1_title: "Contexte métier réel",
    metric_1_desc: "Application développée dans le cadre d'un stage à la Direction Régionale de l'Agriculture.",
    metric_2_figure: "8 contrôles",
    metric_2_title: "Anomalies vérifiées",
    metric_2_desc: "Doublons, incohérences de taux et dépassements signalés avant export.",
    metric_3_title: "Véhicules indexés",
    metric_3_desc: "Fiches techniques regroupées pour comparer rapidement les modèles.",
    
    // Projects Section
    sec_proj_num: "01 / Projets vérifiables",
    sec_proj_title: "Des problèmes concrets, des solutions que vous pouvez vérifier",
    sec_proj_sub: "Le contexte, le besoin et le résultat sont présentés simplement. Les démonstrations montrent ce qui a réellement été construit.",
    demo_disclosure_title: "Transparence sur les démonstrations",
    demo_disclosure_body: "Chaque projet indique clairement s'il s'agit d'un stage, d'un projet personnel ou d'une démonstration. Utilisez les vidéos et démos pour vérifier le travail présenté.",
    filter_all: "Tous les Projets",
    filter_saas: "SaaS & Plateformes",
    filter_stage: "Projet de Stage & Audit",
    filter_auto: "Automatisation & Data",
    filter_ecom: "E-Commerce & PWA",
    other_projects_num: "Autres réalisations",
    other_projects_title: "Concepts & Prototypes Complémentaires",
    other_projects_sub: "Deux démonstrations interactives conservées en second niveau pour montrer d'autres parcours et secteurs.",
    case_problem: "Problème",
    case_solution: "Solution",
    case_result: "Résultat",
    case_stack: "Stack",
    case_role: "Rôle",
    
    // Project 1: MzadAuto
    p1_chip: "SaaS & Marketplace",
    p1_label: "Comparer des véhicules et suivre des enchères",
    p1_problem: "Comparer de nombreux véhicules et suivre des enchères où chaque mise doit être synchronisée entre plusieurs participants.",
    p1_solution: "Un seul espace pour consulter les fiches, comparer les modèles, participer aux enchères et gérer les documents associés.",
    p1_result: "Plus de 500 véhicules regroupés. La vidéo permet de vérifier la comparaison et le déroulement d'une enchère.",
    p1_stack: "Laravel 12 · Vue 3 · Reverb · MySQL/Redis",
    p1_status: "● Site public accessible · démonstration vidéo disponible",
    btn_live_site: "Visiter mzadauto.app",
    btn_launch_vid: "Voir la vidéo",
    btn_view_video: "Voir la démonstration",
    
    // Project 2: DRA-RSK (Stage)
    p2_chip: "Stage • Application métier",
    p2_label: "Direction Régionale de l'Agriculture (DRA-RSK)",
    p2_title: "Générateur d'Indemnités & Audit Budgétaire",
    p2_context: "Projet réalisé dans le cadre d'un stage à la Direction Régionale de l'Agriculture.",
    p2_role: "J'ai analysé le fonctionnement existant, puis conçu et développé l'application.",
    p2_role_short: "Analyse du besoin, organisation du parcours, développement de l'application et vérification des cas importants.",
    stage_note_title: "Confidentialité de la démonstration",
    stage_note_body: "Pour préserver les données administratives et financières, les noms, matricules, montants et états visibles sont des exemples de simulation générés avec l'IA.",
    p2_problem: "Calculs administratifs manuels, documents répétitifs et risque d'erreur dans les états de déplacement.",
    p2_solution: "Un outil qui calcule les indemnités, prépare les calendriers, contrôle le budget et génère les documents.",
    p2_result: "Détection de 8 catégories d'anomalies et génération automatisée des états et bordereaux.",
    p2_stack: "Laravel · PHP 8.3 · MySQL · Pest",
    p2_status: "● Projet de stage · démonstration vidéo disponible",
    btn_consult_vid: "Voir la démonstration",
    
    // Project 3: Majest Drive
    p3_chip: "Growth & Automatisation B2B",
    p3_label: "Location Automobile & Acquisition Client",
    p3_title: "Majest Drive & Prospection B2B",
    p3_problem: "Présenter une offre de location sur mobile tout en structurant une prospection dispersée entre plusieurs sources.",
    p3_solution: "Une landing page de démonstration reliée à un système qui collecte et qualifie les contacts, puis prépare les campagnes WhatsApp.",
    p3_result: "Une base de prospects structurée et un suivi de campagne centralisé dans Google Sheets.",
    p3_stack: "Vite · JavaScript · Google Sheets",
    p3_status: "● Prototype de démonstration hébergé dans ce portfolio",
    btn_view_pipeline: "Voir le système",
    btn_pipeline_details: "Détails",
    btn_live_location: "Démo interactive",
    btn_view_live_location: "Voir Landing Page",
    
    // Project 4: PrestaShop
    p4_chip: "Boutique en ligne & suivi WhatsApp",
    p4_label: "Commerce Électronique & Services de Proximité",
    p4_title: "Boutique en ligne & suivi WhatsApp",
    p4_problem: "Le parcours d'achat et la coordination des commandes sont répartis entre la boutique, les clients et les livreurs.",
    p4_solution: "Une boutique en ligne qui transmet automatiquement les nouvelles commandes et leur suivi sur WhatsApp.",
    p4_result: "Un parcours démontrable du catalogue au paiement, complété par des notifications de suivi automatisées.",
    p4_stack: "PrestaShop · PHP · Node.js/Baileys",
    p4_status: "● Projet de démonstration — vidéo disponible",
    p5_chip: "Prototype UX • Gastronomie",
    p5_label: "Concept de plateforme pour restaurant & traiteur",
    p5_title: "Maison Safran — Site & Simulateur Traiteur",
    p5_problem: "Permettre à un visiteur d'explorer une carte, d'estimer un événement et de tester une prise de contact sans multiplier les échanges.",
    p5_solution: "Un concept fictif trilingue réunissant carte interactive, simulateur de devis et parcours de réservation WhatsApp.",
    p5_result: "Un parcours complet testable en FR, EN et AR, avec mise en page RTL et estimation dynamique.",
    p5_stack: "HTML/CSS · JavaScript · i18n",
    p5_status: "● Prototype fictif de démonstration — non affilié à un restaurant",
    btn_view_live_gastronomie: "Voir le prototype",
    btn_live_gastronomie: "Démo interactive",
    
    // Skills Section
    sec_skill_num: "02 / Services",
    sec_skill_title: "Ce que je peux construire à partir de votre besoin",
    sec_skill_sub: "Vous m'expliquez votre objectif ou votre blocage ; je le transforme en un outil utilisable et vérifiable.",
    skill_1_title: "MVP & applications SaaS",
    skill_1_desc: "Transformer une idée en première version utilisable pour présenter, tester et faire évoluer votre produit.",
    skill_2_title: "Applications métier",
    skill_2_desc: "Remplacer les fichiers dispersés et les calculs manuels par un outil adapté à votre manière de travailler.",
    skill_3_title: "Automatisation & intégrations",
    skill_3_desc: "Connecter vos outils, contrôler les données et automatiser les notifications ou tâches répétitives.",
    sec_stack_num: "03 / Stack courte",
    sec_stack_title: "Les outils que j'utilise",
    sec_stack_sub: "Je choisis les outils selon le problème à résoudre. Voici ceux que j'utilise le plus souvent.",
    
    // Why Section
    sec_val_num: "04 / Collaboration",
    sec_val_title: "Une collaboration simple et lisible",
    sec_val_sub: "Vous savez ce qui est construit, où en est le projet et comment le faire évoluer.",
    val_1_num: "01 / LIVRAISON",
    val_1_title: "Un produit fonctionnel rapidement",
    val_1_desc: "Je commence par une première version utile, centrée sur vos priorités, puis je l'améliore avec vos retours.",
    val_2_num: "02 / ÉCHANGES",
    val_2_title: "Communication directe",
    val_2_desc: "Vous échangez directement avec moi, avec des points réguliers, un avancement visible et des réponses claires.",
    val_3_num: "03 / CODE",
    val_3_title: "Code maintenable et documenté",
    val_3_desc: "Une structure lisible, des choix techniques expliqués et une documentation utile pour faciliter la suite du projet.",
    
    // Footer
    footer_cta_kicker: "Parlons de votre projet",
    footer_cta_title: "Vous avez une application, un SaaS ou un processus à automatiser ?",
    footer_cta_desc: "Décrivez-moi votre besoin : je vous répondrai avec une première proposition concrète et les prochaines étapes.",
    footer_cta_whatsapp: "Décrire mon besoin sur WhatsApp",
    footer_cta_email: "Envoyer un email",
    footer_bio: "Je développe des applications web, des outils métier et des automatisations pour transformer un besoin concret en solution utilisable.",
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
    footer_stack_link: "Voir la stack principale",
    footer_rights: "© 2026 Amine ELHAMRI. Tous droits réservés.",
    footer_tagline: "Conçu avec rigueur et passion pour l'excellence logicielle."
  },
  
  en: {
    meta_title: "Amine ELHAMRI — Full-Stack Developer | ENSA Engineering Student",
    meta_desc: "Portfolio of Amine ELHAMRI, Full-Stack Developer and ENSA engineering student. Web apps, SaaS products, MVPs and business automation with Laravel and Vue.",
    brand_title: "Full-Stack • Engineering Student",
    nav_projects: "Key Projects",
    nav_skills: "Services & Stack",
    nav_why: "Why Work With Me",
    nav_contact: "Contact & Resume",
    status_avail: "Available for Hire",
    nav_cv_btn: "Resume A4 (PDF)",
    
    // Hero
    hero_tag: "Full-Stack Developer — Laravel / Vue",
    hero_title: 'I turn your ideas and business processes into <span class="highlight">reliable, functional web applications.</span>',
    hero_desc: "SaaS · Business Applications · MVP · Automation",
    hero_btn_contact: "Discuss your project",
    hero_btn_projects: "See my work",
    hero_btn_cv: "View my resume",
    cred_ensa: "State Engineering program in progress (ENSA Kénitra)",
    cred_snee: "National Student-Entrepreneur Status (SNEE)",
    cred_sql: "Maintainable, tested applications",
    stat_ws_val: "Live",
    stat_ws_lbl: "Synchronized auctions",
    stat_demat_val: "8 checks",
    stat_demat_lbl: "Automated review",
    
    // Metrics
    metric_1_figure: "DRA-RSK Internship",
    metric_1_title: "Real Business Context",
    metric_1_desc: "Application developed during an internship at the Regional Directorate of Agriculture.",
    metric_2_figure: "8 checks",
    metric_2_title: "Anomalies Reviewed",
    metric_2_desc: "Duplicates, rate inconsistencies and overruns flagged before export.",
    metric_3_title: "Indexed Vehicles",
    metric_3_desc: "Technical specifications grouped for faster model comparison.",
    
    // Projects Section
    sec_proj_num: "01 / Verifiable Projects",
    sec_proj_title: "Real problems, solutions you can verify",
    sec_proj_sub: "The context, need and result are presented simply. The demonstrations show what was actually built.",
    demo_disclosure_title: "Demo transparency",
    demo_disclosure_body: "Each project clearly states whether it is an internship project, a personal project or a demonstration. Use the videos and demos to verify the work shown.",
    filter_all: "All Projects",
    filter_saas: "SaaS & Platforms",
    filter_stage: "Internship & Audit Project",
    filter_auto: "Automation & Data",
    filter_ecom: "E-Commerce & PWA",
    other_projects_num: "Other Work",
    other_projects_title: "Additional Concepts & Prototypes",
    other_projects_sub: "Two interactive demonstrations kept at a secondary level to show other user journeys and industries.",
    case_problem: "Problem",
    case_solution: "Solution",
    case_result: "Result",
    case_stack: "Stack",
    case_role: "Role",
    
    // Project 1: MzadAuto
    p1_chip: "SaaS & Marketplace",
    p1_label: "Compare vehicles and follow auctions",
    p1_problem: "Comparing many vehicles while following auctions where every bid must stay synchronized across participants.",
    p1_solution: "One place to view vehicle records, compare models, join auctions and manage the related documents.",
    p1_result: "More than 500 vehicles brought together. The video lets you verify the comparison flow and how an auction works.",
    p1_stack: "Laravel 12 · Vue 3 · Reverb · MySQL/Redis",
    p1_status: "● Public website available · video demo available",
    btn_live_site: "Visit mzadauto.app",
    btn_launch_vid: "Watch the video",
    btn_view_video: "View demo",
    
    // Project 2: DRA-RSK (Stage)
    p2_chip: "Internship • Business Application",
    p2_label: "Regional Directorate of Agriculture (DRA-RSK)",
    p2_title: "Per Diem Generator & Budget Audit System",
    p2_context: "Project completed during an internship at the Regional Directorate of Agriculture.",
    p2_role: "I reviewed the existing workflow, then designed and developed the application.",
    p2_role_short: "Needs analysis, workflow design, application development and verification of important cases.",
    stage_note_title: "Demo confidentiality",
    stage_note_body: "To protect administrative and financial information, the names, employee IDs, amounts and records shown are AI-generated simulation examples.",
    p2_problem: "Manual administrative calculations, repetitive documents and error risks in official travel statements.",
    p2_solution: "A tool that calculates allowances, prepares calendars, checks the budget and generates documents.",
    p2_result: "Detection of 8 anomaly categories and automated generation of statements and reports.",
    p2_stack: "Laravel · PHP 8.3 · MySQL · Pest",
    p2_status: "● Internship project · video demo available",
    btn_consult_vid: "View demo",
    
    // Project 3: Majest Drive
    p3_chip: "Growth & B2B Automation",
    p3_label: "Car Rental & Client Acquisition",
    p3_title: "Majest Drive & B2B Prospecting",
    p3_problem: "Presenting a rental offer on mobile while organizing prospecting data scattered across several sources.",
    p3_solution: "A demonstration landing page connected to a system that collects and qualifies contacts, then prepares WhatsApp campaigns.",
    p3_result: "A structured prospect database and centralized campaign tracking in Google Sheets.",
    p3_stack: "Vite · JavaScript · Google Sheets",
    p3_status: "● Demonstration prototype hosted in this portfolio",
    btn_view_pipeline: "View system",
    btn_pipeline_details: "Details",
    btn_live_location: "Live demo",
    btn_view_live_location: "View Landing Page",
    
    // Project 4: PrestaShop
    p4_chip: "Online Store & WhatsApp Updates",
    p4_label: "Electronic Commerce & On-Demand Services",
    p4_title: "Online Store & WhatsApp Updates",
    p4_problem: "The purchase journey and order coordination are split between the store, customers and delivery staff.",
    p4_solution: "An online store that automatically sends new orders and tracking updates through WhatsApp.",
    p4_result: "A demonstrable catalog-to-checkout flow supplemented by automated tracking notifications.",
    p4_stack: "PrestaShop · PHP · Node.js/Baileys",
    p4_status: "● Demonstration project — video available",

    // Project 5: Maison Safran
    p5_chip: "UX Prototype • Gastronomy",
    p5_label: "Restaurant and catering platform concept",
    p5_title: "Maison Safran — Website & Catering Simulator",
    p5_problem: "Letting visitors explore a menu, estimate an event and test a contact flow without multiple exchanges.",
    p5_solution: "A fictional trilingual concept combining an interactive menu, quote simulator and WhatsApp booking flow.",
    p5_result: "A complete testable journey in FR, EN and AR, with RTL layout and dynamic estimates.",
    p5_stack: "HTML/CSS · JavaScript · i18n",
    p5_status: "● Fictional demonstration prototype — not affiliated with a restaurant",
    btn_view_live_gastronomie: "View prototype",
    btn_live_gastronomie: "Live demo",
    
    // Skills Section
    sec_skill_num: "02 / Services",
    sec_skill_title: "What I can build from your needs",
    sec_skill_sub: "You explain your goal or bottleneck; I turn it into a usable, verifiable tool.",
    skill_1_title: "MVPs & SaaS Applications",
    skill_1_desc: "Turn an idea into a first usable version to present, test and evolve your product.",
    skill_2_title: "Business Applications",
    skill_2_desc: "Replace scattered files and manual calculations with a tool adapted to the way you work.",
    skill_3_title: "Automation & Integrations",
    skill_3_desc: "Connect your tools, validate data and automate notifications or repetitive tasks.",
    sec_stack_num: "03 / Short Stack",
    sec_stack_title: "The tools I use",
    sec_stack_sub: "I choose tools according to the problem. These are the ones I use most often.",
    
    // Why Section
    sec_val_num: "04 / Collaboration",
    sec_val_title: "A simple, transparent collaboration",
    sec_val_sub: "You know what is being built, where the project stands and how it can evolve.",
    val_1_num: "01 / DELIVERY",
    val_1_title: "A Working Product, Quickly",
    val_1_desc: "I start with a useful first version focused on your priorities, then improve it with your feedback.",
    val_2_num: "02 / COMMUNICATION",
    val_2_title: "Direct Communication",
    val_2_desc: "You work directly with me through regular check-ins, visible progress and clear answers.",
    val_3_num: "03 / CODE",
    val_3_title: "Maintainable, Documented Code",
    val_3_desc: "A readable structure, explained technical choices and useful documentation to make future work easier.",
    
    // Footer
    footer_cta_kicker: "Let's discuss your project",
    footer_cta_title: "Do you have an application, SaaS product or process to automate?",
    footer_cta_desc: "Describe what you need and I will reply with a concrete first proposal and the next steps.",
    footer_cta_whatsapp: "Describe my project on WhatsApp",
    footer_cta_email: "Send an email",
    footer_bio: "I build web applications, business tools and automations that turn a concrete need into a usable solution.",
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
    footer_stack_link: "View core stack",
    footer_rights: "© 2026 Amine ELHAMRI. All rights reserved.",
    footer_tagline: "Engineered with rigor and passion for software excellence."
  }
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
  initProjectHierarchy();
  initLanguage();
  initProjectFilters();
  initMediaModal();
  initStickyNavbar();
  initSmoothScroll();
  initMobileMenu();
});

/* ==========================================================================
   PROJECT HIERARCHY
   ========================================================================== */
function initProjectHierarchy() {
  const featuredGrid = document.querySelector('.projects-grid');
  if (!featuredGrid || featuredGrid.dataset.hierarchyReady === 'true') return;

  const cards = [...featuredGrid.querySelectorAll('.project-card-90')];
  const featuredCards = cards
    .filter(card => card.dataset.tier === 'featured')
    .sort((a, b) => Number(a.dataset.priority) - Number(b.dataset.priority));
  const secondaryCards = cards
    .filter(card => card.dataset.tier === 'secondary')
    .sort((a, b) => Number(a.dataset.priority) - Number(b.dataset.priority));

  featuredGrid.classList.add('featured-projects-grid');
  featuredGrid.dataset.hierarchyReady = 'true';
  featuredCards.forEach(card => featuredGrid.appendChild(card));

  if (!secondaryCards.length) return;

  const section = document.createElement('section');
  section.className = 'other-projects-section';
  section.setAttribute('aria-labelledby', 'otherProjectsTitle');
  section.innerHTML = `
    <div class="other-projects-header">
      <span class="section-number" data-i18n="other_projects_num">Autres réalisations</span>
      <h3 id="otherProjectsTitle" data-i18n="other_projects_title">Concepts & Prototypes Complémentaires</h3>
      <p data-i18n="other_projects_sub">Deux démonstrations interactives conservées en second niveau pour montrer d'autres parcours et secteurs.</p>
    </div>
    <div class="other-projects-grid"></div>
  `;

  const secondaryGrid = section.querySelector('.other-projects-grid');
  const compactProjects = [
    {
      chip: 'p3_chip',
      title: 'p3_title',
      result: 'p3_result',
      demoLabel: 'btn_live_location',
      demoUrl: 'location/index.html',
      sourceUrl: 'https://github.com/amineecole199-rgb/portfolio/tree/main/location'
    },
    {
      chip: 'p5_chip',
      title: 'p5_title',
      result: 'p5_result',
      demoLabel: 'btn_live_gastronomie',
      demoUrl: 'gastronomie/index.html',
      sourceUrl: 'https://github.com/amineecole199-rgb/portfolio/tree/main/gastronomie'
    }
  ];

  compactProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'other-project-link-card';
    card.innerHTML = `
      <div class="other-project-copy">
        <span class="project-category-chip" data-i18n="${project.chip}"></span>
        <h4 data-i18n="${project.title}"></h4>
        <p data-i18n="${project.result}"></p>
      </div>
      <div class="other-project-actions">
        <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" data-i18n="${project.demoLabel}">Démo interactive</a>
        <a href="${project.sourceUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
      </div>
    `;
    secondaryGrid.appendChild(card);
  });

  secondaryCards.forEach(card => card.remove());
  featuredGrid.insertAdjacentElement('afterend', section);
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const navbar = document.getElementById('navbar');

  if (!toggle || !nav || !navbar) return;

  const closeMenu = () => {
    navbar.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', currentLang === 'en' ? 'Open menu' : 'Ouvrir le menu');
    document.body.classList.remove('nav-locked');
  };

  toggle.addEventListener('click', () => {
    const willOpen = !navbar.classList.contains('menu-open');
    navbar.classList.toggle('menu-open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen
      ? (currentLang === 'en' ? 'Close menu' : 'Fermer le menu')
      : (currentLang === 'en' ? 'Open menu' : 'Ouvrir le menu'));
    document.body.classList.toggle('nav-locked', willOpen);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  }, { passive: true });
}

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
  const projectCards = document.querySelectorAll('.featured-projects-grid .project-card-90');

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
   MEDIA MODAL (PROJECT DEMONSTRATIONS)
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
      const title = trigger.getAttribute('data-title') || (currentLang === 'en' ? 'Project Demonstration' : 'Démonstration du projet');

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
                ${isEn ? 'What the video shows' : 'Ce que montre la vidéo'}
              </strong>
              <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px; line-height: 1.5;">
                ${isEn 
                  ? 'A visitor can find a vehicle, compare models and follow an auction as bids are placed.'
                  : 'Un visiteur peut rechercher un véhicule, comparer plusieurs modèles et suivre une enchère au fil des mises.'}
              </p>
            </div>
            <span class="project-status-text">
              ${isEn ? 'Public website available' : 'Site public accessible'}
            </span>
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
              <strong style="color: var(--c-dark); font-size: 13px;">${isEn ? 'Calendars prepared automatically' : 'Calendriers préparés automatiquement'}</strong>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                ${isEn ? 'Automated exclusion of weekends, holidays, and official agent leaves.' : 'Exclusion automatisée des week-ends, fériés et congés des agents.'}
              </p>
            </div>
            <div style="padding: 12px; background: var(--bg-page); border: 1px solid var(--border-light);">
              <strong style="color: var(--c-dark); font-size: 13px;">${isEn ? 'Checks before document generation' : 'Contrôles avant génération'}</strong>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                ${isEn ? 'Eight anomaly categories are flagged before statements and reports are produced.' : 'Huit catégories d’anomalies sont signalées avant la production des états et bordereaux.'}
              </p>
            </div>
          </div>
        `;
      }
      else if (demoType === 'gastronomie-video') {
        const isEn = currentLang === 'en';
        contentHTML = `
          <div style="text-align: center;">
            <video controls autoplay muted playsinline style="max-height: 500px; width: 100%; max-width: 100%; border: 1px solid var(--c-dark); background: #000; box-shadow: 4px 4px 0px var(--c-dark);">
              <source src="assets/video/gastronomie.mp4?t=${cacheBust}" type="video/mp4">
              ${isEn ? 'Your browser does not support the video tag.' : 'Votre navigateur ne supporte pas la lecture vidéo.'}
            </video>
          </div>
          <div style="margin-top: 18px; padding: 14px; background: var(--bg-page); border: 1px solid var(--border-medium); border-left: 3px solid var(--c-blue);">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--c-blue); margin-bottom: 2px;">
              ${isEn ? 'PLATFORM OVERVIEW · MAISON SAFRAN' : 'APERÇU DE LA PLATEFORME · MAISON SAFRAN'}
            </div>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px;">
              ${isEn 
                ? 'Interactive culinary showcase featuring instant table reservation, responsive mobile layout, and live wedding/banquet budget simulator with WhatsApp integration.' 
                : 'Interface gastronomique de luxe avec réservation de table en direct, carte interactive et simulateur de budget banquet/mariage avec intégration WhatsApp.'}
            </p>
            <a href="gastronomie/index.html" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="display: inline-flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              <span>${isEn ? 'Open Live Website ↗' : 'Tester le Site en direct ↗'}</span>
            </a>
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
              ${isEn ? 'What the video shows' : 'Ce que montre la vidéo'}
            </strong>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px; line-height: 1.5;">
              ${isEn 
                ? 'The customer browses the catalog and places an order, then the relevant order information is sent through WhatsApp for follow-up.'
                : 'Le client consulte le catalogue et passe commande, puis les informations utiles sont envoyées sur WhatsApp pour faciliter le suivi.'}
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
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
                ${isEn 
                  ? 'Ultra-lightweight responsive landing page designed to maximize conversion rates for client car booking acquisition.' 
                  : 'Page d\'atterrissage responsive ultra-légère conçue pour maximiser le taux de conversion lors des campagnes d\'acquisition.'}
              </p>
              <a href="location/index.html" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="display: inline-flex; align-items: center; gap: 6px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                <span>${isEn ? 'Open Live Landing Page ↗' : 'Tester la Landing Page en direct ↗'}</span>
              </a>
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
