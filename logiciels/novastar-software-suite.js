// produits/novastar-software-suite.js
window.PRODUCT_DATA = {
    produit: {
        id: "novastar-software-suite",
        categorie: "Logiciels",
        isNew: false,
        titre: { 
            fr: "LOGICIELLE NOVASTAR", 
            en: "NOVASTAR SOFTWARE" 
        },
        description_courte: { 
            fr: "Solutions professionnelles pour la gestion de l'affichage : contrôle local avec ViPlex Express et gestion Cloud via VNNOX Standard.", 
            en: "Professional display management solutions: local control with ViPlex Express and Cloud management via VNNOX Standard." 
        },
        phraseAccroche: { 
            fr: "Prenez le contrôle total de vos écrans, localement ou depuis n'importe où dans le monde.", 
            en: "Take full control of your displays, locally or from anywhere in the world." 
        },
        ref: "SOFT-NV-VNX-VIP",
        sn: "NovaStar Ecosystem (ViPlex / VNNOX)"
    },
    badges: [
        { label: { fr: "Cloud Ready", en: "Cloud Ready" }, icone: "cloud", couleur: "text-blue-400" },
        { label: { fr: "Multi-OS", en: "Multi-OS" }, icone: "monitor", couleur: "text-gray-400" },
        { label: { fr: "Gestion 4K", en: "4K Support" }, icone: "tv", couleur: "text-purple-500" },
        { label: { fr: "Gratuit", en: "Free" }, icone: "check-circle", couleur: "text-green-500" }
    ],
    dimensions: {
        largeur: "Illimitée", 
        hauteur: "Multi-fenêtrage", 
        diagonale: "Jusqu'à 4K/8K", 
        orientation: "Portrait / Paysage", 
        vesa: "Logiciel Windows / Web"
    },
    media: {
        imagePrincipale: "images/novastar-software-main.jpg",
        galerie: [
            { url: "images/viplex-express-ui.jpg", label: { fr: "Interface ViPlex", en: "ViPlex Interface" } },
            { url: "images/vnnox-cloud-map.jpg", label: { fr: "Ciblage Géographique VNNOX", en: "VNNOX Geo-fencing" } },
            { url: "images/novastar-scheduling.jpg", label: { fr: "Planification Avancée", en: "Advanced Scheduling" } },
            { url: "images/novastar-monitoring.jpg", label: { fr: "Surveillance en temps réel", en: "Real-time Monitoring" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Hardware requis", en: "Required Hardware" }, 
            detail: { fr: "Contrôleurs Taurus (TB1/TB30/TB60) ou MCTRL", en: "Taurus Controllers (TB1/TB30/TB60) or MCTRL" } 
        },
        { 
            nom: { fr: "Connectivité", en: "Connectivity" }, 
            detail: { fr: "Connexion LAN ou Internet (4G/Wi-Fi)", en: "LAN or Internet connection (4G/Wi-Fi)" } 
        }
    ],
    options: [
        { nom: { fr: "Synchronisation GPS", en: "GPS Sync" }, icone: "map-pin" },
        { nom: { fr: "Approbation Médias", en: "Media Approval" }, icone: "shield-check" }
    ],
    specifications: [
        { 
            titre: { fr: "VIPLEX EXPRESS (LOCAL)", en: "VIPLEX EXPRESS (LOCAL)" }, 
            icone: "terminal", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Modes", en: "Modes" }, "Asynchrone & Studio"], 
                [{ fr: "OS Supporté", en: "Supported OS" }, "Windows 7 SP1 64-bit +"],
                [{ fr: "Largeur Max", en: "Max Width" }, "23 040 px (via TB60)"],
                [{ fr: "Luminosité", en: "Brightness" }, "Manuel / Smart / Capteur"]
            ] 
        },
        { 
            titre: { fr: "VNNOX CLOUD STANDARD", en: "VNNOX CLOUD STANDARD" }, 
            icone: "cloud-lightning", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Stockage Cloud", en: "Cloud Storage" }, "5 Go inclus"], 
                [{ fr: "Éditeur", en: "Editor" }, "WYSIWYG Intégré"], 
                [{ fr: "Sécurité", en: "Security" }, "Flux d'approbation admin"],
                [{ fr: "Géo-fencing", en: "Geo-fencing" }, "Déclenchement via GPS/4G"]
            ] 
        },
        { 
            titre: { fr: "COMPATIBILITÉ MÉDIA", en: "MEDIA COMPATIBILITY" }, 
            icone: "file-video", 
            couleur: "green", 
            lignes: [
                [{ fr: "Vidéo", en: "Video" }, "MP4, AVI, MKV (4K @60fps)"], 
                [{ fr: "Documents", en: "Documents" }, "Word, Excel, PPT, PDF"],
                [{ fr: "Web", en: "Web" }, "HLS, RTMP, RSS, Météo"],
                [{ fr: "Images", en: "Images" }, "JPG, PNG, WEBP, GIF"]
            ] 
        }
    ],
    entretien: [
        { fr: "Mettre à jour régulièrement le Framework .NET (4.6.x+)", en: "Regularly update .NET Framework (4.6.x+)" },
        { fr: "Vérifier l'état de synchronisation NTP pour les murs d'écrans", en: "Check NTP sync status for video walls" },
        { fr: "Surveiller l'espace disque disponible sur les terminaux (TB)", en: "Monitor available disk space on terminals (TB)" },
        { fr: "Sauvegarder les solutions d'affichage localement", en: "Back up display solutions locally" }
    ]
};
