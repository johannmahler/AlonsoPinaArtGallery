/* =========================================================
   ArtgalleryV1 – JavaScript-Einstiegspunkt
   Zweck:
   Startet die Webseite und verbindet die Komponenten
   mit den zentralen Daten.
   ========================================================= */

import { site } from "./data/site.js";
import { artworks } from "./data/artworks.js";

import {
    createArtworkModal,
    initArtworkModal
} from "./components/artwork-modal.js";

import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";

import {
    createAboutSection,
    createContactSection
} from "./components/content-sections.js";

import { createHero } from "./components/hero.js";
import { createGallery } from "./components/gallery.js";

const app = document.querySelector("#app");

/* Erzeugt den Bildpfad relativ zur index.html */
function getArtworkImage(artwork) {
    return `assets/images/artworks/${artwork.image}${site.artworkImageExtension}`;
}

/* Erzeugt die vollständige Webseite */
function render() {
    app.innerHTML = `
        ${createHeader(site)}

        <main>
            ${createHero(site)}
            ${createGallery(site, artworks, getArtworkImage)}
            ${createAboutSection(site)}
            ${createContactSection(site)}
        </main>

        ${createArtworkModal()}
        ${createFooter(site)}
    `;
}

/* Webseite starten */
render();

/* Artwork-Modal initialisieren */
initArtworkModal(artworks, getArtworkImage);