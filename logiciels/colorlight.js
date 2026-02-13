// produits/colorlight.js
window.PRODUCT_DATA = {
    type: "software",
    produit: {
        id: "colorlight",
        categorie: "Logiciels",
        isNew: false,
        titre: { 
            fr: "COLORLIGHT LOG.", 
            en: "COLORLIGHT SOFT." 
        },
        description_courte: { 
            fr: "Solution complète de pilotage : PlayerMaster (PC) et LED Assistant (Mobile) pour une gestion totale LAN & Cloud.", 
            en: "Complete control solution: PlayerMaster (PC) and LED Assistant (Mobile) for total LAN & Cloud management." 
        },
        phraseAccroche: { 
            fr: "Prenez le contrôle de vos écrans, partout, tout le temps.", 
            en: "Take control of your screens, everywhere, all the time." 
        },
        ref: "SOFT-COL-V2",
        sn: "CLOUD-READY"
    },
    badges: [
        { label: { fr: "Gestion Cloud", en: "Cloud Mgmt" }, icone: "cloud", couleur: "text-blue-400" },
        { label: { fr: "Windows / iOS / Android", en: "Windows / iOS / Android" }, icone: "laptop", couleur: "text-purple-400" },
        { label: { fr: "Monitoring 24/7", en: "24/7 Monitoring" }, icone: "eye", couleur: "text-green-400" },
        { label: { fr: "Sécurisé", en: "Secure" }, icone: "shield-check", couleur: "text-yellow-500" }
    ],
    dimensions: {
        largeur: "Windows 7/8/10", 
        hauteur: "iOS / Android", 
        diagonale: "CLOUD", 
        orientation: "landscape", 
        vesa: "Protocol TCP/IP"
    },
    media: {
        imagePrincipale: "https://raw.githubusercontent.com/sarlvertex/fiches-techniques/main/produits/images/colorlight-main.jpg", // Capture du dashboard PlayerMaster
        galerie: [
            { url: "images/playermaster-ui.jpg", label: { fr: "Interface PC", en: "PC Interface" } },
            { url: "images/led-assistant-ui.jpg", label: { fr: "App Mobile", en: "Mobile App" } },
            { url: "images/cloud-cluster.jpg", label: { fr: "Gestion Cluster", en: "Cluster Mgmt" } },
            { url: "images/widgets-preview.jpg", label: { fr: "Widgets Météo/RSS", en: "Weather/RSS Widgets" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "PlayerMaster (PC)", en: "PlayerMaster (PC)" }, 
            detail: { fr: "Édition de programmes complexe & Cluster", en: "Complex program editing & Cluster" } 
        },
        { 
            nom: { fr: "LED Assistant (Mobile)", en: "LED Assistant (Mobile)" }, 
            detail: { fr: "Contrôle rapide & Captures d'écran", en: "Quick control & Screenshots" } 
        }
    ],
    options: [
        { nom: { fr: "Widgets Météo", en: "Weather Widgets" }, icone: "cloud-sun" },
        { nom: { fr: "Flux RSS / Web", en: "RSS / Web Feeds" }, icone: "globe" },
        { nom: { fr: "Auto-Transcodage", en: "Auto-Transcoding" }, icone: "refresh-cw" }
    ],
    specifications: [
        { 
            titre: { fr: "MODES DE CONTRÔLE", en: "CONTROL MODES" }, 
            icone: "share-2", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Mode LAN (Local)", en: "LAN Mode" }, "WiFi Direct / RJ45"], 
                [{ fr: "Mode Cloud (Distant)", en: "Cloud Mode" }, "Internet (4G/WiFi)"],
                [{ fr: "Sécurité LAN", en: "LAN Security" }, "Chiffrement AES"],
                [{ fr: "Accès Cloud", en: "Cloud Access" }, "Compte Admin Dédié"]
            ] 
        },
        { 
            titre: { fr: "FONCTIONS AVANCÉES", en: "ADVANCED FEATURES" }, 
            icone: "zap", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Gestion Cluster", en: "Cluster Mgmt" }, "Multi-écrans simultanés"], 
                [{ fr: "Planification", en: "Scheduling" }, "Calendrier 24/7"],
                [{ fr: "Monitoring", en: "Monitoring" }, "Température / Humidité"],
                [{ fr: "Capture à distance", en: "Remote Capture" }, "Vérification visuelle"]
            ] 
        },
        { 
            titre: { fr: "CODES & CONFIGURATION", en: "CODES & CONFIG" }, 
            icone: "lock", 
            couleur: "red", 
            lignes: [
                [{ fr: "Mot de passe LAN", en: "LAN Password" }, "Console@123"], 
                [{ fr: "Code Paramètres", en: "Settings Code" }, "168"],
                [{ fr: "Format Médias", en: "Media Formats" }, "MP4, Office, Web, RSS"],
                [{ fr: "Identifiant", en: "ID" }, "Cloud ID Unique"]
            ] 
        }
    ],
    entretien: [
        { fr: "Mise à jour régulière de PlayerMaster recommandée", en: "Regular PlayerMaster updates recommended" },
        { fr: "Première config : Mode LAN impératif pour résolution", en: "First config: LAN Mode mandatory for resolution" },
        { fr: "Vérifier le Cloud ID sur l'étiquette du boîtier", en: "Check Cloud ID on the box label" },
        { fr: "Support technique Vertex inclus pour la config", en: "Vertex technical support included for config" }
    ]
};
