/*
=========================================================
ArtgalleryV1 – Kunstwerk-Datenbank

Zweck:
Enthält die Daten aller Kunstwerke.

Die Struktur ist für eine größere Galerie und die
spätere Shop-Funktion vorbereitet.
=========================================================
*/

export const artworks = [
    {
        id: 1,
        title: "Silent Horizon",
        artist: "Alonso Pina",
        year: 2026,
        technique: "Oil on Canvas",
        size: "80 × 60 cm",
        price: 1200,
        currency: "EUR",
        category: "Abstract",
        image: "artwork-01",
        type: "Original",
        available: true,
        description:
            "Silent Horizon explores the quiet relationship between space, colour and emotion. Soft transitions and expressive layers create a calm yet powerful atmosphere, inviting the viewer to pause and discover their own interpretation."
    },
    {
        id: 2,
        title: "Golden Memory",
        artist: "Alonso Pina",
        year: 2026,
        technique: "Acrylic on Canvas",
        size: "100 × 70 cm",
        price: 1800,
        currency: "EUR",
        category: "Contemporary",
        image: "artwork-02",
        type: "Original",
        available: true,
        description:
            "Golden Memory reflects on the lasting impressions of personal experiences. Warm tones and dynamic contrasts combine to create a contemporary composition filled with depth, movement and a sense of nostalgia."
    },
    {
        id: 3,
        title: "Beyond the Light",
        artist: "Alonso Pina",
        year: 2025,
        technique: "Mixed Media",
        size: "90 × 70 cm",
        price: 1500,
        currency: "EUR",
        category: "Abstract",
        image: "artwork-03",
        type: "Original",
        available: false,
        description:
            "Beyond the Light explores the transition between shadow and illumination. Through layered materials, textures and contrasting elements, the work creates a visual journey that suggests hope, transformation and the unknown."
    }
];