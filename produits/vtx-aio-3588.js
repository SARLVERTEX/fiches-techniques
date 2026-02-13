// produits/vtx-ec-a3588l.js
window.PRODUCT_DATA = {
    produit: {
        id: "vtx-aio-3588",
        categorie: "Industrial PC",
        isNew: true,
        titre: { 
            fr: "BOITIER MULTIMEDIA ANDROID v.14 (4K/8K)", 
            en: "MULTIMEDIAL ANDROID v.14 BOX (4K/8K)" 
        },
        description_courte: { 
            fr: "Boîtier industriel haute performance propulsé par le RK3588, supportant la 8K native avec Android 14.", 
            en: "High-performance industrial box powered by RK3588, supporting native 8K with Android 14." 
        },
        phraseAccroche: { 
            fr: "La puissance de l'Octa-core 8K dans un châssis industriel compact.", 
            en: "8K Octa-core power in a compact industrial chassis." 
        },
        ref: "3588-8G64G",
        sn: "REF VERTEX - V1"
    },
    badges: [
        { label: { fr: "8K Native", en: "8K Native" }, icone: "monitor", couleur: "text-purple-400" },
        { label: { fr: "6 TOPS NPU", en: "6 TOPS NPU" }, icone: "cpu", couleur: "text-red-400" },
        { label: { fr: "Android 14", en: "Android 14" }, icone: "smartphone", couleur: "text-green-500" },
        { label: { fr: "4G Support", en: "4G Support" }, icone: "rss", couleur: "text-blue-400" }
    ],
    dimensions: {
        largeur: "Format Compact", 
        hauteur: "Boîtier Industriel", 
        diagonale: "N/A", 
        orientation: "Horizontal", 
        vesa: "Montage rail-DIN/Mural possible"
    },
    media: {
        imagePrincipale: "images/firefly-ec-a3588l-main.jpg",
        galerie: [
            { url: "images/firefly-front.jpg", label: { fr: "Face Avant USB/HDMI", en: "Front Panel USB/HDMI" } },
            { url: "images/firefly-back.jpg", label: { fr: "Antennes et MicroSD", en: "Antennas and MicroSD" } },
            { url: "images/firefly-cooling.jpg", label: { fr: "Dissipateur Thermique", en: "Heat Sink" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Alimentation", en: "Power Supply" }, 
            detail: { fr: "Adaptateur DC 12V / 2A inclus", en: "12V / 2A DC adapter included" } 
        },
        { 
            nom: { fr: "Antennes", en: "Antennas" }, 
            detail: { fr: "2x Antennes externes (Wi-Fi/4G) incluses", en: "2x External antennas (Wi-Fi/4G) included" } 
        }
    ],
    options: [
        { nom: { fr: "Décodage AV1", en: "AV1 Decoding" }, icone: "play-circle" },
        { nom: { fr: "HDMI IN", en: "HDMI IN" }, icone: "login" }
    ],
    specifications: [
        { 
            titre: { fr: "PERFORMANCE & IA", en: "PERFORMANCE & AI" }, 
            icone: "cpu", 
            couleur: "red", 
            lignes: [
                [{ fr: "Processeur", en: "CPU" }, "RK3588 Octa-core (4xA76 @2.26GHz + 4xA55 @1.8GHz)"], 
                [{ fr: "IA (NPU)", en: "AI (NPU)" }, "6 TOPS de puissance de calcul"],
                [{ fr: "GPU", en: "GPU" }, "ARM Mali-G610 MP4"],
                [{ fr: "RAM / Flash", en: "RAM / Flash" }, "8 Go / 64 Go eMMC"]
            ] 
        },
        { 
            titre: { fr: "MULTIMÉDIA & SORTIES", en: "MULTIMEDIA & OUTPUTS" }, 
            icone: "monitor", 
            couleur: "purple", 
            lignes: [
                [{ fr: "Sortie 1", en: "Output 1" }, "HDMI 2.1 8K (7680x4320)"], 
                [{ fr: "Sortie 2", en: "Output 2" }, "HDMI 4K (3840x2160)"], 
                [{ fr: "Entrée", en: "Input" }, "1x HDMI IN (Acquisition)"],
                [{ fr: "Drivers", en: "Drivers" }, "dw-hdmi-qp & mpp_av1dec"]
            ] 
        },
        { 
            titre: { fr: "RÉSEAU & CONNECTIVITÉ", en: "NETWORK & CONNECTIVITY" }, 
            icone: "wifi", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Ethernet", en: "Ethernet" }, "1x RJ45 Gigabit (RTL8211F)"], 
                [{ fr: "Wi-Fi", en: "Wi-Fi" }, "Module RTL8852BE intégré"],
                [{ fr: "Cellulaire", en: "Cellular" }, "Support 4G (Emplacement SIM)"],
                [{ fr: "OS / Kernel", en: "OS / Kernel" }, "Android 14 (Kernel 6.1.75)"]
            ] 
        }
    ],
    entretien: [
        { fr: "Nettoyer les ailettes du dissipateur pour un refroidissement optimal", en: "Clean the heat sink fins for optimal cooling" },
        { fr: "Vérifier le serrage des antennes externes", en: "Check the tightness of the external antennas" },
        { fr: "Utiliser exclusivement l'alimentation 12V fournie", en: "Use only the provided 12V power supply" },
        { fr: "Intéraction le port USB-C (SS-D) si nécessaire", en: "Interaction via USB-C (SS-D) port if necessary" }
    ]
};
