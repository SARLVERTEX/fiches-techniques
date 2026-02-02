// produits/vtx-standbyme32.js
window.PRODUCT_DATA = {
    produit: {
        id: "ar06104",
        categorie: "Bornes Tactiles",
        isNew: true, // Marqué comme nouveau car specs 2024/2026
        titre: { 
            fr: "TOTEM INTERACTIF VERTEX 32''", 
            en: "32'' VERTEX INTERACTIVE KIOSK" 
        },
        description_courte: { 
            fr: "Solution d'affichage dynamique mobile et polyvalente avec écran Full HD de 32 pouces, montée sur un pied bicolore élégant.", 
            en: "Versatile mobile digital signage solution with 32-inch Full HD screen, mounted on an elegant two-tone stand." 
        },
        phraseAccroche: { 
            fr: "La puissance d'Android et la mobilité d'une batterie intégrée.", 
            en: "The power of Android meets the mobility of an integrated battery." 
        },
        ref: "VTX-32-2024",
        sn: "2024BT32001 (Model: AR06104 / MT8788)"
    },
    badges: [
        { label: { fr: "Tactile ILITEK", en: "ILITEK Touch" }, icone: "pointer", couleur: "text-blue-400" },
        { label: { fr: "Android 12", en: "Android 12" }, icone: "smartphone", couleur: "text-green-500" },
        { label: { fr: "Batterie 10Ah", en: "10Ah Battery" }, icone: "battery-charging", couleur: "text-yellow-400" },
        { label: { fr: "Wi-Fi 5 / WPA3", en: "Wi-Fi 5 / WPA3" }, icone: "wifi", couleur: "text-purple-400" }
    ],
    dimensions: {
        largeur: "Vérifier mm", 
        hauteur: "Hauteur d'homme", 
        diagonale: "32''", 
        orientation: "Portrait/Ajustable", 
        vesa: "Structure Autoportante"
    },
    media: {
        imagePrincipale: "images/GM92.jpg",
        galerie: [
            { url: "images/vtx-white-bronze.jpg", label: { fr: "Design Blanc & Bronze", en: "White & Bronze Design" } },
            { url: "images/vtx-camera.jpg", label: { fr: "Caméra 2.1MP Intégrée", en: "Integrated 2.1MP Camera" } },
            { url: "images/vtx-base.jpg", label: { fr: "Base Circulaire Stable", en: "Stable Circular Base" } },
            { url: "images/vtx-ports.jpg", label: { fr: "Connectique USB-C & HDMI", en: "USB-C & HDMI Ports" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Batterie Li-ion", en: "Li-ion Battery" }, 
            detail: { fr: "10 000 mAh intégrée (4200 mV)", en: "Integrated 10,000 mAh (4200 mV)" } 
        },
        { 
            nom: { fr: "Caméra", en: "Camera" }, 
            detail: { fr: "Capteur 2.1 MP (1080p @30fps)", en: "2.1 MP Sensor (1080p @30fps)" } 
        }
    ],
    options: [
        { nom: { fr: "Analyse d'audience", en: "Audience Analytics" }, icone: "users" },
        { nom: { fr: "Visioconférence", en: "Video Conferencing" }, icone: "video" }
    ],
    specifications: [
        { 
            titre: { fr: "AFFICHAGE & IMAGE", en: "DISPLAY & IMAGE" }, 
            icone: "monitor", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Technologie", en: "Technology" }, "Tactile Capacitif (ILITEK)"], 
                [{ fr: "Résolution", en: "Resolution" }, "1920 x 1080 (FHD) @ 60Hz"],
                [{ fr: "Caméra", en: "Camera" }, "2.1 MP / 1080p"],
                [{ fr: "Capteurs", en: "Sensors" }, "Luminosité & Accéléromètre"]
            ] 
        },
        { 
            titre: { fr: "ARCHITECTURE INTERNE", en: "INTERNAL ARCHITECTURE" }, 
            icone: "cpu", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Processeur", en: "CPU" }, "MediaTek MT8788 (8 cœurs)"], 
                [{ fr: "GPU", en: "GPU" }, "ARM Mali-G72 MP3"],
                [{ fr: "RAM", en: "RAM" }, "4 Go (LPDDR4)"],
                [{ fr: "Stockage", en: "Storage" }, "64 Go UFS (43 Go disp.)"]
            ] 
        },
        { 
            titre: { fr: "SYSTÈME & RÉSEAU", en: "SYSTEM & NETWORK" }, 
            icone: "settings", 
            couleur: "green", 
            lignes: [
                [{ fr: "OS", en: "OS" }, "Android 12 (API 31)"], 
                [{ fr: "Wi-Fi", en: "Wi-Fi" }, "Wi-Fi 5 (802.11ac) 5GHz"],
                [{ fr: "Sécurité", en: "Security" }, "WPA3 Support"],
                [{ fr: "Ports", en: "Ports" }, "USB-A, USB-C, HDMI, DC-in"]
            ] 
        }
    ],
    entretien: [
        { fr: "Nettoyage de la dalle 32'' avec un chiffon microfibre", en: "Clean the 32'' panel with a microfiber cloth" },
        { fr: "Vérification du port de charge à la base du pied", en: "Check the charging port at the base of the stand" },
        { fr: "Mise à jour des applications via Android 12", en: "Update applications via Android 12" },
        { fr: "Dépoussiérage des perforations thermiques arrières", en: "Dust off the rear thermal perforations" }
    ]
};
