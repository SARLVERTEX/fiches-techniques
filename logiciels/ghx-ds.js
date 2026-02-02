// produits/ghx-ds.js
window.PRODUCT_DATA = {
    type: "software",
    produit: {
        id: "ghx-ds",
        categorie: "Affichage Dynamique",
        isNew: true,
        titre: { 
            fr: "GHX-DS (Digital Signage)", 
            en: "GHX-DS (Digital Signage)" 
        },
        description_courte: { 
            fr: "Plateforme cloud multi-supports pour centraliser et automatiser la diffusion de contenus sur parcs d'écrans hétérogènes.", 
            en: "Multi-platform cloud platform to centralize and automate content broadcasting across diverse screen networks." 
        },
        phraseAccroche: { 
            fr: "Pilotez votre communication visuelle, partout, sur n'importe quel écran.", 
            en: "Drive your visual communication, everywhere, on any screen." 
        },
        ref: "SOFT-GHX-DS",
        sn: "CLOUD-CPE-READY"
    },
    badges: [
        { label: { fr: "Multi-sites", en: "Multi-site" }, icone: "map-pin", couleur: "text-blue-400" },
        { label: { fr: "Cloud / On-premise", en: "Cloud / On-premise" }, icone: "server", couleur: "text-purple-400" },
        { label: { fr: "Interpérabilité", en: "Interoperability" }, icone: "layers", couleur: "text-green-400" },
        { label: { fr: "Usage 24/7", en: "24/7 Usage" }, icone: "clock", couleur: "text-yellow-500" }
    ],
    dimensions: {
        largeur: "Smart TV / Player", 
        hauteur: "Win / Mac / Android", 
        diagonale: "CLOUD & CPE", 
        orientation: "Portrait / Landscape", 
        vesa: "HD / 4K Support"
    },
    media: {
        imagePrincipale: "images/ghx-ds-dashboard.jpg", 
        galerie: [
            { url: "images/ghx-calendar.jpg", label: { fr: "Pilotage Calendrier", en: "Calendar Control" } },
            { url: "images/ghx-multiplatform.jpg", label: { fr: "Écosystème Ouvert", en: "Open Ecosystem" } },
            { url: "images/ghx-emergency.jpg", label: { fr: "Scénarios d'Urgence", en: "Emergency Scenarios" } },
            { url: "images/ghx-social.jpg", label: { fr: "Interactivité Sociale", en: "Social Interactivity" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Licence GHX-DS Cloud", en: "GHX-DS Cloud License" }, 
            detail: { fr: "Accès complet à l'interface d'administration", en: "Full admin interface access" } 
        },
        { 
            nom: { fr: "Players Physiques", en: "Hardware Players" }, 
            detail: { fr: "Apple TV, Fire Stick, Android TV", en: "Apple TV, Fire Stick, Android TV" } 
        }
    ],
    options: [
        { nom: { fr: "Module Social / Avis", en: "Social / Review Module" }, icone: "message-square" },
        { nom: { fr: "Couplage Téléphonie ALE", en: "ALE Telephony Integration" }, icone: "phone" },
        { nom: { fr: "Gestion des Rôles", en: "Role Management" }, icone: "users" }
    ],
    specifications: [
        { 
            titre: { fr: "COMPATIBILITÉ MATÉRIELLE", en: "HARDWARE COMPATIBILITY" }, 
            icone: "monitor", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Smart TV", en: "Smart TV" }, "Samsung, LG, Agath"], 
                [{ fr: "Boîtiers", en: "Media Boxes" }, "Apple TV, Fire Stick"],
                [{ fr: "OS Supportés", en: "Supported OS" }, "Windows, Mac, Android"],
                [{ fr: "Mobilité", en: "Mobility" }, "iOS, Android (Tablettes)"]
            ] 
        },
        { 
            titre: { fr: "FONCTIONS CMS", en: "CMS FEATURES" }, 
            icone: "settings", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Planification", en: "Scheduling" }, "Calendrier & Horaires"], 
                [{ fr: "Playlists", en: "Playlists" }, "Séquences Dynamiques"],
                [{ fr: "Segmentation", en: "Grouping" }, "Groupes de diffusion"],
                [{ fr: "Automatisation", en: "Automation" }, "Selon affluence/heure"]
            ] 
        },
        { 
            titre: { fr: "SÉCURITÉ & PROTOCOLES", en: "SECURITY & PROTOCOLS" }, 
            icone: "shield", 
            couleur: "red", 
            lignes: [
                [{ fr: "Déploiement", en: "Deployment" }, "Cloud ou On-premise (CPE)"], 
                [{ fr: "Sécurité", en: "Security" }, "Rôles & Accès sécurisés"],
                [{ fr: "Urgence", en: "Emergency" }, "Messages d'alerte instantanés"],
                [{ fr: "Résolution", en: "Resolution" }, "Support Flux HD & 4K"]
            ] 
        }
    ],
    entretien: [
        { fr: "Administration intuitive ne nécessitant pas d'expertise IT", en: "Intuitive admin requiring no IT expertise" },
        { fr: "Association logicielle simplifiée via tutoriels dédiés", en: "Simplified software pairing via dedicated tutorials" },
        { fr: "Support technique inclus pour la configuration initiale", en: "Technical support included for initial setup" },
        { fr: "Mises à jour automatiques via le Cloud GHX-DS", en: "Automatic updates via GHX-DS Cloud" }
    ]
};
