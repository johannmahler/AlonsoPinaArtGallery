/* =========================================================
   ArtgalleryV1 – Gallery
   Zweck:
   Erstellt den Galerie-Bereich und rendert alle Kunstwerke.
   ========================================================= */

import { createArtworkCard } from "./artwork-card.js";

/* Erstellt den vollständigen Galerie-Bereich */
export function createGallery(site, artworks, getArtworkImage) {
    const content = artworks.length
        ? artworks.map(artwork => createArtworkCard(
            artwork,
            getArtworkImage
        )).join("")
        : `<p class="gallery-empty">${site.gallery.emptyMessage}</p>`;

    return `
        <section id="gallery" class="gallery-section gallery">
            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">${site.gallery.eyebrow}</p>
                    <h2>${site.gallery.title}</h2>
                </div>
                <div class="gallery-grid">
                    ${content}
                </div>
            </div>
        </section>
    `;
}