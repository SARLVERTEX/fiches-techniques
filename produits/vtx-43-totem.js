// produits/vtx-43-totem.js
window.PRODUCT_DATA = {
    produit: {
        id: "vtx-43-totem",
        categorie: "Totems",
        isNew: true,
        titre: { 
            fr: "TOTEM DIGITAL MOBILE 43''", 
            en: "43'' MOBILE DIGITAL TOTEM" 
        },
        description_courte: { 
            fr: "Solution d'affichage dynamique mobile sous Android 11 avec batterie intégrée et processeur RK3568.", 
            en: "Mobile dynamic display solution running Android 11 with integrated battery and RK3568 processor." 
        },
        phraseAccroche: { 
            fr: "La liberté d'affichage partout où vous en avez besoin, sans contrainte de câbles.", 
            en: "Display freedom wherever you need it, without the constraint of cables." 
        },
        ref: "T1V43S5W1WE933",
        sn: "2024-T1-V43 (Model: Vertex T1)"
    },
    badges: [
        { label: { fr: "Batterie 8h", en: "8h Battery" }, icone: "battery-charging", couleur: "text-green-400" },
        { label: { fr: "Mobile", en: "Mobile" }, icone: "move", couleur: "text-blue-400" },
        { label: { fr: "Android 11", en: "Android 11" }, icone: "smartphone", couleur: "text-green-500" },
        { label: { fr: "Wi-Fi Dual", en: "Dual Wi-Fi" }, icone: "wifi", couleur: "text-yellow-400" }
    ],
    dimensions: {
        largeur: "Sur mesure", 
        hauteur: "Format Totem", 
        diagonale: "43''", 
        orientation: "portrait", 
        vesa: "Châssis Autoportant"
    },
    media: {
        imagePrincipale: "https://raw.githubusercontent.com/sarlvertex/fiches-techniques/main/produits/images/vtx-43-totem-main.jpg",
        galerie: [
            { url: "produits/images/vtx-43-totem-gal0.jpg", label: { fr: "Roulettes Robustes", en: "Heavy-duty Castors" } },
            { url: "produits/images/vtx-43-totem-gal1.jpg", label: { fr: "Indicateur Batterie LCD", en: "LCD Battery Indicator" } },
            { url: "produits/images/vtx-43-totem-gal2.jpg", label: { fr: "Module WI-FI", en: "WI-FI Modul" } },
            { url: "produits/images/vtx-43-totem-gal3.jpg", label: { fr: "Alimentation", en: "Power Supply" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Alimentation", en: "Power Supply" }, 
            detail: { fr: "Câble secteur 100-240VAC inclus", en: "100-240VAC power cable included" } 
        },
        { 
            nom: { fr: "Sécurité", en: "Security" }, 
            detail: { fr: "Clés pour compartiment technique", en: "Keys for technical compartment" } 
        }
    ],
    options: [
        { nom: { fr: "WPA3 Security", en: "WPA3 Security" }, icone: "lock" },
        { nom: { fr: "Gestion Cloud", en: "Cloud Management" }, icone: "cloud" }
    ],
    specifications: [
        { 
            titre: { fr: "AFFICHAGE HAUTE DÉFINITION", en: "HD DISPLAY" }, 
            icone: "monitor", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Résolution", en: "Resolution" }, "1920 x 1080 (FHD)"], 
                [{ fr: "Rafraîchissement", en: "Refresh Rate" }, "60 Hz"],
                [{ fr: "Format", en: "Aspect Ratio" }, "16:9"],
                [{ fr: "Type", en: "Type" }, "LED Haute Luminosité"]
            ] 
        },
        { 
            titre: { fr: "SYSTÈME & PERFORMANCE", en: "SYSTEM & PERFORMANCE" }, 
            icone: "cpu", 
            couleur: "orange", 
            lignes: [
                [{ fr: "IP67", en: "IP67" }, "PROTECTION"], 
                [{ fr: "Processeur", en: "CPU" }, "Rockchip RK3568 Quad-core"], 
                [{ fr: "Graphismes", en: "GPU" }, "Mali-G52 MC1 (Vulkan 1.1)"],
                [{ fr: "RAM / Stockage", en: "RAM / Storage" }, "2 Go / 10 Go disponibles"],
                [{ fr: "OS", en: "OS" }, "Android 11 (API 30)"]
            ] 
        },
        { 
            titre: { fr: "AUTONOMIE & RÉSEAU", en: "BATTERY & NETWORK" }, 
            icone: "battery", 
            couleur: "green", 
            lignes: [
                [{ fr: "Batterie", en: "Battery" }, "Li-ion 9000 mAh (env. 8h)"], 
                [{ fr: "Wi-Fi", en: "Wi-Fi" }, "Dual-band (2.4/5GHz) Wi-Fi 5"],
                [{ fr: "Ethernet", en: "Ethernet" }, "Gigabit RJ45 (MAE0621A)"],
                [{ fr: "Bluetooth", en: "Bluetooth" }, "5.0 Support"]
            ] 
        }
    ],
    entretien: [
        { fr: "Nettoyage de l'écran avec un chiffon microfibre", en: "Clean the screen with a microfiber cloth" },
        { fr: "Recharger complètement la batterie après chaque utilisation", en: "Fully recharge the battery after each use" },
        { fr: "Vérifier le blocage des roulettes lors de l'utilisation", en: "Check wheel locks during use" },
        { fr: "Éviter l'exposition directe à la pluie (Usage intérieur)", en: "Avoid direct rain exposure (Indoor use)" }
    ]
};
