window.PRODUCT_DATA = {
    produit: {
        id: "aibox-3576m-v.14",
        categorie: "Boîtiers Multimédias",
        isNew: true,
        titre: { 
            fr: "BOÎTIER INDUSTRIELLE ANDROID v.14", 
            en: "INDUSTRIAL BOX ANDROID V.14" 
        },
        description_courte: { 
            fr: "Mini PC industriel haute performance avec dissipation thermique passive, conçu pour l'affichage dynamique.", 
            en: "High-performance industrial mini PC with passive heat dissipation, designed for digital signage." 
        },
        phraseAccroche: { 
            fr: "Puissance de traitement compacte et connectivité étendue pour vos projets industriels.", 
            en: "Compact processing power and extensive connectivity for your industrial projects." 
        },
        ref: "AIB3576M-8G-64G",
        sn: "SL202505160037 (Model: AIBOX-3576M)"
    },
    badges: [
        { label: { fr: "8 Go RAM", en: "8GB RAM" }, icone: "cpu", couleur: "text-blue-400" },
        { label: { fr: "64 Go Stockage", en: "64GB Storage" }, icone: "hard-drive", couleur: "text-purple-400" },
        { label: { fr: "Dual LAN", en: "Dual LAN" }, icone: "network", couleur: "text-green-400" },
        { label: { fr: "Fanless", en: "Fanless" }, icone: "wind-off", couleur: "text-orange-400" }
    ],
    dimensions: {
        largeur: "Format Compact", 
        hauteur: "Profil Bas", 
        diagonale: "N/A", 
        orientation: "Horizontal/Vertical", 
        vesa: "4 trous de fixation filetés"
    },
    media: {
        imagePrincipale: "https://raw.githubusercontent.com/sarlvertex/fiches-techniques/main/produits/images/aibox-3576m-v.14-main.jpg",
        galerie: [
            { url: "produits/images/aibox-3576m-v.14-gal0.jpg", label: { fr: "Façade Connectique USB/Audio", en: "Front USB/Audio Ports" } },
            { url: "produits/images/aibox-3576m-v.14-gal1.jpg", label: { fr: "Double LAN et Sorties Vidéo", en: "Dual LAN and Video Outputs" } },
            { url: "produits/images/aibox-3576m-v.14-gal2.jpg", label: { fr: "Option 4G", en: "4G Option" } },
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Alimentation", en: "Power Supply" }, 
            detail: { fr: "Adaptateur DC 12V ⎓ 3A inclus", en: "12V ⎓ 3A DC adapter included" } 
        },
        { 
            nom: { fr: "Antennes", en: "Antennas" }, 
            detail: { fr: "Connecteur ANT1 installé", en: "ANT1 connector installed" } 
        }
    ],
    options: [
        { nom: { fr: "Extension 4G", en: "4G Expansion" }, icone: "rss" },
        { nom: { fr: "Support VESA", en: "VESA Mount" }, icone: "layers" }
    ],
    specifications: [
        { 
            titre: { fr: "PERFORMANCES MATÉRIELLES", en: "HARDWARE PERFORMANCE" }, 
            icone: "cpu", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Mémoire vive (RAM)", en: "RAM" }, "8 Go"], 
                [{ fr: "Stockage interne", en: "Internal Storage" }, "64 Go"],
                [{ fr: "Alimentation", en: "Power Supply" }, "12V ⎓ 3A (DC IN)"],
                [{ fr: "Refroidissement", en: "Cooling" }, "Passif (Ailettes de dissipation)"]
            ] 
        },
        { 
            titre: { fr: "CONNECTIVITÉ FAÇADE", en: "FRONT CONNECTIVITY" }, 
            icone: "usb", 
            couleur: "blue", 
            lignes: [
                [{ fr: "USB 3.0 / OTG", en: "USB 3.0 / OTG" }, "2 ports (1x OTG)"], 
                [{ fr: "USB 2.0", en: "USB 2.0" }, "2 ports"],
                [{ fr: "Audio (In/Out)", en: "Audio (In/Out)" }, "1x MIC (Rouge) / 1x SPK (Vert)"],
                [{ fr: "Communication", en: "Communication" }, "1x Carte SIM / 1x COM3 (DB9)"]
            ] 
        },
        { 
            titre: { fr: "RÉSEAU & VIDÉO (ARRIÈRE)", en: "NETWORK & VIDEO (REAR)" }, 
            icone: "globe", 
            couleur: "green", 
            lignes: [
                [{ fr: "Ethernet", en: "Ethernet" }, "2x Ports LAN RJ45"], 
                [{ fr: "Sorties Vidéo", en: "Video Outputs" }, "1x HD OUT (HDMI) / 1x COM2 (HD OUT2)"],
                [{ fr: "Ports Série", en: "Serial Ports" }, "1x COM1 (DB9)"],
                [{ fr: "Expansion RF", en: "RF Expansion" }, "ANT1 / ANT2 / 4G-ANT (Latéral)"]
            ] 
        }
    ],
    entretien: [
        { fr: "Dépoussiérer régulièrement les ailettes de dissipation", en: "Regularly dust the dissipation fins" },
        { fr: "Vérifier la stabilité des connecteurs d'antenne", en: "Check antenna connector stability" },
        { fr: "Assurer une ventilation libre autour du boîtier", en: "Ensure free airflow around the box" },
        { fr: "Utiliser uniquement l'alimentation 12V 3A fournie", en: "Use only the provided 12V 3A power supply" }
    ]
};
