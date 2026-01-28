// config.js - TOUR DE CONTRÔLE GÉNÉRALE VERTEX MONACO
window.GLOBAL_CONFIG = {
    // --- 1. IDENTITÉ DE MARQUE ---
    brand: {
        nom: "Vertex Sarl Monaco",
        slogan: "High-Performance Display Solutions",
        adresse: "9 Avenue Albert II, 98000 Monaco",
        logo: "images/logo-vertex.png",
        favicon: "images/logo-vertex.png",
        copyright: "© 2026 Vertex Monaco. Tous droits réservés."
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
        { nom: "Marco Versace", poste: "Co-gérant", mail: "marco.versace@vertex-monaco.com", tel: "06 26 73 48 69" },
        { nom: "Allan Pleutin", poste: "Technico-Commercial", mail: "allan.pleutin@vertex-monaco.com", tel: "06 09 77 90 03" },
        { nom: "Pietro Sanguedolce", poste: "Technicien", mail: "pietro@vertex-monaco.com", tel: "" },
        { nom: "Annalisa Petroccia", poste: "Assistante de Direction", mail: "annalisa@vertex-monaco.com", tel: "" },
        { nom: "JC Ousselly", poste: "Comptable Administratif", mail: "jc.ousselly@vertex-monaco.com", tel: "" }
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
        ficheEnCoursTitre: "Fiche en cours de rédaction",
        ficheEnCoursDesc: "Nous finalisons les spécifications techniques de cette solution. Contactez-nous pour un dossier complet.",
        boutonRetour: "Retour au Showroom",
        contactBouton: "Demander un devis"
    }
}; // <--- CETTE ACCOLADE ET CE POINT-VIRGULE SONT VITAUX !

// --- 6. SÉCURITÉ ANTI-IMAGES CASSÉES (Version Intelligente) ---
document.addEventListener('error', function (e) {
    if (e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
        const img = e.target;
        
        // PARE-FEU : On n'applique JAMAIS le remplacement sur les logos ou icônes vitaux
        if (img.id === 'ui-main-logo' || img.id === 'ui-logo' || img.src.includes('logo')) {
            console.warn("Logo manquant détecté, remplacement ignoré pour éviter de bloquer l'index.");
            return;
        }

        const replacement = document.createElement('div');
        replacement.className = "flex flex-col items-center justify-center w-full h-full min-h-[180px] rounded-[2rem] border-2 border-dashed border-[#FFD700]/20 bg-[#FFD700]/5";
        
        replacement.innerHTML = `
            <svg xmlns="http://www.w3.org/2001/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:12px; opacity:0.8;">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span style="font-size:10px; color:#FFD700; text-transform:uppercase; font-weight:900; letter-spacing:2px; text-align:center; padding:0 10px;">
                Information non disponible
            </span>
            <span style="font-size:7px; color:#94a3b8; text-transform:uppercase; margin-top:5px; font-weight:bold; letter-spacing:1px;">
                Document en cours de mise à jour
            </span>
        `;

        img.parentNode.replaceChild(replacement, img);
    }
}, true);
