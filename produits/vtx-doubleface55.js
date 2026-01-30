// produits/vtx-55.js
window.PRODUCT_DATA = {
    produit: {
        id: "vtx-55",
        categorie: "Vitrines",
        isNew: true,
        titre: { 
            fr: "ÉCRAN VITRINE 55'' DOUBLE FACE", 
            en: "55'' DOUBLE-SIDED WINDOW DISPLAY" 
        },
        description_courte: { 
            fr: "Technologie Dual-Screen Full HD avec bordure en verre transparent et processeur Rockchip RK3568.", 
            en: "Full HD Dual-Screen technology with transparent glass border and Rockchip RK3568 processor." 
        },
        phraseAccroche: { 
            fr: "L'élégance du verre combinée à la puissance du double affichage dynamique.", 
            en: "The elegance of glass combined with the power of dual dynamic display." 
        },
        ref: "VT050406202403002001",
        sn: "2024250001V (Model: AR06043)"
    },
    badges: [
        { label: { fr: "Double Face", en: "Double Sided" }, icone: "layers", couleur: "text-blue-400" },
        { label: { fr: "Bordure Verre", en: "Glass Border" }, icone: "frame", couleur: "text-slate-300" },
        { label: { fr: "Android 11", en: "Android 11" }, icone: "smartphone", couleur: "text-green-500" },
        { label: { fr: "60Hz", en: "60Hz" }, icone: "activity", couleur: "text-yellow-400" }
    ],
    dimensions: {
        largeur: "1240 mm", 
        hauteur: "715 mm", 
        diagonale: "55''", 
        orientation: "portrait", 
        vesa: "Fixation Suspendue (Câbles)"
    },
    media: {
        imagePrincipale: "images/VITRINE55.jpg",
        galerie: [
            { url: "images/zoom1.jpg", label: { fr: "Finition Verre", en: "Glass Finish" } },
            { url: "images/zoom2.jpg", label: { fr: "Profil Ultra-fin", en: "Ultra-slim Profile" } },
            { url: "images/zoom3.jpg", label: { fr: "Support Plafond", en: "Ceiling Mount" } },
            { url: "images/zoom4.jpg", label: { fr: "Connectique USB/RJ45", en: "USB/RJ45 Ports" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Support Suspendu", en: "Ceiling Suspension Kit" }, 
            detail: { fr: "Support Métal Noir + Câbles", en: "Black Metal Mount + Cables" } 
        },
        { 
            nom: { fr: "Périphérique", en: "Peripheral" }, 
            detail: { fr: "Dongle Sans Fil Cherry Inclus", en: "Cherry Wireless Dongle Included" } 
        }
    ],
    options: [
        { nom: { fr: "Capteur G-Sensor", en: "G-Sensor" }, icone: "move" },
        { nom: { fr: "WPA3 Security", en: "WPA3 Security" }, icone: "lock" }
    ],
    specifications: [
        { 
            titre: { fr: "AFFICHAGE DUAL-SCREEN", en: "DUAL-SCREEN DISPLAY" }, 
            icone: "monitor", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Résolution", en: "Resolution" }, "1920 x 1080 (FHD)"], 
                [{ fr: "Rafraîchissement", en: "Refresh Rate" }, "60.0 Hz"],
                [{ fr: "Densité Pixels", en: "Pixel Density" }, "320 PPI"],
                [{ fr: "Format", en: "Aspect Ratio" }, "16:9"]
            ] 
        },
        { 
            titre: { fr: "SYSTÈME & SOC", en: "SYSTEM & SOC" }, 
            icone: "cpu", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Processeur", en: "CPU" }, "Rockchip RK3568 (4 Cores)"], 
                [{ fr: "Graphismes", en: "GPU" }, "Mali-G52 MC1 (OpenGL 3.2)"],
                [{ fr: "RAM / Stockage", en: "RAM / Storage" }, "2 Go / 24 Go"],
                [{ fr: "OS", en: "OS" }, "Android 11 (API 30)"]
            ] 
        },
        { 
            titre: { fr: "RÉSEAU & PORTS", en: "NETWORK & PORTS" }, 
            icone: "wifi", 
            couleur: "green", 
            lignes: [
                [{ fr: "Wi-Fi", en: "Wi-Fi" }, "802.11n (2.4 GHz)"], 
                [{ fr: "Bluetooth", en: "Bluetooth" }, "5.0 (BLE Support)"],
                [{ fr: "Ethernet", en: "Ethernet" }, "Controller YT8512B"],
                [{ fr: "Périphérique", en: "Peripherals" }, "USB Dongle Support"]
            ] 
        }
    ],
    entretien: [
        { fr: "Nettoyage à l'aide d'un chiffon microfibre sec uniquement", en: "Clean using a dry microfiber cloth only" },
        { fr: "Dépoussiérage régulier des grilles de ventilation", en: "Regular dusting of ventilation grilles" },
        { fr: "Éviter tout produit chimique ou abrasif sur le verre", en: "Avoid any chemical or abrasive products on the glass" },
        { fr: "Vérification annuelle des câbles de maintien", en: "Annual check of suspension cables" }
    ]
};
