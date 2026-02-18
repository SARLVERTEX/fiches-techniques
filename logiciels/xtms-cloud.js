// produits/epaper-13-3.js
window.PRODUCT_DATA = {
    type: "software",
    produit: {
        id: "xtms-cloud",
        categorie: "Logiciels de Gestion",
        isNew: true,
        titre: { 
            fr: "PLATEFORME CLOUD XTMS", 
            en: "XTMS CLOUD PLATFORM" 
        },
        description_courte: { 
            fr: "Solution de gestion à distance pour tablettes e-Paper 13,3\" (AR06254) via protocole MQTT.", 
            en: "Remote management solution for 13.3\" e-Paper tablets (AR06254) via MQTT protocol." 
        },
        phraseAccroche: { 
            fr: "Actualisez vos écrans à l'encre électronique en un clic, partout dans le monde.", 
            en: "Update your e-Paper screens in one click, anywhere in the world." 
        },
        ref: "SOFT-XTMS-V1",
        sn: "MQTT-ENABLED"
    },
    badges: [
        { label: { fr: "Interface Web", en: "Web Interface" }, icone: "globe", couleur: "text-blue-400" },
        { label: { fr: "Optimisé Chrome", en: "Chrome Optimized" }, icone: "chrome", couleur: "text-orange-400" },
        { label: { fr: "Gestion MAC", en: "MAC Management" }, icone: "cpu", couleur: "text-purple-400" },
        { label: { fr: "Statut Temps Réel", en: "Real-time Status" }, icone: "activity", couleur: "text-green-400" }
    ],
    dimensions: {
        largeur: "Navigateur Web", 
        hauteur: "Cloud Platform", 
        diagonale: "13.3 pouces", 
        orientation: "Paysage / Portrait", 
        vesa: "Protocole MQTT"
    },
    media: {
        imagePrincipale: "https://raw.githubusercontent.com/sarlvertex/fiches-techniques/main/logiciels/images/xtms-cloud-main.jpg",
        galerie: [
            { url: "logiciels/images/xtms-cloud-gal0.jpg", label: { fr: "Page de Connexion", en: "Login Page" } },
            { url: "logiciels/images/xtms-cloud-gal1.jpg", label: { fr: "Menu Device > Label", en: "Device > Label Menu" } },
            { url: "logiciels/images/xtms-cloud-gal2.jpg", label: { fr: "Fenêtre de Publication", en: "Publish Window" } },
            { url: "logiciels/images/xtms-cloud-gal3.jpg", label: { fr: "Suivi Online/Offline", en: "Online/Offline Tracking" } }
        ]
    },
    accessoires: [
        { 
            nom: { fr: "Accès XTMS", en: "XTMS Access" }, 
            detail: { fr: "URL : http://47.254.154.190/cloudPlatform", en: "URL : http://47.254.154.190/cloudPlatform" } 
        },
        { 
            nom: { fr: "Identifiants Vertex", en: "Vertex Credentials" }, 
            detail: { fr: "Login personnalisé par client", en: "Custom login per client" } 
        }
    ],
    options: [
        { nom: { fr: "Upload Drag & Drop", en: "Drag & Drop Upload" }, icone: "upload-cloud" },
        { nom: { fr: "Mise à jour OTA", en: "OTA Firmware Update" }, icone: "refresh-cw" },
        { nom: { fr: "Historique Task List", en: "Task List History" }, icone: "list" }
    ],
    specifications: [
        { 
            titre: { fr: "PROCÉDURE DE PUBLICATION", en: "PUBLISHING PROCEDURE" }, 
            icone: "send", 
            couleur: "blue", 
            lignes: [
                [{ fr: "Étape 1 : Menu", en: "Step 1: Menu" }, "Device > Label"], 
                [{ fr: "Étape 2 : Cible", en: "Step 2: Target" }, "Sélection MAC Address"],
                [{ fr: "Étape 3 : Action", en: "Step 3: Action" }, "Lien bleu 'Refresh Picture'"],
                [{ fr: "Étape 4 : Envoi", en: "Step 4: Send" }, "Upload fichier + Confirm"]
            ] 
        },
        { 
            titre: { fr: "CONTRÔLE & ÉTAT", en: "CONTROL & STATUS" }, 
            icone: "bar-chart", 
            couleur: "green", 
            lignes: [
                [{ fr: "Vérification", en: "Verification" }, "Colonne 'Network Status'"], 
                [{ fr: "Pré-requis", en: "Prerequisite" }, "Appareil affiché 'online'"],
                [{ fr: "Ajout manuel", en: "Manual Add" }, "Bouton '+ Add Label'"],
                [{ fr: "Compatibilité", en: "Compatibility" }, "Agenda, Photos, Logos"]
            ] 
        },
        { 
            titre: { fr: "PARAMÈTRES RÉSEAU", en: "NETWORK SETTINGS" }, 
            icone: "settings", 
            couleur: "red", 
            lignes: [
                [{ fr: "IP Serveur", en: "Server IP" }, "47.254.154.190"], 
                [{ fr: "Port Serveur", en: "Server Port" }, "1883"],
                [{ fr: "Fréquence Réveil", en: "Wake-up Frequency" }, "KeepALIVE 65000s"],
                [{ fr: "Mode IP", en: "IP Mode" }, "DHCP par défaut"]
            ] 
        }
    ],
    entretien: [
        { fr: "Utiliser Google Chrome pour une stabilité optimale", en: "Use Google Chrome for optimal stability" },
        { fr: "Saisir la MAC sans les deux-points (ex: D43D39...)", en: "Enter MAC without colons (e.g., D43D39...)" },
        { fr: "Vérifier le niveau de batterie dans la colonne Status", en: "Check battery level in the Status column" },
        { fr: "L'image ne s'enverra que si le statut est 'online'", en: "Image will only send if status is 'online'" }
    ]
};
