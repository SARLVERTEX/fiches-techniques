// config.js - TOUR DE CONTRÔLE GÉNÉRALE VERTEX MONACO (Bilingue)
window.GLOBAL_CONFIG = {
    // --- 1. IDENTITÉ DE MARQUE ---
    brand: {
        nom: "Vertex Sarl Monaco",
        slogan: "High-Performance Display Solutions",
        adresse: "9 Avenue Albert II, 98000 Monaco",
        logo: "images/logo-vertex.png",
        favicon: "images/logo-vertex.png",
        copyright: { 
            fr: "© 2026 Vertex Monaco. Tous droits réservés.", 
            en: "© 2026 Vertex Monaco. All rights reserved." 
        }
    },

    // --- 2. DESIGN & THÈME ---
    style: {
        couleurAccent: "#FFD700",
        couleurFond: "#020617",
        couleurCarte: "rgba(30, 41, 59, 0.7)",
        police: "'Outfit', sans-serif",
        arrondi: "2.5rem",
        effetFlou: "blur(12px)",
        transition: "all 0.4s ease"
    },

    // --- 3. CONTACTS & ÉQUIPE ---
    equipe: [
        { nom: "Marco Versace", poste: { fr: "Co-gérant", en: "Co-manager" }, mail: "marco.versace@vertex-monaco.com", tel: "06 26 73 48 69" },
        { nom: "Allan Pleutin", poste: { fr: "Technico-Commercial", en: "Technical Sales" }, mail: "allan.pleutin@vertex-monaco.com", tel: "06 09 77 90 03" },
        { nom: "Pietro Sanguedolce", poste: { fr: "Technicien", en: "Technician" }, mail: "pietro@vertex-monaco.com", tel: "" },
        { nom: "Annalisa Petroccia", poste: { fr: "Assistante de Direction", en: "Executive Assistant" }, mail: "annalisa@vertex-monaco.com", tel: "" },
        { nom: "JC Ousselly", poste: { fr: "Comptable Administratif", en: "Administrative Accountant" }, mail: "jc.ousselly@vertex-monaco.com", tel: "" }
    ],

    // --- 4. RÉSEAUX & CANAUX ---
    canaux: {
        whatsapp: "33626734869",
        siteWeb: "https://vertex-monaco.com",
        linkedin: "https://linkedin.com/company/vertex-monaco",
        instagram: "https://instagram.com/vertexmonaco"
    },

    // --- 5. TEXTES ---
    messages: {
        ficheEnCoursTitre: { fr: "Fiche en cours de rédaction", en: "Drafting in progress" },
        ficheEnCoursDesc: { 
            fr: "Nous finalisons les spécifications techniques. Contactez-nous pour un dossier complet.", 
            en: "We are finalizing the technical specifications. Contact us for a full brief." 
        },
        boutonRetour: { fr: "Retour au Showroom", en: "Back to Showroom" },
        contactBouton: { fr: "Demander un devis", en: "Request a Quote" }
    }
};

// --- 6. SÉCURITÉ ANTI-IMAGES CASSÉES (Version Bilingue Intelligente) ---
document.addEventListener('error', function (e) {
    if (e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
        const img = e.target;
        if (img.id === 'ui-main-logo' || img.id === 'ui-logo' || img.src.includes('logo')) return;

        // Détection de la langue pour le message d'erreur
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang') || 'fr';
        const msg = lang === 'en' ? "Information not available" : "Information non disponible";
        const subMsg = lang === 'en' ? "Document being updated" : "Document en cours de mise à jour";

        const replacement = document.createElement('div');
        replacement.className = "flex flex-col items-center justify-center w-full h-full min-h-[180px] rounded-[2rem] border-2 border-dashed border-[#FFD700]/20 bg-[#FFD700]/5";
        
        replacement.innerHTML = `
            <svg xmlns="http://www.w3.org/2001/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:12px; opacity:0.8;">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span style="font-size:10px; color:#FFD700; text-transform:uppercase; font-weight:900; letter-spacing:2px; text-align:center; padding:0 10px;">${msg}</span>
            <span style="font-size:7px; color:#94a3b8; text-transform:uppercase; margin-top:5px; font-weight:bold; letter-spacing:1px;">${subMsg}</span>
        `;
        img.parentNode.replaceChild(replacement, img);
    }
}, true);
