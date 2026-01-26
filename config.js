// config.js - TOUR DE CONTRÔLE GÉNÉRALE VERTEX MONACO
const GLOBAL_CONFIG = {
    // --- 1. IDENTITÉ DE MARQUE ---
    brand: {
        nom: "Vertex Sarl Monaco",
        slogan: "High-Performance Display Solutions",
        adresse: "9 Avenue Albert II, 98000 Monaco",
        logo: "images/logo-vertex.png",
        favicon: "images/logo-vertex.png",
        copyright: "© 2026 Vertex Monaco. Tous droits réservés."
    },

    // --- 2. DESIGN & THÈME (Appliqué à tout le site) ---
    style: {
        couleurAccent: "#FFD700",       // Doré Signature
        couleurFond: "#020617",         // Bleu Nuit (Deep Navy)
        couleurCarte: "rgba(30, 41, 59, 0.7)", // Gris ardoise transparent
        police: "'Outfit', sans-serif",
        arrondi: "2.5rem",              // Rayon des coins (cartes/boutons)
        effetFlou: "blur(12px)",        // Intensité du flou de fond
        transition: "all 0.4s ease"     // Vitesse des animations
    },

    // --- 3. CONTACTS & ÉQUIPE (Mise à jour globale) ---
    equipe: [
        { nom: "Marco Versace", poste: "Co-gérant", mail: "marco.versace@vertex-monaco.com", tel: "06 26 73 48 69" },
        { nom: "Allan Pleutin", poste: "Technico-Commercial", mail: "allan.pleutin@vertex-monaco.com", tel: "06 09 77 90 03" },
        { nom: "Pietro Sanguedolce", poste: "Technicien", mail: "pietro@vertex-monaco.com", tel: "" },
        { nom: "Annalisa Petroccia", poste: "Assistante de Direction", mail: "annalisa@vertex-monaco.com", tel: "" },
        { nom: "JC Ousselly", poste: "Comptable Administratif", mail: "jc.ousselly@vertex-monaco.com", tel: "" }
    ],

    // --- 4. RÉSEAUX & CANAUX DE VENTE ---
    canaux: {
        whatsapp: "33626734869",
        siteWeb: "https://vertex-monaco.com",
        linkedin: "https://linkedin.com/company/vertex-monaco",
        instagram: "https://instagram.com/vertexmonaco"
    },

    // --- 5. TEXTES DE MAINTENANCE & ERREURS ---
    messages: {
        ficheEnCoursTitre: "Fiche en cours de rédaction",
        ficheEnCoursDesc: "Nous finalisons les spécifications techniques de cette solution. Contactez-nous pour un dossier complet.",
        boutonRetour: "Retour au Showroom",
        contactBouton: "Demander un devis"
    },

    // Sécurité anti-images cassées
document.addEventListener('error', function (e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        // Remplace par ton logo si l'image produit est introuvable
        e.target.src = 'images/logo-vertex.png'; 
        e.target.style.opacity = '0.5'; // Optionnel : on grise un peu pour montrer que c'est un visuel par défaut
    }
}, true);
};
