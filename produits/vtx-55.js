// Données spécifiques au produit VTX-55
window.PRODUCT_DATA = {
    produit: {
        titre: "ÉCRAN VITRINE 55''",
        phraseAccroche: "Haute luminosité pour une visibilité maximale en plein soleil.",
        ref: "VTX-55-HB",
        sn: "SN-2024-X1"
    },
    badges: [
        { label: "2500 nits", icone: "sun", couleur: "text-yellow-400" },
        { label: "Usage 24/7", icone: "clock", couleur: "text-green-400" },
        { label: "4K UHD", icone: "monitor", couleur: "text-blue-400" }
    ],
    dimensions: {
        largeur: "1240 mm", 
        hauteur: "715 mm", 
        diagonale: "55''", 
        orientation: "landscape", 
        vesa: "400 x 400"
    },
    media: {
        imagePrincipale: "images/screen55.jpg",
        galerie: [
            { url: "images/vtx55-1.jpg", label: "Connectique" },
            { url: "images/vtx55-2.jpg", label: "Profil" }
        ]
    },
    accessoires: [
        { nom: "Support Mural", detail: "Inclus" },
        { nom: "Player", detail: "Android 11" }
    ],
    options: [
        { nom: "Capteur Auto", icone: "eye" },
        { nom: "Caisson IP65", icone: "shield" }
    ],
    specifications: [
        { titre: "AFFICHAGE", icone: "tv", couleur: "blue", lignes: [["Techno", "D-LED"], ["Contraste", "5000:1"]] },
        { titre: "TECHNIQUE", icone: "tool", couleur: "orange", lignes: [["Poids", "22 kg"], ["Conso", "150W"]] }
    ],
    entretien: ["Chiffon microfibre sec", "Vérification annuelle"]
};
