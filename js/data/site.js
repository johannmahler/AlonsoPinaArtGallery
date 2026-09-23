/* =========================================================
   ArtgalleryV1 – Zentrale Seitendaten
   Zweck:
   Enthält alle allgemeinen Galerie-Daten, Texte und
   globale Einstellungen der Webseite.
   ========================================================= */

export const site = {
    artistName: "Alonso Pina",
    galleryName: "AP Gallery",

    /* Zentrale Einstellung für alle Artwork-Bilder */
    artworkImageExtension: ".jpeg",

    navigation: [
        {
            label: "Home",
            target: "home"
        },
        {
            label: "Gallery",
            target: "gallery"
        },
        {
            label: "About",
            target: "about"
        },
        {
            label: "Contact",
            target: "contact"
        }
    ],

    hero: {
        eyebrow: "AP Gallery",
        title: "Art Beyond Boundaries",
        text: "Discover the artworks of Alonso Pina.",
        button: "Explore Gallery"
    },

    gallery: {
        eyebrow: "Collection",
        title: "Selected Works",
        emptyMessage: "No artworks available."
    },

    about: {
        eyebrow: "The Artist",
        title: "Alonso Pina",
        text: "Alonso Pina creates expressive artworks that explore light, atmosphere, emotion and the relationship between color and space. His work combines personal impressions with a contemporary artistic approach, inviting viewers to discover their own meaning in every piece. AP Gallery presents a selection of original artworks created with passion, creativity and attention to detail."
    },

    contact: {
        eyebrow: "Get in Touch",
        title: "Contact",
        text: "For inquiries about artworks, availability or future collaborations, please get in touch with Alonso Pina. AP Gallery welcomes questions from art lovers, collectors and anyone interested in the presented works."
    }
};