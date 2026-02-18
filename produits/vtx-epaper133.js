// produits/vtx-epaper133.js
window.PRODUCT_DATA = {
    produit: {
        id: "vtx-epaper133",
        categorie: "Signalétique e-Paper",
        isNew: true,
        titre: { 
            fr: "ÉCRAN DE SIGNALÉTIQUE E-PAPER 13,3\"", 
            en: "13.3\" E-PAPER SIGNAGE DISPLAY" 
        },
        description_courte: { 
            fr: "Écran à encre électronique haute résolution pour la gestion de salles, agendas et signalétique de bureau.", 
            en: "High-resolution electronic ink display for room management, schedules, and office signage." 
        },
        phraseAccroche: { 
            fr: "L'élégance de l'encre numérique associée à une autonomie exceptionnelle de 5 mois.", 
            en: "Digital ink elegance combined with an exceptional 5-month battery life." 
        },
        ref: "AR06254",
        sn: "2025490002V"
    },
    badges: [
        { label: { fr: "13,3\" E-Ink", en: "13.3\" E-Ink" }, icone: "monitor", couleur: "text-blue-400" },
        { label: { fr: "Autonomie 5 mois", en: "5-Month Battery" }, icone: "battery-charging", couleur: "text-yellow-500" },
        { label: { fr: "WiFi / MQTT", en: "WiFi / MQTT" }, icone: "wifi", couleur: "text-green-400" },
        { label: { fr: "Support Rouge", en: "Red Color Support" }, icone: "palette", couleur: "text-red-400" }
    ],
    dimensions: {
        largeur: "Format 13,3 pouces", 
        hauteur: "Profil Slim", 
        diagonale: "13,3\"", 
        orientation: "Paysage/Portrait", 
        vesa: "2 ports de fixation murale (Wall Bracket Ports)"
    },
    media: {
        imagePrincipale: "https://raw.githubusercontent.com/sarlvertex/fiches-techniques/main/produits/images/vtx-epaper133-main.jpg",
        galerie: [
            { url: "produits/images/vtx-epaper133-gal0.jpg", label: { fr: "Zone d'affichage monochrome & rouge", en: "Monochrome & Red display area" } },
            { url: "produits/images/vtx-epaper133-gal1.jpg", label: { fr: "Interface USB-C et Boutons de commande", en: "USB-C Interface and Control Buttons" } },
            { url: "produits/images/vtx-epaper133-gal2.jpg", label: { fr: "Fixations murales et Zone décorative", en: "Wall mounts and Decorative area" } },
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Câble de charge", en: "Charging Cable" }, 
            detail: { fr: "Port USB-C situé sur la tranche", en: "USB-C port located on the side" } 
        },
        { 
            nom: { fr: "Système de fixation", en: "Mounting System" }, 
            detail: { fr: "Ports pour support mural au dos", en: "Rear wall bracket ports included" } 
        }
    ],
    options: [
        { nom: { fr: "Gestion Cloud XTMS", en: "XTMS Cloud Management" }, icone: "cloud" },
        { nom: { fr: "Actualisation d'image", en: "Refresh Picture (PC/Smartphone)" }, icone: "refresh-cw" }
    ],
    specifications: [
        { 
            titre: { fr: "MATÉRIEL & AFFICHAGE", en: "HARDWARE & DISPLAY" }, 
            icone: "cpu", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Technologie", en: "Technology" }, "e-Paper (Noir/Blanc/Rouge)"], 
                [{ fr: "Interface Physique", en: "Physical Interface" }, "Bouton Fonction / Touche Reset"],
                [{ fr: "Indicateur LED", en: "LED Indicator" }, "Statut connexion, charge et config"],
                [{ fr: "Ajout XTMS", en: "XTMS Pairing" }, "Via adresse MAC (sans deux-points)"]
            ] 
        },
        { 
            titre: { fr: "CONNECTIVITÉ RÉSEAU", en: "NETWORK CONNECTIVITY" }, 
            icone: "globe", 
            couleur: "orange", 
            lignes: [
                [{ fr: "Configuration AP", en: "AP Setup" }, "XT_DA16200_XXXX"], 
                [{ fr: "Serveur Cloud", en: "Cloud Server" }, "IP: 47.254.154.190 / Port: 1883"],
                [{ fr: "Protocole / KeepALIVE", en: "Protocol / KeepALIVE" }, "MQTT / 65 000 secondes"],
                [{ fr: "Mode Config", en: "Config Mode" }, "Appui long 10s (LED Rouge clignote)"]
            ] 
        },
        { 
            titre: { fr: "AUTONOMIE & ÉNERGIE", en: "BATTERY & POWER" }, 
            icone: "zap", 
            couleur: "green", 
            lignes: [
                [{ fr: "Autonomie estimée", en: "Estimated Battery Life" }, "Environ 5 mois (selon usage)"], 
                [{ fr: "Type de Batterie", en: "Battery Type" }, "Lithium Rechargeable intégrée"], 
                [{ fr: "Port de Charge", en: "Charging Port" }, "USB Type-C"],
                [{ fr: "Maintenance", en: "Maintenance" }, "Recharge conseillée si < 30%"]
            ] 
        }
    ],
    procedureCloud: [
        {
            titre: { fr: "1. ACCÈS ET CONNEXION", en: "1. ACCESS & LOGIN" },
            points: [
                { fr: "Ouvrez Google Chrome et accédez à l'URL : http://47.254.154.190/cloudPlatform", en: "Open Google Chrome and go to: http://47.254.154.190/cloudPlatform" },
                { fr: "Connectez-vous avec l'ID et le mot de passe fournis", en: "Log in with the provided ID and password" }
            ]
        },
        {
            titre: { fr: "2. NAVIGATION DANS LES MENUS", en: "2. MENU NAVIGATION" },
            points: [
                { fr: "Dans la barre latérale gauche, cliquez sur 'Device' (Appareil)", en: "In the left sidebar, click on 'Device'" },
                { fr: "Sélectionnez impérativement l'onglet 'Label' (Étiquette)", en: "You must select the 'Label' tab" }
            ]
        },
        {
            titre: { fr: "3. SÉLECTION ET VÉRIFICATION", en: "3. DEVICE SELECTION" },
            points: [
                { fr: "Localisez votre tablette via son adresse MAC (ex: D43D39...)", en: "Locate your tablet via its MAC address" },
                { fr: "Faites glisser le tableau vers la droite : 'Network Status' doit être 'online'", en: "Scroll the table to the right: 'Network Status' must be 'online'" },
                { fr: "Si absent, utilisez '+ Add Label' pour ajouter l'adresse MAC", en: "If missing, use '+ Add Label' to add the MAC address" }
            ]
        },
        {
            titre: { fr: "4. PROCÉDURE DE PUBLICATION", en: "4. PUBLICATION PROCESS" },
            points: [
                { fr: "Dans la colonne 'Opt' à droite, cliquez sur 'Refresh Picture'", en: "In the 'Opt' column on the right, click 'Refresh Picture'" },
                { fr: "Glissez votre fichier dans la zone ou cliquez sur 'Click to upload'", en: "Drag your file into the zone or click 'Click to upload'" },
                { fr: "Types acceptés : Photo, agenda, logo, etc.", en: "Accepted types: Photo, schedule, logo, etc." },
                { fr: "Cliquez sur le bouton bleu 'Confirm' pour valider l'envoi", en: "Click the blue 'Confirm' button to validate the upload" }
            ]
        }
    ],
    entretien: [
        { fr: "Cycle de charge : Environ tous les 5 mois selon la fréquence d'actualisation", en: "Charging cycle: Approx. every 5 months depending on refresh frequency" },
        { fr: "Recharger impérativement si la batterie est < 30%", en: "Must recharge if battery is < 30%" },
        { fr: "Suivre le niveau de batterie à distance via la plateforme XTMS", en: "Monitor battery level remotely via the XTMS platform" },
        { fr: "Utiliser la touche Reset pour un redémarrage forcé si besoin", en: "Use Reset key for forced reboot if needed" }
    ]
};
